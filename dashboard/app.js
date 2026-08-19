const S = window.STRATEGY;
const API = "https://api.sleeper.app/v1";
const PLAYER_CACHE_KEY = "bb_players_v1";
const PLAYER_CACHE_MS = 12 * 60 * 60 * 1000;
const AUTO_MS = 20000;

let auto = true;
let autoTimer = null;
let remainingPos = "RB";
let cache = {
  draft: null,
  picks: [],
  users: [],
  players: {},
};

function $(id) { return document.getElementById(id); }

function slotForPick(pickNo, teams) {
  const round = Math.ceil(pickNo / teams);
  const idx = ((pickNo - 1) % teams) + 1;
  return round % 2 === 1 ? idx : teams - idx + 1;
}

function pickFor(slot, round, teams) {
  return round % 2 === 1
    ? (round - 1) * teams + slot
    : (round - 1) * teams + (teams - slot + 1);
}

function playerName(p) {
  return (p.full_name || `${p.first_name || ""} ${p.last_name || ""}`).trim();
}

function norm(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function findByName(name) {
  const n = norm(name);
  for (const p of Object.values(cache.players)) {
    if (norm(playerName(p)) === n) return p;
  }
  return null;
}

function metaName(m) {
  return `${m.first_name} ${m.last_name}`.trim();
}

function flagFor(name) {
  const n = norm(name);
  const skip = S.skip.find((x) => norm(x.name) === n);
  if (skip) return { kind: "skip", text: skip.reason };
  const crowd = S.crowded.find((x) => norm(x.name) === n);
  if (crowd) return { kind: "crowd", text: crowd.reason };
  return null;
}

function injTag(status) {
  if (!status || status === "Active") return "";
  return `<span class="tag inj">${status}</span>`;
}

function lookupAdp(name) {
  return globalThis.SLEEPER_ADP ? SLEEPER_ADP.lookup(name) : null;
}

function adpText(name) {
  const hit = lookupAdp(name);
  return hit ? ` · Sleeper ADP ${hit.adp} (#${hit.rank})` : "";
}

async function getJSON(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.json();
}

async function loadPlayers() {
  try {
    const raw = localStorage.getItem(PLAYER_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.ts && Date.now() - parsed.ts < PLAYER_CACHE_MS && parsed.data) {
        cache.players = parsed.data;
        return "cache";
      }
    }
  } catch (_) { /* ignore quota / parse */ }

  const all = await getJSON(`${API}/players/nfl`);
  const slim = {};
  for (const [id, p] of Object.entries(all)) {
    if (!p || !p.active) continue;
    if (!["QB", "RB", "WR", "TE"].includes(p.position)) continue;
    slim[id] = {
      player_id: id,
      full_name: p.full_name,
      first_name: p.first_name,
      last_name: p.last_name,
      position: p.position,
      team: p.team,
      age: p.age,
      years_exp: p.years_exp,
      search_rank: p.search_rank,
      injury_status: p.injury_status,
      depth_chart_order: p.depth_chart_order,
      depth_chart_position: p.depth_chart_position,
    };
  }
  cache.players = slim;
  try {
    localStorage.setItem(PLAYER_CACHE_KEY, JSON.stringify({ ts: Date.now(), data: slim }));
  } catch (_) {
    /* localStorage full — live data still works this session */
  }
  return "network";
}

function userById(id) {
  return cache.users.find((u) => u.user_id === id);
}

function nameForSlot(slot, order) {
  const uid = Object.keys(order).find((k) => order[k] === slot);
  const u = uid ? userById(uid) : null;
  const name = u ? u.display_name : `Slot ${slot}`;
  return slot === S.slot ? `${name} (you)` : name;
}

function draftedByName(picks, name) {
  return picks.find((p) => norm(metaName(p.metadata)) === norm(name));
}

/** First available queue name — present board only. */
function resolveAdvice(picks) {
  for (const q of S.queue || []) {
    if (!draftedByName(picks, q.name)) {
      return { take: q.name, pos: q.pos, why: q.note };
    }
  }
  return null;
}

function render() {
  const draft = cache.draft;
  const picks = cache.picks;
  const teams = draft.settings.teams;
  const rounds = draft.settings.rounds;
  const total = teams * rounds;
  const nextNo = picks.length + 1;
  const nextSlot = nextNo <= total ? slotForPick(nextNo, teams) : null;
  const order = draft.draft_order || {};
  const mine = picks.filter((p) => p.draft_slot === S.slot);
  const taken = new Set(picks.map((p) => p.player_id));

  $("subtitle").textContent = `${draft.metadata?.name || "Bada Bing"} · ${draft.status} · slot ${S.slot}`;
  $("sleeperLink").href = S.sleeperLeague;

  const myNext = [];
  for (let r = 1; r <= rounds; r++) {
    const n = pickFor(S.slot, r, teams);
    if (n > picks.length) myNext.push(n);
    if (myNext.length >= 4) break;
  }

  const advice = resolveAdvice(picks);
  const adviceEl = $("advice");
  if (advice && advice.take) {
    const pickNo = myNext[0] || nextNo;
    adviceEl.className = nextSlot === S.slot ? "clock on-me" : "clock waiting";
    adviceEl.innerHTML = `<h2>Take ${advice.take}</h2>
      <div class="small">${advice.pos || ""} · pick ${pickNo} · ${advice.why || ""}</div>`;
  } else {
    adviceEl.className = "clock waiting hidden";
    adviceEl.innerHTML = "";
  }

  const clock = $("clock");
  if (nextSlot == null) {
    clock.className = "clock waiting";
    $("clockTitle").textContent = "Draft complete";
    $("clockSub").textContent = `${picks.length} / ${total} picks`;
  } else if (nextSlot === S.slot) {
    clock.className = "clock on-me";
    $("clockTitle").textContent = `You're on the clock — pick ${nextNo}`;
    $("clockSub").textContent = `Round ${Math.ceil(nextNo / teams)} · queue is below`;
    if (navigator.vibrate) navigator.vibrate(80);
  } else {
    clock.className = "clock waiting";
    const until = myNext[0] ? myNext[0] - nextNo : 0;
    $("clockTitle").textContent = `On the clock: ${nameForSlot(nextSlot, order)}`;
    $("clockSub").textContent = `Pick ${nextNo} · you're up in ${until} pick${until === 1 ? "" : "s"} (${myNext[0] ? "#" + myNext[0] : "—"})`;
  }

  $("meta").innerHTML = [
    chip(`Pick ${Math.min(nextNo, total)} / ${total}`),
    chip(`Round ${Math.min(Math.ceil(nextNo / teams), rounds)}`),
    chip(`Timer ${Math.round((draft.settings.pick_timer || 0) / 3600)}h`),
    chip(draft.status, draft.status === "drafting" ? "gold" : ""),
    myNext.length ? chip(`Your next: ${myNext.map((n) => "#" + n).join(" · ")}`, "gold") : "",
  ].join("");

  $("roster").innerHTML = mine.length
    ? mine.map((p) => {
        const m = p.metadata;
        const name = metaName(m);
        const note = S.notes[m.last_name] || S.notes[name] || "";
        return playerRow(m.position, name, m.team, `#${p.pick_no} · ${m.years_exp || "?"} yr`, m.injury_status, note);
      }).join("")
    : `<div class="empty">No picks yet.</div>`;

  const starters = projectStarters(mine);
  $("starterLine").textContent = starters
    ? `Likely 9: ${starters}`
    : "Need a full starting nine (QB, 2RB, 2WR, TE, 2 FLEX).";

  const liveQueue = (S.queue || []).filter((q) => !draftedByName(picks, q.name));
  $("queue").innerHTML = liveQueue.length
    ? liveQueue.map((q, i) => {
    const pl = findByName(q.name);
    const inj = pl?.injury_status;
    let status = `<span class="tag avail">available</span>`;
    if (inj) status += injTag(inj);
    return `<div class="queue-item">
      <div class="row"><b>${i + 1}. ${q.name}</b>${status}</div>
      <div class="sub">${q.pos}${adpText(q.name)} · ${q.note}</div>
    </div>`;
  }).join("")
    : `<div class="empty">Queue is empty — everyone on it is off the board.</div>`;

  const counts = countPos(mine);
  $("holes").innerHTML = [
    hole("QB", counts.QB, 1, counts.QB < 1),
    hole("RB", counts.RB, 3, counts.RB < 3, counts.RB < 2),
    hole("WR", counts.WR, 3, counts.WR < 3, counts.WR < 2),
    hole("TE", counts.TE, 1, counts.TE < 1),
  ].join("");

  const bySlot = {};
  for (const p of picks) {
    (bySlot[p.draft_slot] ||= []).push(p);
  }
  const needQb = [];
  for (let s = 1; s <= teams; s++) {
    const qbs = (bySlot[s] || []).filter((p) => p.metadata.position === "QB");
    if (!qbs.length) {
      const upcoming = [];
      for (let r = 1; r <= rounds && upcoming.length < 2; r++) {
        const n = pickFor(s, r, teams);
        if (n > picks.length) upcoming.push(n);
      }
      needQb.push(`${nameForSlot(s, order)} (next #${upcoming.join(", #")})`);
    }
  }
  $("needQb").textContent = needQb.length
    ? `Still no QB: ${needQb.join(" · ")}`
    : "Every team has a QB1.";

  const flagRows = [...S.skip, ...S.crowded]
    .filter((x) => !draftedByName(picks, x.name))
    .map((x) => {
    const kind = S.skip.some((s) => s.name === x.name) ? "skip" : "crowd";
    return `<div class="player"><div class="pos">—</div><div><div class="name">${x.name} <span class="tag ${kind}">${kind}</span></div><div class="sub">${x.reason}</div></div><div class="right">still up</div></div>`;
  });
  $("flags").innerHTML = flagRows.join("") || `<div class="empty">No skip/crowded names left on the board.</div>`;

  renderBoard(taken, order);
  $("recent").innerHTML = picks.slice(-12).reverse().map((p) => {
    const m = p.metadata;
    return `<div><span>#${p.pick_no}</span><span class="pos ${m.position}">${m.position}</span><span>${metaName(m)}</span><span>${nameForSlot(p.draft_slot, order)}</span></div>`;
  }).join("") || `<div class="empty">No picks yet.</div>`;

  $("rules").innerHTML = S.rules.map((r) => `<li>${r}</li>`).join("");
  const adpN = globalThis.SLEEPER_ADP ? SLEEPER_ADP.rows.length : 0;
  $("status").textContent = `Updated ${new Date().toLocaleTimeString()} · ${Object.keys(cache.players).length} skill players cached · ${adpN} Sleeper ADP names · auto-refresh ${auto ? "on" : "off"}`;
}

function chip(text, cls) {
  return `<span class="chip ${cls || ""}">${text}</span>`;
}

function hole(label, have, want, warn, crit) {
  const cls = crit ? "crit" : warn ? "warn" : "";
  return `<div class="hole ${cls}"><b>${have}</b>${label} <span class="sub">want ${want}+</span></div>`;
}

function playerRow(pos, name, team, sub, inj, extra) {
  const flag = flagFor(name);
  const teamTag = S.softAvoidTeams.includes(team) ? `<span class="tag raid">Raiders</span>` : "";
  const crowd = flag?.kind === "crowd" ? `<span class="tag crowd">crowded</span>` : "";
  const skip = flag?.kind === "skip" ? `<span class="tag skip">skip</span>` : "";
  const adp = adpText(name);
  const note = extra ? ` · ${extra}` : (flag ? ` · ${flag.text}` : "");
  return `<div class="player">
    <div class="pos ${pos}">${pos}</div>
    <div>
      <div class="name">${name} ${injTag(inj)}${skip}${crowd}${teamTag}</div>
      <div class="sub">${team || "FA"}${adp}${note}</div>
    </div>
    <div class="right">${sub}</div>
  </div>`;
}

function countPos(mine) {
  const c = { QB: 0, RB: 0, WR: 0, TE: 0 };
  for (const p of mine) {
    const pos = p.metadata.position;
    if (c[pos] != null) c[pos] += 1;
  }
  return c;
}

function projectStarters(mine) {
  const used = new Set();
  const take = (pos, n) => {
    const out = [];
    for (const p of mine) {
      if (out.length >= n) break;
      if (used.has(p.player_id)) continue;
      if (p.metadata.position === pos) {
        used.add(p.player_id);
        out.push(lastName(p));
      }
    }
    return out;
  };
  const qb = take("QB", 1);
  const rb = take("RB", 2);
  const wr = take("WR", 2);
  const te = take("TE", 1);
  const flex = [];
  for (const p of mine) {
    if (flex.length >= 2) break;
    if (used.has(p.player_id)) continue;
    if (["RB", "WR", "TE"].includes(p.metadata.position)) {
      used.add(p.player_id);
      flex.push(lastName(p));
    }
  }
  if (qb.length + rb.length + wr.length + te.length + flex.length < 5) return "";
  return `QB ${qb[0] || "—"} · RB ${rb.join("/")} · WR ${wr.join("/")} · TE ${te[0] || "—"} · FLEX ${flex.join("/")}`;
}

function lastName(p) { return p.metadata.last_name; }

function renderBoard(taken, order) {
  const rows = Object.values(cache.players)
    .filter((p) => p.position === remainingPos && p.team && !taken.has(p.player_id))
    .sort((a, b) => {
      const aa = lookupAdp(playerName(a));
      const ba = lookupAdp(playerName(b));
      const ar = aa ? aa.adp : 9999;
      const br = ba ? ba.adp : 9999;
      return ar - br || (a.search_rank || 9999) - (b.search_rank || 9999) || playerName(a).localeCompare(playerName(b));
    })
    .slice(0, 40)
    .map((p) => {
      const name = playerName(p);
      const hit = lookupAdp(name);
      const dc = p.depth_chart_order != null ? `RB/WR rank ${p.depth_chart_order}` : "";
      const sub = `${p.age || "?"} yrs old · ${p.years_exp ?? "?"} exp${p.depth_chart_order ? ` · #${p.depth_chart_order} ${p.depth_chart_position || ""}` : ""}`;
      const right = hit ? `ADP ${hit.adp}` : (dc || "FA/depth");
      return playerRow(p.position, name, p.team, right, p.injury_status, sub);
    });
  $("board").innerHTML = rows.join("") || `<div class="empty">Player list still loading…</div>`;
}

async function refresh({ players = false } = {}) {
  $("refreshBtn").disabled = true;
  $("status").textContent = "Refreshing…";
  try {
    const [draft, picks, users] = await Promise.all([
      getJSON(`${API}/draft/${S.draftId}`),
      getJSON(`${API}/draft/${S.draftId}/picks`),
      getJSON(`${API}/league/${S.leagueId}/users`),
    ]);
    cache.draft = draft;
    cache.picks = picks;
    cache.users = users;
    if (players || !Object.keys(cache.players).length) {
      await loadPlayers();
    }
    render();
  } catch (err) {
    $("clock").className = "clock waiting";
    $("clockTitle").textContent = "Could not reach Sleeper";
    $("clockSub").textContent = String(err.message || err);
    $("status").textContent = `Error: ${err.message || err}`;
  } finally {
    $("refreshBtn").disabled = false;
  }
}

function setAuto(on) {
  auto = on;
  $("autoBtn").textContent = `Auto: ${auto ? "on" : "off"}`;
  if (autoTimer) clearInterval(autoTimer);
  if (auto) autoTimer = setInterval(() => refresh(), AUTO_MS);
}

$("refreshBtn").addEventListener("click", () => refresh({ players: false }));
$("autoBtn").addEventListener("click", () => setAuto(!auto));
$("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-pos]");
  if (!btn) return;
  remainingPos = btn.dataset.pos;
  for (const t of $("tabs").querySelectorAll(".tab")) t.classList.toggle("on", t === btn);
  if (cache.draft) render();
});

setAuto(true);
refresh({ players: true });

const S = window.STRATEGY;
const API = "https://api.sleeper.app/v1";
const PLAYER_CACHE_KEY = "bb_intel_players_v2";
const PLAYER_CACHE_MS = 12 * 60 * 60 * 1000;
const COLORS = [
  "#C9963A", "#1D9E75", "#D8553A", "#7F77DD", "#D4537E",
  "#3A8FC9", "#9B59B6", "#5DBB63", "#E8C34A", "#5EC8FF",
  "#FF9B4A", "#4EE0A7",
];

const state = {
  league: null,
  users: [],
  rosters: [],
  teams: [],
  teamsByKey: {},
  selected: null,
  players: {},
  tradesByRoster: {},
  tradedPicks: [],
  draftRounds: 5,
  regularCap: 20,
  taxiSlots: 3,
  taxiYears: 1,
  reserveSlots: 4,
  ownedIds: new Set(),
};

function $(id) { return document.getElementById(id); }
function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function norm(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function getJSON(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.json();
}

function lookupAdp(name) {
  return globalThis.SLEEPER_ADP ? SLEEPER_ADP.lookup(name) : null;
}

function playerName(p) {
  if (!p) return "Unknown";
  return (p.full_name || `${p.first_name || ""} ${p.last_name || ""}`).trim() || "Unknown";
}

function noteFor(p) {
  if (!p || !S.notes) return "";
  const full = playerName(p);
  return S.notes[full] || S.notes[p.last_name] || "";
}

function ageBand(age) {
  const a = Number(age);
  if (!Number.isFinite(a) || a <= 0) return "unknown";
  if (a < 25) return "young";
  if (a <= 29) return "prime";
  return "veteran";
}

function injPill(status) {
  if (!status || status === "Active") return "";
  return `<span class="tag-pill inj">${escapeHtml(status)}</span>`;
}

async function loadPlayers() {
  try {
    const raw = localStorage.getItem(PLAYER_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.ts && Date.now() - parsed.ts < PLAYER_CACHE_MS && parsed.data) {
        state.players = parsed.data;
        return "cache";
      }
    }
  } catch (_) { /* ignore */ }

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
      status: p.status,
      depth_chart_order: p.depth_chart_order,
      depth_chart_position: p.depth_chart_position,
    };
  }
  state.players = slim;
  try {
    localStorage.setItem(PLAYER_CACHE_KEY, JSON.stringify({ ts: Date.now(), data: slim }));
  } catch (_) { /* quota */ }
  return "network";
}

function buildTeams() {
  const usersById = Object.fromEntries(state.users.map((u) => [u.user_id, u]));
  const positions = state.league?.roster_positions || [];
  state.regularCap = positions.filter((p) => p !== "TAXI" && p !== "IR").length || 20;
  state.taxiSlots = Number(state.league?.settings?.taxi_slots) || 3;
  state.taxiYears = Number(state.league?.settings?.taxi_years) || 1;
  state.reserveSlots = Number(state.league?.settings?.reserve_slots) || 4;

  const owned = new Set();
  for (const r of state.rosters) {
    for (const pid of r.players || []) owned.add(String(pid));
  }
  state.ownedIds = owned;

  const teams = state.rosters.map((r, i) => {
    const u = usersById[r.owner_id] || {};
    const meta = u.metadata || {};
    const manager = u.display_name || `Roster ${r.roster_id}`;
    const displayName = meta.team_name || manager;
    const key = norm(manager) || `roster${r.roster_id}`;
    const wins = r.settings?.wins || 0;
    const losses = r.settings?.losses || 0;
    const ties = r.settings?.ties || 0;
    const pf = r.settings?.fpts || 0;
    const players = (r.players || []).map(String);
    const starters = (r.starters || []).map(String).filter((id) => id && id !== "0");
    const taxi = (r.taxi || []).map(String);
    const reserve = (r.reserve || []).map(String);
    const taxiSet = new Set(taxi);
    const irSet = new Set(reserve);
    const regularIds = players.filter((id) => !taxiSet.has(id) && !irSet.has(id));
    return {
      key,
      color: COLORS[i % COLORS.length],
      abbrev: displayName.slice(0, 2).toUpperCase(),
      displayName,
      manager,
      ownerId: r.owner_id,
      rosterId: r.roster_id,
      isMine: r.owner_id === S.userId || norm(manager) === norm(S.defaultTeam),
      wins, losses, ties,
      record: ties ? `${wins}-${losses}-${ties}` : `${wins}-${losses}`,
      pf,
      players,
      starters,
      taxi,
      reserve,
      regularIds,
      regularUsed: regularIds.length,
      overBy: Math.max(0, regularIds.length - state.regularCap),
      rosterSize: players.length,
    };
  });

  teams.sort((a, b) => {
    if (a.isMine !== b.isMine) return a.isMine ? -1 : 1;
    if (b.wins !== a.wins) return b.wins - a.wins;
    return b.pf - a.pf;
  });

  state.teams = teams;
  state.teamsByKey = Object.fromEntries(teams.map((t) => [t.key, t]));
  if (!state.selected || !state.teamsByKey[state.selected]) {
    const mine = teams.find((t) => t.isMine);
    state.selected = mine ? mine.key : teams[0]?.key;
  }
}

function playerOf(pid) {
  return state.players[String(pid)] || null;
}

function enrich(pid) {
  const p = playerOf(pid);
  const name = playerName(p) || `Player ${pid}`;
  const adp = lookupAdp(name);
  return {
    pid: String(pid),
    p,
    name,
    pos: p?.position || "—",
    team: p?.team || "FA",
    age: p?.age,
    exp: p?.years_exp,
    inj: p?.injury_status,
    adp,
    note: noteFor(p),
    band: ageBand(p?.age),
  };
}

function projectDepth(team) {
  const used = new Set();
  const slots = ["QB", "RB", "RB", "WR", "WR", "TE", "FLEX", "FLEX"];
  const pool = team.players.map(enrich);
  const byPos = { QB: [], RB: [], WR: [], TE: [] };
  for (const e of pool) {
    if (byPos[e.pos]) byPos[e.pos].push(e);
  }
  const rank = (e) => {
    const adp = e.adp?.adp ?? 9999;
    const sr = e.p?.search_rank ?? 9999;
    return adp * 10 + sr;
  };
  for (const pos of Object.keys(byPos)) byPos[pos].sort((a, b) => rank(a) - rank(b));

  // Prefer Sleeper starters when present and still on roster
  const starterSet = new Set(team.starters);
  const rows = [];
  const takeBest = (pos) => {
    const list = byPos[pos] || [];
    const preferred = list.find((e) => starterSet.has(e.pid) && !used.has(e.pid));
    const pick = preferred || list.find((e) => !used.has(e.pid));
    if (!pick) return null;
    used.add(pick.pid);
    return pick;
  };

  for (const slot of slots) {
    let pick = null;
    if (slot === "FLEX") {
      const flexPool = [...(byPos.RB || []), ...(byPos.WR || []), ...(byPos.TE || [])]
        .filter((e) => !used.has(e.pid))
        .sort((a, b) => rank(a) - rank(b));
      const preferred = flexPool.find((e) => starterSet.has(e.pid));
      pick = preferred || flexPool[0] || null;
      if (pick) used.add(pick.pid);
    } else {
      pick = takeBest(slot);
    }
    rows.push({ slot, player: pick });
  }

  const bench = pool
    .filter((e) => !used.has(e.pid))
    .sort((a, b) => rank(a) - rank(b));

  return { starters: rows, bench };
}

function renderNav() {
  const nav = $("teamNav");
  nav.innerHTML = "";
  for (const t of state.teams) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "team-chip"
      + (t.key === state.selected ? " active" : "")
      + (t.isMine ? " mine" : "");
    btn.style.setProperty("--chip-color", t.color);
    btn.innerHTML = `<span class="dot" style="background:${t.color}"></span>${escapeHtml(t.displayName)}`;
    btn.addEventListener("click", () => {
      state.selected = t.key;
      renderNav();
      renderTeam();
    });
    nav.appendChild(btn);
  }
}

function renderHero(team) {
  document.documentElement.style.setProperty("--team", team.color);
  $("hero").style.setProperty("--team", team.color);
  $("heroLogo").textContent = team.abbrev;
  $("heroEyebrow").textContent = team.isMine ? "Your franchise" : "Franchise";
  $("heroName").textContent = team.displayName;
  $("heroManager").textContent = team.manager;
  $("statRecord").textContent = team.record;
  $("statRoster").textContent = team.overBy
    ? `${team.regularUsed}/${state.regularCap}`
    : String(team.rosterSize);
  $("statPf").textContent = team.pf ? team.pf.toFixed(0) : "0";

  const enriched = team.players.map(enrich);
  const young = enriched.filter((e) => e.band === "young").length;
  const prime = enriched.filter((e) => e.band === "prime").length;
  const vet = enriched.filter((e) => e.band === "veteran").length;
  const topAdp = enriched.filter((e) => e.adp && e.adp.rank <= 50).length;
  $("heroTiers").innerHTML = [
    tier("Young", young, "<25"),
    tier("Prime", prime, "25–29"),
    tier("Vet", vet, "30+"),
    tier("Top-50 ADP", topAdp, "startup"),
  ].join("");
}

function tier(label, n, tip) {
  return `<span class="hero-tier" title="${escapeHtml(tip)}"><span class="n">${n}</span> ${escapeHtml(label)}</span>`;
}

function playerCell(e, extra = "") {
  if (!e) return `<span class="empty">—</span>`;
  const soft = S.softAvoidTeams?.includes(e.team)
    ? `<span class="tag-pill ir">Raiders</span>` : "";
  const note = e.note ? `<span class="tag-pill note">note</span>` : "";
  return `<div class="name">${escapeHtml(e.name)}${injPill(e.inj)}${soft}${note}${extra}</div>
    <div class="sub">${escapeHtml(e.team)} · ${e.age ?? "?"} yrs · ${e.exp ?? "?"} exp${e.note ? ` · ${escapeHtml(e.note)}` : ""}</div>`;
}

function renderDepth(team) {
  const { starters, bench } = projectDepth(team);
  const taxiSet = new Set(team.taxi);
  const irSet = new Set(team.reserve);

  const starterRows = starters.map(({ slot, player: e }) => {
    const adp = e?.adp ? `#${e.adp.rank}` : "—";
    return `<tr>
      <td class="pos ${slot}">${slot}</td>
      <td>${playerCell(e)}</td>
      <td class="num">${adp}</td>
    </tr>`;
  }).join("");

  const benchRows = bench.map((e) => {
    let extra = "";
    if (taxiSet.has(e.pid)) extra = `<span class="tag-pill taxi">taxi</span>`;
    if (irSet.has(e.pid)) extra = `<span class="tag-pill ir">IR</span>`;
    const adp = e.adp ? `#${e.adp.rank}` : "—";
    return `<tr>
      <td class="pos ${e.pos}">${e.pos}</td>
      <td>${playerCell(e, extra)}</td>
      <td class="num">${adp}</td>
    </tr>`;
  }).join("");

  $("depthTag").textContent = `${starters.filter((s) => s.player).length}/8 starters · ${bench.length} bench/taxi/IR`;
  $("depthBody").innerHTML = `
    <table class="depth">
      <thead><tr><th>Slot</th><th>Player</th><th class="num">ADP</th></tr></thead>
      <tbody>${starterRows}</tbody>
    </table>
    <p class="pending" style="margin:14px 0 8px">Bench / Taxi / IR</p>
    <table class="depth">
      <thead><tr><th>Pos</th><th>Player</th><th class="num">ADP</th></tr></thead>
      <tbody>${benchRows || `<tr><td colspan="3" class="empty">No bench players.</td></tr>`}</tbody>
    </table>`;
}

function renderRoster(team) {
  const rows = team.players.map(enrich)
    .sort((a, b) => {
      const order = { QB: 0, RB: 1, WR: 2, TE: 3 };
      const d = (order[a.pos] ?? 9) - (order[b.pos] ?? 9);
      if (d) return d;
      return (a.adp?.adp ?? 9999) - (b.adp?.adp ?? 9999);
    });

  const taxiSet = new Set(team.taxi);
  const irSet = new Set(team.reserve);
  const starterSet = new Set(team.starters);

  $("rosterTag").textContent = `${rows.length} players`;
  $("rosterBody").innerHTML = `
    <table class="roster">
      <thead><tr><th>Pos</th><th>Player</th><th class="num">Age</th><th class="num">ADP</th></tr></thead>
      <tbody>
        ${rows.map((e) => {
          let badges = "";
          if (starterSet.has(e.pid)) badges += `<span class="tag-pill note">start</span>`;
          if (taxiSet.has(e.pid)) badges += `<span class="tag-pill taxi">taxi</span>`;
          if (irSet.has(e.pid)) badges += `<span class="tag-pill ir">IR</span>`;
          return `<tr>
            <td class="pos ${e.pos}">${e.pos}</td>
            <td>${playerCell(e, badges)}</td>
            <td class="num">${e.age ?? "—"}</td>
            <td class="num">${e.adp ? `#${e.adp.rank}` : "—"}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>`;
}

function renderStatus(team) {
  const enriched = team.players.map(enrich);
  const items = [];
  const n = state.teams.length;
  const anyGames = state.teams.some((t) => t.wins + t.losses + t.ties > 0);
  if (anyGames) {
    items.push(`Record <strong>${escapeHtml(team.record)}</strong> · <span class="hl">${team.pf.toFixed(1)} PF</span>.`);
  } else {
    items.push(`Season not underway yet — every team is <strong>0-0</strong>. Startup draft is complete.`);
  }

  const counts = { QB: 0, RB: 0, WR: 0, TE: 0 };
  for (const e of enriched) if (counts[e.pos] != null) counts[e.pos] += 1;
  items.push(`Roster shape: <span class="hl">${counts.QB} QB · ${counts.RB} RB · ${counts.WR} WR · ${counts.TE} TE</span> (${team.rosterSize} total).`);

  const young = enriched.filter((e) => e.band === "young").length;
  items.push(`Age profile: <span class="hl">${young}</span> under 25 · ${enriched.filter((e) => e.band === "prime").length} prime · ${enriched.filter((e) => e.band === "veteran").length} vet.`);

  const injured = enriched.filter((e) => e.inj && e.inj !== "Active");
  if (injured.length) {
    items.push(`Injury flags: ${injured.map((e) => `<strong>${escapeHtml(e.name)}</strong> (${escapeHtml(e.inj)})`).join(" · ")}.`);
  } else {
    items.push("No active injury designations on the roster.");
  }

  const taxiN = team.taxi.length;
  const irN = team.reserve.length;
  if (team.overBy > 0) {
    items.push(`Roster pressure: <span class="hl">${team.regularUsed}/${state.regularCap} active</span> — cut or park <span class="hl">${team.overBy}</span> (see Roster Moves).`);
  }
  items.push(`Stash slots: <span class="hl">${taxiN}/${state.taxiSlots} taxi</span> · <span class="hl">${irN}/${state.reserveSlots} IR</span>${taxiN === 0 ? " — taxi still empty (rookies only)." : "."}`);

  if (team.isMine) {
    items.push("Build read: <span class=\"hl\">WR fortress</span>, thin top-end RB (Breece + Kyren carry). Prefer RB upgrades via trade over TE3/QB3.");
  }

  $("statusTag").textContent = `${counts.RB} RB · ${counts.WR} WR`;
  $("obsList").innerHTML = items.map((x) => `<li>${x}</li>`).join("");
}

function renderTrades(team) {
  const list = state.tradesByRoster[team.rosterId] || [];
  if (!list.length) {
    $("tradeBody").innerHTML = `<p class="empty">No completed trades yet this season.</p>`;
    return;
  }
  $("tradeBody").innerHTML = list.slice(0, 12).map((t) => `
    <div class="trade">
      <div class="when">${escapeHtml(t.date)}</div>
      <div class="vs">vs ${escapeHtml(t.other)}</div>
      <div class="got">Got: ${escapeHtml(t.got.join(", ") || "—")}</div>
      <div class="sent">Sent: ${escapeHtml(t.sent.join(", ") || "—")}</div>
    </div>`).join("");
}

function futureSeasons() {
  const base = Number(state.league?.season) || new Date().getFullYear();
  // Startup draft for `base` is done — show the next three rookie drafts.
  return [base + 1, base + 2, base + 3].map(String);
}

function ownerOfPick(season, round, originalRosterId) {
  const hit = state.tradedPicks.find(
    (p) => String(p.season) === String(season)
      && Number(p.round) === Number(round)
      && Number(p.roster_id) === Number(originalRosterId)
  );
  return hit ? Number(hit.owner_id) : Number(originalRosterId);
}

function renderPicks(team) {
  const seasons = futureSeasons();
  const rounds = state.draftRounds || 5;
  const nameByRid = Object.fromEntries(state.teams.map((t) => [t.rosterId, t.displayName]));
  const owned = [];

  for (const season of seasons) {
    const seasonPicks = [];
    for (let round = 1; round <= rounds; round++) {
      for (const t of state.teams) {
        const owner = ownerOfPick(season, round, t.rosterId);
        if (owner !== Number(team.rosterId)) continue;
        const via = Number(t.rosterId) === Number(team.rosterId)
          ? "own"
          : `via ${nameByRid[t.rosterId] || `Team ${t.rosterId}`}`;
        seasonPicks.push({ round, via, original: t.rosterId });
      }
    }
    seasonPicks.sort((a, b) => a.round - b.round || a.original - b.original);
    owned.push({ season, picks: seasonPicks });
  }

  const total = owned.reduce((n, s) => n + s.picks.length, 0);
  $("picksTag").textContent = `${total} picks · R1–R${rounds}`;
  $("picksBody").innerHTML = `
    <div class="picks-grid">
      ${owned.map(({ season, picks }) => `
        <div class="pick-season">
          <h3>${escapeHtml(season)}</h3>
          <ul class="pick-list">
            ${picks.length
              ? picks.map((p) => `
                  <li>
                    <span class="rnd">Round ${p.round}</span>
                    <span class="via">${escapeHtml(p.via)}</span>
                  </li>`).join("")
              : `<li><span class="via">No picks owned</span></li>`}
          </ul>
        </div>`).join("")}
    </div>`;
}

function valueRank(e) {
  const adp = e.adp?.rank != null ? Number(e.adp.rank) : null;
  const sr = e.p?.search_rank != null ? Number(e.p.search_rank) : null;
  if (adp != null && sr != null) return Math.min(adp, sr);
  return adp ?? sr ?? 9999;
}

function irEligible(status) {
  const s = String(status || "").toUpperCase().trim();
  if (!s || s === "ACTIVE") return false;
  const settings = state.league?.settings || {};
  if (s === "QUESTIONABLE") return false;
  if (s === "DOUBTFUL") return !!settings.reserve_allow_doubtful;
  if (s === "OUT" || s === "IR" || s === "PUP" || s === "INJURY_RESERVE" || s.includes("INJURY")) {
    return !!settings.reserve_allow_out;
  }
  if (s === "SUS" || s === "SUSPENDED" || s.startsWith("SUS")) return !!settings.reserve_allow_sus;
  if (s === "NA") return !!settings.reserve_allow_na;
  if (s === "COVID" || s === "COV") return !!settings.reserve_allow_cov;
  if (s === "DNR") return !!settings.reserve_allow_dnr;
  return false;
}

function taxiEligible(e) {
  const exp = Number(e.exp);
  if (!Number.isFinite(exp)) return false;
  return exp < state.taxiYears;
}

function positionCounts(enriched) {
  const counts = { QB: 0, RB: 0, WR: 0, TE: 0 };
  for (const e of enriched) if (counts[e.pos] != null) counts[e.pos] += 1;
  return counts;
}

function handcuffOfStarter(e, team, enriched) {
  if (e.pos !== "RB" || !e.team) return false;
  return enriched.some((s) =>
    s.pid !== e.pid
    && s.pos === "RB"
    && s.team === e.team
    && team.starters.includes(s.pid)
  );
}

function scoreCuts(team) {
  const enriched = team.regularIds.map(enrich);
  const counts = positionCounts(enriched);
  const starterSet = new Set(team.starters);
  const { starters } = projectDepth(team);
  const projected = new Set(starters.map((s) => s.player?.pid).filter(Boolean));

  return enriched.map((e) => {
    const rank = valueRank(e);
    let score = Math.min(120, rank / 3);
    const isStarter = starterSet.has(e.pid) || projected.has(e.pid);
    if (isStarter) score -= 80;
    else score += 28;

    if (e.band === "veteran") score += 14;
    if (e.band === "young") score -= 10;
    if (counts[e.pos] >= 8) score += 16;
    else if (counts[e.pos] >= 6) score += 8;
    if (e.pos === "WR" && counts.WR >= 9) score += 10;
    if (e.pos === "RB" && counts.RB <= 5) score -= 12;
    if (handcuffOfStarter(e, team, enriched)) score -= 22;
    if (S.softAvoidTeams?.includes(e.team)) score += 8;
    if (e.inj && !irEligible(e.inj) && e.inj !== "Active") score += 4;
    if (rank <= 50) score -= 40;
    if (rank <= 100) score -= 18;
    // Keep young developmental pieces over older depth.
    if (e.band === "young" && !isStarter) score -= 8;
    if (Number(e.exp) <= 2 && rank <= 220) score -= 12;
    if (Number(e.age) >= 28 && e.pos === "WR" && !isStarter) score += 12;

    const bias = Number(S.cutBias?.[e.name] ?? S.cutBias?.[e.p?.last_name] ?? 0);
    score += bias;

    let why = [];
    if (!isStarter) why.push("off projected lineup");
    if (counts[e.pos] >= 8) why.push(`deep at ${e.pos} (${counts[e.pos]})`);
    if (e.band === "veteran") why.push("veteran age band");
    if (rank >= 180) why.push(`low market (#${Math.round(rank)})`);
    if (handcuffOfStarter(e, team, enriched)) why.push("protect — starter handcuff");
    if (bias >= 20) why.push("explicit cut lean");
    if (bias <= -15) why.push("protect — manager note");
    if (isStarter) why.push("keep — starter");

    return { e, score, rank, why: why.slice(0, 2).join(" · ") || "lowest hold value" };
  }).sort((a, b) => b.score - a.score);
}

function scoreIrMoves(team) {
  const irSet = new Set(team.reserve);
  const open = Math.max(0, state.reserveSlots - team.reserve.length);
  const candidates = team.regularIds.map(enrich)
    .filter((e) => !irSet.has(e.pid) && irEligible(e.inj))
    .map((e) => {
      const rank = valueRank(e);
      // Prefer parking valuable injured players to free active spots.
      const score = (200 - Math.min(rank, 200)) + (e.band === "young" ? 8 : 0);
      return {
        e,
        score,
        rank,
        why: `${e.inj} qualifies for IR · frees an active roster spot`,
      };
    })
    .sort((a, b) => b.score - a.score);
  return { open, candidates };
}

function scoreTaxiMoves(team) {
  const taxiSet = new Set(team.taxi);
  const open = Math.max(0, state.taxiSlots - team.taxi.length);
  const candidates = team.regularIds.map(enrich)
    .filter((e) => !taxiSet.has(e.pid) && taxiEligible(e))
    .map((e) => {
      const rank = valueRank(e);
      return {
        e,
        score: 100 - Math.min(rank, 100),
        rank,
        why: `Rookie (exp ${e.exp}) · taxi_years=${state.taxiYears}`,
      };
    })
    .sort((a, b) => b.score - a.score);
  return { open, candidates };
}

function teamNeeds(team) {
  const counts = positionCounts(team.regularIds.map(enrich));
  const needs = [];
  // 1QB league — never chase QB3 from wire unless somehow empty
  if (counts.QB < 2) needs.push("QB");
  if (counts.RB < 6) needs.push("RB");
  if (counts.WR < 5) needs.push("WR");
  if (counts.TE < 2) needs.push("TE");
  // Default lean for this build: RB upgrades
  if (!needs.length || (counts.RB <= counts.WR && !needs.includes("RB"))) {
    if (!needs.includes("RB")) needs.unshift("RB");
  }
  return { counts, needs };
}

function scoreWireAdds(team) {
  const { counts, needs } = teamNeeds(team);
  const needSet = new Set(needs);
  const agents = [];

  for (const [pid, p] of Object.entries(state.players)) {
    if (state.ownedIds.has(String(pid))) continue;
    if (!p?.team) continue;
    if (p.status === "Inactive") continue;
    if (p.status && !["Active", "Injured Reserve", "PUP", "Suspended"].includes(p.status)) {
      continue;
    }
    // Skip ancient QBs / retiree junk that still has a team tag in Sleeper.
    if (p.position === "QB" && (Number(p.age) >= 36 || Number(p.years_exp) >= 14)) continue;
    if (Number(p.age) >= 34 && p.position !== "QB") continue;

    const e = enrich(pid);
    const rank = valueRank(e);
    if (rank > 320 && !(e.band === "young" && Number(e.exp) <= 1 && rank <= 450)) continue;

    let score = Math.max(0, 340 - rank);
    if (needSet.has(e.pos)) score += 35;
    if (e.pos === "RB") score += 12; // dynasty wire bias toward RB lottery
    if (e.band === "young") score += 14;
    if (e.band === "veteran") score -= 18;
    if (S.softAvoidTeams?.includes(e.team)) score -= 40;
    if (irEligible(e.inj)) score -= 8;
    if (!needSet.has(e.pos) && e.pos === "QB") score -= 50;
    if (!needSet.has(e.pos) && e.pos === "TE" && counts.TE >= 2) score -= 12;

    const whyBits = [];
    if (needSet.has(e.pos)) whyBits.push(`${e.pos} need`);
    if (e.band === "young") whyBits.push("young");
    if (e.adp) whyBits.push(`ADP #${e.adp.rank}`);
    else whyBits.push(`Sleeper #${Math.round(rank)}`);
    if (S.softAvoidTeams?.includes(e.team)) whyBits.push("soft-avoid team");

    agents.push({
      e,
      score,
      rank,
      why: whyBits.join(" · "),
      needHit: needSet.has(e.pos),
    });
  }

  agents.sort((a, b) => b.score - a.score || a.rank - b.rank);
  return { counts, needs, agents: agents.slice(0, 12) };
}

function renderMoveList(items, empty, tagClass) {
  if (!items.length) return `<p class="empty">${escapeHtml(empty)}</p>`;
  return `<ul class="mv-list">${items.map((item, i) => `
    <li>
      <div class="mv-top">
        <span class="mv-name">${i + 1}. ${escapeHtml(item.e.name)}
          <span class="mv-tag ${tagClass}">${escapeHtml(item.e.pos)}</span>
          ${item.needHit ? `<span class="mv-tag need">need</span>` : ""}
          ${item.e.inj && item.e.inj !== "Active" ? injPill(item.e.inj) : ""}
        </span>
        <span class="mv-rank">#${Math.round(item.rank)}</span>
      </div>
      <div class="mv-meta">${escapeHtml(item.e.team)} · ${item.e.age ?? "?"} yrs</div>
      <div class="mv-why">${escapeHtml(item.why)}</div>
    </li>`).join("")}</ul>`;
}

function renderMoves(team) {
  const over = team.overBy;
  const cuts = scoreCuts(team);
  const ir = scoreIrMoves(team);
  const taxi = scoreTaxiMoves(team);
  const wire = scoreWireAdds(team);

  const cutN = Math.max(over, over > 0 ? over : 0);
  const showCuts = cuts.slice(0, Math.max(cutN, 5));
  const showIr = ir.candidates.slice(0, Math.max(ir.open, 3));
  const showTaxi = taxi.candidates.slice(0, Math.max(taxi.open, 3));
  // Don't recommend adds while over unless IR/taxi can clear spots first.
  const freeAfterParking = Math.max(0, ir.candidates.length + taxi.candidates.length);
  const spotsIfPark = Math.max(0, freeAfterParking - over);
  const canAdd = over === 0 || spotsIfPark > 0;
  const addLimit = over > 0 ? Math.min(5, Math.max(1, spotsIfPark || 0)) : 8;
  const showAdds = canAdd ? wire.agents.slice(0, Math.max(addLimit, 5)) : [];

  const banner = over > 0
    ? `<p class="moves-banner over">Active roster <span class="hl">${team.regularUsed}/${state.regularCap}</span> — cut or park <span class="hl">${over}</span> before adding. Taxi ${team.taxi.length}/${state.taxiSlots} · IR ${team.reserve.length}/${state.reserveSlots}.</p>`
    : `<p class="moves-banner">Active roster <span class="hl">${team.regularUsed}/${state.regularCap}</span> — room to add. Taxi ${team.taxi.length}/${state.taxiSlots} · IR ${team.reserve.length}/${state.reserveSlots}. Needs: <span class="hl">${wire.needs.join(", ") || "balanced"}</span>.</p>`;

  let irHint = ir.open
    ? `Open IR slots: ${ir.open}. Eligible designations: Out / IR / Sus / NA (Doubtful not allowed).`
    : "IR full.";
  if (!ir.candidates.length) {
    irHint += " Nobody on the active roster currently qualifies — Questionable does not count.";
  }

  let taxiHint = taxi.open
    ? `Open taxi: ${taxi.open}. Rookies only (years_exp < ${state.taxiYears}).`
    : "Taxi full.";
  if (!taxi.candidates.length && taxi.open) {
    taxiHint += " No taxi-eligible rookies on this roster right now.";
  }

  const addHint = over > 0 && !showAdds.length
    ? `Wire adds locked until you free ${over} active spot${over === 1 ? "" : "s"} (cut, IR, or taxi).`
    : `Best available on the wire for ${wire.needs.join("/")} (NFL-rostered only).`;

  $("movesTag").textContent = over > 0
    ? `${over} over · ${ir.candidates.length} IR-eligible`
    : `${wire.needs.join("·") || "set"} · ${wire.agents.length} FA scouted`;

  $("movesBody").innerHTML = `
    ${banner}
    <div class="moves-cols">
      <div class="moves-col">
        <h3>Cut first${over ? `<span class="n">need ${over}</span>` : ""}</h3>
        <p class="hint">${over ? `Drop these to get under ${state.regularCap}.` : "Lowest hold value if you need a spot."}</p>
        ${renderMoveList(showCuts, "No cut candidates.", "cut")}
      </div>
      <div class="moves-col">
        <h3>Move to IR / Taxi</h3>
        <p class="hint">${escapeHtml(irHint)}</p>
        ${renderMoveList(showIr, "No IR moves available.", "ir")}
        ${showTaxi.length || taxi.open ? `
          <p class="hint" style="margin-top:12px">${escapeHtml(taxiHint)}</p>
          ${renderMoveList(showTaxi, "No taxi moves available.", "taxi")}
        ` : ""}
      </div>
      <div class="moves-col">
        <h3>Add from wire</h3>
        <p class="hint">${escapeHtml(addHint)}</p>
        ${renderMoveList(showAdds, over > 0 ? "Clear roster spots first." : "No clear wire adds right now.", "add")}
      </div>
    </div>`;
}

function renderRules() {
  $("rulesList").innerHTML = (S.rules || []).map((r) => `<li>${escapeHtml(r)}</li>`).join("");
}

function renderTeam() {
  const team = state.teamsByKey[state.selected];
  if (!team) return;
  $("teamView").hidden = false;
  renderHero(team);
  renderRoster(team);
  renderDepth(team);
  renderPicks(team);
  renderMoves(team);
  renderStatus(team);
  renderTrades(team);
  renderRules();
}

async function loadTrades() {
  const rosterToName = {};
  for (const t of state.teams) rosterToName[t.rosterId] = t.displayName;

  const weeks = Array.from({ length: 18 }, (_, i) => i + 1);
  const seen = new Set();
  const byRoster = {};

  const weekData = await Promise.all(weeks.map((w) =>
    getJSON(`${API}/league/${S.leagueId}/transactions/${w}`).catch(() => [])
  ));

  for (const txns of weekData) {
    if (!Array.isArray(txns)) continue;
    for (const tx of txns) {
      if (tx.type !== "trade" || tx.status !== "complete") continue;
      if (seen.has(tx.transaction_id)) continue;
      seen.add(tx.transaction_id);
      const rosters = tx.roster_ids || [];
      if (rosters.length < 2) continue;

      for (const rid of rosters) {
        const otherRid = rosters.find((r) => String(r) !== String(rid));
        const got = [];
        const sent = [];
        for (const [pid, ownerRid] of Object.entries(tx.adds || {})) {
          const name = playerName(playerOf(pid));
          if (String(ownerRid) === String(rid)) got.push(name);
          else sent.push(name);
        }
        for (const pk of tx.draft_picks || []) {
          const label = `R${pk.round} '${String(pk.season).slice(-2)}`;
          if (String(pk.owner_id) === String(rid)) got.push(label);
          else sent.push(label);
        }
        if (!got.length && !sent.length) continue;
        (byRoster[rid] ||= []).push({
          ts: tx.status_updated,
          date: new Date(tx.status_updated).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          other: rosterToName[otherRid] || "Unknown",
          got, sent,
        });
      }
    }
  }

  for (const list of Object.values(byRoster)) list.sort((a, b) => b.ts - a.ts);
  state.tradesByRoster = byRoster;
}

async function refresh() {
  $("refreshBtn").disabled = true;
  $("loadNote").hidden = false;
  $("loadNote").className = "loadnote";
  $("loadNote").textContent = "Loading league data from Sleeper…";
  try {
    const [league, users, rosters, tradedPicks] = await Promise.all([
      getJSON(`${API}/league/${S.leagueId}`),
      getJSON(`${API}/league/${S.leagueId}/users`),
      getJSON(`${API}/league/${S.leagueId}/rosters`),
      getJSON(`${API}/league/${S.leagueId}/traded_picks`).catch(() => []),
    ]);
    state.league = league;
    state.users = users;
    state.rosters = rosters;
    state.tradedPicks = Array.isArray(tradedPicks) ? tradedPicks : [];
    state.draftRounds = Number(league.settings?.draft_rounds) || 5;
    $("seasonLabel").textContent = `${league.season} · ${league.status}`;
    $("sleeperLink").href = S.sleeperLeague;

    await loadPlayers();
    buildTeams();
    await loadTrades();
    renderNav();
    renderTeam();

    $("loadNote").hidden = true;
    const adpN = globalThis.SLEEPER_ADP ? SLEEPER_ADP.rows.length : 0;
    $("status").textContent = `Updated ${new Date().toLocaleTimeString()} · ${Object.keys(state.players).length} skill players · ${adpN} ADP names · ${state.teams.length} teams`;
  } catch (err) {
    $("loadNote").className = "loadnote error";
    $("loadNote").textContent = `Could not load Sleeper: ${err.message || err}`;
    $("status").textContent = String(err.message || err);
  } finally {
    $("refreshBtn").disabled = false;
  }
}

$("refreshBtn").addEventListener("click", () => refresh());
refresh();

/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "Use the Sleeper ADP dump (adp.js) when ADP is the reason. Not redraft ADP.",
    "Full PPR, 2 FLEX (RB/WR/TE), 1QB, no TE premium.",
    "Soft-avoid Raiders unless clearly BPA.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage). A defined 1-2 is not the same thing as Gadsden/Kolar/Njoku.",
    "Injury skip only if it is already called serious and the player will miss multiple weeks. A sore/day-to-day ding on a clearly good player is still a dynasty pick — we cannot wait and see during the draft.",
  ],

  /** Live pick call — update this whenever we change strategy. */
  advice: {
    pick: 127,
    take: "Tony Pollard",
    pos: "RB",
    why: "Sleeper ADP 123.0 — on time at 127. Titans lead back. Saleh: sore foot / minor aches, not believed serious. Dynasty does not skip that. Marks (126.0) if Pollard is gone.",
    updated: "2026-08-18 injury bar: skip only if serious + multi-week",
  },

  /** Shown in order. Names must match Sleeper full_name. */
  queue: [
    { name: "Tony Pollard", pos: "RB", note: "ADP 123.0. On time. Sore foot is minor/not long-term. Take at 127." },
    { name: "Woody Marks", pos: "RB", note: "ADP 126.0. Next on-time RB3 if Pollard is gone." },
    { name: "Josh Downs", pos: "WR", note: "ADP 117.0 — already past ADP. The steal if you take WR over the RB hole." },
    { name: "Romeo Doubs", pos: "WR", note: "ADP 127.7. On-time BPA if the RBs and Downs are gone." },
    { name: "Braelon Allen", pos: "RB", note: "ADP 154.5 — Breece handcuff. Prefer 138." },
    { name: "Tyjae Spears", pos: "RB", note: "ADP 156.0. Pollard handcuff later, not the 127 pick." },
  ],

  skip: [
    { name: "Zach Charbonnet", reason: "PUP / ACL — already multi-week" },
    { name: "Jordyn Tyson", reason: "Hamstring, lengthy absence — already called multi-week" },
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "George Kittle", reason: "Achilles / PUP — already multi-week" },
    { name: "Alec Pierce", reason: "PUP — already multi-week" },
    { name: "Brenton Strange", reason: "TE3 — we already have Pitts + Kincaid" },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE: Kolar OR Gadsden OR Njoku" },
    { name: "Jakobi Meyers", reason: "JAX: BTJ, Meyers, Parker Washington, Hunter" },
    { name: "Travis Hunter", reason: "Backup WR / starting CB — offense share unknown" },
    { name: "Quentin Johnston", reason: "LAC WR2 behind Ladd" },
    { name: "Blake Corum", reason: "Split with Kyren (already rostered)" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "Aaron Jones", reason: "MIN: Jones OR Mason" },
    { name: "Jordan Mason", reason: "MIN: Jones OR Mason" },
    { name: "Kenny Gainwell", reason: "Behind Bucky Irving" },
    { name: "Tyler Allgeier", reason: "Behind Jeremiyah Love" },
  ],

  /** ADP lives in adp.js (Sleeper dump). Do not keep a second list here. */

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Tony Pollard": "Sore foot; Saleh called it minor. Not a multi-week skip.",
  },
};

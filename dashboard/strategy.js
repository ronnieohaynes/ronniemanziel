/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "Recommend from the full picture: this Sleeper ADP dump, injury news (skip only if already serious + multi-week), scoring (full PPR, 1QB, 2 FLEX, no TE premium), 23 rounds / 28 roster spots (9 + 12 bench + 3 taxi + 4 IR), what other teams are doing, age, who is actually left, and our holes. ADP is one input, not the pick by itself.",
    "Fill the RB3 hole with an on-time back. Do not reach ~25 picks for Allen/Spears — those are 138 picks in a 23-round draft.",
    "Soft-avoid Raiders unless clearly BPA.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage). A defined 1-2 is not the same thing as Gadsden/Kolar/Njoku.",
  ],

  /** Live pick call — update this whenever we change strategy. */
  advice: {
    pick: 127,
    take: "Xavier Worthy",
    pos: "WR",
    why: "Pollard gone at 124. Do not reach Allen (ADP 154.5). Worthy is ADP 116, age 23, KC WR2, Mahomes stack. QUES is not multi-week. Doubs if Worthy is gone. Allen at 138.",
    updated: "2026-08-19 Pollard gone — Worthy at 127",
  },

  /** Shown in order. Names must match Sleeper full_name. Only names still on the board. */
  queue: [
    { name: "Xavier Worthy", pos: "WR", note: "127 pick. ADP 116, age 23, KC WR2, Mahomes stack. Pollard is gone." },
    { name: "Romeo Doubs", pos: "WR", note: "ADP 127.7. On-time if Worthy is gone." },
    { name: "Jalen Coker", pos: "WR", note: "ADP 129.3. Next on-time WR." },
    { name: "Braelon Allen", pos: "RB", note: "ADP 154.5 — 138 pick, not 127. Jets RB2 + Breece cuff." },
    { name: "Tyjae Spears", pos: "RB", note: "ADP 156.0. Later than Allen." },
  ],

  skip: [
    { name: "Zach Charbonnet", reason: "PUP / ACL — already multi-week" },
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Travis Kelce", reason: "TE3 + age 36 in dynasty, no TE premium. One-year deal, maybe last season." },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE: Kolar OR Gadsden OR Njoku" },
    { name: "Jakobi Meyers", reason: "JAX: BTJ, Meyers, Parker Washington, Hunter" },
    { name: "Travis Hunter", reason: "Backup WR / starting CB — offense share unknown" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "Aaron Jones", reason: "MIN: Jones OR Mason" },
    { name: "Kenny Gainwell", reason: "Behind Bucky Irving" },
    { name: "Tyler Allgeier", reason: "Behind Jeremiyah Love" },
    { name: "Woody Marks", reason: "HOU: Montgomery OR Marks — split lead reps; Montgomery is a big new signing" },
  ],

  /** ADP lives in adp.js (Sleeper dump). Do not keep a second list here. */

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Travis Kelce": "36, turning 37 in Oct. One-year deal. Fine 2026 TE for a team with none. We already have Pitts + Kincaid.",
  },
};

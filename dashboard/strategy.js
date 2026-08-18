/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "Recommend from the full picture: this Sleeper ADP dump, injury news (skip only if already serious + multi-week), scoring (full PPR, 1QB, 2 FLEX, no TE premium), 23 rounds / 28 roster spots (9 + 12 bench + 3 taxi + 4 IR), what other teams are doing, age, who is actually left, and our holes. ADP is one input, not the pick by itself.",
    "Soft-avoid Raiders unless clearly BPA.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage). A defined 1-2 is not the same thing as Gadsden/Kolar/Njoku.",
  ],

  /** Live pick call — update this whenever we change strategy. */
  advice: {
    pick: 127,
    take: "Tony Pollard",
    pos: "RB",
    why: "Need RB3 (only Breece/Kyren; Breece groin). 4 WR already start in this PPR 2-FLEX. Pollard is the last on-time ADP lead back left (123.0, TEN RB1, 29). Foot is minor, not multi-week. Age is a 2026 tax, not a skip — 12 picks after this to take youth (Allen ~138). Marks/Coleman crowded. If Pollard is gone: Worthy (23, ADP 116, KC WR2) then Doubs (127.7).",
    updated: "2026-08-18 full-factor rec (not ADP-only)",
  },

  /** Shown in order. Names must match Sleeper full_name. */
  queue: [
    { name: "Tony Pollard", pos: "RB", note: "Take at 127. ADP 123, TEN RB1, fills the RB3 hole. 29yo is a 2026 pick, not a 5-year hold." },
    { name: "Xavier Worthy", pos: "WR", note: "ADP 116, age 23, KC WR2, Mahomes stack. QUES but not called multi-week. If Pollard is gone." },
    { name: "Romeo Doubs", pos: "WR", note: "ADP 127.7, healthy, 26. On-time PPR WR if Pollard and Worthy are gone." },
    { name: "Braelon Allen", pos: "RB", note: "ADP 154.5, age 22, defined Jets RB2 + Breece cuff. Wait for 138 — 12 picks left after 127." },
    { name: "Tyjae Spears", pos: "RB", note: "ADP 156.0, age 25. Pollard cuff / PPR back. Later." },
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
    { name: "Woody Marks", reason: "HOU: Montgomery OR Marks — split lead reps; Montgomery is a big new signing" },
    { name: "David Montgomery", reason: "HOU: Montgomery OR Marks — split lead reps; big new signing into Marks' room" },
    { name: "Jonah Coleman", reason: "DEN: Dobbins OR Harvey OR Coleman — 3-way, usage not named" },
  ],

  /** ADP lives in adp.js (Sleeper dump). Do not keep a second list here. */

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Tony Pollard": "Sore foot; Saleh called it minor. Not a multi-week skip.",
  },
};

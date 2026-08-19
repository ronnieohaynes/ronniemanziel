/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "The banner only names players still on the board and why they fit right now.",
    "The pick reason is role, our holes, scoring, age, injuries, and who is left. ADP is only a price check.",
    "Starting nine is done. 162+ is youth, taxi rookies, and upside — skip TE3, QB3, and crowded rooms.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage).",
  ],

  /** Optional headline pick # — banner uses the first available queue name. */
  advice: { pick: 162 },

  /** Present-tense only. Names must match Sleeper full_name. Drafted names drop off automatically. */
  queue: [
    { name: "Dylan Sampson", pos: "RB", note: "21, Browns RB2 behind Judkins. Young back with a defined job — dynasty stash." },
    { name: "Adonai Mitchell", pos: "WR", note: "23, Jets WR2 behind Garrett Wilson. Upside dart; you already have Hunter." },
    { name: "Antonio Williams", pos: "WR", note: "22, Commanders rookie WR3. Taxi-eligible dart." },
    { name: "Malachi Fields", pos: "WR", note: "22, Giants rookie. Pure taxi dart." },
    { name: "Kaytron Allen", pos: "RB", note: "23, Commanders rookie RB4. Taxi dart only." },
  ],

  skip: [
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Travis Kelce", reason: "TE3 + age 36, no TE premium" },
    { name: "Mason Taylor", reason: "TE3 — Pitts and Kincaid already start" },
    { name: "C.J. Stroud", reason: "QB3 — Mahomes and Purdy already rostered" },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE: Kolar OR Gadsden OR Njoku" },
    { name: "Jakobi Meyers", reason: "JAX: BTJ, Meyers, Parker Washington, Hunter" },
    { name: "Travis Hunter", reason: "Backup WR / starting CB — offense share unknown" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "Aaron Jones", reason: "MIN: Jones OR Mason" },
    { name: "Kenny Gainwell", reason: "Behind Bucky Irving" },
    { name: "Tyler Allgeier", reason: "ARI: Love OR Allgeier OR Conner OR Benson" },
    { name: "Trey Benson", reason: "ARI: Love OR Allgeier OR Conner OR Benson" },
    { name: "James Conner", reason: "ARI: Love OR Allgeier OR Conner OR Benson" },
    { name: "Woody Marks", reason: "HOU: Montgomery OR Marks" },
  ],

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
  },
};

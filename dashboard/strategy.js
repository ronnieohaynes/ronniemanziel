/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "The banner names who to take and why — role, roster, scoring, age, and who is left.",
    "ADP is a price check only. If we reach, the note says what we are paying for.",
    "Starting nine is done. 175+ is bench youth and taxi rookies — skip TE3, QB3, crowded rooms.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage).",
  ],

  advice: { pick: 175 },

  /** Present-tense only. Names must match Sleeper full_name. Drafted names drop off automatically. */
  queue: [
    {
      name: "Adonai Mitchell",
      pos: "WR",
      reasons: [
        "NYJ WR2 behind Garrett Wilson — the team names him #2, not a crowded room.",
        "Full PPR + 2 FLEX: a clear slot role can flex even as your WR7 behind JJ, London, Higgins, Sutton, Shakir, Hunter.",
        "Starting nine is locked (2 QB, 4 RB, 2 TE). This is young bench WR upside with a 2026 role, not TE3/QB3 filler.",
        "Age 23, year 3 — dynasty hold, not a taxi dart (taxi is rookies only).",
        "Reach is intentional: ADP ~214 but he is the last defined WR2-with-a-job in this tier; he will not survive to pick 186.",
      ],
    },
    {
      name: "Kayshon Boutte",
      pos: "WR",
      reasons: [
        "NE WR2/3 with a path to weekly targets — on-time ADP (~175) if you will not pay up for Mitchell.",
        "Same roster logic: bench WR depth in full PPR, not a starter push.",
        "Less ceiling than Mitchell but no reach tax — take if the board feels too rich on Adonai.",
      ],
    },
    {
      name: "Ted Hurst",
      pos: "WR",
      reasons: [
        "TB rookie WR — taxi-eligible dart at 186+.",
        "Pure upside stash; do not reach at 175 when Mitchell/Boutte have clearer 2026 roles.",
      ],
    },
    {
      name: "Skyler Bell",
      pos: "WR",
      reasons: [
        "BUF rookie WR — taxi-eligible dart at 186+.",
        "Back-end taxi only; Bills WR room is crowded behind Shakir (already rostered).",
      ],
    },
    {
      name: "Demond Claiborne",
      pos: "RB",
      reasons: [
        "MIN rookie RB — taxi-eligible dart at 186+.",
        "RB4 depth chart; only for an open taxi slot, not a 175 reach.",
      ],
    },
  ],

  skip: [
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Travis Kelce", reason: "TE3 + age 36, no TE premium" },
    { name: "Mason Taylor", reason: "TE3 — Pitts and Kincaid already start" },
    { name: "C.J. Stroud", reason: "QB3 — Mahomes and Purdy already rostered" },
    { name: "Jauan Jennings", reason: "Age 29 — win-now flex, wrong phase for taxi/bench youth" },
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
    { name: "Jalen McMillan", reason: "TB WR3 behind Evans/Godwin tier — crowded, not a defined #2" },
  ],

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
    "Dylan Sampson": "CLE RB2 behind Judkins. Dynasty bench RB.",
  },
};

/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  maxReach: 8,

  rules: [
    "No reach: do not take anyone more than ~8 picks before ADP unless a clear starter role.",
    "Taxi rookies wait for on-time picks — Randall ~234, Thompson ~247, not at 186.",
    "Late round default: best value on the board, not need-based reaching.",
    "Role and outlook still matter — ADP is the price check that stops stupid reaches.",
  ],

  advice: { pick: 186 },

  /** Present-tense only. Names must match Sleeper full_name. Drafted names drop off automatically. */
  queue: [
    {
      name: "Jauan Jennings",
      pos: "WR",
      afterPick: 178,
      depthCharts: [
        { source: "Sleeper", role: "MIN SWR #3 behind JJ / Addison" },
        { source: "Team", role: "Signed as WR3 — not a handcuff, but same offense as JJ" },
      ],
      outlook:
        "Age 29, 1-year deal. WR3 in Minnesota — JJ insurance is partial (Addison bumps first). Value at this pick, not a reach.",
      reasons: [
        "ADP ~171 — **value** at pick 186 (~15 picks late), not a reach.",
        "If JJ misses time, Jennings sees more targets; Addison still ahead on the tree.",
        "Bench stash only — not taxi (veteran). Taxi rookies wait for picks 234+.",
        "Skip if you would rather leave 186 open and take pure value from the board.",
      ],
    },
    {
      name: "Adam Randall",
      pos: "RB",
      afterPick: 226,
      depthCharts: [
        { source: "Sleeper", role: "RB #3 BAL" },
      ],
      outlook: "Rookie taxi dart. On-time near pick 234 — do not take at 186.",
      reasons: [
        "Taxi slot #1 — rookie only. ADP ~234 matches your pick **234**, not 186.",
        "Taking him at 186 is a ~48-pick reach; wait.",
      ],
    },
    {
      name: "Brenen Thompson",
      pos: "WR",
      afterPick: 239,
      depthCharts: [
        { source: "Sleeper", role: "WR #4 LAC" },
      ],
      outlook: "Rookie taxi dart. On-time near pick 247.",
      reasons: [
        "Taxi slot #2 at pick **247** — on-time, not a reach.",
        "Crowded LAC WR room — taxi stash only.",
      ],
    },
    {
      name: "Eli Raridon",
      pos: "TE",
      afterPick: 250,
      depthCharts: [
        { source: "Sleeper", role: "TE #2 NE" },
      ],
      outlook: "Rookie TE — taxi at pick ~258 if you want a third taxi body.",
      reasons: [
        "On-time near pick 258. You already start Pitts + Kincaid — only for taxi fill.",
      ],
    },
  ],

  skip: [
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Chris Brazzell", reason: "Out 2026 (torn LCL — IR all year)" },
    { name: "Travis Kelce", reason: "TE3 + age 36, no TE premium" },
    { name: "Mason Taylor", reason: "TE3 — Pitts and Kincaid already start" },
    { name: "C.J. Stroud", reason: "QB3 — Mahomes and Purdy already rostered" },
    { name: "Carson Beck", reason: "QB dart — you have Mahomes and Purdy" },
    { name: "Adonai Mitchell", reason: "Disputed WR2/3 + poor Rotowire outlook — skip" },
    { name: "Kayshon Boutte", reason: "NE WR roster bubble / trade rumors" },
    { name: "Troy Franklin", reason: "DEN WR4–5 behind Waddle/Sutton — you roster Sutton" },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE: Kolar OR Gadsden OR Njoku" },
    { name: "Jakobi Meyers", reason: "JAX: BTJ, Meyers, Parker Washington, Hunter" },
    { name: "Travis Hunter", reason: "Backup WR / starting CB — offense share unknown" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "Aaron Jones", reason: "MIN: Jones OR Mason" },
    { name: "Kenny Gainwell", reason: "Behind Bucky Irving" },
    { name: "Woody Marks", reason: "HOU: Montgomery OR Marks" },
    { name: "Jalen McMillan", reason: "TB WR3 behind Godwin/Egbuka" },
    { name: "Brenen Thompson", reason: "LAC WR4 — taxi only, not a 2026 role" },
  ],

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
    "Dylan Sampson": "CLE RB2 behind Judkins. Dynasty bench RB.",
    "Isiah Pacheco": "DET RB2 behind Gibbs. Bench RB insurance.",
    "Justin Jefferson": "MIN WR1. Kyler Murray starter.",
  },
};

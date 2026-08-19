/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "Before recommending: compare Sleeper depth chart, RotoWire role/outlook, and team reports.",
    "Taxi = rookies only (3 slots). Hurst/Bell/Claiborne are gone — fill taxi at 186+.",
    "Starting nine is done. Late rounds = taxi darts and bench; skip TE3, QB3, injured-out rookies.",
    "ADP is a price check only.",
  ],

  advice: { pick: 186 },

  /** Present-tense only. Names must match Sleeper full_name. Drafted names drop off automatically. */
  queue: [
    {
      name: "Adam Randall",
      pos: "RB",
      depthCharts: [
        { source: "Sleeper", role: "RB #3 BAL" },
        { source: "Role", role: "Rookie taxi dart — no clear 2026 job, pure dynasty stash" },
      ],
      outlook:
        "Undrafted rookie RB in Baltimore. Taxi-eligible only; do not expect 2026 starts. Stash and see if the backfield thins out.",
      reasons: [
        "Taxi slot #1 — rookie RB (age 22). Hurst/Bell/Claiborne all drafted.",
        "You still have 3 open taxi spots (rookies only). Fill them before the draft ends.",
        "ADP ~234 — on-time or slight reach at 186; paying to secure a taxi body.",
        "Not a 2026 starter; roster as taxi, not bench flex.",
      ],
    },
    {
      name: "Brenen Thompson",
      pos: "WR",
      depthCharts: [
        { source: "Sleeper", role: "WR #4 LAC" },
        { source: "Outlook", role: "Crowded LAC room behind Ladd — taxi dart only" },
      ],
      outlook: "Rookie WR depth piece in Los Angeles. Taxi stash, not a weekly play in 2026.",
      reasons: [
        "Taxi slot #2 at pick 199 if Randall is gone.",
        "Same logic: rookie-only taxi, dynasty lottery ticket.",
      ],
    },
    {
      name: "J'Mari Taylor",
      pos: "RB",
      depthCharts: [
        { source: "Sleeper", role: "RB #4 JAX" },
      ],
      outlook: "Jaguars rookie RB4 — taxi dart only.",
      reasons: [
        "Taxi slot #3 at pick 210.",
        "Take if Randall and Thompson are gone.",
      ],
    },
    {
      name: "Zavion Thomas",
      pos: "WR",
      depthCharts: [
        { source: "Sleeper", role: "WR #5 CHI" },
      ],
      outlook: "Bears rookie WR depth — back-end taxi if you still need a third rookie.",
      reasons: [
        "Pick 223 filler taxi only if top three are off the board.",
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

/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "Use THIS Sleeper draft's ADP column, not redraft ADP.",
    "Full PPR, 2 FLEX (RB/WR/TE), 1QB, no TE premium.",
    "Soft-avoid Raiders unless clearly BPA.",
    "Discount crowded rooms until usage is clear.",
    "Do not stack more injured RBs while Breece is dinged.",
  ],

  /** Shown in order. Names must match Sleeper full_name. */
  queue: [
    { name: "Braelon Allen", pos: "RB", note: "Jets RB2. Breece groin is real — Week 1 insurance." },
    { name: "Tyjae Spears", pos: "RB", note: "Independent backfield. Pollard has missed practice (foot)." },
    { name: "Woody Marks", pos: "RB", note: "Houston RB2 behind Montgomery. Younger dynasty." },
  ],

  skip: [
    { name: "Tony Pollard", reason: "Foot — missed Sat+Mon practice" },
    { name: "J.K. Dobbins", reason: "Soft-tissue; injury history" },
    { name: "Zach Charbonnet", reason: "PUP / ACL recovery" },
    { name: "Jordyn Tyson", reason: "Hamstring, lengthy absence" },
    { name: "Kyle Monangai", reason: "Hyperextended knee" },
    { name: "Chuba Hubbard", reason: "Hamstring" },
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "George Kittle", reason: "Achilles / PUP" },
    { name: "Alec Pierce", reason: "PUP" },
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

  /** This room's ADP when you screenshot the Sleeper board. */
  roomAdp: {
    "Dalton Kincaid": 86.7,
    "Oronde Gadsden": 85.5,
    "Brock Purdy": 100,
    "Courtland Sutton": 110,
    "Kyle Monangai": 81.0,
    "Jordyn Tyson": 55.4,
  },

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
  },
};

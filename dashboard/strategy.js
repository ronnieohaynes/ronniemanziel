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
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage). A defined 1-2 is not the same thing as Gadsden/Kolar/Njoku.",
    "Do not stack more injured RBs while Breece is dinged.",
  ],

  /** Live pick call — update this whenever we change strategy. */
  advice: {
    pick: 127,
    take: "Braelon Allen",
    pos: "RB",
    why: "Sutton is already yours. RB3 + Breece handcuff. Defined Jets RB2 — not a committee. Do not stack another injured back while Breece is dinged.",
    updated: "2026-08-18 after Sutton at 114",
  },

  /** Shown in order. Names must match Sleeper full_name. */
  queue: [
    { name: "Braelon Allen", pos: "RB", note: "RB3 / Breece handcuff. Defined Jets RB2. Take at 127." },
    { name: "Tyjae Spears", pos: "RB", note: "Pollard is on a foot. Defined Titans RB2 if Allen is gone." },
    { name: "Woody Marks", pos: "RB", note: "Texans RB2 if Allen and Spears are gone." },
    { name: "Josh Downs", pos: "WR", note: "This room ADP 117. WR BPA only if the healthy RB3s are gone." },
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

  /** This room's ADP from Sleeper board recording Aug 18, 2026. */
  roomAdp: {
    "Kyle Pitts": 67.3,
    "Jaxson Dart": 71.4,
    "Patrick Mahomes": 79.2,
    "Dalton Kincaid": 86.7,
    "Oronde Gadsden": 85.5,
    "Brock Purdy": 100,
    "Rhamondre Stevenson": 108.4,
    "Travis Hunter": 109.7,
    "Courtland Sutton": 110.0,
    "Jonathon Brooks": 111.6,
    "Fernando Mendoza": 112.0,
    "Jacory Croskey-Merritt": 113.4,
    "Brenton Strange": 114.9,
    "Zach Charbonnet": 115.9,
    "Xavier Worthy": 116.0,
    "Josh Downs": 117.0,
    "J.K. Dobbins": 118.5,
    "Tyler Allgeier": 119.1,
    "Jayden Reed": 119.7,
    "Jonah Coleman": 121.1,
    "Kyle Monangai": 81.0,
    "Jordyn Tyson": 55.4,
  },

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
  },
};

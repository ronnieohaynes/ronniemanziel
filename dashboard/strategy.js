/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "The pick reason is role, our holes, scoring, age, injuries, and who is left. Sleeper ADP is only a price check — never the reason to take someone.",
    "Starting nine is done (Allen in). 138 can be a gamble if it parks on IR. Char is the one. Otherwise Spears plays now.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage). A defined 1-2 is not the same thing as Gadsden/Kolar/Njoku.",
  ],

  /** Live pick call — update this whenever we change strategy. */
  advice: {
    pick: 138,
    take: "Zach Charbonnet",
    pos: "RB",
    why: "Coker and Doubs are gone. Starting nine is done so 138 does not need to start. Char is PUP/ACL — park on IR. Walker is gone; Price is a rookie RB1. That's the gamble: 2027 Seattle backfield, no lineup cost this year. Spears is the 2026 job if you don't want to bet.",
    updated: "2026-08-19 138 Char gamble — 1 pick out",
  },

  /** Shown in order. Names must match Sleeper full_name. Only names still on the board. */
  queue: [
    { name: "Zach Charbonnet", pos: "RB", note: "Take at 138. PUP/ACL, IR stash. Walker gone, Price is a rookie. The gamble." },
    { name: "Tyjae Spears", pos: "RB", note: "Titans RB2. The 2026 job if you don't want the Char bet." },
    { name: "Khalil Shakir", pos: "WR", note: "Bills WR2, PPR. Plays now, 26." },
    { name: "Dylan Sampson", pos: "RB", note: "CLE RB2, 21. Job + youth." },
    { name: "Germie Bernard", pos: "WR", note: "151+ taxi dart if Char is the 138 gamble." },
  ],

  skip: [
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL) — no 2026, weak stash" },
    { name: "Travis Kelce", reason: "TE3 + age 36 in dynasty, no TE premium. One-year deal, maybe last season." },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE: Kolar OR Gadsden OR Njoku" },
    { name: "Jakobi Meyers", reason: "JAX: BTJ, Meyers, Parker Washington, Hunter" },
    { name: "Travis Hunter", reason: "Backup WR / starting CB — offense share unknown" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "Aaron Jones", reason: "MIN: Jones OR Mason" },
    { name: "Kenny Gainwell", reason: "Behind Bucky Irving" },
    { name: "Tyler Allgeier", reason: "ARI: Love OR Allgeier OR Conner OR Benson — not a Falcons Pitts stack" },
    { name: "Trey Benson", reason: "ARI: Love OR Allgeier OR Conner OR Benson" },
    { name: "James Conner", reason: "ARI: Love OR Allgeier OR Conner OR Benson" },
    { name: "Woody Marks", reason: "HOU: Montgomery OR Marks — split lead reps; Montgomery is a big new signing" },
  ],

  /** ADP lives in adp.js (Sleeper dump). Do not keep a second list here. */

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Charbonnet": "PUP, ACL surgery. IR stash only (4 IR spots). Not taxi — he's a vet. Price is already SEA RB1.",
  },
};

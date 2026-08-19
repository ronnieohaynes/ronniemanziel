/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "The pick reason is role, our holes, scoring, age, injuries, and who is left. Sleeper ADP is only a price check — never the reason to take someone.",
    "Starting nine is done (Allen in). 138 is still a 2026 job — WR2/RB2 who plays. Save true darts (taxi rookies, PUP stashes) for 151+.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage). A defined 1-2 is not the same thing as Gadsden/Kolar/Njoku.",
  ],

  /** Live pick call — update this whenever we change strategy. */
  advice: {
    pick: 138,
    take: "Tyjae Spears",
    pos: "RB",
    why: "Too early for a dart. Spears is the Titans RB2 and will play this year (Pollard already went). Coker if you want a WR2 who plays (24, behind Tet). Doubs if you want the safest snaps. Bernard and Charbonnet wait until 151+.",
    updated: "2026-08-19 138 is a 2026 job, not a swing",
  },

  /** Shown in order. Names must match Sleeper full_name. Only names still on the board. */
  queue: [
    { name: "Tyjae Spears", pos: "RB", note: "138. Titans RB2. Plays this year. Not a dart." },
    { name: "Jalen Coker", pos: "WR", note: "138. Panthers WR2 behind Tet, 24. Plays this year." },
    { name: "Romeo Doubs", pos: "WR", note: "138. Patriots WR2 behind AJ Brown. Safest snaps, 26." },
    { name: "Dylan Sampson", pos: "RB", note: "CLE RB2, 21. Has a job; still younger/less proven. Fine if the WR2s are gone." },
    { name: "Germie Bernard", pos: "WR", note: "151+ dart. PIT rookie WR3. Taxi." },
    { name: "Zach Charbonnet", pos: "RB", note: "151+ IR stash. PUP/ACL. Not this pick." },
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

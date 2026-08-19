/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "Recommend from the full picture: this Sleeper ADP dump, injury news (skip only if already serious + multi-week), scoring (full PPR, 1QB, 2 FLEX, no TE premium), 23 rounds / 28 roster spots (9 + 12 bench + 3 taxi + 4 IR), what other teams are doing, age, who is actually left, and our holes. ADP is one input, not the pick by itself.",
    "Fill the RB3 hole. After Pollard, Allen is the back we actually want (Breece cuff). A 27-pick ADP reach is the price of locking him while we refuse another WR.",
    "Soft-avoid Raiders unless clearly BPA.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage). A defined 1-2 is not the same thing as Gadsden/Kolar/Njoku.",
  ],

  /** Live pick call — update this whenever we change strategy. */
  advice: {
    pick: 127,
    take: "Braelon Allen",
    pos: "RB",
    why: "On the clock. Pollard and Worthy gone. Do not take a 5th/6th WR. Allgeier is ARI not ATL — Love/Allgeier/Conner/Benson committee, no Pitts stack. Allen is Jets RB2 + Breece insurance. ADP 154.5 is a reach; take him anyway because he's the one RB we want.",
    updated: "2026-08-19 on the clock — Allen",
  },

  /** Shown in order. Names must match Sleeper full_name. Only names still on the board. */
  queue: [
    { name: "Braelon Allen", pos: "RB", note: "Take now. Jets RB2 + Breece cuff. ADP reach, but the RB we want." },
    { name: "Tyjae Spears", pos: "RB", note: "If Allen is gone. Titans RB2. Not a Breece cuff." },
    { name: "Romeo Doubs", pos: "WR", note: "Only if you flip back to BPA WR. You said you don't want that." },
  ],

  skip: [
    { name: "Zach Charbonnet", reason: "PUP / ACL — already multi-week. Does not cover a Breece absence this year." },
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
    "Travis Kelce": "36, turning 37 in Oct. One-year deal. Fine 2026 TE for a team with none. We already have Pitts + Kincaid.",
  },
};

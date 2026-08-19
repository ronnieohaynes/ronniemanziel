/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "The pick reason is role, our holes, scoring, age, injuries, and who is left. Sleeper ADP is only a price check — never the reason to take someone.",
    "Need an RB3 who actually covers Breece. Four WRs already start. Soft-avoid Raiders unless clearly BPA.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage). A defined 1-2 is not the same thing as Gadsden/Kolar/Njoku.",
  ],

  /** Live pick call — update this whenever we change strategy. */
  advice: {
    pick: 127,
    take: "Braelon Allen",
    pos: "RB",
    why: "Jets RB2 and Breece's handcuff. You have two RBs and Breece may miss weeks. Four WRs already fill FLEX. Allgeier is Arizona (Love/Conner/Benson too), not a Pitts stack. Charbonnet is PUP. Take the back that pays off if Breece sits.",
    updated: "2026-08-19 on the clock — Allen (role, not ADP)",
  },

  /** Shown in order. Names must match Sleeper full_name. Only names still on the board. */
  queue: [
    { name: "Braelon Allen", pos: "RB", note: "Jets RB2. The only remaining back who covers a Breece absence. Take him." },
    { name: "Tyjae Spears", pos: "RB", note: "Titans RB2 if Allen is gone. Does not cover Breece." },
    { name: "Romeo Doubs", pos: "WR", note: "PPR WR2 in NE. You already have four WRs — only if you refuse the remaining RBs." },
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

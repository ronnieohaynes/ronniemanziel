/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "Use the Sleeper ADP dump (adp.js) when ADP is the reason. Not redraft ADP.",
    "Full PPR, 2 FLEX (RB/WR/TE), 1QB, no TE premium.",
    "Soft-avoid Raiders unless clearly BPA.",
    "Discount a room only when the team itself will not name the job (official OR co-starters, a big new signing into the same room, or TBD usage). A defined 1-2 is not the same thing as Gadsden/Kolar/Njoku.",
    "Do not stack more injured RBs while Breece is dinged.",
  ],

  /** Live pick call — update this whenever we change strategy. */
  advice: {
    pick: 127,
    take: "Woody Marks",
    pos: "RB",
    why: "Sleeper ADP 126.0 — on time at 127. Healthy RB3. Allen is ADP 154.5 and Spears 156.0 (reach now; wait for 138). Downs is ADP 117 if you want the steal instead of the RB hole.",
    updated: "2026-08-18 Sleeper ADP dump",
  },

  /** Shown in order. Names must match Sleeper full_name. */
  queue: [
    { name: "Woody Marks", pos: "RB", note: "On-time ADP 126.0. Healthy RB3. Take at 127." },
    { name: "Josh Downs", pos: "WR", note: "ADP 117.0 — already past ADP. The steal if you take WR over the RB hole." },
    { name: "Romeo Doubs", pos: "WR", note: "ADP 127.7. On-time BPA if Marks and Downs are gone." },
    { name: "Braelon Allen", pos: "RB", note: "ADP 154.5 — Breece handcuff, but a reach at 127. Prefer 138." },
    { name: "Tyjae Spears", pos: "RB", note: "ADP 156.0 — Pollard foot. Later than Allen." },
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

  /** ADP lives in adp.js (Sleeper dump). Do not keep a second list here. */

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
  },
};

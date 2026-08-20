/** Team Intel overlay — notes, rules, identity. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",
  defaultTeam: "oreokidronaldo",

  rules: [
    "1QB, full PPR, 2 FLEX — volume pass-catchers and young RBs with roles travel.",
    "No TE premium and no K/DST starters — never roster kickers or defenses.",
    "Taxi: 3 slots, rookies only (taxi_years = 1). Soft-avoid Raiders unless clearly BPA.",
    "When over the active cap: cut depth WRs first, park Out/IR on reserve, then add RB lottery from waivers.",
  ],

  softAvoidTeams: ["LV"],

  /** Positive = cut sooner; negative = protect. */
  cutBias: {
    "Devaughn Vele": 45,
    "Ryan Flournoy": 35,
    "Elic Ayomanor": 32,
    "Rashod Bateman": 5,
    "Jauan Jennings": -18,
    "Khalil Shakir": -12,
    "Isiah Pacheco": -20,
    "Braelon Allen": -35,
    "Dylan Sampson": -20,
    "Jaylen Wright": -8,
    "Jaydon Blue": -5,
    "Travis Hunter": -15,
    "Trey Benson": -8,
  },

  /** Keyed by last name or full name — shown on roster rows. */
  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 goal, not locked. Purdy is QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Allen is the cuff.",
    "Braelon Allen": "Jets RB2. Breece handcuff — do not cut.",
    "Dylan Sampson": "CLE RB2 behind Judkins.",
    "Isiah Pacheco": "DET RB2 behind Gibbs.",
    "Jaydon Blue": "DAL RB2 behind Javonte — Mafah competing.",
    "Jaylen Wright": "MIA RB2 behind Achane — Gordon competing.",
    "Trey Benson": "ARI committee — Love / Allgeier / Conner / Benson.",
    "Travis Hunter": "JAX — offense share unknown (WR/CB).",
    "Kyle Pitts": "ATL TE1 — start over Kincaid.",
    "Dalton Kincaid": "BUF TE1 — FLEX-capable in full PPR.",
    "Devaughn Vele": "Cut first — deep WR, low ADP.",
    "Ryan Flournoy": "Cut #2 — DAL WR3 behind Lamb/Pickens.",
    "Elic Ayomanor": "Cut #3 bubble — TEN WR4; prefer over cutting Bateman.",
    "Rashod Bateman": "BAL WR2 upside — cut only if still over after Vele/Flournoy/Ayomanor.",
    "Jauan Jennings": "MIN WR3 — partial JJ stack; hold over Flournoy/Vele.",
    "Sean Tucker": "Wire RB lottery — TB committee.",
    "Jarquez Hunter": "Wire RB — LAR behind Kyren/Corum.",
    "Kendre Miller": "Wire RB — NO committee.",
    "Theo Johnson": "Wire TE — NYG youth.",
    "Brashard Smith": "Wire RB — KC depth.",
    "Audric Estime": "Wire RB — NO committee.",
    "Marvin Mims": "Wire WR dart — DEN.",
  },
};

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
    "ADP is a price check. Role, age, injuries, and roster holes make trade decisions.",
  ],

  softAvoidTeams: ["LV"],

  /** Keyed by last name or full name — shown on roster rows. */
  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 goal, not locked. Purdy is QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Allen is the cuff.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
    "Dylan Sampson": "CLE RB2 behind Judkins.",
    "Isiah Pacheco": "DET RB2 behind Gibbs.",
    "Jaydon Blue": "DAL RB2 behind Javonte — Mafah competing.",
    "Jaylen Wright": "MIA RB2 behind Achane — Gordon competing.",
    "Trey Benson": "ARI committee — Love / Allgeier / Conner / Benson.",
    "Travis Hunter": "JAX — offense share unknown (WR/CB).",
    "Rashod Bateman": "BAL WR2 bounce-back; Lane/Walker pushing.",
    "Jauan Jennings": "MIN WR3 — partial JJ stack.",
    "Elic Ayomanor": "TEN WR4 bench.",
    "Ryan Flournoy": "DAL WR3 behind Lamb/Pickens.",
    "Kyle Pitts": "ATL TE1 — start over Kincaid.",
    "Dalton Kincaid": "BUF TE1 — FLEX-capable in full PPR.",
  },
};

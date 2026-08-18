# Ronnie Manziel — Fantasy Football HQ

Manager: **Ronnie** (Sleeper: `oreokidronaldo`)
Season: **2026**

Home base for managing my fantasy football teams — draft strategy, league
settings, live picks, and notes. Built to be readable on the go (phone via
[cursor.com/agents](https://cursor.com/agents) → pick `ronniemanziel`).

## Leagues

| League | Platform | Type | Status | File |
|---|---|---|---|---|
| Bada Bing | Sleeper | Dynasty, 1QB, full PPR | **Sutton in; next 127 Marks (ADP 126)** | [leagues/sleeper-bada-bing.md](leagues/sleeper-bada-bing.md) |
| Why So Serious | ESPN | Keeper (2027+); **2026 full redraft** | Draft complete | [leagues/espn-keeper.md](leagues/espn-keeper.md) |

## Quick links
- **[Live draft dashboard](https://ronnieohaynes.github.io/ronniemanziel/)** — refresh pulls latest Sleeper picks
- [Dynasty draft board / BPA notes](draft-board.md)
- [Sleeper: Bada Bing](leagues/sleeper-bada-bing.md)
- [ESPN keeper league](leagues/espn-keeper.md)

## Live dashboard
**Website:** [https://ronnieohaynes.github.io/ronniemanziel/](https://ronnieohaynes.github.io/ronniemanziel/)

Refresh in the browser pulls live Sleeper picks. Auto-refresh is every 20 seconds.

One-time GitHub setup (if the link 404s):
1. Open [repo Settings → Pages](https://github.com/ronnieohaynes/ronniemanziel/settings/pages)
2. **Source:** GitHub Actions
3. Save, then re-run the **Deploy dashboard** workflow under Actions if needed

Local backup:

```bash
python3 dashboard/serve.py
```

http://127.0.0.1:8080

Edit `dashboard/strategy.js` to change the pick queue, skip list, and crowded-room flags.
ADP numbers come from `dashboard/adp.js` (the Sleeper dump). Rebuild with `python3 scripts/generate_sleeper_adp.py`.

## My draft rules of thumb (dynasty, this scoring)
- **Best player available** for the format, not raw 2026 projected points.
- Prioritize young, high-volume **target earners** (full PPR, 2 FLEX = can start 4 WR).
- **Wait on QB** — 1QB league with 4-pt pass TDs suppresses QB value.
- **No TE premium** — don't reach for TE on scoring alone.
- **No K/DST** starting slots — never draft them.
- Soft **avoid Raiders** players unless clearly the best available by a wide margin.

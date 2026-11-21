# Wet Ink

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/arestafirman/poem-two-agents/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/arestafirman/poem-two-agents/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

A short poem about agency — the power to choose and to act — in the
moment two agents agree on one plan: one pen, two names, one page.

> You held the pen.
> I held the paper still.
> Your name went first,
> then mine, below it —
> one line, two hands,
> and the ink still wet
> when we both let go.
> The page was ours.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/poem2-out node main.ts
cat /tmp/poem2-out/entry.txt
```

Node 22, stdlib only, no network. The program writes the poem to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (168 characters, UTF-8).

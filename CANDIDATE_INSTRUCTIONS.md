# Technical Interview — TaskFlow Exercise

Welcome! The exercise is built around a small real codebase called **TaskFlow**
(a basic team task tracker). Take your time exploring it, fixing it, reviewing
a proposed change to it, and extending it.

**AI tools are fully allowed all day** — use ChatGPT, Claude, Copilot, whatever you'd
normally reach for. We're just as interested in *how* you use them as in what you produce.

Ask questions any time. Treat us like a teammate you can pull into a thread, not a
proctor. You can reach me at etemba@rvibs.ac.ke

---

## Setup

```bash
cd taskflow-repo
npm install
npm start
```

The API runs at `http://localhost:3000`. See `README.md` in the repo for the full API
reference and data model. If you make changes that leave the data in a weird state,
`npm run reset` restores the original seed data at any time.

---

## Part A — Explore the system

Explore the codebase — read the code, hit the API, whatever helps you build a mental model.

Then, during the interview session, youll talk us through:
- What the app does and how a request flows from the API down to the data and back
- Which part of this codebase you'd feel most nervous making a change to, and why

---

## Part B — Debugging

Check the "Recent bug reports from users" section at the `bug-reports.txt` file.
Reproduce each issue, find the root cause, and fix it.

---

## Part C — Code review

Open `CODE_REVIEW_bulk-delete-pr.md` in the repo. It's a proposed PR from a teammate, written with AI assistance. Review it as if you're about to approve and merge it.

Tell us: what would you flag before merging, and why? Feel free to note review comments the way you would in a real PR.


---

## Part D — Scoping a new feature

We'd like to add a feature: **let users filter their tasks by due date.**

Before writing anything, tell us:
- What questions would you want answered before starting?
- What edge cases would you want to make sure this handles?

---

## Part E — Build it

Now implement the due-date filter feature end to end. Use AI however you'd like — just keep reviewing through your decisions as you go, especially anywhere you accept,
reject, or modify something the AI suggests.

---

## Part F — Wrap-up conversation

We'll close with a short conversation about what you built: the tradeoffs you made, what you'd do differently with more time, and what you think is the riskiest assumption
in your solution.

---

That's the whole thing. Remember to take breaks as you need them, and don't hesitate to ask us anything along the way — good luck!

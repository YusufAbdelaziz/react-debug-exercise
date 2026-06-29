# Frontend Interview — Live Exercise

Welcome 👋 This is a small React + TypeScript app (Vite). It runs, but it was
put together quickly and there are things you'd want to fix before shipping.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

> On StackBlitz / CodeSandbox / Replit it runs automatically — just press the
> Run/Preview button.

## What's here

Two components, each rendered on the page:

- **`src/components/ProductList.tsx`** — an e-commerce product list with a
  category switch, a filter box, and click-to-add-to-cart.
- **`src/components/Autocomplete.tsx`** — a search autocomplete intended for a
  **shared component library**.

They talk to a fake network layer in **`src/api/mockApi.ts`** (no real backend —
just promises with realistic, variable delays). You don't need to change the API.

## Your task

Treat both components as a **teammate's pull request** and review them the way
you would on the job:

1. **Find the issues.** Poke at the running app, read the code, open devtools.
2. **Group them by severity** — what would you *block the merge* on vs. what's a
   nice-to-have?
3. **Fix the top 2–3** you'd block on. Talk us through your reasoning as you go.
4. **Bonus:** what tests would you add so these can't regress?

There's more than one issue in each file, and not all of them are visual. Think
correctness, state, async behaviour, accessibility, types, and (for the
Autocomplete) what a *reusable library* component needs.

Things to try in the running app: switch the category, filter, click a product
to add it, and **type quickly** in the autocomplete (e.g. `r → re → rea →
react`) and watch what happens.

Use whatever you'd normally use to think — but if you reach for an AI assistant,
let us know; we're more interested in how *you* reason than in a generated patch.

Good luck, and think out loud!

# Money Transfer Comparison Widget

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What I wanted to do if I would had more time

- when selecting the `sourceCurrency` and `targetCurrency` make sure that these 2 fields do not have the same value. This will make it impossible to send a quote for the same currency;
- create a reusable form component to server a input group; this component will encapsulate the `div` element with `className="input-group"`;
- add a loading spinner for the loading state (at the moment I`m using the word _loading..._);
- some providers have multiple quotes; right now I'm rendering the first quote in the array of quotes; I'd love to filter them by fee in ascending order;
- filtering on the grid table; filter the quotes by: fee, rate and received amount;

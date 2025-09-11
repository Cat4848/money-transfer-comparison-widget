# Money Transfer Comparison Widget

## Getting Started

1. Clone the project's repo:

```bash
git clone https://github.com/Cat4848/money-transfer-comparison-widget
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The app is deployed on Vercel and you can access it on the following link: [Money Transfer Comparison App](https://money-transfer-comparison-widget.vercel.app/)

## What I wanted to do if I would have more time

- `sourceCurrency` and `targetCurrency` fields validation to enforce different values;
- create a reusable form component to serve as an input group; this component will encapsulate the `div` element with `className="input-group"`;
- add a loading spinner for the loading state (at the moment I'm using the word _loading..._);
- some providers have multiple quotes; right now I'm rendering the first quote in the array of quotes; I'd love to filter them by fee in ascending order;
- filtering on the grid table; filter the quotes by: fee, rate and received amount.

### Enjoy 😊

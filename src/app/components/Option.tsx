import { Provider } from "../lib/types";

interface Props {
  provider: Provider;
}

export default function Option({ provider }: Props) {
  return (
    <div>
      <div>{provider.name}</div>
      <div>{provider.type}</div>
      {provider.quotes.map((quote, i) => (
        <div key={`provider-quote-${i}`}>
          <div>{quote.fee}</div>
          <div>{quote.rate}</div>
          <div>{quote.receivedAmount}</div>
          {quote.deliveryEstimation.duration && (
            <div>
              {quote.deliveryEstimation.duration.max
                ? quote.deliveryEstimation.duration.max
                : quote.deliveryEstimation.duration.min}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

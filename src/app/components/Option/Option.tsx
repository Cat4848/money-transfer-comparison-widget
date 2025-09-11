import { Provider } from "../../lib/types";
import styles from "./Option.module.css";

interface Props {
  provider: Provider;
  targetCurrency: string | null;
  evenRow: boolean;
}

const currencyMap = new Map([
  ["GBP", "£"],
  ["EUR", "€"],
  [null, "-"]
]);

export default function Option({ provider, targetCurrency, evenRow }: Props) {
  const quote = provider.quotes[0];
  const targetCurrencySymbol = currencyMap.get(targetCurrency);
  return (
    <div className={`${styles["box"]} ${evenRow && styles["even-row"]}`}>
      <div>{provider.name}</div>
      <div>{provider.type}</div>
      <div>{`£ ${quote.fee}`}</div>
      <div>{quote.rate.toFixed(2)}</div>
      <div>{`${targetCurrencySymbol} ${quote.receivedAmount}`}</div>
      <div>
        {quote.deliveryEstimation.duration ? (
          <div>
            {quote.deliveryEstimation.duration.max
              ? quote.deliveryEstimation.duration.max
              : quote.deliveryEstimation.duration.min}
          </div>
        ) : (
          "-"
        )}
      </div>
    </div>
  );
}

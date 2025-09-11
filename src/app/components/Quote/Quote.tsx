import { useQuote } from "../../hooks/useQuote";
import Option from "../Option/Option";
import styles from "./Quote.module.css";

interface Props {
  searchString: string;
}

export default function Quote({ searchString }: Props) {
  const { quote, loading, error } = useQuote(searchString);

  if (loading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className={styles["box"]}>
      <div className={styles["head"]}>Provider</div>
      <div className={styles["head"]}>Type</div>
      <div className={styles["head"]}>Fee</div>
      <div className={styles["head"]}>Rate</div>
      <div className={styles["head"]}>Will Receive</div>
      <div className={styles["head"]}>It Takes</div>
      {quote &&
        quote.providers.map((provider, i) => (
          <Option
            key={provider.id}
            provider={provider}
            targetCurrency={quote.targetCurrency}
            evenRow={i % 2 === 0}
          />
        ))}
    </div>
  );
}

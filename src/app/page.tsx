"use client";
import styles from "./page.module.css";
import { useQuote } from "./hooks/useQuote";
import Option from "./components/Option";

export default function Home() {
  const { loading, error, quote } = useQuote();

  if (loading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className={styles.page}>
      <h1>Money Transfer Comparison</h1>

      {quote &&
        quote.providers.map((provider) => (
          <Option key={provider.id} provider={provider} />
        ))}
    </div>
  );
}

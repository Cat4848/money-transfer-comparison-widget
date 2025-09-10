import { useState, useEffect } from "react";

export const useComparison = () => {
  const [results, setResults] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.wise.com/v4/comparisons/?sourceCurrency=GBP&targetCurrency=EUR&sendAmount=10000"
        );
        const results = await res.json();
        setLoading(false);
        setResults(results);
        return results;
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError(JSON.stringify(e));
        }
      }
    })();
  }, []);
  return { loading, error, results };
};

import { useState, useEffect } from "react";
import { Quote } from "../lib/types";

export const useQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.wise.com/v4/comparisons/?sourceCurrency=GBP&targetCurrency=EUR&sendAmount=10000"
        );
        const quote: Quote = await res.json();
        setLoading(false);
        setQuote(quote);
        return quote;
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError(JSON.stringify(e));
        }
      }
    })();
  }, []);
  return { loading, error, quote };
};

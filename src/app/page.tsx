"use client";
import styles from "./page.module.css";
import { useQuote } from "./hooks/useQuote";

export default function Home() {
  const { loading, error, quote } = useQuote();
  return (
    <div className={styles.page}>
      <h1>Home Page</h1>
    </div>
  );
}

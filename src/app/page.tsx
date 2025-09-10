"use client";
import styles from "./page.module.css";
import { useComparison } from "./hooks/useComparison";

export default function Home() {
  const { loading, error, results } = useComparison();
  return (
    <div className={styles.page}>
      <h1>Home Page</h1>
    </div>
  );
}

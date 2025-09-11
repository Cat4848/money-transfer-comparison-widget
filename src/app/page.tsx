"use client";
import styles from "./page.module.css";
import SearchForm from "./components/SearchForm";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <div>
      <h1>Money Transfer Comparison</h1>

      <SearchForm />
      <Quote searchString="?sourceCurrency=GBP&targetCurrency=EUR&sendAmount=10000" />
    </div>
  );
}

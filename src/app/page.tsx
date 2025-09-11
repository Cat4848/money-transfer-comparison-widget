"use client";
import SearchForm from "./components/SearchForm";
import Quote from "./components/Quote/Quote";
import { useState } from "react";
import { SearchFormFields } from "./lib/types";
import styles from "./page.module.css";

export default function Home() {
  const [didFirstSearch, setDidFirstSearch] = useState(false);
  const [searchString, setSearchString] = useState<string | null>(null);

  const handleSubmit = ({
    sourceCurrency,
    targetCurrency,
    amount
  }: SearchFormFields) => {
    if (!didFirstSearch) {
      setDidFirstSearch(true);
    }
    const searchString = `?sourceCurrency=${sourceCurrency}&targetCurrency=${targetCurrency}&sendAmount=${amount}`;
    setSearchString(searchString);
  };

  return (
    <div className={styles["box"]}>
      <h1>Money Transfer Comparison</h1>

      <SearchForm onSubmit={handleSubmit} />
      {didFirstSearch && searchString && <Quote searchString={searchString} />}
    </div>
  );
}

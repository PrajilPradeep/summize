import { useState, useEffect } from "react";
import { useLazyGetSummaryQuery } from "../services/article";

function useArticle() {
  const [getSummary, { isFetching }] = useLazyGetSummaryQuery();
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  //To obtain previous articles from local storage if exist
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      window.localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleCopy = (url) => {
    setCopied(url);
    navigator.clipboard.writeText(url);
    setTimeout(() => setCopied(""), 1000);
  };

  return {
    getSummary,
    isFetching,
    allArticles,
    setAllArticles,
    copied,
    handleCopy,
  };
}

export default useArticle;

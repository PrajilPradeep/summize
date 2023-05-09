import { link, copy, loader, tick } from "../assets";
import { useState, useEffect } from "react";
import { useLazyGetSummaryQuery } from "../services/article";

function SummaryView() {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({
      articleUrl: article.url,
    });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      //For keeping track of the old articles
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      //To store the article in local storage
      window.localStorage.setItem(
        "articles",
        JSON.stringify(updatedAllArticles)
      );
    }
  };

  const handleCopy = (url) => {
    console.log(url);
    setCopied(url);
    navigator.clipboard.writeText(url);
    setTimeout(() => setCopied(""), 1000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2 ">
        <form
          className="relative flex items-center justify-center
        "
          onSubmit={handleSubmit}
        >
          <img
            src={link}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          ></img>
          <input
            type="url"
            placeholder="Paste the article link"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          ></input>
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ⤶
          </button>
        </form>
        {/* Article History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt="copy_icon"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Display Summary */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img
            src={loader}
            alt="loading_icon"
            className="w-20 h-20 object-contain"
          />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            An Error Occurred! <br />
            <span className="font-satoshi font-normal text-grey-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col  gap-4">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                <span className="article_summary_gradient">
                  Article Summary
                </span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-900">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default SummaryView;

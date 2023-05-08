import { link } from "../assets";
import { useState } from "react";
import { useLazyGetSummaryQuery } from "../services/article";

function SummaryView() {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({
      articleUrl: article.url,
    });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      setArticle(newArticle);
      console.log(newArticle);
    }
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
      </div>
    </section>
  );
}

export default SummaryView;

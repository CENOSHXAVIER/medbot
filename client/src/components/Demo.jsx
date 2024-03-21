import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../service/article";

const Demo = () => {

  const [article, setArticle] = useState({ url: "",
  summary:'',
 });
 const [articleList, setArticleList] = useState([])

  const [getSummary,{error,isFetching}] = useLazyGetSummaryQuery(); 

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('article'))

    if (articlesFromLocalStorage){
      setArticleList(articlesFromLocalStorage)
    }
  },[])
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({articleUrl: article.url})

    if(data?.summary){
      const newArticle = { ...article,summary:data.summary }
      const updateArticles = [newArticle,...articleList]

      setArticle(newArticle);
      setArticleList(updateArticles)
      localStorage.setItem('article',JSON.stringify(articleList))
      console.log(newArticle);
    }
  }

  return (
    <section className="my-5">
      {/* search */}
      <div className="flex flex-col w-full ">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >

          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 ml-3 my-2 w-5"
          />

          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => {
              setArticle({...article, url:e.target.value})
            }}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Go
          </button>

        </form>

        {/* Browse History */}

        <div className="flex flex-col max-h-60 gap-1">

        {articleList.map((article,index) =>(
          <div key={index} className="link_card">
            <p className="flex-1 text-blue-700">{article.url}</p>
          </div>
        ))}

        </div>
      </div>

      {/* Display Results */}
    </section>
  );
};
export default Demo;

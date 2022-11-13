import React, { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import style from "../NewsPage/NewsPage.module.scss";

import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "../../store/newsSlice";
import { CommentsList } from "../../components/Comments/CommentsList";

export function NewsPage() {
  const dispatcher = useDispatch();
  const news = useSelector((state) => state.news.news);
  const { status } = useSelector((state) => state.news);

  const { id } = useParams();
  const { goBack } = useHistory();

  useState(() => {
    console.log(news)
    dispatcher(fetchStories(id));
  }, []);
 
  return (
    <main className={style.main}>
      <button className={style.button} onClick={goBack}>
        back
      </button>
      {status === "loading" ? (
        <RingLoader className="preloader" size={75} color={"rgb(14 116 144)"} />
      ) : (
        <div className="container">
          <div className={style.item}>
            <h1 className={style.title}>{news.title}</h1>
            <div className={style.wrapper}>
            {news.url ? (
              <a href={news.url} className={style.source}>
                news source
              </a>
            ) : null}
              <div className={style.author}>
                <span>author:</span>
                <div className={style.authorInfo}>{news.by}</div> 
              </div>
              
              <span className={style.date}>
                {new Date(news.time * 1000).toDateString()}
              </span>
            </div>
          </div>
          {news.kids ? <CommentsList commId={news.kids} /> : <div style={{textAlign:"center"}}>No comments</div> }
        </div>
      )}
    </main>
  );
}

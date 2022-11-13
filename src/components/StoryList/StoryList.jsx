import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStories } from "../../api";
import style from "../StoryList/StoryList.module.scss";
import {ReactComponent as Star} from '../../../src/icons/star.svg'

export function StoryList({ id }) {
  const [story, setStory] = useState([]);

  function newsTime(time) {
    let hoursNow = Date.now() / 1000 / 60 / 60;
    time = time / 60 / 60;

    let timeDiffH = Math.trunc(hoursNow - time);
    let timeDiffM = Math.trunc((hoursNow - time) * 60);
    let timeDiffS = Math.trunc((hoursNow - time) * 60 * 60);

    if (timeDiffH === 0 && timeDiffM !== 0) {
      return `${timeDiffM} min ago`;
    } else if (timeDiffM === 0) {
      return `${timeDiffS} sec ago`;
    } else {
      return `${timeDiffH} hours ago`;
    }
  }

  useEffect(() => {
    getStories(id).then((data) => {
      setStory(data);
    });
  }, []);

  return (story && story.url) ?  (
    <li className={style.item}>
      
        <Link to={`/news/${story.id}`}>
          <div className={style.itemInfo}>
            <h2 className={style.title}>{story.title}</h2>
            <span className={style.date}>{new Date(story.time * 1000).toDateString()}</span>
          </div>
          <div className={style.inner}>
            <div className={style.scoreInner}>
              <Star/>
              <div className={style.score}>{story.score}</div>
            </div>
            <div className={style.wrapper}>
              <div className={style.author}>
                <span>by</span>
                {story.by}
              </div>
              <div className={style.date}>
                {newsTime(story.time).toString()}
              </div>
            </div>
          </div>
          </Link>
   </li>
  ):null
}

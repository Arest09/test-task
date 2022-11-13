
import React, { useState } from "react";

import style from "../Comments/Comment.module.scss";
import {ReactComponent as Show} from '../../../src/icons/down.svg'
import {ReactComponent as Hide} from '../../../src/icons/up.svg';
import { CommentsList } from "./CommentsList";

export function CommentsItem({indent,by,deleted,dead,text,kids}) {

  const [children, setChildren] = useState(false);

  function createMarkup(text) {
    return { __html: text };
  }
 const showChildren = ()=>{
    setChildren(!children);
 }
  

  return  (
    !deleted && !dead ? (
     
      <li className={style.item}>
        
        <div className={style.comment}>
          <span className={style.author}> {by}</span>
          <div dangerouslySetInnerHTML={createMarkup(text)}/>
        </div>
      {kids ?  <button onClick={showChildren} className={style.button}> {children ? <Hide className={style.hide} height="15px" width="10px" />:<Show className={style.show}  height="15px" width="10px"/>} </button>:null } 
        {kids && children ? (
          <ul className={style.commentChildren}>
                <li style={{ marginLeft: `${indent * 10}px` }} className={style.commentChild}>
                  <CommentsList commId={kids} indent={indent + 1} />
                </li>
          </ul>
        ) : null}
      </li>
    ) : null
  ) 
}

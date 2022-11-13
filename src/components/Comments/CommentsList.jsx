
import React, { useEffect, Children, useState } from "react";
import { CommentsItem } from "./CommentsItem";
import { getStories } from "../../api";
import PuffLoader from "react-spinners/PuffLoader";
import {ReactComponent as Reload} from '../../icons/reload/reload.svg'
import '../../icons/reload/reload.scss'


export function CommentsList({commId}) {

  let [count, setCount] = useState(0);
  let [comments,setComments] = useState([])
  let [loading,setLoading] = useState(false)


 const update = () =>{
  setCount(0)
  countComm(commId);

  setLoading(false);
  setComments([]);
  commId.map((id)=>{
    getStories(id).then((data)=>{
      setComments((prev)=>{return [data,...prev]});
      setLoading(true);
    })
  })
 }  

  useEffect(() => {
    setCount(0);
    countComm(commId);
    
    commId.map((id)=>{
      getStories(id).then((data)=>{
        setComments((prev)=>{return [data,...prev]});
        setLoading(true);
      })
    })
   
  }, []);
  
  //@ quantity of comments
  function countComm(id) {
    id.map((comm) => {
      getStories(comm).then((data) => {
        if (!data.deleted && !data.dead) {
          setCount((prev)=>{return prev + 1});
        if (data.kids) {
          return countComm(data.kids);
        }
        }
      });
    });
  }


  return loading ? ( 
    <ul>
      <Reload className="reload" onClick={update}/>
      <div style={{fontFamily:'Poppins-Regular',fontSize:'14px'}}>{count} {count > 1 ? <span>comments</span>:<span>comment</span>}</div>
      {comments.map((comment) => {
        return <CommentsItem key={comment.id} {...comment} indent={1} />;
      })}
    </ul>
  ):<PuffLoader color={'red'}/>
}

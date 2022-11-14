import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import RingLoader from "react-spinners/RingLoader";

import { StoryList } from "../../components/StoryList/StoryList";
import { fetchStoriesId } from "../../store/storyIdSlice";
import {ReactComponent as Reload} from '../../icons/reload/reload.svg'
import  "../../icons/reload/reload.scss"

export function MainPage() {

  

  const dispatch = useDispatch();
  const newsId = useSelector(state => state.storiesId.storiesId);
  const {status,error} = useSelector(state => state.storiesId);

  
  const updatedTime = 60 * 1000;
  
//@ fetching id
  useEffect(()=>{
    dispatch(fetchStoriesId())
  },[])

  

//@ reloading page
   useEffect(()=>{
    setInterval(() => {
      dispatch(fetchStoriesId())
    }, updatedTime)
  },[dispatch]) 


  const handleReload = () =>{
    dispatch(fetchStoriesId())
  }

 
  return (
    <main className="main">
     
    <div className="container">
    <div  >
       <Reload className="reload" onClick={()=>{handleReload()}}/>
      </div>
    <ul>
      {status==='loading' ? (
        <RingLoader className="preloader" size={75} color={"rgb(107 33 168"} />
      ) : (
        newsId.map((id) => {
          return  <StoryList key={id} id={id} />;
        })
      )}
      {error && <h1 style={{textAlign:'center'}}>{error}</h1>}
      </ul>
    </div>
    </main>
  );
}

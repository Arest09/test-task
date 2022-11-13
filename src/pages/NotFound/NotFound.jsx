import React from "react";
import { useHistory } from "react-router-dom";
import Image404 from "../../../src/images/404.jpg";
import { ReactComponent as Home } from "../../../src/icons/home/home.svg";
import style from "../NotFound/NotFound.module.scss";
import '../../icons/home/home.scss'

export function NotFound() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <main className={style.main}>
      <div className={style.page404}>
        <Home onClick={handleClick} className='home'/>
        <div className="container">
          <img className={style.image} src={Image404} alt="404 not found" />
        </div>
      </div>
    </main>
  );
}

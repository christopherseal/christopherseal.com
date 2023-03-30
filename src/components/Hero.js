import React from "react";
import "./hero.css";
// import { LayoutSection } from "./LayoutSection";

export function Hero({ children, imgUrl, imgAlignment }) {
  return (
    <article className={`${imgAlignment} hero`}>
      <div className="imageContainer">
        <img className="imgMain" src={imgUrl} alt="" />
      </div>
      <div className="text">
        {children}
      </div>
    </article>
  );
}

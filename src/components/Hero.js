import React from "react";
import "./Hero.css";

export function Hero({ title, text, imgUrl, imgAlignment }) {
  return (
    <article className={`${imgAlignment} hero`}>
      <div className="imageContainer">
        <img src={imgUrl} />
      </div>
      <div className="text">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </article>
  );
}

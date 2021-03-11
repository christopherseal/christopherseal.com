import React from "react";
import './hero.css';

export function Hero({ title, text, imgUrl }) {
  return (
    <article className='hero'>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <img src={imgUrl} />
    </article>
  );
}

import React from "react";
import './hero.css';

export function Hero({ title, text, imgUrl }) {
  return (
    <article className='hero'>
      <img src={imgUrl} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
}

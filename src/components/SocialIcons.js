import React from "react";
import "./SocialIcons.css";
import SocialLinks from "./SocialLinks.json";

export function SocialIcons() {
  console.log({ SocialLinks });
  return (
    <div className="SocialIcons">
      {SocialLinks.data.map((item) => {
        const img = require(`../images/${item.imgUrl}.png`).default;
        console.log(img)
        return (
          <a href={item.url}>
            <img src={img} />
          </a>
        );
      })}
    </div>
  );
}

import React from "react";
import "./SocialIcons.css";
import SocialLinks from "./SocialLinks.json";

export function SocialIcons() {
  return (
    <div className="SocialIcons">
      {SocialLinks.data.map((item) => {
        const img = require(`../images/${item.imgUrl}.png`);
        return (
          <a href={item.url}>
            <img src={img} alt={item.description}/>
          </a>
        );
      })}
    </div>
  );
}

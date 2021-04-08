import React from "react";
import { Hero } from "../components/Hero";
import { LayoutSection } from "../components/LayoutSection";
import { SocialIcons } from "../components/SocialIcons"

export function Home({ title }) {
  const img = require("../images/main_image.jpg");
  return (
    <>
    <LayoutSection>
      <h1> {title} </h1>
      <Hero
        imgUrl={img.default}
        imgAlignment="hero--imgAlignLeft"
      >
        <div>
        <h2>Welcome</h2>
        <SocialIcons></SocialIcons>
        <p>"I have an approximate knowledge of many things. I'm currently a developer at Shopify and I'm still building this site.."</p>
        </div>
      </Hero>
      </LayoutSection>
    </>
  );
}

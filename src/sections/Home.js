import React from "react";
import { Hero } from "../components/Hero";
import { LayoutSection } from "../components/LayoutSection";

export function Home({ title }) {
  const img = require("../images/main_image.jpg");
  return (
    <>
    <LayoutSection>
      <h1> {title} </h1>
      <Hero
        title="Welcome"
        text="I have an approximate knowledge of many things. I'm currently a developer at Shopify and I'm still building this site.."
        imgUrl={img.default}
        imgAlignment="hero--imgAlignLeft"
      />
      </LayoutSection>
    </>
  );
}

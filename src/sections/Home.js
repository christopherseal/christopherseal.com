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
        text="I have an approximate knowledge of many things"
        imgUrl={img.default}
        imgAlignment="Hero--imgAlignLeft"
      />
      </LayoutSection>
    </>
  );
}

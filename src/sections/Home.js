import React from 'react';
import {Hero} from '../components/Hero';

export function Home ({title}) {
  const img = require('../images/main_image.jpg')
  return <><h1> {title} </h1><Hero title="hello world" text="here's some information" imgUrl={img.default}/></>
}

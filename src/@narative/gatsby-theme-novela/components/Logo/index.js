import React from 'react';
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <Headings.h2>techblog</Headings.h2>

  );
}
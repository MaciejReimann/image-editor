import React from "react";
import { Layer, Image } from "react-konva";

export default function BackgroundImage({ image }) {
  return (
    <Layer>
      <Image image={image} />
    </Layer>
  );
}

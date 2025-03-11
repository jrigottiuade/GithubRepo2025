import React from "react";
import CarouselComponent from "../../../../../components/carouselComponents/CarouselComponent";
import {useHandsOn1} from "../hooks/useHandsOn1"

// HANDS ON
const HtmlHandsOn1ViewView = () => {
  const { handsOn1Components } = useHandsOn1();
  return (
    <div className="p-5">
      <CarouselComponent components={handsOn1Components} />
    </div>
  );
};

export default HtmlHandsOn1ViewView;

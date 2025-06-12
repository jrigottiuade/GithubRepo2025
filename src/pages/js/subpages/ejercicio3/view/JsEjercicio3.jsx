import React from "react";
import { useEjercicio3 } from "../hooks/useEjercicio3";
import CarouselComponent from "../../../../../components/carouselComponents/CarouselComponent";

const JsEjercicio3 = () => {
  const { ejercicio2Components } = useEjercicio3();
  return (
    <div className="p-5">
      <CarouselComponent components={ejercicio2Components} />
    </div>
  );
};

export default JsEjercicio3;

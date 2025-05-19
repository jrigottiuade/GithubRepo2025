import React from "react";
import { useEjercicio1 } from "../hooks/useEjercicio1";
import CarouselComponent from "../../../../../components/carouselComponents/CarouselComponent";

const JsEjercicio1 = () => {
  const { ejercicio1Components } = useEjercicio1();
  return (
    <div className="p-5">
      <CarouselComponent components={ejercicio1Components} />
    </div>
  );
};

export default JsEjercicio1;

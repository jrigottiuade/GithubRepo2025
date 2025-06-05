import React from "react";
import { useEjercicio2 } from "../hooks/useEjercicio2";
import CarouselComponent from "../../../../../components/carouselComponents/CarouselComponent";

const JsEjercicio2 = () => {
  const { ejercicio2Components } = useEjercicio2();
  return (
    <div className="p-5">
      <CarouselComponent components={ejercicio2Components} />
    </div>
  );
};

export default JsEjercicio2;

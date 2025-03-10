import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import Home from "../components/Home";

const HomeView = () => {
  const { desktopView } = useGlobal();

  return (
    <div>
      <Home />
    </div>
  );
};

export default HomeView;

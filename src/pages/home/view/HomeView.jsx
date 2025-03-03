import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";

const HomeView = () => {
  const {desktopView} = useGlobal();

  return (
    <div>
      <h1>En desarrollo</h1>
      <p>DesktopView {desktopView? "Desktop" : "Mobile"}</p>
    </div>
  )
};

export default HomeView;

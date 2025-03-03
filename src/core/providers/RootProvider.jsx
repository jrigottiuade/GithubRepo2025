import React from "react";
import GlobalProvider from "../../providers/GlobalProvider";

const RootProvider = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default RootProvider;

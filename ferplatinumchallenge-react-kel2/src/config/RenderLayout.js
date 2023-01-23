import React from "react";
import NormalHeader from "../components/Header";
import NormalFooter from "../components/Footer";

const RenderLayout = ({ children }) => {
  return (
    <>
      <NormalHeader />
      {children}
      <NormalFooter />
    </>
  );
};

export default RenderLayout;

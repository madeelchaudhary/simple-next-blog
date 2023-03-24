import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </>
  );
};

export default Main;

import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;

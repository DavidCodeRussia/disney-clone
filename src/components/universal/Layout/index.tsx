import React from "react";
import Footer from "../../Footer";
import Header from "../../Header.js";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

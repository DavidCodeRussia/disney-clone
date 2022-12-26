import React from "react";
import Footer from "../../Footer.tsx";
import Header from "../../Header";

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

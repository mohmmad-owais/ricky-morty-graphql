import React from "react";
import Footer from "./Footer";
import TopSection from "./TopSection";

const Layout = ({ children }) => {
  return (
    <div className="">
      <TopSection />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

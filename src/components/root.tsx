import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Root = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
};

export default Root;

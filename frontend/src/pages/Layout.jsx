import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/index";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

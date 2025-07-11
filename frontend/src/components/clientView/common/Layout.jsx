import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Make the NavBar sticky */}
      <div className="sticky top-0 z-50 bg-white">
        <NavBar />
      </div>
      <div className="min-h-screen flex-grow bg-[#192841]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

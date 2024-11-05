import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>

  );
}

export default Header;
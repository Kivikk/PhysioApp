import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <h1>PhysioApp</h1>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>

  );
}

export default Header;
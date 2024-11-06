import React, { Children } from "react";

const Mainlayout = ({ children }) => {
  return (
    <div className="bg-stone-200 min-h-screen">
      {children}
    </div>
  )
}
export default Mainlayout;

import React from "react";
import Nav from "./Nav";
import Footer from "../Footer";
import "./auto.css";

const Auto = () => {
  return (
    <div className="body w-full ">
      <Nav></Nav>

      <div className="marquee">
        <p className="head">
            The module is completed but not connected....
        </p>
      </div>

      <div className="mt-[337px] py-2 relative bottom 0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Auto;

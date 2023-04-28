import Footer from "../Footer";
import React from "react";
import doctorsImg from "../../assets/img/landingPage/doctorsImg.png";
import { Link } from "react-router-dom";
import Nav from "./Nav";


function Main() {

  return (
    <div className="body w-full ">
    
      <Nav></Nav>

      <div className="body lg:flex px-18 w-full lg:h-5/6 align-item my-4 py-2">
        <img src={doctorsImg} alt="doctorsimg"
          className="w-1/2 lg:my-auto mx-auto mt-24 "
        />

        <div className="ml-auto w-center text-center mt-48 justify-items-center text-[22.5px] font-lato">
          <p>
            We care because we love to serve humanity, it’s not just our duty but a passion to serve you.<br />
            Serving humanity gives peace to our souls, we feel peace inside when we worked for your health.<br />
            Doctors are people who care, love, and serve, we practice you to heal your pain.<br /><br />
            <div className="ml-0 text-primary text-[30px]"><b>Trust us we care about you.</b></div>
          </p><br />

          {/* <div className="w-100% my-auto p-8 rounded grid-cols-2 ">
            <button className="text-[20px] mt-2 ml-4 py-2 px-3 rounded-[10px] font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-40 "
            >
              PREDICTION
            </button>

          </div> */}
          

          <div className="w-100% my-auto p-8 rounded grid-cols-2 ">
            <button className="text-[20px] mb-4 mr-4 bg-primary py-2 px-3 rounded-[10px] font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-40"
            >
              <Link to="/auto">AUTO PREDICTION</Link>
            </button>
            <button className="text-[20px] mt-2 ml-4 bg-primary py-2 px-3 rounded-[10px] font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-40 "
            >
              <a href="https://tushar-2021-public-ml-web-app-mdps-public-sharma-ajxu1j.streamlit.app/">MANUAL PREDICTION</a>
            </button>

          </div>

        </div>
      </div>

      <div className="mt-[77.5px] py-2 relative bottom 0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;

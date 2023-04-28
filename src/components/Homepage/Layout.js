import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import "./auto.css"

export default function Layout() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  const name = userInfo?.name;

  return (
    <div className="body w-full ">
      <Nav />
      <Outlet />
      <div className="bg-secoundry ">
        <div className="">
          <div className="flex justify-center mt-4">
            <h1 className=" rounded p-4 px-8 font-bold font-poppins text-2xl">
              <Link to="/home/create">Create new post ({name})</Link>
            </h1>
          </div>

          <div className="marquee">
            <p className="head">
              The module is completed but not connected....
              </p>
          </div>

        </div>
      </div>
      <div className="mt-[275px] relative bottom 0">
        <Footer></Footer>
      </div>
    </div>
  );
}

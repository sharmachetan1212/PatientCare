import React, {useState }from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name:"",
    email:"",
    bloodGroup:"",
    password:"",
    confirmpassword:""
  });
//  console.log(data);
  // const [error, setError] = useState();

  const handleOnChange =(e) => {
    const {name, value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  };

console.log(process.env.REACT_APP_SERVER_DOMIN)
  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    const {name,email,password,confirmpassword} = data
    if(name && email && password && confirmpassword){
      if(password === confirmpassword){
      
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/register`,{
          method: "POST",
          headers: {
              "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })

        const dataRes = await fetchData.json()
        // console.log(dataRes)

        toast(dataRes.message);
        if(dataRes.alert){
          navigate("/")
        }
        
      }
      else{
        alert("password and confirm password not equal")
      }
    }
    else{
      alert("Please Enter required fields")
    }
  }

  return (
    <div className="body overflow-hidden">
      <Navbar></Navbar>
      <div className="bg-secoundry w-full">
          <div className=" flex justify-center mt-10">
            <h1 className="py-2 px-8 text-[26px] font-poppins font-semibold rounded ">Register</h1>
          </div>
          <form 
            onSubmit={handleSubmit}
            className="font-poppins lg:ml-60 lg:px-8 lg:py-2 bg-white shadow-lg rounded max-w-screen-lg mt-28 mb-4 ">
          
              <div className="grid grid-cols-4 lg:gap-2 mt-4 mr-4 gap-2">
                <label className="font-bold lg:text-xl font-poppins px-4 my-4 "> Name </label> 
                <div>

                  <input 
                    type="text"
                    className="bg-blue-100 rounded lg:h-10 lg:pl-4 mt-4 lg:text-md text-sm h-8 px-2"
                    required
                    placeholder="full name"
                    name="name"
                    value={data.name}
                    onChange={handleOnChange}
                    >
                  </input>
                </div>

              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 mr-4">
                <label className="  lg:text-xl font-bold px-4 ">Email</label>

                <input 
                  type="email" 
                  placeholder="e.g : abcd123@gmail.com"
                  required
                  name="email"
                  value={data.email}
                  className="bg-blue-100 lg:h-10 rounded pl-4 col-span-2 h-8"
                  onChange={handleOnChange}
                ></input>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 mr-4">
                <label className="  lg:text-xl font-bold px-4">
                  Blood Group
                </label>
                <div className="">
                  <select 
                      className="pl-4 lg:w-1/2 bg-blue-100 lg:h-10  rounded  h-8" 
                      onChange={handleOnChange}
                      value={data.bloodGroup}
                      name="bloodGroup"
                  >
                    <option id="select">select</option>
                    <option id="A+">A+</option>
                    <option id="A-">A-</option>
                    <option id="B+">B+</option>
                    <option id="B-">B-</option>
                    <option id="AB+">AB+</option>
                    <option id="AB-">AB-</option>
                    <option id="O+">O+</option>
                    <option id="O-">O-</option>
                  </select>
                </div>
              </div>
             
              <div className="grid grid-cols-4 gap-2 mt-4 mr-4">
                <label type="password" className="lg:text-xl font-bold px-4">
                  Password
                </label>

                <input 
                  type="password" 
                  className="bg-blue-100 lg:h-10  rounded lg:pl-4 h-8 pl-2"
                  required
                  name="password"
                  value={data.password}
                  placeholder="password"
                  onChange={handleOnChange}
                ></input>

              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 mr-4">
                <label type="password" className="lg:text-xl font-bold px-4">
                  Confirm Password
                </label>

                <input 
                  type="password" 
                  name="confirmpassword"
                  className="bg-blue-100 lg:h-10  rounded lg:pl-4 h-8 pl-2"
                  required
                  value={data.confirmpassword}
                  placeholder="confirm password"
                  onChange={handleOnChange}
                ></input>

                <div className="flex justify-center mb-4 mt-8">
                  <button 
                    type="submit"
                    className="bg-primary rounded p-2 px-8 font-bold text-xl hover:bg-bgsecondary mb-4 "
                  >
                    Sign Up
                  </button>
                </div>
              </div>
          </form>

          <div className="mt-[247px] py-2 relative bottom 0">
              <Footer></Footer>
          </div>
      </div>
    </div>
  );
}

export default Register

import React, { useState, useEffect } from "react";
import { NextButton } from "../components/InputBox";
import security from '../assets/securitylogo.png'

const B_mobilenum = ({ Next }) => {

  const [inputvalue, setinputvalue] = useState("")
  const [apivalue, setapivalue] = useState([])
  const [show, setshow] = useState(false)

  const handlechange = (value) => {
    setinputvalue(value);
  }

  useEffect(() => {
    fetch("https://6889e0dc4c55d5c73953f255.mockapi.io/api/lv/otp")
      .then(res => res.json())
      .then(data => setapivalue(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  const checkNumber = () => {
    console.log("checking")
    const matched = apivalue.find(
      (item) => item.number.trim() === inputvalue.trim()
    );
    console.log()

    if (!matched) {

      setshow(true)
    }
    else {
      setshow(false)
      Next();

    }
  };
  useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        setshow(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div className="flex flex-col space-y-6 items-center justify-center min-h-screen  bg-[#7b7b7b]">
      {show && (
        <div className=" flex items-center w-84 bg-white rounded-2xl">
          <div className=" ">
            <img src={security} alt="" />
          </div>
          <p>Invalid Mobile number, Please try again</p><br />
        </div>
      )}
      <div className="border border-white p-10 rounded-md">
        <h1 className=" 2xl:text-5xl inline-block font-bold  2xl:ml-6 text-white  ">
          Enter your mobile number <br />  to get a OTP.
        </h1>
        <div className="mt-6">
          <input type="text" placeholder="Enter Mobile Number" onChange={(e) => handlechange(e.target.value)}
            className="p-4 bg-white text-[#7b7b7b] w-55 2xl:w-62 2xl:mt-7 outline-none rounded-md" />
        </div>

        <div className="flex w-25 mt-3  ml-2">

          <NextButton label="Next &rarr;" onClick={() => checkNumber()} />


        </div>

      </div>

    </div>
  )

}
export default B_mobilenum; 

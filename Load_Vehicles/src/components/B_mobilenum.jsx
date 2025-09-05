import React, { useState, useEffect } from "react";
import { NextButton } from "../components/InputBox";
import security from "../assets/securitylogo.png";
/**
 * B_mobilenum Component
 *
 * This component handles mobile number input, validates the format,
 * checks the entered number against API data, and navigates to the
 * next step if the number is valid.
 * 
 * @param {Function} props.setSelectedUser - Function to set the matched user from API
 * @param {Function} props.Next - Callback function to proceed to the next step
 */
const B_mobilenum = ({ Next, setSelectedUser }) => {
  const [inputvalue, setinputvalue] = useState("");
  const [show, setshow] = useState(false);
/**
 * Handle mobile number input changes
 * allow only numeric values and restrict to  10 digits
 * 
 * @param {string} value-user input values 
 */
  const handlechange = (value) => {
    const onlyNums = value.replace(/\D/g, "");
    if (onlyNums.length <= 10) {
      setinputvalue(onlyNums);
    }
  };

  const checkNumber = () => {
  if (inputvalue.length !== 10) {
    setshow(true);
    return;
  }

  const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();

  const userWithOtp = { number: inputvalue, otp: randomOtp };
  setSelectedUser(userWithOtp);

  localStorage.setItem("mobileNumber", JSON.stringify({ number: inputvalue }));

  setshow(false);
  Next();
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
    <div className="flex flex-col space-y-6 items-center justify-center min-h-screen bg-[#7b7b7b]">
      {show && (
        <div className="flex items-center w-84 bg-white rounded-2xl">
          <img src={security} alt="" />
          <p>Invalid Mobile number, Please enter 10 digits</p>
        </div>
      )}

      <div className="border border-white p-10 rounded-md">
        <h1 className="2xl:text-5xl inline-block font-bold 2xl:ml-6 text-white">
          Enter your mobile number <br /> to get a OTP.
        </h1>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={inputvalue}
            onChange={(e) => handlechange(e.target.value)}
            className="p-4 bg-white text-[#7b7b7b] w-55 2xl:w-62 2xl:mt-7 outline-none rounded-md"
          />
        </div>

        <div className="flex w-25 mt-3 ">
          <NextButton label="Next &rarr;" onClick={checkNumber} />
        </div>
      </div>
    </div>
  );
};

export default B_mobilenum;

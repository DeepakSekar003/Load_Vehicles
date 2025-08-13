import React from "react";
import { InputBox, NextButton } from "../components/InputBox";
const B_mobilenum = ({Next}) => {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center min-h-screen  bg-[#7b7b7b]">
      <div className="border border-white p-10 rounded-md">
        <h1 className=" 2xl:text-5xl inline-block font-bold  2xl:ml-6 text-white  ">
          Enter your mobile number <br />  to get a OTP.
        </h1>

        <div className="mt-6">
          <InputBox placeholder="Enter Mobile Number" />
        </div>
  
          <div className="flex w-25 mt-3 ">

            <NextButton label="Next" onClick={Next} />

          </div>
    
      </div>
    </div>
  )

}
export default B_mobilenum; 
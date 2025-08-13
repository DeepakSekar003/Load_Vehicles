import { NextButton } from "./InputBox";
import { useState } from "react";

const Otp = ({Next}) => {
  const [Otp, setOtp] = useState(new Array(4).fill(""))
  function handleChange(e, index) {
  if (isNaN(e.target.value)) return false;

  setOtp([
    ...Otp.map((data, indx) => (indx === index ? e.target.value : data))
  ]);

  if (e.target.value && e.target.nextElementSibling) {
    e.target.nextElementSibling.focus();
  } else if (!e.target.value && e.target.previousElementSibling) {
    e.target.previousElementSibling.focus();
  }
}
  return (
    <div className="flex  flex-col space-y-6 items-center justify-center min-h-screen  bg-[#7b7b7b]">
      <div className="border border-white px-8 py-10 rounded-md">
        <h1 className=" 2xl:text-5xl text-3xl inline-block font-bold mr-21 2xl:ml-6 py-4 text-white">
          OTP verication
        </h1> <br />
        <h2 className=" inline-block font-semibold  text-white">
          Enter the Verification code we just sent  <br />to your mobile number.
        </h2>
         
          <div className="">            
               {Otp.map((data,i)=>{
                  return <input type="text" 
                               value={data} 
                               maxLength={1}
                               onChange={(e)=>handleChange(e, i)} required
                               className=" mr-2 mt-4 w-10 h-10 text-white text-center  outline-none border  rounded-md "/>
                })
               }
          
          </div>
        <div class="flex items-center justify-center mt-4 mr-25">
          <span id="otp-timer" class="text-sm mr-3 text-white font-medium"> 00:00</span>
          <div className=" flex  bg-[#3d3d3d] hover:bg-[#1d1d1d] text-white w-40 rounded-md">
            <NextButton label="Resend OTP" />
          </div>
        </div>
          <div className=" flex mt-2 w-53">

            <NextButton label="Verify OTP"  onClick= {Next}/>

         </div>
      </div>

    </div>

  )
}

export default Otp;
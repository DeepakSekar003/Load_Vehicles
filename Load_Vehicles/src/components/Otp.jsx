import { NextButton } from "./InputBox";
const Otp = ({Next}) => {
  return (
    <div className="flex  flex-col space-y-6 items-center justify-center min-h-screen  bg-[#7b7b7b]">
      <div className="border border-white px-8 py-10 rounded-md">
        <h1 className=" 2xl:text-5xl text-3xl inline-block font-bold mr-21 2xl:ml-6 py-4 text-white">
          OTP verication
        </h1> <br />
        <h2 className=" inline-block font-semibold  text-white">
          Enter the Verification code we just sent  <br />to your mobile number.
        </h2>
        <div className="flex flex-wrap gap-6 py-4 ">
          <div className="flex  border  text-white rounded-md">
            <input type="text" maxLength="1" className="  p-3 w-8  focus:outline-none" placeholder="0" />
          </div>

          <div className="flex border  text-white rounded-md">
            <input type="text" maxLength="1" className="  p-3 w-8 focus:outline-none" placeholder="0" />
          </div>

          <div className="flex border  text-white rounded-md">
            <input type="text" maxLength="1" className="  p-3 w-8 focus:outline-none" placeholder="0" />
          </div>

          <div className="flex border  text-white rounded-md ">
            <input type="text" maxLength="1" className="  p-3 w-8 focus:outline-none " placeholder="0" />
          </div>
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
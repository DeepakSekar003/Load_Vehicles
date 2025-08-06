import { Link } from "react-router-dom";
import { InputBox, NextButton } from "../components/InputBox";
const B_mobilenum = () => {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center min-h-screen  bg-[#7b7b7b]">
      <div className="border border-white p-10 rounded-md">
        <h1 className=" 2xl:text-5xl inline-block font-bold ml-3 2xl:ml-6 text-white  ">
          Enter your mobile number <br />  to get a OTP.
        </h1>

        <div className="mt-6">
          <InputBox placeholder="Enter Mobile Number" />
        </div>
        <Link to="/Otp">
          <div className="flex w-25 mt-3  ml-2">

            <NextButton label="Next" />

          </div>
        </Link>
      </div>
    </div>
  )

}
export default B_mobilenum; 
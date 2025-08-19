import { useRef, useState } from "react";
import { NextButton } from "./InputBox";
import security from "../assets/securitylogo.png";

const Otp = ({ Next, Back, selectedUser }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputs = useRef([]);

  const handleChange = (e, i) => {
    if (isNaN(e.target.value)) return;
    let newOtp = [...otp];
    newOtp[i] = e.target.value;
    setOtp(newOtp);

    if (e.target.value && i < otp.length - 1) inputs.current[i + 1].focus();
    else if (!e.target.value && i > 0) inputs.current[i - 1].focus();
  };

  const verifyOtp = () => {
    if (otp.join("") === selectedUser?.otp) {
      Next();
    } else {
      setError("Invalid OTP, please try again.");
      setOtp(["", "", "", ""]);
      inputs.current[0].focus();
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <div className="flex flex-col space-y-6 items-center justify-center min-h-screen bg-[#7b7b7b]">
      {error && (
        <div className="flex items-center w-72 bg-white rounded-2xl p-2 mb-4">
          <img src={security} alt="!" className="w-6 h-6 mr-2" />
          <p>{error}</p>
        </div>
      )}

      <div className="border border-white px-8 py-10 rounded-md">
        <h1 className="text-3xl font-bold text-white mb-4">OTP Verification</h1>
        <p className="text-white mb-4">
          Enter the code we just sent to your mobile number.
        </p>

        <div className="flex gap-3 mb-4">
          {otp.map((val, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              value={val}
              onChange={(e) => handleChange(e, i)}
              ref={(el) => (inputs.current[i] = el)}
              className="w-10 h-10 text-center text-white bg-transparent border rounded-md outline-none"
            />
          ))}
        </div>

        <div className="flex items-center justify-center mb-4 w-60">
          <span className="text-sm text-white mr-3">00:00</span>
          <NextButton label="Resend OTP" />
        </div>

        <NextButton label="Verify OTP" onClick={verifyOtp} />
      </div>
      <div className="flex w-25 mr-[80%]">
        <NextButton label="&larr; Back" onClick={Back} />
      </div>
    </div>
  );
};

export default Otp;

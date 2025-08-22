import React, { useState } from "react";
import B_mobilenum from "../components/B_mobilenum";
import Otp from "../components/Otp";
import Location from "../components/Location";
import Fileuplod from "../components/Fileuplod";
import Vehicles from "../components/Vehicles";
import Accountdetail from "../components/Accountdetail";
import Details from "../components/Details";
import LoginPage from "../components/LoginPage"
import CustomerPage from "../pages/CustomerPage";

const SignupPage = ({ text }) => {
  const [flowType, setFlowType] = useState(null);
  const [step, setStep] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null); 

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  const flowBook = [

    <B_mobilenum Next={handleNext} setSelectedUser={setSelectedUser} />,
    <Otp Next={handleNext} Back={handleBack} selectedUser={selectedUser} />,
    <Details Back={handleBack} Next={handleNext} />,
    <CustomerPage Next={handleNext}/>
  ];

  const flowEarn = [

    <B_mobilenum Next={handleNext} setSelectedUser={setSelectedUser} />,
    <Otp Next={handleNext} Back={handleBack} selectedUser={selectedUser} />,
    <Location Next={handleNext} placeholder={text} Back={handleBack} />,
    <Fileuplod Next={handleNext} Back={handleBack} />,
    <Vehicles Next={handleNext} Back={handleBack} />,
    <Accountdetail Next={handleNext} Back={handleBack} />,
    <Details Next={handleNext} Back={handleBack} />,
    
  ];

  const renderStep = () => {
    if (flowType === "book") return flowBook[step];
    if (flowType === "earn") return flowEarn[step];
    return (
      <div className="flex items-center justify-center bg-[#7b7b7b] min-h-screen text-white">
        <div className="flex flex-col space-y-15 items-center border rounded-md p-15">
          <h1 className="text-3xl font-bold">sign-up</h1>
          <div className="mt-8 ">
            <button
              onClick={() => {
                setFlowType("book");
                setStep(0);
              }}
              className="border border-bg-white py-6 px-12 rounded-md hover:bg-[#3d3d3d] font-semibold"
            >
              BookRide
            </button>
            <button
              onClick={() => {
                setFlowType("earn");
                setStep(0);
              }}
              className="border border-bg-white py-6 px-9 rounded-md ml-8 hover:bg-[#3d3d3d] font-semibold"
            >
              StartEarning
            </button>
            <div className="flex items-center justify-center mt-15">
              <h1>Already have an account? </h1>&nbsp;
              <a className="font-bold" href="/LoginPage">Login</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{renderStep()}</>;
};

export default SignupPage;
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { NextButton } from "../components/InputBox";

const BussinessSec = ({ Back }) => {
  const [loadType, setLoadType] = useState("");
  const [options, setoptions] = useState("");
  return (
    <>
      <Navbar />
      <div className="bg-[#7b7b7b] min-h-screen">
        <section className="flex justify-center py-45 flex-col  ">
          <div className="bg-[#3d3d3d] w-lg flex inset-0 m-auto flex-col items-center rounded-2xl ">
            <h1 className="font-bold text-3xl text-white m-5">Business</h1>
            <div className="flex flex-col items-center m-5">
              <div className="flex flex-row justify-center items-center gap-2">

                <button onClick={() => { setLoadType("part");
                  setoptions("");
                  }}
                  className={`p-4 w-55 rounded-l-md font-semibold transition-all duration-200
                  ${loadType === "part" ? "bg-[#9c9c9c] text-white shadow-md"
                 : "bg-white text-[#7b7b7b] hover:bg-[#f2f0f0]"}`}>Part Load </button>
                <button onClick={() => setLoadType("full")}
                 className={`p-4 w-56 rounded-r-md font-semibold transition-all duration-200
                 ${ loadType === "full" ? "bg-[#9c9c9c] text-white shadow-md"
                   : "bg-white text-[#7b7b7b] hover:bg-[#f2f0f0]"  }`}>Full Load </button>
                </div>
                 </div>

            <div className="flex justify-center items-center pt-5 mr-20 gap-2  ">
              <label className="text-2xl font-bold  text-white">Weight :</label>
              <input
                type="text"
                placeholder="Enter weight"
                className="bg-white text-[#7b7b7b] h-10 p-5 w-40 font-semi-bold cursor-pointer outline-none   hover:bg-[#f2f0f0] rounded-md "
              />
              <select className=" w-20 h-10 p-2 border border-white bg-white rounded-md text-gray-500 focus:outline-none hover:bg-[#f2f0f0] ">
                <option value="" disabled selected>
                  Type
                </option>
                <option value="Male">Kg</option>
                <option value="Female">Ton</option>
              </select>
            </div>
            <div className="flex justify-center mr-15   items-center pt-10 gap-2 ">
              <label className="text-2xl font-bold   text-white">
                Material Type :
              </label>
              <input
                type="text"
                placeholder="Enter Material Type"
                className="bg-white text-[#7b7b7b] h-10 p-5 w-50 font-semi-bold cursor-pointer hover:bg-[#f2f0f0] rounded-md outline-none"
              />
            </div>
            {loadType === "full" && (
              <div className="flex justify-center items-center pt-10 gap-2 ">
                <label className="text-2xl font-bold text-white">
                  Choose Vehicle :
                </label>
                <select className="w-60 h-10 p-2 border border-white bg-white rounded-md text-gray-500 focus:outline-none hover:bg-[#f2f0f0] ">
                  <option value="" disabled selected>
                    Select Vehicle
                  </option>
                  <option value="truck">Zor Auto</option>
                  <option value="lorry">Eicher</option>
                  <option value="container">Tata Ace</option>
                  <option value="container">Tempo</option>
                  <option value="container">Tipper</option>
                  <option value="container">Ev Load</option>
                </select>
              </div>
            )}

            <button className="bg-white text-[#3d3d3d] text-lg w-40 mb-8 mt-7  h-12  text-center rounded-md hover:font-bold cursor-pointer ">
              Book Ride
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BussinessSec;

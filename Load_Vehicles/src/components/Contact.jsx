import React from "react";
import { useState } from "react";
import contact from "../assets/contact.jpg";
import Navbar from "./Navbar";

function Contact() {
  const [youAre, setYouAre] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSelect = (e) => {
    const val = e.target.value;
    setYouAre(val);
  };
  const handleMobileChange = (e) => {
    const v = e.target.value;
    if (/^\d*$/.test(v)) {
     setMobile(v); 
    }
    
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#7b7b7b] text-white">
        <div className="flex  ">
          <form className="mx-auto space-y-4 p-5 pl-10">
            <h1 className="pt-35 mb-10 ml-5  text-4xl font-extrabold">
              You can find us here{" "}
            </h1>
            <h2 className=" ">Find help for your queries here:</h2>
            <div>
              <label className="block text-2xl font-bold mb-5 text-white">
                Name
              </label>
             <input
                type="text"
                placeholder="Enter your Name"
                className="mt-1 block max-w-full border outline-none w-2xl h-10 rounded-md p-5"
              />
            </div>
            <div>
              <label className="block text-2xl font-bold mb-5 text-white">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="mt-1 block max-w-full border outline-none w-2xl h-10 rounded-md p-5"
              />
            </div>
            <div>
              <label className="block text-2xl font-bold mb-5 text-white">
                Mobile Number{" "}
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={mobile}
                onChange={handleMobileChange}
                placeholder="Enter your mobile number"
                maxLength={10}
                className="mt-1 block max-w-full border outline-none w-2xl h-10 rounded-md p-5"
              />
            </div>
            <div>
              <label className="block text-2xl font-bold mb-5">You are a</label>
              <select
                value={youAre}
                onChange={handleSelect}
                className="mt-1 block max-w-full rounded-md border outline-none w-2xl h-10"
              >
                <option value="" className="bg-[#3d3d3d]">
                  -select-
                </option>
                <option value="Captain" className="bg-[#3d3d3d]">
                  Captain
                </option>
                <option value="Customer" className="bg-[#3d3d3d]">
                  Customer
                </option>
              </select>
            </div>
            {youAre === "Captain" && (
              <div>
                <label className="block text-2xl font-bold mb-5"> Query</label>
                <input className="mt-1 block max-w-full rounded-md border outline-none w-2xl h-10 p-5" />
              </div>
            )}

            {youAre === "Customer" && (
              <div>
                <label className="block text-2xl font-bold mb-5"> Query</label>
                <input className="mt-1 block max-w-full rounded-md border outline-none w-2xl h-10" />
              </div>
            )}
            <div>
              <label className="block text-2xl font-bold mb-5 text-white">
                Comment{" "}
              </label>
              <input
                type="text"
                placeholder="Enter your comment"
                className="mt-1 block max-w-full border outline-none w-2xl h-20 rounded-md p-5"
              />
            </div>
            <button
              type="submit"
              className=" bg-[#3d3d3d] text-white py-2 rounded-md hover:bg-[#1d1d1d] w-2xl"
            >
              Submit
            </button>
          </form>
          <div>
            <img
              src={contact}
              alt="Contact"
              className="w-full  mt-40 pt-10   h-[700px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

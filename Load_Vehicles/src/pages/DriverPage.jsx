import React, { useState } from "react";
import logo from '../assets/logo.png'
import account from '../assets/accounticon.png'
import Driver from '../assets/DriverPage.jpg'
import tick from '../assets/orangetick.png'
import activedelivery from '../assets/activedelivery.jpg'
const Driverfnc = () => {
    const [options, setoptions] = useState('Day')
    const select = ["day", "Month", "Year"];
    return (
        <>
            <div className="bg-[#7d7d7d]">
                <div className="flex z-1 justify-between fixed w-full items-center px-4 2xl:px-5 py-2 2xl:py-5 bg-[#3d3d3d]">
                    <div className="logo">
                        <img src={logo} alt="" className="h-18 2xl:h-20 w-18 2xl:w-20 rounded-full " />
                    </div>
                    <div className=" flex justify-center items-center">
                        <a className="text-white text-2xl font-semibold hover:bg-white hover:text-[#7b7b7b] px-4  py-2  rounded-md">Order History</a>
                        <img src={account} alt="account" className=" ml-50 hover:cursor-pointer" />
                    </div>
                </div>

                {/* driver page section 1 */}
                <div className="flex items-center py-33">
                    <div className="ml-9">
                        <img src={Driver} alt="" className=" rounded-2xl" />
                    </div>
                    <div className="flex-col ml-50">
                        <h1 className="text-5xl  mb-9 text-white font-bold">
                            Ready to bring faster, better and <br /> safe moveing experience
                        </h1>
                        <p className="text-3xl  mb-5 text-white">
                            Join us to deliver smiles, not just packages.
                            <br />Drive with speed, safety, and trust.Every mile <br />counts – for you and our customers.
                            Let's redefine the <br /> future of moving together
                        </p>
                        <div className=" grid grid-cols-2">
                            <div>
                                <img src={tick} alt="" />
                                <h1 className="text-3xl  mb-5 text-white">Domestic Moves</h1>
                            </div>
                            <div>
                                <img src={tick} alt="" />
                                <h1 className="text-3xl  mb-5 text-white">Business or Office Moves</h1>
                            </div>
                            <div>
                                <img src={tick} alt="" />
                                <h1 className="text-3xl  mb-5 text-white">Vehicles Moves</h1>
                            </div>
                            <div>
                                <img src={tick} alt="" />
                                <h1 className="text-3xl  mb-5 text-white">Other Products Moves</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center gap-80">
                <div className=" ml-11 w-90 h-2/4 rounded-2xl bg-[#7b7b7b] border-2 border-white hover:shadow-[0_0_20px_white] transition duration-300">
                    <div className="space-x-4 flex bg-gray-200 p-2 rounded-full w-62 mx-auto mt-4">
                        {select.map((option) => (
                            <button key={option}
                                onClick={() => setoptions(option)}
                                className={`px-4 py-2 rounded-full transition-all duration-200
                                ${options === option ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-[#3d3d3d] text-white hover:bg-[#1d1d1d]'}`}>
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center items-center mt-20 text-center">
                        <div >
                            <span className=" font-bold text-white text-5xl">$100</span>
                            <p className=" text-2xl text-white">Total Earning</p>
                        </div>
                        <button className=" bg-[#3d3d3d] hover:bg-[#1d1d1d] text-white p-2 rounded-2xl text-2xl font-bold mt-20"> Claim </button>
                    </div>
                </div>
                            <div className=" bg-[#7b7b7b] border-2 border-white text-white w-60 h-60 flex flex-col items-center justify-center rounded-full hover:shadow-[0_0_20px_white] transition duration-300">
                    <span className=" font-bold text-7xl " >1</span>
                    <p className=" mt-9 text-2xl text-white">Drive Count</p>
                </div>
                </div>
                  <div className=" flex mt-33 mb-33 justify-between items-center border-2 border-white mx-9 rounded-2xl">
            <div className=" ml-20 mt-5 mb-5">
                <img src={activedelivery} alt="activedelivery" className=" w-96 border-2 rounded-2xl border-white"/>
            </div>

            <div className="flex flex-col text-white text-2xl font-bold">
                
            </div>

            <div>
                    <button 
                        className="px-7 py-5 bg-red-600 hover:bg-red-800 text-white rounded-2xl mr-20">
                        Finish Order
                    </button>
                    <button className="px-7 py-5 bg-gray-500 text-white rounded-2xl mr-20">
                        Active Delivery
                    </button>
            </div>
        </div>

         <div>
            <select>
                <option value="" > filter </option>
                <option value="" > Business </option>
                <option value="" > Personal </option>
            </select>
        </div>
         <div className=" px-9 w-full mb-3">
                <div  className="flex justify-between items-center border border-white p-3 rounded-lg mb-3">
                    <span className="text-white">
                      
                    </span>
                    <div>
                        <button 
                            className={"px-4 py-2 rounded-full mr-4  bg-gray-400  hover:bg-green-600"
                            }>
                            Accept
                        </button>
                        <button 
                            className=" bg-red-400 px-4 py-2 rounded-full hover:bg-red-600">
                            Reject
                        </button>
                    </div>
                </div>
                <span className="text-white">No data found</span>
        </div>
            </div>
        </>
    );
}
export default Driverfnc
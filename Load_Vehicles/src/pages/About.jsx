import React from "react";
import Navbar from "../components/Navbar";
import aboutpic from '../assets/AboutusPic.jpg'
import secur from '../assets/security.png'
import security from '../assets/securitylogo.png'
import feas from '../assets/feasibl.png'
import footer from '../assets/about-footer.jpg'
import homeicon from '../assets/footerHome.png'
import officeicon from '../assets/footerOffice.png'
import idea from '../assets/bulp.png'

function Aboutfnc() {
    return (
        <>
            <Navbar />
            <div className="bg-[#7b7b7b] mt-22 xl:mt-0 xl:pt-23 xl:px-3">
                <div className="flex py-5 ml-9">
                    <div className="relative">
                        <img src={aboutpic} alt="" className="rounded-2xl mr-28 xl:w-11/12   " />
                        <div className=" absolute text-white rounded-full w-38 xl:w-30 h-38 xl:h-30 top-7  left-11/12 xl:left-4/5 flex flex-col items-center justify-center bg-orange-500 text-center z-2 shadow-lg">
                            <span className="text-5xl xl:text-3xl  mb-5 xl:mb-3 text-white font-bold">17+</span>
                            <p className="leading-tight ">Years of <br></br> Experience</p>
                        </div>
                    </div>
                    <div className="flex items-center m-4">
                        <div className="ml-9 xl:ml-1 font-sans">
                            <h1 className=" text-4xl  mb-5 text-white font-bold">We are the Moveing Leaders</h1>
                            <span className=" text-3xl xl:text-2xl  mb-5 text-white"> Our team ensures safe, timely deliveries—whether <br></br>it’s residential, commercial, or  long-distance  moves. <br></br> We prioritize customer satisfaction with every service we provide.</span>
                        </div>
                    </div>
                </div>
                <div className=" ml-34 mt-20 grid grid-cols-4 ">
                    <div className="border-white border-2 w-50 flex flex-col  justify-center items-center rounded-2xl hover:shadow-[0_0_20px_white] transition duration-300 ">
                        <img src={secur} alt="" className="w-25" />
                        <h1 className=" text-2xl text-white font-bold">Qality &</h1>
                        <h1 className=" text-2xl text-white font-bold">Satisfaction</h1>
                    </div>
                    <div className="border-white border-2 w-50 flex flex-col justify-center items-center rounded-2xl hover:shadow-[0_0_20px_white] transition duration-300">
                        <img src={security} alt="" className="w-25" />
                        <h1 className=" text-2xl text-white font-bold">Security &</h1>
                        <h1 className=" text-2xl text-white font-bold">Reliability</h1>
                    </div>
                    <div className="border-white border-2 w-50 flex flex-col justify-center items-center rounded-2xl hover:shadow-[0_0_20px_white] transition duration-300">
                        <img src={idea} alt="" className="w-25" />
                        <h1 className=" text-2xl text-white font-bold">Cutting-edge</h1>
                        <h1 className=" text-2xl text-white font-bold">Solution</h1>
                    </div>
                    <div className="border-white border-2 w-50 flex flex-col justify-center items-center rounded-2xl hover:shadow-[0_0_20px_white] transition duration-300">
                        <img src={feas} alt="" className="w-25" />
                        <h1 className=" text-2xl text-white font-bold">Feasbile &</h1>
                        <h1 className=" text-2xl text-white font-bold">Advice</h1>
                    </div>

                </div>

                <div className="flex py-5  ml-9">
                    <div className="mt-20 relative">
                        <img src={footer} alt="" className=" w-[900px] xl:w-xl h-[650px] xl:h-10/12 rounded-2xl" />
                        <div className=" absolute flex items-center border-white border-2 top-5 xl:top-7 left-140 xl:left-2/5">
                            <div className=" mr-5">
                                <h1 className="text-5xl font-bold text-white">4.8 </h1>
                            </div>
                            <div>
                                <p className="text-2xl text-center">⭐⭐⭐⭐</p>
                                <span className="text-2xl text-white">From Google Business</span>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-2/5 xl:ml-10">
                        <div className=" ml-9 xl:ml-2  mt-38 xl:mt-30">
                            <p className=" mb-5 text-white text-5xl xl:text-3xl font-bold">Profestional Service Ready For Your Moveing Plan</p>
                        </div>
                        <div className="grid grid-cols-2   mt-15 xl:mt-4">
                            <div className=" xl:w-70">
                                <img src={homeicon} alt="" className=" w-25 xl:w-20" />
                                <h1 className="text-2xl text-white font-bold">Domestic Moves</h1>
                                <p className="text-white text-2xl mt-5"> We offer secure and efficient domestic moves tailored
                                    to your needs.  From careful packing to on-time delivery
                                    ,our team ensure a smooth relocation experience
                                </p>
                            </div>
                            <div className="ml-20 xl:ml-9 xl:w-70">
                                <img src={officeicon} alt="" className="w-25 xl:w-20" />
                                <h1 className="text-2xl text-white font-bold">Office Moves</h1>
                                <p className="text-white text-2xl w-96 xl:w-62 mt-5">We specialize in hassle-free office moves with minimal downtime
                                    .  Count on us for a smooth, organized and professional relocation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Aboutfnc
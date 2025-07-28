import Navbar from "../components/Navbar";
import RadioBox from "../components/RadioBox"
import InputBox from "../components/InputBox";
import SearchButton from "../components/SearchButton";
import Driver1 from "../assets/Driver Section 1.jpg"
import Driver2 from "../assets/Driver Section 2.jpg"
import Driver3 from "../assets/Driver Section 3.jpg"
import Driver4 from "../assets/Driver Section 4.jpg"
import main from "../assets/main.jpg";

export default function HomePage() {
  return (
    <div className="bg-[#052038] min-h-screen text-white">
      <Navbar />

      <section className="pt-12 2xl:pt-20 px-8 2xl:px-23">
        <h1 className="text-3xl 2xl:text-5xl inline-block font-bold ml-10 2xl:ml-6 tracking-wider leading-relaxed">
          Thousands of trucks at <br /> your fingertips...
        </h1>

        <div className="mt-6 ml-26 2xl:mt-15 2xl:text-2xl">
          <RadioBox />
        </div>

        <div className="ml-26 mt-6 2xl:mt-15">
          <InputBox placeholder="Enter Pickup Location" /><br />
          <InputBox placeholder="Enter Drop Location" /><br />

          <SearchButton label="Search" />
        </div>

        <div className="ml-130 2xl:ml-160 -mt-100 2xl:-mt-140">
          <img src={main}
            alt="Main"
            className="h-100 2xl:h-140 w-200 2xl:w-250 rounded-sm  object-cover" />
        </div>

      </section>

      <section className=" lg:flex bg-[#052038]  h-screen items-center justify-center  px-23">
        <div className=" flex flex-col  max-w-4/12 md:w-1/2 px-[50px] py-[20px] ">
        <div className=" flex  justify-center  xl:ml-24">
                <img src={Driver1} alt="driver-img1" className="w-[180px] xl:w-[300px] m-[15px] xl:m-4 h-[180px] xl:h-[220px] rounded-[20px] "/>
                <img src={Driver2} alt="driver-img2" className="w-[180px] xl:w-[300px] m-[15px] xl:m-4 h-[180px] xl:h-[220px]  rounded-[20px]" />
        </div>
        <div className=" flex  justify-center  xl:ml-24">
                <img src={Driver3} alt="driver-img3" className="w-[180px] xl:w-[300px] m-[15px] xl:m-4 h-[180px] xl:h-[220px] rounded-[20px]" />
                <img src={Driver4} alt="driver-img4" className="w-[180px] xl:w-[300px] m-[15px] xl:m-4 h-[180px] xl:h-[220px] rounded-[20px]" />
        </div>
        </div>
        <div className="ml-72 ">
        <div className="max-w-[90%] md:w-full flex flex-col justify-center ">
            <h1 className="text-5xl mb-5 text-white font-bold tracking-wider leading-relaxed">Flexible Hours & High Earnings</h1>
            <p className=" text-3xl mb-5 text-white ">Join as a Driver and earn on your own terms.<br></br>
                Driver whenever you want.</p>
        
            <button className="w-32 h-12  rounded-[10px] bg-green-900 font-bold mt-[20px] text-white cursor-pointer hover:bg-green-950 ">Start Earning</button>
        </div>
        </div>
    </section>
    </div>
  )
}
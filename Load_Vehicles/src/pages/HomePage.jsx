import Navbar from "../components/Navbar";
import {InputBox,NextButton, RadioBox} from "../components/InputBox";
import main from "../assets/main.jpg";
import  {useEffect,useState} from "react";
import axios from "axios";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img 3.jpg"
import img4 from "../assets/img 4.jpg"
import Driver1 from "../assets/Driver Section 1.jpg"
import Driver2 from "../assets/Driver Section 2.jpg"
import Driver3 from "../assets/Driver Section 3.jpg"
import Driver4 from "../assets/Driver Section 4.jpg"

const Homepage = () => {
  const[images, setImages] = useState ([]);
 
   useEffect(() => {
    axios
    .get("https://6889e0dc4c55d5c73953f255.mockapi.io/api/lv/truck")
    .then((response) => setImages(response.data))
    .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if(images.length === 0)
    return <div className="text-black p-20">Loading...</div>;

  return (
    <div className="bg-[#7b7b7b] min-h-screen text-white">
      <Navbar />

      <section className="pt-23 2xl:pt-20 px-8 2xl:px-23">
        <h1 className="text-3xl mt-15 2xl:text-5xl inline-block font-bold ml-3 2xl:ml-6 tracking-wider leading-relaxed">
          Thousands of trucks at <br /> your fingertips.
        </h1>

        <div className=" flex gap-2 ml-5 mt-10 2xl:mt-15 ">
          <InputBox placeholder="Enter Pickup Location" />
          <InputBox placeholder="Enter Drop Location" /><br />
        </div>

        <div className="ml-3 flex flex-wrap gap-2 mt-5 2xl:mt-7 2xl:text-2xl ">
          <RadioBox />
        </div>
         
         <div className="ml-5 mt-5 2xl:mt-15 ">
         <NextButton label="Next" />
         </div>

        <div className="ml-125 2xl:ml-160 -mt-93 2xl:-mt-140">
          <img src={main}
            alt="Main"
            className="h-110 2xl:h-140 w-200 2xl:w-250 rounded-md  object-cover" />
        </div>

      </section>

      <section>
               <h1 className="text-left text-2xl mt-5 ml-5 font-bold 2xl:text-6xl">
          Our Services
        </h1>
        <div className="truck grid grid-cols-3 gap-4 p-[30px] justify-items-center">
          {images.map((img) => (
            <div className="text" key={img.id}>
              <div className="image h-[180px] w-[210px]  rounded-md g-[50px] border-[2px]  bg-stone-300 2xl:h-[200px]">
                <img
                  src={img.avatar}
                  alt={img.name}
                  className="h-[150px] w-[180px] 2xl:w-[300px] m-2 hover:scale-110 transition duration-500 object-cover 2xl:h-[180px]"
                />
              </div>
              <h2 className="title font-bold text-center p-5 2xl:text-[25px]">
                {img.name.toUpperCase()}
              </h2>
            </div>
          ))}
        </div>
      </section>


      {/* Home customer sec */}

      <section className='flex items-center justify-center '>
        <div className='   w-[40%] m-4   '>
          <h1 className='text-5xl mb-5 2xl:text-6xl font-bold'>Delivering More Than Just Goods</h1>
          <p className='text-3xl mb-5 2xl:text-4xl '>Your logistics partner for smooth transportation.</p>
          <button className='w-32 2xl:w-36 bg-[#3d3d3d] h-12 2xl:h-14 2xl:text-xl text-lg rounded-md text-white  font-bold cursor-pointer hover:bg-[#1d1d1d] '>Book Ride</button>
        </div>

        <div className='  flex flex-wrap  justify-center max-w-[50%]  my-36  '>

          <img src={img1} alt="img" className='xl:w-[280px] lg:w-[200px] lg:h-[140px] xl:h-[180px] m-[15px] rounded-xl 2xl:w-[300px] 2xl:h-[200px]  ' />
          <img src={img2} alt="img" className='xl:w-[280px] lg:w-[200px] lg:h-[140px] xl:h-[180px] m-[15px] rounded-xl 2xl:w-[300px] 2xl:h-[200px]  ' />
          <img src={img3} alt="img" className='xl:w-[280px] lg:w-[200px] lg:h-[140px] xl:h-[180px] m-[15px] rounded-xl 2xl:w-[300px] 2xl:h-[200px]  ' />
          <img src={img4} alt="img" className='xl:w-[280px] lg:w-[200px] lg:h-[140px] xl:h-[180px] m-[15px] rounded-xl 2xl:w-[300px] 2xl:h-[200px]  ' />

        </div>

      </section>


      <section className=" lg:flex  h-screen  px-20">
        <div className=" flex flex-col  max-w-1/2 px-[50px] py-[20px] ">
          <div className=" flex  justify-center  xl:ml-24">
            <img src={Driver1} alt="driver-img1" className="lg:w-[200px] xl:w-[280px] m-[15px] xl:m-4 lg:h-[140px] xl:h-[180px] rounded-[20px] " />
            <img src={Driver2} alt="driver-img2" className="lg:w-[200px] xl:w-[280px] m-[15px] xl:m-4 lg:h-[140px] xl:h-[180px]  rounded-[20px]" />
          </div>
          <div className=" flex  justify-center  xl:ml-24">
            <img src={Driver3} alt="driver-img3" className="lg:w-[200px] xl:w-[280px] m-[15px] xl:m-4 lg:h-[140px] xl:h-[180px] rounded-[20px]" />
            <img src={Driver4} alt="driver-img4" className="lg:w-[200px] xl:w-[280px] m-[15px] xl:m-4 lg:h-[140px] xl:h-[180px] rounded-[20px]" />
          </div>
        </div>
        <div className="ml-35 mt-24 ">
          <div className="flex flex-col ">
            <h1 className="text-5xl  mb-5 text-white font-bold ">Flexible Hours & <br/> High Earnings</h1>
            <p className=" text-3xl  mb-5 text-white ">Join as a Driver and earn on your own terms.
              Driver whenever you want.</p>

            <button className="w-32 h-12  rounded-[10px] bg-[#3D3D3D] hover:bg-[#1d1d1d] font-bold mt-[20px] text-white cursor-pointer ">Start Earning</button>
          </div>
        </div>
      </section>


    </div>
  ) 

}
export default Homepage;
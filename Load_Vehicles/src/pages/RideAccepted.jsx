import Navbar from "../components/Navbar"


const RideAccepted = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#7d7d7d]">
    <div className="flex flex-col justify-center items-center">

<div className="mt-40 p-10 bg-[#3d3d3d] w-xl flex justify-center flex-col  rounded-2xl ">
<h1 className="font-bold text-3xl text-white text-center">Driver Details</h1>
<div className="mt-12  text-white text-xl  flex flex-col m-5 font-bold border">
<h3 className="m-3">Driver Name:</h3>  
<h3 className="m-3">Id:</h3>  
<h3 className="m-3">Phone no:</h3>  
<h3 className="m-3">Vehicle no:</h3>  
<h3 className="m-3">Otp:</h3>  
 </div>
<button className='bg-white text-[#3d3d3d] text-lg w-40 mt-10 h-12 p-3 text-center rounded-md hover:font-bold cursor-pointer'>
Close</button>
</div>

    </div>


    </div>
    
    </>
  )
}

export default RideAccepted
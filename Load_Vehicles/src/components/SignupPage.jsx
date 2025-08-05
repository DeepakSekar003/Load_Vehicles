import { Link } from "react-router-dom";
const SignupPage = () => {
  return (

    <div className=" flex  items-center justify-center bg-[#7b7b7b] min-h-screen text-white">
      <div className=" flex flex-col space-y-15 items-center border rounded-md p-25">
        <h1 className="text-3xl font-bold" >sign-up</h1>


        <div className="mt-8 ">
          <Link to="/B_mobilenum" className="border border-bg-white py-6 px-12 rounded-md hover:bg-[#3d3d3d] font-semibold"> Book Ride</Link>
          <Link to="/B_mobilenum" className="border border-bg-white py-6 px-9 rounded-md ml-8 hover:bg-[#3d3d3d] font-semibold"> Start Earning</Link>
        </div>
      </div>
    </div>

  )
}
export default SignupPage; 
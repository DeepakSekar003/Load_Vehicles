import { InputBox, NextButton, Date } from "../components/InputBox";

const Details = ({ Next, Back }) => {
  return (
    <>
      <div className="flex  justify-center bg-[#7b7b7b]  items-center min-h-screen  ">
        <div className="flex pr-15 w-45 mt-125">
          <NextButton label="&larr; Back" onClick={Back} />
        </div>
        <div className="flex flex-col gap-3 border border-white p-10 rounded-md">
          <InputBox placeholder="Enter Your Email" />
          <InputBox placeholder="Enter Your Fullname" />
          <select name="Gender" id="" className="w-55 p-4  border border-white bg-white rounded-md text-gray-500 focus:outline-none px-3 ">
            <option value="" disabled selected> Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className=" " >
            <h1 className="text-white font-semibold">Date of Birth:</h1>
            <Date />
          </div>

          <div className="flex w-55 ">
            <NextButton label="Submit" onClick={Next} />
          </div>

        </div>

      </div>


    </>

  )
}

export default Details;
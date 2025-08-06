import { AiOutlineCloudUpload } from "react-icons/ai";

export function InputBox({ placeholder }) {
  return (
    <input type="text"
      placeholder={placeholder}
      className="p-4 bg-white text-[#7b7b7b] w-55 2xl:w-62 2xl:mt-7 outline-none rounded-md" />
  )
}

export function RadioBox() {
  return (
    <>
      <input type="radio" id="business" name="radiobox" className=" appearance-none" />
      <label for="business" className="bg-white text-[#7b7b7b] p-4 w-55  font-semi-bold cursor-pointer flex justify-center items-center hover:bg-[#f2f0f0]  rounded-l-md">Business</label><br />
      <input type="radio" id="personal" name="radiobox" className="appearance-none" />
      <label for="personal" className="bg-white text-[#7b7b7b] p-4 w-56 -ml-5.5 font-semi-bold cursor-pointer flex items-center justify-center hover:bg-[#f2f0f0] rounded-r-md ">Personal</label>
    </>
  )
}

export function NextButton({ label }) {
  return (
    <button className="p-4 w-113 2xl:w-62  2xl:mt-10 bg-[#3d3d3d] hover:bg-[#1d1d1d] text-white font-bold cursor-pointer rounded-md">
      {label}
    </button>
  )
}

export function DriverFileuplod({ label }) {
  return (
    <label className="flex">
      <div className="border-2 rounded-md border-dotted px-5 py-8">
        <p className="flex  justify-center items-center text-sm font-semibold">{label}</p>
        <AiOutlineCloudUpload className="ml-7 size-25" />
        <p className="flex mt-6 font-semibold text-sm"> File with JPG or PNG format</p>
      </div>
      <input id="dropzone-file" type="file" className="hidden" />
    </label>
  )
}

export function Date() {
  return (
    <div className=" border w-55 p-4 border-white bg-white rounded-md text-gray-500  px-3">
      <input type="date" className="focus:outline-none" />
    </div>
  )
}
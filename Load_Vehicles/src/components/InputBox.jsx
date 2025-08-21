import { AiOutlineCloudUpload } from "react-icons/ai";
import { useState } from 'react'
export function InputBox({ placeholder }) {
  return (
    <input type="text"
      placeholder={placeholder} 
      className="p-4 bg-white text-[#7b7b7b] w-55 2xl:w-62 2xl:mt-7 outline-none rounded-md" />
  )
}

export function RadioBox() {
      const [options,setoptions]=useState('Part Load');
      const select=['Part Load','Full Load']
  return (
    <>
        <div className="flex gap-0.5">
         {select.map((option)=>(
                <button key={option}
                onClick={()=>setoptions(option)}
                className={`p-4 w-55 rounded-md transition-all duration-200
                ${options===option ? 'bg-[#9c9c9c] text-white shadow-md'
                 : 'bg-white text-[#7b7b7b]  hover:bg-[#f2f0f0]]'}`} >{option}</button>
            ))}
    </div>
    </>
  )
}

export function NextButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="p-4 w-113 2xl:w-62  2xl:mt-10 bg-[#3d3d3d] hover:bg-[#1d1d1d] text-white font-bold cursor-pointer rounded-md">
      {label}
    </button>
  )
}

export function DriverFileuplod({ label }) {
  return (
    <label className="flex">
      <div className="border-2 rounded-md border-dotted px-5 py-8">
        <p className="flex justify-center items-center text-sm font-semibold">{label}</p>
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
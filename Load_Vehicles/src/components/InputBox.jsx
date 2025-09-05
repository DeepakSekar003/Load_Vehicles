import { AiOutlineCloudUpload } from "react-icons/ai";
import { useEffect, useState } from "react";


export function InputBox({ value, onChange, onBlur, placeholder, name }) {
   return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}          
      onChange={onChange}    
      onBlur={onBlur}  
      className="p-4 bg-white text-[#7b7b7b] w-55 2xl:w-62 2xl:mt-7 outline-none rounded-md" />
  )
}


export function RadioBox({ options, selectedOption, onChange }) {
  return (  
    <>
        <div className="flex p-2 gap-2">
         {options.map((option)=>(
                <button key={option}
                onClick={()=>onChange(option)}
                className={`p-4 w-55 rounded-md transition-all duration-200
                ${selectedOption===option ? 'bg-[#9c9c9c] text-white shadow-md'
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
      <input id="dropzone-file" type="file"  />
    </label>
  )
}


export function Date({value, onChange, onBlur, name, ...rest}) {
    return (
    <input
      type="date"
      name={name}
      value={value}          
      onChange={onChange}    
      onBlur={onBlur} 
      className=" border w-55 p-4 border-white focus:outline-none bg-white rounded-md text-gray-500  px-3"
      {...rest}
     />
  )

}
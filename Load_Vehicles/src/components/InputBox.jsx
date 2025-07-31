export function InputBox({ placeholder }) {
  return (
    <input type="text"
      placeholder={placeholder}
      className="p-4 bg-white text-[#7b7b7b] w-55 2xl:w-62 ml-2 2xl:mt-7 outline-none rounded-md" />
  )
}

export function RadioBox() {
  return (
    <>
      <input type="radio" id="business" name="radiobox" className=" appearance-none" />
      <label for="business" className="bg-white text-[#7b7b7b] p-4 w-57  font-semi-bold cursor-pointer flex justify-center items-center hover:bg-[#f2f0f0]  rounded-l-md">Business</label><br />
      <input type="radio" id="personal" name="radiobox" className="appearance-none" />
      <label for="personal" className="bg-white text-[#7b7b7b] p-4 w-57 -ml-7 font-semi-bold cursor-pointer flex items-center justify-center hover:bg-[#f2f0f0] rounded-r-md border-r-2 border-l-black">Personal</label>
    </>
  )
}

export function NextButton({ label }) {
  return (
    <button className="p-4 w-113 2xl:w-62 mt-4 2xl:mt-10 bg-[#3d3d3d] hover:bg-[#1d1d1d] text-white font-bold cursor-pointer rounded-md">
      {label}
    </button>
  )
} 
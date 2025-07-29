export function RadioBox() {
  return (
    <>
      <input type="radio" id="business" name="radiobox" className="mr-2 2xl:mr-3" />
      <label for="business">Business</label><br />
      <input type="radio" id="personal" name="radiobox" className="mr-2 2xl:mr-3" />
      <label for="personal">Personal</label>
    </>
  )
}

export function InputBox({ placeholder }) {
  return (
    <input type="text"
      placeholder={placeholder}
      className="p-5 bg-white text-black w-60 2xl:w-65 mt-2 2xl:mt-5 outline-none" />
  )
}

export function SearchButton({ label }) {
  return (
    <button className="p-5 w-60 2xl:w-65 mt-4 2xl:mt-8 bg-green-900 hover:bg-green-950 text-white font-bold cursor-pointer">
      {label}
    </button>
  )
} 
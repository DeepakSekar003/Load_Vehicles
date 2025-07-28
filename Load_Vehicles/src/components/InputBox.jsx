export default function InputBox({ placeholder }) {
  return (
    <input type="text"
      placeholder={placeholder}
      className="p-5 bg-white text-black w-60 2xl:w-65 mt-2 2xl:mt-5 outline-none" />
  )
}
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="flex  items-center px-4 2xl:px-5 py-2 2xl:py-5 bg-[#052038]">
      <div className="logo">
        <img src={logo} alt="" className="h-18 2xl:h-20 w-18 2xl:w-20 rounded-full " />
      </div>

      <nav className="flex 2xl:text-2xl ml-8 2xl:ml-13 space-x-6 2xl:space-x-8">
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#052038] px-4 2xl:px-5 py-2 2xl:py-3 rounded">About us</a>
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#052038] px-4 2xl:px-5 py-2 2xl:py-3 rounded">Contact us</a>
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#052038] px-4 2xl:px-5 py-2 2xl:py-3 rounded">Home</a>
      </nav>

      <nav className="flex 2xl:text-2xl ml-auto space-x-6 2xl:space-x-8">
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#052038] px-4 2xl:px-5 py-2 2xl:py-3 rounded">Login</a>
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#052038] px-4 2xl:px-5 py-2 2xl:py-3 rounded">Sign-up</a>
      </nav>
    </header>
  )
}
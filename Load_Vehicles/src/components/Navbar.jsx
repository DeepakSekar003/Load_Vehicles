import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="flex z-1 fixed top-0 left-0 right-0  items-center px-4 2xl:px-5 py-2 2xl:py-5 bg-[#3d3d3d] ">
      <div className="logo">
        <img src={logo} alt="" className="h-18 2xl:h-20 w-18 2xl:w-20 rounded-full " />
      </div>

      <nav className="flex 2xl:text-2xl ml-8 2xl:ml-13 space-x-6 2xl:space-x-8">
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#7b7b7b] px-4 2xl:px-5 py-2 2xl:py-3 rounded-md">About us</a>
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#7b7b7b] px-4 2xl:px-5 py-2 2xl:py-3 rounded-md">Contact us</a>
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#7b7b7b] px-4 2xl:px-5 py-2 2xl:py-3 rounded-md">Home</a>
      </nav>

      <nav className="flex 2xl:text-2xl ml-auto space-x-6 2xl:space-x-8">
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#7b7b7b] px-4 2xl:px-5 py-2 2xl:py-3 rounded-md">Login</a>
        <a href="#" className="text-white font-semibold hover:bg-white hover:text-[#7b7b7b] px-4 2xl:px-5 py-2 2xl:py-3 rounded-md">Sign-up</a>
      </nav>
    </header>
  )
}
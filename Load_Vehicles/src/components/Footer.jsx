const Footer = () => {
  return (
    <>
       <div className=" bg-[#3d3d3d] flex p-5 gap-6 ">
       <div className="flex flex-col">
          <h2 className=" font-bold">LV-Logistics</h2>
          <p className="flex mt-2">Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Saepe molestias labore <br /> pariatur sed?</p>
          <div className="flex gap-3 mt-4 flex-row">
            <a className="border flex justify-center items-center p-2 h-10 w-10 rounded-md " href="#"><i class='bx bxl-facebook'></i></a>
            <a className="border flex justify-center items-center p-2 h-10 w-10 rounded-md " href="#"><i class='bx bxl-twitter'></i></a>
            <a className="border flex justify-center items-center p-2 h-10 w-10 rounded-md " href="#"><i class='bx bxl-instagram'></i></a>
            <a className="border flex justify-center items-center p-2 h-10 w-10 rounded-md " href="#"><i class='bx bxl-tiktok'></i></a>
        </div>
        </div>
     <div className="flex list-none ml-35 flex-col">
     <h3 className="font-bold">Support</h3>
     <div className="flex flex-col mt-2">
     <li><a  href="#">Help & Support</a></li>
     <li><a  href="#">Terms of Use</a></li>
      </div>
        </div>
      <div className="flex list-none ml-35 flex-col">
        <h3 className="mb-2 font-bold">View Guides</h3>
        <li><a href="#">Features</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blogs Posts</a></li><br />
      </div>

      <div className="flex  flex-col ml-35">
        <h3 className=" mb-2 font-bold">Contact</h3>
       <div className="">
        <span className="flex gap-4  "><i class='bx bxs-map'></i>saraswathi complex,<br />D73-North East Extension,<br />chennai-600028</span><br />
        <span className="flex gap-4  "><i class='bx bxs-phone'></i>+91 444 666 4567</span><br />
        <span className="flex gap-4  "><i class='bx bxs-envelope'></i>lvlogistics003@gmail.com</span>
        </div>
      </div>

        </div>
           <div className=" flex items-center justify-center bg-[#3d3d3d]">
          <p>&#169; LV ALL RIGHT RESERVED</p>
        </div>
        </>

  )
}

export default Footer;
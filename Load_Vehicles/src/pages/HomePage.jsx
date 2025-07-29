import Navbar from "../components/Navbar";
import RadioBox from "../components/RadioBox"
import InputBox from "../components/InputBox";
import SearchButton from "../components/SearchButton";
import main from "../assets/main.jpg";
import images from "../images.json";

export default function HomePage() {

  const firstImage = images[0];
  const secondImage = images[1];
  const thirdImage = images[2];
  const fourthImage = images[3];
  const fifthImage = images[4];
  const sixthImage = images[5];
  return (
    <div className="bg-[#052038] min-h-screen text-white">
      <Navbar />

      <section className="pt-12 2xl:pt-20 px-8 2xl:px-23">
        <h1 className="text-3xl 2xl:text-5xl inline-block font-bold ml-10 2xl:ml-6 tracking-wider leading-relaxed">
          Thousands of trucks at <br /> your fingertips...
        </h1>

        <div className="mt-6 ml-26 2xl:mt-15 2xl:text-2xl">
          <RadioBox />
        </div>

        <div className="ml-26 mt-6 2xl:mt-15">
          <InputBox placeholder="Enter Pickup Location" /><br />
          <InputBox placeholder="Enter Drop Location" /><br />

          <SearchButton label="Search" />
        </div>

        <div className="ml-130 2xl:ml-160 -mt-100 2xl:-mt-140">
          <img src={main}
            alt="Main"
            className="h-100 2xl:h-140 w-200 2xl:w-250 rounded-sm  object-cover" />
        </div>

      </section>
       <section>
          <h1 className="text-left text-2xl  mt-9 ml-5 font-bold 2xl:text-6xl">
            Our Services
          </h1>
          <div className="truck grid grid-cols-3 gap-4 p-[30px]  justify-items-center ">
            <div className="text">
              <div className="image  h-[180px] w-[210px]  g-[50px] border-[5px] border-solid border-[#ffc107]   bg-white  2xl:h-[200px]">
                <img
                  src={`/images/${sixthImage.name}`}
                  alt={sixthImage}
                  className="h-[150px]  w-[180px] 2xl:w-[300px] m-2  hover:scale-110 transition duration-500 object-cover 2xl:h-[180px]"
                />
              </div>
              <h2 className="title  font-bold text-center p-5 2xl:text-[25px]">
                ZOR AUTO
              </h2>
            </div>

            <div className="text">
              <div className="image  h-[180px] w-[210px]  g-[50px] border-[5px] border-solid border-[#ffc107]  bg-white  2xl:h-[200px]">
                <img
                  src={`/images/${firstImage.name}`}
                  alt={firstImage}
                  className=" h-[150px] w-[180px] 2xl:w-[300px] m-2  hover:scale-110 transition duration-500 object-cover 2xl:h-[180px]"
                />
              </div>
              <h2 className="title  font-bold text-center p-5 2xl:text-[25px]">
                TATA ACE
              </h2>
            </div>

            <div className="text">
              <div className="image  h-[180px] w-[210px]  g-[50px] border-[5px] border-solid border-[#ffc107]  bg-white  2xl:h-[200px]">
                <img
                  src={`/images/${secondImage.name}`}
                  alt={secondImage}
                  className=" h-[150px] w-[180px] 2xl:w-[300px] m-2   hover:scale-110 transition duration-500 object-cover 2xl:h-[180px]"
                />
              </div>
              <h2 className="title  font-bold text-center p-5 2xl:text-[25px]">
                EICHER
              </h2>
            </div>
            <div className="text">
              <div className="image  h-[180px] w-[210px] m-3 g-[50px] border-[5px] border-solid border-[#ffc107]  bg-white  2xl:h-[200px]">
                <img
                  src={`/images/${thirdImage.name}`}
                  alt={thirdImage}
                  className=" h-[150px] w-[180px] 2xl:w-[300px] m-2   hover:scale-110 transition duration-500 object-cover 2xl:h-[180px]"
                />
              </div>
              <h2 className="title  font-bold text-center p-3 2xl:text-[25px]">
                TEMPO{" "}
              </h2>
            </div>
            <div className="text">
              <div className="image  h-[180px] w-[210px] g-[50px] border-[5px] border-solid border-[#ffc107]   bg-white m-3 2xl:h-[200px]">
                <img
                  src={`/images/${fourthImage.name}`}
                  alt={fourthImage}
                  className="h-[150px] w-[180px] 2xl:w-[300px] m-2  hover:scale-110 transition duration-500 object-cover 2xl:h-[180px]"
                />
              </div>
              <h2 className="title  font-bold text-center p-3 2xl:text-[25px]">
                TIPPER{" "}
              </h2>
            </div>
            <div className="text">
              <div className="image h-[180px] w-[210px] g-[50px] border-[5px] border-solid border-[#ffc107]  bg-white  m-3 2xl:h-[200px]">
                <img
                  src={`/images/${fifthImage.name}`}
                  alt={fifthImage}
                  className=" h-[150px] w-[180px] 2xl:w-[300px] m-2  hover:scale-110 transition duration-500 object-cover 2xl:h-[180px]"
                />
              </div>
              <h2 className="title  font-bold text-center p-3 2xl:text-[25px]">
                EV LOAD{" "}
              </h2>
            </div>
          </div>
        </section>

    </div>
  )

}

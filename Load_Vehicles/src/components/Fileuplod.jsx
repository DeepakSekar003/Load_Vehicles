import { DriverFileuplod, NextButton, InputBox, Date } from "../components/InputBox";

const Filesuplod = ({ Next, Back }) => {
  return (
    <div className=" bg-[#7b7b7b] min-h-screen text-white">
      <div className="flex justify-center items-center pt-10 flex-row gap-2 ">
        <DriverFileuplod label="Uplod your DL [Front]" />
        <DriverFileuplod label="Uplod your DL [Back]" />
        <div className="flex flex-col mt-8 ml-8 gap-3">
          <InputBox placeholder="Enter Your DL Number" />
          <div>
            <h1>DL Valid till :</h1>
            <Date />
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center  flex-row gap-2 mt-5">
        <DriverFileuplod label="Uplod your Pan [Front]" />
        <DriverFileuplod label="Uplod your Pan [Back]" />
        <div className="ml-8 mt-8">
          <InputBox placeholder="Enter Your Pan Number" />
          <div className="flex mt-7 w-55">
            <NextButton label="Next &rarr; " onClick={Next} />
          </div>

        </div>
      </div>
      <div className="flex w-25 ml-[5%]">
        <NextButton label="&larr; Back" onClick={Back} />
      </div>
    </div>

  )
}

export default Filesuplod;



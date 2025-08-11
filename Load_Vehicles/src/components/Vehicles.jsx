import { DriverFileuplod, NextButton, Date } from "../components/InputBox"

const Vehicles = ({Next}) => {
  return (

    <div className="bg-[#7b7b7b] min-h-screen text-white">
      <div className="flex flex-row items-center justify-center pt-30 gap-4 ">
        < DriverFileuplod label="Uplod Your RC Book" />
        < DriverFileuplod label="Uplod Your Insurence" />
      </div>
      <div className="flex mr-85 items-center justify-center mt-4">
        <h1>Vehicle Model :</h1>
      </div>
      <div className="flex items-center justify-center flex-row ml-2 mt-2">

        <Date />
          <div className=" flex ml-4 w-55">
            <NextButton label="Next" onClick= {Next} />
          </div>
        </div>
    </div>


  )
}
export default Vehicles;
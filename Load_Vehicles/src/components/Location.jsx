import { NextButton } from "../components/InputBox";
import Searchinput from '../components/inputPD'

const Location = ({ Next, Back }) => {
  return (
    <div className="flex flex-col  justify-center items-center bg-[#7b7b7b] min-h-screen text-white">
      <div className="border p-8 rounded-md">
        <h1 className="text-3xl mb-2  font-semibold">Location</h1>
        <div className="">
          <Searchinput text={"Enter the location"} />
          <div className="flex w-25 mt-3 ">
            <NextButton label="Next &rarr;" onClick={Next} />
          </div>

        </div>

      </div>
      <div className="flex w-25 mr-[80%] -mb-6">
        <NextButton label="&larr; Back" onClick={Back} />
      </div>
    </div>
  )
}

export default Location;
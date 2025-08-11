import { InputBox, NextButton } from "../components/InputBox";

const Location = ({Next}) => {
  return (
    <div className="flex flex-col  justify-center items-center bg-[#7b7b7b] min-h-screen text-white">
      <div className="border p-8 rounded-md">
        <h1 className="text-3xl mb-2  font-semibold">Location</h1>
        <div className="">
          <InputBox placeholder="Enter Your Location" />
            <div className="flex w-25 mt-3 ">
              <NextButton label="Next" onClick= {Next} />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Location;
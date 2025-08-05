import { Link } from "react-router-dom";
import { InputBox, NextButton } from "../components/InputBox"

const Accountdetail = () => {
  return (
    <div className="bg-[#7b7b7b] flex min-h-screen items-center justify-center  text-white" >
      <div className="flex flex-col  p-12 rounded-md border gap-2">
        <InputBox placeholder="Bank Name" />
        <InputBox placeholder="Branch" />
        <InputBox placeholder="Account Number" />
        <InputBox placeholder="Name" />
        <InputBox placeholder="Ifsc Code" />
        <Link to="/Details">
          <div className="flex w-55">
            <NextButton label="Next" />
          </div>
        </Link>
      </div>
    </div>

  )
}

export default Accountdetail;
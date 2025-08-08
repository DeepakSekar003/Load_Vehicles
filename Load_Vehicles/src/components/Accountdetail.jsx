import { InputBox, NextButton } from "../components/InputBox"

const Accountdetail = ({Next}) => {
  return (
    <div className="bg-[#7b7b7b] flex min-h-screen items-center justify-center  text-white" >
      <div className="flex flex-col  p-12 rounded-md border gap-2">
        <InputBox placeholder="Bank Name" />
        <InputBox placeholder="Branch" />
        <InputBox placeholder="Account Number" />
        <InputBox placeholder="Name" />
        <InputBox placeholder="Ifsc Code" />
     
          <div className="flex w-55">
            <NextButton label="Next" onClick={Next} />
          </div>
    
      </div>
    </div>

  )
}

export default Accountdetail;
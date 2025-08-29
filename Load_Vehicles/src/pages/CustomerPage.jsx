import { useNavigate } from 'react-router-dom'
import { RadioBox } from '../components/InputBox'
import Navbar from '../components/Navbar'
import Searchinput from '../components/inputPD'
import { useState } from 'react'
const CustomerPage = ({ Next }) => {
     const[selectedType, setSelectedType] = useState("");
     const navigate = useNavigate();
     const next = () =>{
        if(!selectedType){
            alert("Please select a type (Business or Personal)")
        }
        if(selectedType==='Business'){
            navigate("/BusinessSec")
        }else if(selectedType==='Personal'){
            navigate("/PersonalSec")
        }
     }
    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-[#7b7b7b]'>
                <div className='flex flex-col justify-center items-center '>
                    <div className='m-40 p-10 bg-[#3d3d3d] w-xl flex justify-center flex-col items-center rounded-2xl'>
                        <h1 className="font-bold text-3xl text-white p-5">
                            Thousands of trucks at your fingertips.
                        </h1>
                        <div className='flex flex-row p-5 gap-1'>
                            <Searchinput text={"Enter Pickup Location"} />
                            <Searchinput text={"Enter Drop Location"} />
                        </div>
                        <RadioBox options={["Business","Personal"]}
                         selectedOption={selectedType}
                        onChange={(value) => setSelectedType(value)}/>


                        <button onClick={next} className='bg-white text-[#3d3d3d] text-lg w-40 mt-10 h-12 p-3 text-center rounded-md hover:font-bold cursor-pointer '>
                        Next</button>

                    </div>

                </div>

            </div>

        </>
    )
}

export default CustomerPage
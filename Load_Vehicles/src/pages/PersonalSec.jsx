import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react';
const PersonalSec = ({Back}) => {
       const [today, setToday] = useState('');
      useEffect(() => { 
        const date = new Date();
        const formatted = date.toISOString().split('T')[0];
        setToday(formatted)
      }, []) 
    return (
        <>
            <Navbar />

            <div className='min-h-screen bg-[#7b7b7b] '>

                <div className='flex flex-col justify-center items-center  py-40 fixed inset-0'>

                    <div className='m-5 p-5 bg-[#3d3d3d] w-md flex justify-center flex-col items-center rounded-2xl'>
                        <h1 className='font-bold text-3xl m-5 text-white'>Personal</h1>
                        <select name="Vehicles" id="" className="w-55 p-5 m-5  bg-white rounded-md text-gray-500 focus:outline-none px-3 ">
                            <option value="" disabled selected> Select Vehicles</option>
                            <option value="TATA ACE">TATA ACE</option>
                            <option value="EICHER">EICHER</option>
                            <option value="TEMPO">TEMPO</option>
                            <option value="TIPPER">TIPPER</option>
                            <option value="EV LOAD">EV LOAD</option>
                            <option value="ZOR AUTO">ZOR AUTO</option>
                        </select>
                    <div className='mb-8'>
                     <div className=" border w-55 p-4 border-white bg-white rounded-md text-gray-500  px-3">
      <input type="date" className="focus:outline-none" min={today} onChange={() => {}}/>
 </div>  
                    </div>
                    <button className='bg-white text-[#3d3d3d] text-lg w-40 mb-5  h-12 p-3 text-center rounded-md hover:font-bold cursor-pointer'>Book Ride</button>
                    </div>

                    

                </div>


            </div>

        </>
    )
}

export default PersonalSec
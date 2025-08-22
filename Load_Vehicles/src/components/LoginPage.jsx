import { useState } from 'react'
import B_mobilenum from './B_mobilenum'
import Otp from './Otp'
import HomePage from '../pages/HomePage'
import SignupPage from "../components/SignupPage"
import CustomerPage from '../pages/CustomerPage'
const LoginPage = () => {

const [flow,setFlow] = useState(null)
const [steps,setSteps]= useState(0)
const [selectedUser, setSelectedUser] = useState(null); 

const handlePage = () =>setSteps((prevs)=>prevs + 1)
const handleBack = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

const book =[
    <B_mobilenum Next={handlePage} setSelectedUser={setSelectedUser} />,
    <Otp Next={handlePage}  Back={handleBack} selectedUser={selectedUser} />,
   <CustomerPage Next={handlePage} />
];

const earn =[
    <B_mobilenum Next={handlePage} setSelectedUser={setSelectedUser}/>,
    <Otp Next={handlePage}  Back={handleBack} selectedUser={selectedUser}/>,
    <HomePage Next={handlePage}/>
];

const renderSteps =()=>{
    if(flow=='book-ride') return book[steps]
    if(flow=='start-earn') return earn[steps]

  return (
  
        <div className='min-h-screen bg-[#7b7b7b]'>

            <div className='w-[600px] h-[420px] bg-[#7b7b7b] inset-0 m-auto fixed rounded-2xl  border border-white text-white '>
                <h1 className='text-5xl  font-bold text-center p-8'>Login</h1>

                <div className='w-[100%] h-[50%] my-12 flex items-center justify-around flex-wrap '>

                <button onClick={()=>{setFlow('book-ride');
                    setSteps(0);
                    }}  
                className='border w-[40%] h-[40%]   text-white text-xl rounded-md hover:bg-[#1d1d1d] text-center p-6 cursor-pointer' >Book Ride</button>

               <button onClick={()=>{setFlow('start-earn');
                    setSteps(0);
                    }}  
                className='border w-[40%] h-[40%]   text-white text-xl rounded-md hover:bg-[#1d1d1d] text-center p-6 cursor-pointer' >Start Earning</button>
                <p>Don't have an account? <a className='font-bold' href="/SignupPage">Sign-up</a></p>
                 
                </div>
               


            </div>
        </div>


  )
}
return <>{renderSteps()}</>
}

export default LoginPage
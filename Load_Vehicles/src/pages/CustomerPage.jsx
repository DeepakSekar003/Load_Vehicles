import { RadioBox } from '../components/InputBox'
import Navbar from '../components/Navbar'
import Searchinput from '../components/inputPD'

const CustomerPage = ({ Next }) => {
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

                        <RadioBox />

                        <button className='bg-white text-[#3d3d3d] text-lg w-40 mt-10 h-12 p-3 text-center rounded-md hover:font-bold cursor-pointer '>
                        Next</button>

                    </div>

                </div>

            </div>

        </>
    )
}

export default CustomerPage
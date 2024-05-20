import React from 'react'
import Browser from '../assets/motionarteffect-img8.png'

const BrowserSupport = () => {
  return (
    <div className='bg-gradient-to-b from-[#0D061F] to-[#251E35] p-[2rem]  text-[white] flex justify-center items-center xs2:w-[100%] xs1:w-[90%] mt-[2rem] rounded-[1rem] border border-[#4a4a4a] py-[2rem] z-[1] relative  '>
        <div className='flex flex-col items-center  ' >
            <h1 className='xs2:text-[1.8rem] xs1:text-[1.4rem] font-bold'>Supported by All Popular Browsers</h1>
            <p className='xs2:w-[28rem] text-center text-[#868686] text-[1.1rem] my-[1.5rem] '>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            <img src={Browser} alt="browser"  />
        </div>
    </div>
  )
}

export default BrowserSupport
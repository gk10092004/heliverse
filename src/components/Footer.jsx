import React from 'react'

const Footer = () => {
  return (
    <div className='py-[0.7rem] px-[1rem] text-[0.9rem] flex justify-center items-center bg-gradient-to-r from-[#F87516] to-[#5E11FF] w-[100%] text-[white] relative z-[3] ' >
        <div  className='flex xs1:flex-col xs1:gap-[1rem] xs2:gas-[0rem] xs2:flex-row  xs1:items-center  justify-between xs2:items-center xs1:text-center w-[100%] ' >
            <div className='xs1:order-2 xs2:order-none' >&#169; 2023 Copywrite. All rights reserved by QodeMatrix</div>
            <div className='xs1:order-1 xs2:order-none' >
                <ul className='flex gap-[1.5rem]   text-[#b5b5b5]  '  >
                    <li><a href="https://qodematrix.com/docs/motion-art-for-elementor/" target='_blank' className='hover:text-[#ffffff]' >Documentation</a></li>
                    <li><a href="https://support.qodematrix.com/login" target='_blank' className='hover:text-[#ffffff]' >Support</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
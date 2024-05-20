import React from 'react'
import Logo from '../assets/logo.png'
const Nav = () => {
  return (
    <nav className='bg-[#262626] flex justify-between text-[white] items-center py-[0.6rem] px-[1rem] fixed w-[100vw] z-[5] '>
        <div  >
            <a 
              href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" 
              className='flex items-center '
            >
                <img src={Logo} alt="hello" className='w-[1.5rem]' />
                <h1 className='text-[1.7rem] font-bold' >envato<span className='font-light'>market</span></h1>
            </a>
        </div>
        <div className='flex' >
          <a 
            href="https://codecanyon.net/checkout/102291537/create_account" 
            className=' px-[1rem] py-[0.2rem] rounded-[0.3rem] bg-[#82b440] align-middle '
          >
            Buy now
          </a>
        </div>
    </nav>
  )
}

export default Nav
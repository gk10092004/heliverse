import React from 'react'
import Envato from '../assets/motionarteffect-img1.png'
import Star from '../assets/motionarteffect-img4.png'

const StarCard = (props) => {
  return (
    <div className=' bg-[transparent] text-[white] flex justify-center items-center'>
        <div className='flex items-center p-[1rem] gap-[0.8rem] ' >
            <img src={props.Main} alt="d" />
            <div className='flex flex-col gap-[0.8rem]'>
                <img src={Star} alt="" />
                <div className='flex font-semibold gap-[0.2rem]'>
                    <div className='font-bold' >{props.Score} <span className='font-semibold' >Score,</span> </div>
                    <span >{props.Review}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StarCard
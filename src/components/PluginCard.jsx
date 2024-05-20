import React from 'react'
import Light from '../assets/motionarteffect-img9.png'

const PluginCard = (props) => {
  return (
    <div className='border border-[#525252] p-[1.8rem] xs3:w-[25rem] xs2:w-[45%] xs1:w-[100%] rounded-[0.8rem] bg-gradient-to-b from-[#0D061F] to-[#251E35]  ' >
        <img src={props.Plugin} alt="" />
        <h1 className='text-[1.5rem] font-semibold my-[1.5rem] ' >{props.PluginHead}</h1>
        <p className='text-[1.1rem]  text-[#868686]' >{props.PluginPara}</p>
    </div>
  )
}

export default PluginCard
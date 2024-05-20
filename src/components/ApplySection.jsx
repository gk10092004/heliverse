import React from 'react'

const ApplySection = (props) => {
  return (
    <div className='bg-gradient-to-b from-[#0D061F] to-[#251E35] text-[white] p-[2rem] xs4:w-[35rem] xs2:rounded-[1rem] xs4:rounded-[0.8rem] border border-[#3e3e3e] ' >
        <div className='flex flex-col'>
            <h1 className='xs2:text-[2rem] xs4:text-[1.5rem] font-bold'>{props.SectionHead}</h1>
            <p className='my-[1rem] text-[#868686] xs2:text-[1.3rem] xs4:text-[1.1rem]  '>{props.SectionPara}</p>
            <img src={props.SectionImg} alt="" />
        </div>
    </div>
  )
}

export default ApplySection
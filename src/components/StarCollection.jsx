import React from 'react'
import StarCard from './StarCard'
import Envato1 from '../assets/motionarteffect-img2.png'
import Envato2 from '../assets/motionarteffect-img1.png'
import Envato3 from '../assets/motionarteffect-img3.png'

const StarCollection = () => {
    const Data = [
        {
            mainImg : Envato1,
            score : "4.5",
            review : "9 reviews"
        },
        {
            mainImg : Envato2,
            score : "4.5",
            review : "9 reviews"
        },
        {
            mainImg : Envato3,
            score : "4.5",
            review : "9 reviews"
        }
    ]
  return (
    <div className='bg-[transparent] flex flex-col items-center xs1:my-[1rem] xs2:gap-[4rem] xs1:gap-[2rem] text-[white] w-[100%] relative z-[1] '>
        <h2 className='font-semibold xs2:p-[0.5rem] xs2:text-[1.5rem] xs1:text-[1.2rem] xs1:text-center '>Trusted by thousands of users around the world</h2>
        <div className='flex xs2:flex-wrap xs2:justify-center xs2:gap-[20%] xs3:gap-[0rem] xs3:justify-between xs1:flex-col xs2:flex-row xs2:p-[1rem] w-[100%]' >
            {
                Data.map(items => { 
                    return(
                        <StarCard Main={items.mainImg} Score={items.score} Review={items.review}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default StarCollection
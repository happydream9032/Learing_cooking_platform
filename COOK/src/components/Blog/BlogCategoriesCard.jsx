import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCategoriesCard({ img, title,type="svg" }) {
  return (
    <Link to={title}>
      <div style={{ background: 'linear-gradient(95.49deg, #FFDBB8 2.04%, rgba(255, 187, 121, 0.8) 99.48%)' }} className='h-[134px] flex gap-[10px] rounded-[15px] justify-center items-center'>
      {/* <div style={{ background: 'linear-gradient(95.49deg, #FFDBB8 2.04%, rgba(255, 187, 121, 0.8) 99.48%)' }} className='w-[424px] h-[134px] flex gap-[10px] rounded-[15px] justify-center items-center'> */}
        {type === "svg"? img :<img className='w-[32px]' src={img} alt="" />}
        <p className='font-rubik font-medium text-[28px] md:text-[24px] md:leading-[31.44px] sm:text-[24px] sm:leading-[31.44px] leading-[36.68px] tracking-[-0.02em]'>{title}</p>
      </div>
    </Link>
  )
}

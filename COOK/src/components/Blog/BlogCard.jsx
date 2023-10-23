import React from 'react'
import { Link } from 'react-router-dom'
import BlogImage1 from "../../assets/Blog/BlogImage1.png"

export default function BlogCard() {
  return (
    // <div className='w-[393px] min-h-[371px] '>
    <Link to={'/blog/category/article'}>
      <div className=' min-h-[371px] '>
        <img src={BlogImage1} alt="" />
        <div className='p-[20px]'>
          <div className='flex justify-between items-center'>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Home Cooking</button>
            <div className='flex items-center gap-[6px]'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 10H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>05.26.2023</p>
            </div>
          </div>
          <p className='font-rubik font-medium text-[26px] leading-[34.06px] tracking-[-0.02em] mt-[15px]'>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
    </Link>
  )
}

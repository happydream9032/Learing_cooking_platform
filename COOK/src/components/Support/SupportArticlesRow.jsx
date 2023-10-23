import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SupportArticlesRow({ articleTitle,category }) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/support/article',{state:{category,...articleTitle}})} className='cursor-pointer flex justify-between items-center pl-[10px] pt-[24px]'>
      <p className='min-w-[60vw] font-outfit font-medium text-[18px] leading-[22.68px] py-[10.5px]'>{articleTitle.articleTitle}</p>
      <svg className='xsm:hidden min-w-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

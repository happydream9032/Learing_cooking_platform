import React from 'react'

export default function SortBy() {
  return (
    <div className='overflow-hidden absolute z-40 w-full flex flex-col bg-[white] border-2 border-t-[0px] border-[rgba(255,219,184,1)] rounded-bl-[8px] rounded-br-[8px]'>
      <div className='h-[55px] p-[16px] group hover:bg-primary cursor-pointer'>
        <p className='font-outfit font-normal text-[18px] leading-[22.68px]  group-hover:text-[white]'>Popularity</p>
      </div>
      <div className='h-[55px] p-[16px] group hover:bg-primary cursor-pointer'>
        <p className='font-outfit font-normal text-[18px] leading-[22.68px]  group-hover:text-[white]'>Price (high to low)</p>
      </div>
      <div className='h-[55px] p-[16px] group hover:bg-primary cursor-pointer'>
        <p className='font-outfit font-normal text-[18px] leading-[22.68px]  group-hover:text-[white]'>Price (low to high)</p>
      </div>
    </div>
  )
}

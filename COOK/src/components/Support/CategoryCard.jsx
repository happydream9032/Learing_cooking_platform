import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AutherProfile from "../../assets/Support/AutherProfile.png";

export default function CategoryCard({ title, description, icon, type = "svg" }) {
  const [arr, setArr] = useState([1, 2, 3]);

  return (
    <div className='min-h-[197px] rounded-[8px] border border-[rgba(255,219,184,1)] m-auto py-[20px] pl-[76px] md:pl-[67px] sm:pl-[67px] pr-[39px] md:pr-[15px] sm:pr-[15px] xsm:pl-[19px] xsm:pr-[17px] relative mt-[58px] xsm:py-0 xsm:pt-[58px] xsm:pb-[16px]'>
      {type === 'svg' ? icon : <img className='absolute top-[-34px] left-[-29px] xsm:left-[19px] xsm:top-[-34px] xsm:w-[74px] xsm:h-[74px]' src={icon} />}
      <div className='mb-[29px] xsm:mb-[48px]'>
        <h1 className='font-rubik font-semibold text-[28px] leading-[33.18px] tracking-[-0.02em] text-TextColor mb-[7px]'>{title}</h1>
        <p className='font-outfit font-normal text-[18px] leading-[27px] text-TextColorSec'>{description}</p>
      </div>
      <div className='flex justify-between items-center xsm:flex-col xsm:items-start'>
        <div className='flex gap-[7px] items-center'>
          <div className='flex w-fit'>
            {arr.map((n, index) => {
              const adjustedNumber = arr.length - index;
              const leftPosition = `-${index * 18}px`;
              return (
                <img
                  key={index}
                  style={index !== 0 ? { left: leftPosition, zIndex: adjustedNumber } : { zIndex: adjustedNumber }}
                  className='relative w-[35px]'
                  src={AutherProfile}
                  alt=""
                />
              );
            })}
          </div>
          <p style={{ position: 'relative', left: "-" + (arr.length - 1) * 18 + "px" }} className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>50+ authors</p>
        </div>
        <Link className='xsm:mt-[30px]' to={title} state={{ category: title }}>
          <div className='flex gap-[9px] items-center'>
            <p className='font-outfit font-semibold text-[16px] leading-[18.13px] text-[rgba(210,119,34,1)]'>View all articles</p>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17.5L17 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 7.5H17V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}

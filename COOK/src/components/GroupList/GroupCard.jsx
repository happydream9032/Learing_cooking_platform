import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GroupCard1 from "../../assets/GroupList/GroupCard1.png";
import AutherProfile from "../../assets/Support/AutherProfile.png";

export default function GroupCard({ background = 'white', divRef = null, width }) {

  const [arr, setArr] = useState([1, 2, 3]);

  return (
    <Link to={'/group-page'}>
      <div ref={divRef} style={{ background: background, }} className='landingExploreAndLearn rounded-[12px] border border-[rgba(255,219,184,1)]'>
        <div className='relative'>
          <div className='flex gap-[17px] absolute top-[15px] left-[14px]'>
            <button className='h-[32px] px-[12px] bg-primary2 rounded-[5px] font-outfit font-medium text-[16px] leading-[24px] text-[white]'>For Beginner</button>
            <button className='h-[32px] px-[12px] bg-primary2 rounded-[5px] font-outfit font-medium text-[16px] leading-[24px] text-[white]'>Deserts</button>
          </div>
          <img src={GroupCard1} className='w-full' alt="" />
        </div>
        <div className='divide-y mx-[16px] divide-[rgba(255,219,184,1)]'>
          <div className='mt-[16px] flex flex-col gap-[16px]'>
            <h2 className='font-rubik font-semibold text-[28px] leading-[33.18px] tracking-[-0.02em]'>Group lesson name</h2>
            <div className='flex gap-[21px] items-center'>
              <p className='font-outfit text-[18px] leading-[22.68px] font-medium'>Michael Doe</p>
              <div className='flex gap-[7px] items-center'>
                <p className='font-kanit font-bold text-[20px] leading-[29.9px] text-primary'>5</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1.5L10.163 5.77865L15 6.46898L11.5 9.79758L12.326 14.5L8 12.2787L3.674 14.5L4.5 9.79758L1 6.46898L5.837 5.77865L8 1.5Z" fill="#D27722" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <p className='font-outfit font-normal text-[16px] leading-[24px] w-full '>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet...</p>
          </div>
          <div className='flex justify-between items-center mt-[16px] py-[16px]'>
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
            <p className='font-rubik font-bold text-[24px] leading-[28.44px] text-primary'>$19</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

import React from 'react'

export default function OnlineChat() {
  return (
    <>
      <div className='hideScrollbar flex-1 pl-[36px] pr-[64px] w-full overflow-auto'>
        <div className='flex flex-col justify-end h-full w-full m-auto gap-[5.5vh]'>
          <div className='w-full max-w-[535px] xsm:max-w-[320px] ml-[0px] h-fit mx-auto bg-[rgba(255,253,244,1)] rounded-[12px] rounded-tl-none px-[16px] py-[12px]'>
            <p className='text-TextColor font-outfit font-[400] text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Lectus amet duis venenatis bibendum sed. Sed lacus neque orci feugiat turpis cursus.</p>
          </div>
          <div className='w-full max-w-[535px] xsm:max-w-[320px] mr-[0px] h-fit mx-auto self-end bg-primary2 rounded-[12px] rounded-br-none px-[16px] py-[12px]'>
            <p className='text-[white] font-outfit font-[400] text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Lectus amet duis venenatis bibendum sed. Sed lacus neque orci feugiat turpis cursus.</p>
          </div>
        </div>
      </div>

      <div className='pl-[36px] pr-[64px] w-full m-auto flex gap-[17px] items-center mb-[41px] mt-[10.6vh]'>
        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="49.4383" height="50.6106" rx="24.7192" fill="#D27722" />
          <path d="M34.4383 24.6622L25.2483 33.8522C24.1225 34.9781 22.5955 35.6106 21.0033 35.6106C19.4112 35.6106 17.8842 34.9781 16.7583 33.8522C15.6325 32.7264 15 31.1994 15 29.6072C15 28.015 15.6325 26.4881 16.7583 25.3622L25.9483 16.1722C26.6989 15.4217 27.7169 15 28.7783 15C29.8398 15 30.8578 15.4217 31.6083 16.1722C32.3589 16.9228 32.7806 17.9408 32.7806 19.0022C32.7806 20.0637 32.3589 21.0817 31.6083 21.8322L22.4083 31.0222C22.0331 31.3975 21.5241 31.6083 20.9933 31.6083C20.4626 31.6083 19.9536 31.3975 19.5783 31.0222C19.2031 30.6469 18.9922 30.138 18.9922 29.6072C18.9922 29.0765 19.2031 28.5675 19.5783 28.1922L28.0683 19.7122" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className='relative w-full flex h-[47px] bg-[white] border border-[rgba(255,219,184,1)] px-[1.111vw]'>
          <input className='flex-1 outline-none' type="text" placeholder='Send a message' />
          <svg className='absolute right-[1.111vw] top-[50%] translate-y-[-50%]' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2.30518L11 13.3052" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2.30518L15 22.3052L11 13.3052L2 9.30518L22 2.30518Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      </>
  )
}

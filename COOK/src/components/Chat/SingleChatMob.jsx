import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import user from '../../assets/StudentDashboard/user.svg';

const SingleChatMob = () => {
  const location = useLocation()
  const navigate = useNavigate()
  let userId = 1

  return (
    <div>
      <header className='h-[72px] flex items-center px-[32px] justify-between bg-backSec'>
        <svg className='cursor-pointer' onClick={() => navigate(-1)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 24L12 16L20 8" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h1 className='font-outfit text-[16px] leading-[18.13px] tracking-[-0.02em] font-[600]'>Tutor Name</h1>
        <img src={user} className='h-[40px] w-[40px]' alt="" />
      </header>

      <div className='sm:pr-0 w-full'>
        <div className={`border-primaryLighten2 border-l-[2px] border-r-[2px] sm:border-r-0 `}>
          {location?.state && Object.keys(location?.state)?.length !== 0 && (
            <div className='flex flex-col '>
              <div className='z-10 max-h-[calc(100vh-158px)] min-h-[calc(100vh-158px)] overflow-auto'>
                <div className='ml-[32px] mr-[32px] mt-[38px] flex flex-col sm:ml-[20px] sm:mr-[20px]'>
                  {location.state.chats.map((chat, index) =>
                    userId === chat.senderId ? (
                      <div className='flex  my-[12px] justify-center ml-auto items-start' key={index}>
                        <div className='flex flex-col gap-[5px]'>
                          <div style={{ borderRadius: '16px 16px 0px 16px' }} className='flex justify-center items-center py-[12px] px-[16px] bg-primary'>
                            <p className='max-w-[326px] text-[white] text-[16px] font-[400] font-outfit '>{chat.message}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className='flex my-[12px]' key={index}>
                        <img src={user} className='mr-[11px] h-[42px] w-[42px] cursor-pointer rounded-full' alt='user' />
                        <div className='flex flex-col gap-[5px] mt-[10px]'>
                          <div style={{ borderRadius: '0px 12px 12px 12px' }} className='flex justify-center items-center py-[12px] px-[16px] bg-backSec'>
                            <p className='max-w-[326px]  text-[black] text-[16px] font-[400] font-outfit'>{chat.message}</p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className='h-[86px] px-[32px] '>
                <div className='flex gap-[16px] items-center'>
                  <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="49.4383" height="50.6106" rx="24.7192" fill="#D27722" />
                    <path d="M34.4383 24.6622L25.2483 33.8522C24.1225 34.9781 22.5955 35.6106 21.0033 35.6106C19.4112 35.6106 17.8842 34.9781 16.7583 33.8522C15.6325 32.7264 15 31.1994 15 29.6072C15 28.015 15.6325 26.4881 16.7583 25.3622L25.9483 16.1722C26.6989 15.4217 27.7169 15 28.7783 15C29.8398 15 30.8578 15.4217 31.6083 16.1722C32.3589 16.9228 32.7806 17.9408 32.7806 19.0022C32.7806 20.0637 32.3589 21.0817 31.6083 21.8322L22.4083 31.0222C22.0331 31.3975 21.5241 31.6083 20.9933 31.6083C20.4626 31.6083 19.9536 31.3975 19.5783 31.0222C19.2031 30.6469 18.9922 30.138 18.9922 29.6072C18.9922 29.0765 19.2031 28.5675 19.5783 28.1922L28.0683 19.7122" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className='flex items-center flex-1 border-[2px] border-primaryLighten2 rounded-[4px] h-[44px] px-[15px] '>
                    <input placeholder='Send a message' type="text" className='outline-none h-[40px]  flex-1' />
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4384 2.3053L11.4384 13.3053" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.4384 2.3053L15.4384 22.3053L11.4384 13.3053L2.43835 9.3053L22.4384 2.3053Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleChatMob
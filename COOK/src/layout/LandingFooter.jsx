import React from 'react'
import { Link } from 'react-router-dom'
import COOKLogo from "../assets/allAssets/COOK-logo.svg"

export default function LandingFooter() {
  return (
    <footer>
      <div className='w-[91.111vw] md:w-full sm:w-full xsm:w-full md:rounded-none sm:rounded-none xsm:rounded-none m-auto min-h-[419px] bg-primary2 rounded-tl-[25px] rounded-tr-[25px] mt-[135px] md:divide-y-0 sm:divide-y-0 xsm:divide-y-0 divide-y-2 divide-[rgba(255,219,184,0.2)]'>
        <div className='flex md:flex-col xsm:gap-y-[25px] sm:flex-col gap-y-[24px] gap-x-[13.75vw] lg:gap-x-[7.75vw] pt-[54px] pb-[43px] xsm:pb-[25px] md:ml-[5.749vw] md:mr-[5.749vw] sm:ml-[5.749vw] sm:mr-[5.749vw] ml-[91.5px] mr-[102.5px] xsm:flex-col'>
          <div className='flex justify-center  items-center md:justify-start sm:justify-start'>
            {/* <div className='text-[rgba(255,219,184,1)] font-bold font-rubik text-[56px] leading-[66.36px] tracking-[-0.02em]'>Cook</div> */}
            <Link to={'/'}>
              <img src={COOKLogo} alt="" />
            </Link>
          </div>

          <div className='flex-1 flex xsm:gap-y-[25px] justify-between sm:gap-[20px] xsm:flex xsm:flex-col xsm:items-center'>
            <div className='xsm:flex xsm:flex-col xsm:items-center'>
              <p className='font-outfit xsm:text-center font-normal text-[18px] leading-[27pxpx] text-[white]'>ABOUT US</p>
              <div className='flex flex-col gap-[8px] mt-[16px] xsm:flex xsm:flex-col xsm:items-center'>
                <Link className='' to={'/about'}>
                  <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Who we are</p>
                </Link>
                <Link to={'/about'}>
                  <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>How it works</p>
                </Link>
                <Link to={'/about'}>
                  <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>COOK reviews</p>
                </Link>
              </div>
            </div>

            <div className='xsm:flex xsm:flex-col xsm:items-center'>
              <p className='font-outfit xsm:text-center font-normal text-[18px] leading-[27pxpx] text-[white]'>FOR STUDENTS</p>
              <div className='flex flex-col gap-[8px] mt-[16px] xsm:flex xsm:flex-col xsm:items-center'>
                <Link to={'/blog'}>
                  <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>COOK blog</p>
                </Link>
                <Link to={'/search-tutors'}>
                  <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Find a tutor</p>
                </Link>
              </div>
            </div>

            <div className='xsm:flex xsm:flex-col xsm:items-center'>
              <p className='font-outfit xsm:text-center font-normal text-[18px] leading-[27pxpx] text-[white]'>FOR TUTORS</p>
              <div className='flex flex-col gap-[8px] mt-[16px] xsm:flex xsm:flex-col xsm:items-center'>
                <Link to={'/signup'}>
                  <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Become an online chef</p>
                </Link>
                <Link to={'/signup'}>
                  <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Teach cooking online</p>
                </Link>
              </div>
            </div>

            <div className='xsm:flex xsm:flex-col xsm:items-center'>
              <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[18px] leading-[27pxpx] text-[white]'>SUPPORT</p>
              <div className='flex flex-col gap-[8px] mt-[16px] xsm:flex xsm:flex-col xsm:items-center'>
                <Link to={'/support'}>
                  <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Need a help?</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='ml-[31px] mr-[45.5px] md:ml-0 sm:ml-0'>
          <div className='flex gap-[10.694vw] lg:gap-x-[4.75vw]  pt-[54px] xsm:pt-[25px] pb-[43px] xsm:pb-[25px] ml-[49.5px] md:ml-[5.928vw] sm:ml-[5.928vw] xsm:ml-0'>

            <div className='flex md:flex-1 md:justify-between sm:flex-1 sm:justify-between sm:gap-[20px] xsm:flex-col xsm:gap-y-[25px] xsm:items-center xsm:w-full'>
              <div className='text-[rgba(255,219,184,1)] font-normal font-outfit xsm:text-center text-[20px] leading-[30px] tracking-[-0.02em] xsm:flex xsm:flex-col xsm:items-center'>
                <p className='text-[20px] leading-[30px] font-outfit xsm:text-center font-normal'>USA</p>
                <p className='text-[20px] leading-[30px] font-outfit xsm:text-center font-normal'>Your address goes here</p>
                <p className='text-[20px] leading-[30px] font-outfit xsm:text-center font-normal'>+000000000000</p>
              </div>

              {/* Below 2 divs for tablet */}
              <div className='lg:hidden xl:hidden 2xl:hidden xsm:flex xsm:flex-col xsm:items-center'>
                <p className='font-outfit xsm:text-center font-normal text-[18px] leading-[27px] text-[white]'>COOK’s SOCIALS</p>
                <div className='flex gap-[10px] mt-[8px]'>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 2H7.5C4.73858 2 2.5 4.23858 2.5 7V17C2.5 19.7614 4.73858 22 7.5 22H17.5C20.2614 22 22.5 19.7614 22.5 17V7C22.5 4.23858 20.2614 2 17.5 2Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 11.3701C16.6234 12.2023 16.4813 13.0523 16.0938 13.7991C15.7063 14.5459 15.0932 15.1515 14.3416 15.5297C13.5901 15.908 12.7385 16.0397 11.9078 15.906C11.0771 15.7723 10.3098 15.3801 9.71485 14.7852C9.11993 14.1903 8.72774 13.4229 8.59408 12.5923C8.46042 11.7616 8.59208 10.91 8.97034 10.1584C9.3486 9.40691 9.9542 8.7938 10.701 8.4063C11.4478 8.0188 12.2978 7.87665 13.13 8.00006C13.9789 8.12594 14.7649 8.52152 15.3717 9.12836C15.9785 9.73521 16.3741 10.5211 16.5 11.3701Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 6.5H18.01" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1075_18106)">
                      <path d="M23.5 3.00005C22.5424 3.67552 21.4821 4.19216 20.36 4.53005C19.7577 3.83756 18.9573 3.34674 18.067 3.12397C17.1767 2.90121 16.2395 2.95724 15.3821 3.2845C14.5247 3.61176 13.7884 4.19445 13.273 4.95376C12.7575 5.71308 12.4877 6.61238 12.5 7.53005V8.53005C10.7426 8.57561 9.00127 8.18586 7.43101 7.39549C5.86074 6.60513 4.51032 5.43868 3.5 4.00005C3.5 4.00005 -0.5 13 8.5 17C6.44053 18.398 3.98716 19.099 1.5 19C10.5 24 21.5 19 21.5 7.50005C21.4991 7.2215 21.4723 6.94364 21.42 6.67005C22.4406 5.66354 23.1608 4.39276 23.5 3.00005Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1075_18106">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 2H15.5C14.1739 2 12.9021 2.52678 11.9645 3.46447C11.0268 4.40215 10.5 5.67392 10.5 7V10H7.5V14H10.5V22H14.5V14H17.5L18.5 10H14.5V7C14.5 6.73478 14.6054 6.48043 14.7929 6.29289C14.9804 6.10536 15.2348 6 15.5 6H18.5V2Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 8C18.0913 8 19.6174 8.63214 20.7426 9.75736C21.8679 10.8826 22.5 12.4087 22.5 14V21H18.5V14C18.5 13.4696 18.2893 12.9609 17.9142 12.5858C17.5391 12.2107 17.0304 12 16.5 12C15.9696 12 15.4609 12.2107 15.0858 12.5858C14.7107 12.9609 14.5 13.4696 14.5 14V21H10.5V14C10.5 12.4087 11.1321 10.8826 12.2574 9.75736C13.3826 8.63214 14.9087 8 16.5 8Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 9H2.5V21H6.5V9Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.5 6C5.60457 6 6.5 5.10457 6.5 4C6.5 2.89543 5.60457 2 4.5 2C3.39543 2 2.5 2.89543 2.5 4C2.5 5.10457 3.39543 6 4.5 6Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className='lg:hidden xl:hidden 2xl:hidden xsm:flex xsm:flex-col xsm:items-center'>
                <p className='font-outfit xsm:text-center font-normal text-[18px] leading-[27px] text-[white]'>LEGAL</p>
                <div className='flex flex-col gap-[8px] mt-[8px] xsm:flex xsm:flex-col xsm:items-center'>
                  <Link to={'/terms-of-service'}>
                    <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Terms Of Service</p>
                  </Link>
                  <Link to={'/copyright'}>
                    <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Privacy Policy</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section for laptop */}
            <div className='flex-1 flex justify-between xsm:hidden sm:hidden md:hidden'>
              <div className='flex gap-[5.416vw]'>
                <div>
                  <p className='font-outfit xsm:text-center font-normal text-[18px] leading-[27px] text-[white]'>COOK’s SOCIALS</p>
                  <div className='flex gap-[10px] mt-[8px]'>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 2H7.5C4.73858 2 2.5 4.23858 2.5 7V17C2.5 19.7614 4.73858 22 7.5 22H17.5C20.2614 22 22.5 19.7614 22.5 17V7C22.5 4.23858 20.2614 2 17.5 2Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.5 11.3701C16.6234 12.2023 16.4813 13.0523 16.0938 13.7991C15.7063 14.5459 15.0932 15.1515 14.3416 15.5297C13.5901 15.908 12.7385 16.0397 11.9078 15.906C11.0771 15.7723 10.3098 15.3801 9.71485 14.7852C9.11993 14.1903 8.72774 13.4229 8.59408 12.5923C8.46042 11.7616 8.59208 10.91 8.97034 10.1584C9.3486 9.40691 9.9542 8.7938 10.701 8.4063C11.4478 8.0188 12.2978 7.87665 13.13 8.00006C13.9789 8.12594 14.7649 8.52152 15.3717 9.12836C15.9785 9.73521 16.3741 10.5211 16.5 11.3701Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18 6.5H18.01" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1075_18106)">
                        <path d="M23.5 3.00005C22.5424 3.67552 21.4821 4.19216 20.36 4.53005C19.7577 3.83756 18.9573 3.34674 18.067 3.12397C17.1767 2.90121 16.2395 2.95724 15.3821 3.2845C14.5247 3.61176 13.7884 4.19445 13.273 4.95376C12.7575 5.71308 12.4877 6.61238 12.5 7.53005V8.53005C10.7426 8.57561 9.00127 8.18586 7.43101 7.39549C5.86074 6.60513 4.51032 5.43868 3.5 4.00005C3.5 4.00005 -0.5 13 8.5 17C6.44053 18.398 3.98716 19.099 1.5 19C10.5 24 21.5 19 21.5 7.50005C21.4991 7.2215 21.4723 6.94364 21.42 6.67005C22.4406 5.66354 23.1608 4.39276 23.5 3.00005Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1075_18106">
                          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5 2H15.5C14.1739 2 12.9021 2.52678 11.9645 3.46447C11.0268 4.40215 10.5 5.67392 10.5 7V10H7.5V14H10.5V22H14.5V14H17.5L18.5 10H14.5V7C14.5 6.73478 14.6054 6.48043 14.7929 6.29289C14.9804 6.10536 15.2348 6 15.5 6H18.5V2Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 8C18.0913 8 19.6174 8.63214 20.7426 9.75736C21.8679 10.8826 22.5 12.4087 22.5 14V21H18.5V14C18.5 13.4696 18.2893 12.9609 17.9142 12.5858C17.5391 12.2107 17.0304 12 16.5 12C15.9696 12 15.4609 12.2107 15.0858 12.5858C14.7107 12.9609 14.5 13.4696 14.5 14V21H10.5V14C10.5 12.4087 11.1321 10.8826 12.2574 9.75736C13.3826 8.63214 14.9087 8 16.5 8Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.5 9H2.5V21H6.5V9Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.5 6C5.60457 6 6.5 5.10457 6.5 4C6.5 2.89543 5.60457 2 4.5 2C3.39543 2 2.5 2.89543 2.5 4C2.5 5.10457 3.39543 6 4.5 6Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div>
                  <p className='font-outfit xsm:text-center font-normal text-[18px] leading-[27px] text-[white]'>LEGAL</p>
                  <div className='flex flex-col gap-[8.006px] mt-[8px]'>
                    <Link to={'/terms-of-service'}>
                      <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Terms Of Service</p>
                    </Link>
                    <Link to={'/copyright'}>
                      <p className='font-outfit hover:text-[white] transition-all duration-200 xsm:text-center font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Privacy Policy</p>
                    </Link>
                  </div>
                </div>
              </div>
              <p className='self-end text-[white] text-[20px] leading-[30px] font-outfit xsm:text-center'>2023 Copyright</p>
            </div>

          </div>
        </div>
        <p className='hidden md:flex sm:flex xsm:flex text-[white] font-outfit xsm:text-center font-normal text-[20px] leading-[30px] mt-[45px] justify-center pb-[34px]'>2023 ©</p>
      </div>
    </footer>
  )
}

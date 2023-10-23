import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../assets/Signin/Image1.png'
import Image2 from '../assets/Signin/Image2.png'
import MDImage1 from '../assets/Signin/MDImage1.png'
import MDImage2 from '../assets/Signin/MDImage2.png'
import Facebook from "../assets/Signup/Facebook.svg"
import Google from "../assets/Signup/Google.svg"
export default function Signin() {
  return (
    <main className='flex relative md:min-h-[1194px] sm:min-h-[1194px] xsm:h-[844px]'>
      <div className='blurSignin md:min-h-[1194px] sm:min-h-[1194px] bg-[rgba(255,219,184,1)] xsm:hidden w-[49.306vw] md:w-full sm:w-full h-[846px] flex gap-[13px] justify-center overflow-hidden'>
        <img className='w-[283px] relative top-[45px] md:hidden xsm:hidden sm:hidden' src={Image1} alt="" />
        <img className='w-[283px] md:hidden xsm:hidden sm:hidden' src={Image2} alt="" />
        <img className='max-h-[914px] hidden md:flex xsm:flex sm:flex w-[283px] relative md:absolute md:top-[0px] md:right-[-59px] sm:absolute sm:top-[0px] sm:right-[-59px]' src={MDImage2} alt="" />
        <img className='max-h-[603px] hidden md:flex xsm:flex sm:flex max-w-[283px] relative md:absolute md:bottom-[0px] md:left-[-60px] sm:absolute sm:bottom-[0px] sm:left-[-60px]' src={MDImage1} alt="" />
      </div>
      <div className='bg-[white] xsm:w-full md:border-2 md:border-[rgba(255,219,184,1)] md:rounded-[23px] md:h-fit sm:border-2 sm:border-[rgba(255,219,184,1)] sm:rounded-[23px] sm:h-fit w-[50.694vw] md:w-[80.24vw] sm:w-[80.24vw] h-full flex flex-col items-center pt-[105px] md:absolute sm:absolute xsm:absolute md:left-[50%] md:translate-x-[-50%] md:top-[50%] md:translate-y-[-50%] sm:left-[50%] sm:translate-x-[-50%] sm:top-[50%] sm:translate-y-[-50%]'>
        <div className='w-fit h-fit flex flex-col justify-center items-center'>
          <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em]'>Log in to <Link to={'/'}><span className='text-primary2 underline'>COOK</span></Link></h1>
          <div className='flex flex-col gap-[8px] mt-[24px]'>
            <button className='hover:bg-primaryLighten2 transition-all duration-200 flex items-center justify-center gap-[14px] w-[322px] xsm:min-w-[90vw] xsm:w-full h-[56px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[30px]'>
              <img src={Google} alt="" />
              Continue with Google
            </button>
            <button className='flex hover:bg-primaryLighten2  transition-all duration-200 items-center justify-center gap-[14px] w-[322px] xsm:w-full h-[56px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[30px]'>
              <img src={Facebook} alt="" />
              Continue with Google
            </button>
          </div>
        </div>
        <div className='relative my-[55px] w-full flex justify-center items-center'>
          <div className='max-h-[1px] border border-[rgba(255,219,184,1)] w-full absolute z-10'></div>
          <p className='relative z-20 font-outfit font-normal text-[14px] leading-[17.64px] text-TextColorSec w-[34px] h-[38px] bg-[white] flex justify-center items-center'>or</p>
        </div>
        <div>
          <h3 className='font-redHatDisplay font-bold text-[20px] leading-[26.46px] text-center'>Log in with email</h3>
          <form className='w-[346px] xsm:w-[90vw] flex flex-col gap-[18px] items-center mt-[29px] mb-[62px] md:mb-[100px] sm:mb-[100px]'>
            <div className='w-full flex flex-col gap-[2px]'>
              <label className='font-outfit font-medium text-[16px] leading-[20.16px]' htmlFor="">Email</label>
              <input className='p-[10px] outline-primary2 border border-[rgba(255,219,184,1)] h-[37px]' type="text" />
            </div>
            <div className='w-full flex flex-col gap-[2px]'>
              <label className='font-outfit font-medium text-[16px] leading-[20.16px]' htmlFor="">Password</label>
              <input className='p-[10px] outline-primary2  border border-[rgba(255,219,184,1)] h-[37px]' type="text" />
            </div>
            <button className='text-[white] hover:bg-[white] hover:text-primary2 border-2 border-primary2 transition-all duration-200 bg-primary2 h-[39px] w-[122px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] mt-[11px]'>Login</button>
          </form>
        </div>
      </div>
    </main>
  )
}

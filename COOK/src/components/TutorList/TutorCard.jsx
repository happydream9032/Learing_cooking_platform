import React from 'react'
import { Link } from 'react-router-dom'
import StarIcon2 from "../../assets/TutorList/StarIcon2.svg"
import TutorProfile from "../../assets/TutorList/TutorProfile.png"

export default function TutorCard() {
  return (
    <div className='w-full md:w-[88.383vw] sm:w-[88.383vw] border-2 border-[rgba(255,219,184,1)] px-[29.5px] py-[45px] rounded-[16px] flex sm:flex-col xsm:flex-col xsm:items-center gap-[46px] sm:gap-[5.509vw] items-start'>
      <Link className='rounded-full' to={'/profile'}>
        <img className='min-w-[154px] max-w-[154px]' src={TutorProfile} alt="" />
      </Link>
      <div>
        <div>
          <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em]'>Sarah Doe</h3>
          <div className='flex items-center gap-x-[18px] gap-y-[8px] sm:flex-col sm:items-start sm:mt-[8px]'>
            <div className='flex items-center gap-[7px]'>
              <svg className='max-w-[17px] max-h-[17px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9165 93.75C22.9165 94.3025 23.136 94.8324 23.5267 95.2231C23.9174 95.6138 24.4473 95.8333 24.9998 95.8333H74.9998C75.5523 95.8333 76.0823 95.6138 76.473 95.2231C76.8636 94.8324 77.0831 94.3025 77.0831 93.75V79.1667H22.9165V93.75ZM18.0623 51.4375L22.4998 75H37.2915L35.4165 54.3542C35.3919 54.0806 35.4214 53.8048 35.5033 53.5426C35.5853 53.2804 35.718 53.037 35.8941 52.8261C36.0701 52.6152 36.286 52.4411 36.5293 52.3137C36.7727 52.1862 37.0387 52.108 37.3123 52.0833C37.5859 52.0587 37.8617 52.0882 38.1238 52.1702C38.386 52.2521 38.6295 52.3849 38.8404 52.5609C39.0512 52.737 39.2254 52.9528 39.3528 53.1962C39.4803 53.4395 39.5585 53.7056 39.5831 53.9792L41.479 75H58.5206L60.4165 53.9792C60.4411 53.7056 60.5194 53.4395 60.6468 53.1962C60.7743 52.9528 60.9484 52.737 61.1593 52.5609C61.3701 52.3849 61.6136 52.2521 61.8758 52.1702C62.138 52.0882 62.4137 52.0587 62.6873 52.0833C62.9609 52.108 63.227 52.1862 63.4703 52.3137C63.7136 52.4411 63.9295 52.6152 64.1055 52.8261C64.2816 53.037 64.4144 53.2804 64.4963 53.5426C64.5783 53.8048 64.6078 54.0806 64.5831 54.3542L62.7081 75H77.4998L81.9373 51.4375C84.5116 50.7479 86.9094 49.5174 88.9706 47.8281C91.0319 46.1387 92.7094 44.0294 93.8912 41.6407C95.073 39.252 95.732 36.6387 95.8243 33.9753C95.9166 31.3118 95.44 28.6592 94.4263 26.1944C93.4126 23.7296 91.8852 21.5093 89.9457 19.6814C88.0063 17.8534 85.6995 16.46 83.179 15.5939C80.6586 14.7277 77.9825 14.4089 75.3291 14.6585C72.6758 14.9082 70.1061 15.7206 67.7915 17.0417C66.5488 13.3055 64.1615 10.0554 60.9681 7.75213C57.7747 5.44886 53.9372 4.20935 49.9998 4.20935C46.0624 4.20935 42.225 5.44886 39.0315 7.75213C35.8381 10.0554 33.4508 13.3055 32.2081 17.0417C29.8935 15.7206 27.3238 14.9082 24.6705 14.6585C22.0171 14.4089 19.341 14.7277 16.8206 15.5939C14.3002 16.46 11.9933 17.8534 10.0539 19.6814C8.11446 21.5093 6.58699 23.7296 5.57331 26.1944C4.55963 28.6592 4.08303 31.3118 4.1753 33.9753C4.26758 36.6387 4.92659 39.252 6.10841 41.6407C7.29023 44.0294 8.9677 46.1387 11.029 47.8281C13.0903 49.5174 15.488 50.7479 18.0623 51.4375Z" fill="#D27722" />
              </svg>
              <p className='font-outfit font-normal text-[18px] leading-[22.68px] text-primary'>Baker</p>
            </div>
            <div className='flex items-center gap-[7px]'>
              <svg className='max-w-[17px] max-h-[17px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.0002 44.7367C62.3539 44.7367 72.3686 34.7221 72.3686 22.3684C72.3686 10.0147 62.3539 0 50.0002 0C37.6465 0 27.6318 10.0147 27.6318 22.3684C27.6318 34.7221 37.6465 44.7367 50.0002 44.7367Z" fill="#D27722" />
                <path d="M50 50C28.1994 50 10.5264 67.6732 10.5264 89.4736C10.5264 95.2871 15.2393 100 21.0527 100H78.9475C84.7609 100 89.4738 95.2871 89.4738 89.4736C89.4736 67.6732 71.8006 50 50 50Z" fill="#D27722" />
              </svg>

              <p className='font-outfit font-normal text-[18px] leading-[22.68px] text-primary'>15 active students</p>
            </div>
          </div>
        </div>

        <div>
          <p className='font-outfit font-normal text-[16px] leading-[24px] mt-[30px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et malesuada posuere sem dictumst ultricies ut varius. Sagittis arcu sit dictum adipiscing a sapien.</p>
          <Link to={'/profile'}>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary2 mt-[10px] hover:underline'>Learn more</p>
          </Link>
        </div>
      </div>

      <div className='xsm:w-full'>
        <div className='flex items-center justify-center gap-[20px]'>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center gap-[4px]'>
              <p className='font-rubik font-bold text-[24px] leading-[28.44px]'>5</p>
              <img className='w-[27px]' src={StarIcon2} alt="" />
            </div>
            <p className='font-outfit font-medium text-[12px] leading-[15.12px] text-TextColorSec'>100 reviews</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='font-rubik font-bold text-[24px] leading-[28.44px]'>$100</p>
            <p className='font-outfit font-medium text-[12px] leading-[15.12px] text-TextColorSec'>per 60min </p>
          </div>
        </div>
        <div className='flex flex-col gap-[15px] mt-[15px] xsm:w-full'>
          <Link to={'/profile'}>
            <button className='hover:bg-primary2 hover:text-[white] transition-all duration-200 w-[165px] xsm:w-full h-[39px] border-2 border-primary rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-primary'>Write a message</button>
          </Link>
          <Link to={'/profile'}>
            <button className='hover:bg-[white] hover:border-2 hover:border-primary2 hover:text-primary2 transition-all duration-200 w-[165px] xsm:w-full h-[39px] border-2 border-primary rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] bg-primary2 text-[white]'>Book a lesson</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

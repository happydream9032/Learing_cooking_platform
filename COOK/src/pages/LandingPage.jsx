import React from 'react'
import { Link } from 'react-router-dom'
import AdvantagesIcon4 from "../assets/LandingPage/AdvantageIcon4.svg"
import AdvantagesHero from "../assets/LandingPage/AdvantagesHero.png"
import BecomeaChef from "../assets/LandingPage/BecomeaChef.png"
import BecomeaStudent from "../assets/LandingPage/BecomeaStudent.png"
import CardProfile from "../assets/LandingPage/CardProfile.png"
import CookBlog1 from "../assets/LandingPage/CookBlog1.png"
import CookBlog2 from "../assets/LandingPage/CookBlog2.png"
import CookBlog3 from "../assets/LandingPage/CookBlog3.png"
import CookBlog4 from "../assets/LandingPage/CookBlog4.png"
import HIW1 from "../assets/LandingPage/HIW1.png"
import HIW2 from "../assets/LandingPage/HIW2.png"
import HIW3 from "../assets/LandingPage/HIW3.png"
import HeroImg from "../assets/LandingPage/HeroImg.png"
import One from "../assets/LandingPage/One.svg"
import StatsIcon1 from "../assets/LandingPage/StatsIcon1.svg"
import Three from "../assets/LandingPage/Three.svg"
import Two from "../assets/LandingPage/Two.svg"
export default function LandingPage() {
  return (
    <main className='xsm:overflow-hidden'>
      <section className='xsm:overflow-hidden w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px] flex xsm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse md:items-center sm:items-center xsm:items-center justify-between gap-[92px] md:gap-0 sm:gap-0 xsm:gap-0'>
        <div className='md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center xsm:flex xsm:flex-col xsm:items-center'>
          <h1 className='font-rubik font-bold text-[61px] leading-[69.11px] w-[48.75vw] tracking-[-0.04em] md:tracking-[0px] sm:tracking-[0px] text-TextColor mt-[85px] md:mt-[142px] sm:mt-[142px] xsm:mt-[192px] md:text-[50px] sm:text-[50px] xsm:text-[32px] md:leading-[56.65px] sm:leading-[56.65px] xsm:leading-[36.26px] md:w-[702px] sm:w-[84.072vw] md:text-center sm:text-center xsm:text-center xsm:min-w-[88.205vw]'>Master the Art of Cooking with <span className='text-primary2 font-normal font-pacifico'>Experts</span> Worldwide </h1>
          <p className='w-[37.014vw] font-outfit font-normal text-[16px] leading-[25.6px] mt-[24px] md:text-center sm:text-center xsm:text-center md:w-[63.832vw] sm:w-[63.832vw] md:text-[16px] md:leading-[25.6px] sm:text-[16px] sm:leading-[25.6px] xsm:min-w-[83.59vw]'>Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.</p>
          <div className='flex gap-x-[20px] mt-[26px] xsm:flex-col xsm:w-full gap-y-[20px]'>
            <Link to={'/search-tutors'}>
              <button className='w-[153px] hover:bg-[white] hover:border-2 hover:border-primary2 hover:text-primary2 transition-all duration-200 xsm:w-[83.59vw] xsm:m-auto h-[39px] rounded-[8px] bg-primary2 border-2 border-primary2 text-backPri font-outfit font-medium text-lg leading-[22.68px]'>Find Your Tutor</button>
            </Link>
            <Link to={'/signup'}>
              <button className='w-[150px] hover:bg-primary2 hover:text-[white] transition-all duration-200 xsm:w-[83.59vw] xsm:m-auto h-[39px] rounded-[8px] bg-backPri text-primary2 border-2 border-primary2 font-outfit font-medium text-lg leading-[22.68px]'>Join Our Chefs</button>
            </Link>
          </div>
        </div>
        <div className='mt-[71px] relative w-fit h-fit'>
          <div className='xsm:overflow-hidden xsm:w-[calc(100vw - 100%)] flex justify-center'>
            <img className='w-[518px] md:w-[585.994px] sm:w-[585.994px] xsm:min-w-[110vw] xsm:m-auto' src={HeroImg} />
          </div>
          <div className='absolute right-[-1.84vw] bottom-[-34px] xsm:hidden'>
            <svg width="129" height="102" viewBox="0 0 129 102" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.03785 98.975C-1.97119 79.2795 7.95157 59.8664 25.6775 50.7693L122.674 0.990134C125.335 -0.375947 128.5 1.55692 128.5 4.54884V50C128.5 78.7188 105.219 102 76.5 102H4.56009C2.80003 102 1.30366 100.715 1.03785 98.975Z" fill="#D27722" />
            </svg>
          </div>
          <div className='absolute xsm:left-[50%] bg-[rgba(255,253,244,1)] xsm:bottom-[-133px] xsm:translate-x-[-50%] left-[-5.139vw] bottom-[-58px] bg-primary2Lighten border border-[rgba(255,219,184,1)] rounded-[16px] p-[24px] w-[284px] h-[200px] '>
            <div className='flex items-center gap-[25px]'>
              <img className='w-[65px]' src={CardProfile} />
              <div>
                <h2 className='font-rubik text-[18px] font-medium leading-[21.33px]'>David Mitchell</h2>
                <div className='flex items-center gap-[7px]'>
                  <h3 className='font-outfit text-[16px] font-semibold leading-[20.16px]'>4.8</h3>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1.5L10.163 5.77865L15 6.46898L11.5 9.79758L12.326 14.5L8 12.2787L3.674 14.5L4.5 9.79758L1 6.46898L5.837 5.77865L8 1.5Z" fill="#D27722" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <p className='font-outfit font-[400] text-[14px] leading-[22.4px] mt-[21px]'>I've discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!</p>
          </div>
        </div>
      </section>
      <section className='h-fit relative xsm:px-[32px]'>
        <div className='absolute xsm:hidden w-full left-0 top-[50%] translate-y-[-50%] border border-[rgba(255,219,184,1)]'></div>
        <div className='w-[75.347vw] bg-[rgba(255,253,244,1)] xsm:w-full m-auto mt-[159px] xsm:mt-[78px] mb-[182px] xsm:mb-[112px] bg-primary2Lighten border border-[rgba(255,219,184,1)] min-h-[148px] rounded-[16px] py-[12px] px-[1.597vw] grid grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1 items-center justify-around gap-y-[20px] gap-[29px] relative'>
          <div className=' flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2 md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px]'>100+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Talented Chefs</p>
          </div>
          <div className='flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2 md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px]'>1000+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Students</p>
          </div>
          <div className='flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2 flex gap-[10px] items-center md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px]'>4.8
              <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L19.1715 9.22818L28.5 10.5557L21.75 16.9569L23.343 26L15 21.7282L6.657 26L8.25 16.9569L1.5 10.5557L10.8285 9.22818L15 1Z" fill="#D27722" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Rating</p>
          </div>
          <div className='flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2 md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px]'>20+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Cooking Categories</p>
          </div>
        </div>
      </section>
      <section className='w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px]'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-[20px]'>
            <svg className='relative top-[10px] xsm:top-[4px] w-[46px] h-[35px] md:w-[36px] md:h-[26px] sm:w-[36px] sm:h-[26px] xsm:w-[36px] xsm:h-[26px]' viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5555 4.35812C27.8213 0.191495 43.1371 0.505382 43.1371 0.505382C43.1371 0.505382 49.5786 19.5106 43.1371 28.5753C33.6644 41.9059 0 28.5753 0 28.5753C0 28.5753 8.50505 9.92845 19.5555 4.35812Z" fill="#D27722" />
            </svg>
            <div>
              <h3 className='font-rubik font-semibold text-[50px] leading-[56.65px] tracking-[-0.02em] mb-[7px] md:text-[36px] sm:text-[36px] xsm:text-[30px] md:leading-[40.79px] sm:leading-[40.79px] xsm:leading-[33.99px]'>Explore & Learn</h3>
              <p className='font-outfit font-normal text-[16px] leading-[26.8px] xsm:hidden md:text-[16px] sm:text-[16px] md:leading-[24.32px] sm:leading-[24.32px]'>Dive into a range of cooking styles and techniques tailored to your interests</p>
            </div>
          </div>
          <div className='flex items-center gap-[10px] md:hidden sm:hidden xsm:hidden group'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.25 19.25L15.2625 15.2625" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link to={'/search-tutors'}>
              <p className='group-hover:text-primary2 transition-all duration-200 font-outfit font-medium leading-[20px] text-[16px] text-TextColor'>Search tutors by category </p>
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[1.667vw] mt-[68px] xsm:mt-[47px] gap-y-[24px]'>
          <Link to={'/search-tutors'}>
            <div className='landingExploreAndLearn group flex items-center gap-[24px] group h-[121px] py-[24px] px-[34px] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)] bg-primary2'>
              <svg className='max-w-[52px] max-h-[52px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84.7896 53.1565C75.4271 47.3385 63.0721 44.1342 50 44.1342C36.9279 44.1342 24.5727 47.3383 15.2104 53.1565C5.40176 59.2518 0 67.4926 0 76.3608C0 84.2292 4.26191 90.7844 15.9719 94.0401C24.4152 96.3876 35.6814 96.8686 50 96.8686C64.3184 96.8686 75.5846 96.3876 84.0281 94.0401C95.7338 90.7856 100 84.2331 100 76.3608C100 67.4926 94.5982 59.2518 84.7896 53.1565ZM70.5078 53.0546C72.5434 53.7049 74.5018 54.4547 76.3672 55.3001V64.6421C76.3672 66.2575 75.0529 67.5717 73.4375 67.5717C71.8221 67.5717 70.5078 66.2575 70.5078 64.6421V53.0546ZM47.0703 50.0536C48.0414 50.0151 49.018 49.9938 50 49.9938C50.982 49.9938 51.9586 50.0151 52.9297 50.0536V64.4155C52.9297 66.0309 51.6154 67.3452 50 67.3452C48.3846 67.3452 47.0703 66.0309 47.0703 64.4155V50.0536ZM23.6328 55.3001C25.4982 54.4547 27.4566 53.7049 29.4922 53.0546V64.6421C29.4922 66.2575 28.1779 67.5717 26.5625 67.5717C24.9471 67.5717 23.6328 66.2575 23.6328 64.6421V55.3001ZM50 91.0092C21.3727 91.0092 5.85938 88.6749 5.85938 76.3608C5.85938 69.744 10.0859 63.4096 17.7734 58.47V64.6421C17.7734 69.4883 21.7162 73.4311 26.5625 73.4311C31.4088 73.4311 35.3516 69.4883 35.3516 64.6421V51.5032C37.2893 51.0903 39.2443 50.7633 41.2109 50.5233V64.4155C41.2109 69.2618 45.1537 73.2046 50 73.2046C54.8463 73.2046 58.7891 69.2618 58.7891 64.4155V50.5233C60.7557 50.7633 62.7107 51.0903 64.6484 51.5032V64.6421C64.6484 69.4883 68.5912 73.4311 73.4375 73.4311C78.2838 73.4311 82.2266 69.4883 82.2266 64.6421V58.47C89.9143 63.4096 94.1406 69.744 94.1406 76.3608C94.1406 88.6749 78.6273 91.0092 50 91.0092ZM37.123 20.413C39.9035 18.5592 41.5635 15.4212 41.5635 12.0182C41.5635 8.6153 39.9035 5.47721 37.123 3.62369C35.7768 2.72623 33.9578 3.0899 33.0604 4.43619C32.1627 5.78248 32.5266 7.60143 33.8729 8.49889C35.0365 9.27467 35.7041 10.5575 35.7041 12.0182C35.7041 13.4792 35.0365 14.762 33.8729 15.5378C32.5057 16.4471 31.3847 17.6805 30.61 19.1282C29.8352 20.5758 29.4307 22.1927 29.4324 23.8346C29.4307 25.4766 29.8352 27.0935 30.61 28.5412C31.3848 29.9888 32.5057 31.2223 33.8729 32.1317C35.2168 33.0276 37.0365 32.6678 37.9355 31.3192C38.8332 29.9729 38.4693 28.154 37.123 27.2565C35.9594 26.4807 35.2918 25.2335 35.2918 23.8346C35.2918 22.436 35.9594 21.1887 37.123 20.413ZM51.7715 20.413C54.552 18.5592 56.2119 15.4212 56.2119 12.0182C56.2119 8.6153 54.552 5.47721 51.7715 3.62369C50.425 2.72623 48.6061 3.0899 47.7088 4.43619C46.8111 5.78248 47.175 7.60143 48.5213 8.49889C49.685 9.27467 50.3525 10.5575 50.3525 12.0182C50.3525 13.4792 49.685 14.762 48.5213 15.5378C47.1541 16.4471 46.0332 17.6805 45.2584 19.1282C44.4836 20.5758 44.0791 22.1927 44.0809 23.8346C44.0791 25.4766 44.4837 27.0935 45.2584 28.5412C46.0332 29.9888 47.1541 31.2223 48.5213 32.1317C49.8652 33.0276 51.685 32.6678 52.584 31.3192C53.4816 29.9729 53.1178 28.154 51.7715 27.2565C50.6078 26.4807 49.9402 25.2335 49.9402 23.8346C49.9402 22.436 50.6078 21.1887 51.7715 20.413ZM66.4199 20.413C69.2004 18.5592 70.8604 15.4212 70.8604 12.0182C70.8604 8.6153 69.2004 5.47721 66.4199 3.62369C65.0734 2.72623 63.2545 3.0899 62.3572 4.43619C61.4596 5.78248 61.8234 7.60143 63.1697 8.49889C64.3334 9.27467 65.001 10.5575 65.001 12.0182C65.001 13.4792 64.3334 14.762 63.1697 15.5378C61.8026 16.4471 60.6816 17.6805 59.9068 19.1282C59.1321 20.5758 58.7275 22.1927 58.7293 23.8346C58.7276 25.4766 59.1321 27.0935 59.9069 28.5412C60.6816 29.9888 61.8026 31.2223 63.1697 32.1317C64.5137 33.0276 66.3334 32.6678 67.2324 31.3192C68.1301 29.9729 67.7662 28.154 66.4199 27.2565C65.2562 26.4807 64.5887 25.2335 64.5887 23.8346C64.5887 22.436 65.2562 21.1887 66.4199 20.413Z" fill="white" />
              </svg>
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-[white] delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Bakery</h3>
                  <div>
                    <img src={StatsIcon1} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-[white] delay-100 duration-100 mt-[4px]'>Master baking: from rustic bread to delicate pastries</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='landingExploreAndLearn group flex items-center gap-[1.667vw] group h-[121px] py-[24px] px-[2.361vw] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <svg className='min-w-[52px]' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1287_44616" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="52" height="52">
                  <path d="M50.4998 50.5V1.50015H1.5V50.5H50.4998Z" fill="white" stroke="white" strokeWidth="3" />
                </mask>
                <g mask="url(#mask0_1287_44616)">
                  <path d="M40.3202 44.3828H11.6797V50.4766H40.3202V44.3828Z" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50.4764 26.1016H1.52344V34.2266C1.52344 39.8358 6.07048 44.3828 11.6797 44.3828H40.3202C45.9294 44.3828 50.4764 39.8358 50.4764 34.2266V26.1016Z" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M45.7681 8.8299L41.7007 13.7707C42.2525 14.2152 42.7332 14.6962 43.1321 15.2183L48.2411 13.3043C50.2325 12.5582 51.0774 10.2025 50.0142 8.36078C49.2808 7.09064 47.8832 6.50382 46.5469 6.69323C46.5371 7.44286 46.2891 8.19717 45.7681 8.8299Z" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M37.6431 11.4282C38.3435 11.6992 39.0479 12.0504 39.7535 12.4579C40.4593 12.8652 41.1156 13.2997 41.7005 13.7708L45.7679 8.82995C47.1196 7.1881 46.6734 4.72562 44.8316 3.66227C42.99 2.59901 40.6344 3.44391 39.8882 5.43534L37.6431 11.4282Z" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M35.674 10.9124C36.3256 10.9969 36.9825 11.1727 37.6433 11.4282L39.8885 5.43534C40.176 4.66784 40.7052 4.07583 41.3495 3.69254C40.8455 2.44048 39.6385 1.52367 38.1718 1.52367C36.0452 1.52367 34.4276 3.43325 34.7772 5.53091L35.674 10.9124Z" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M43.6251 21.7295L40.2251 19.7665" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M27.2988 18.167L30.6496 20.1016" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M42.7279 23.5566C46.0934 17.7275 43.64 14.7013 39.7539 12.4577C35.8677 10.214 32.0205 9.60248 28.6551 15.4316C27.1615 18.0182 25.6154 22.1304 24.6958 26.1016H41.0362C41.6989 25.2052 42.2737 24.3434 42.7279 23.5566Z" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.2934 23.5591C16.4926 26.36 11.6864 26.0948 11.6864 26.0948C11.6864 26.0948 11.4211 21.2886 14.222 18.4877C17.0229 15.6869 21.8291 15.9521 21.8291 15.9521C21.8291 15.9521 22.0943 20.7583 19.2934 23.5591Z" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.13717 18.4878C11.9381 21.2887 11.6729 26.0948 11.6729 26.0948C11.6729 26.0948 6.86665 26.36 4.06577 23.5592C1.26489 20.7584 1.53017 15.9521 1.53017 15.9521C1.53017 15.9521 6.33639 15.6869 9.13717 18.4878Z" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.38168 16.7517C6.32558 16.4181 6.29722 16.0805 6.29688 15.7422C6.29688 12.3766 9.02514 9.64845 12.3906 9.64845C12.3982 9.64845 12.4056 9.64896 12.4133 9.64896C12.6713 6.52104 15.2899 4.06253 18.4843 4.06253C21.6788 4.06253 24.2974 6.52104 24.5554 9.64896C24.563 9.64896 24.5705 9.64845 24.5781 9.64845C27.068 9.64845 29.2076 11.1424 30.1532 13.2822" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M43.625 21.7295L50.4764 18.1391L47.4295 26.1018" stroke="#D27722" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Vegan Cooking</h3>
                  <div>
                    <svg className='group-hover:translate-x-[5px] group-hover:translate-y-[-5px]  transistion-all duration-100' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Create delicious, nutritious meals with plant-based ingredients</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='landingExploreAndLearn group flex items-center gap-[1.667vw] group h-[121px] py-[24px] px-[2.361vw] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <svg className='max-w-[52px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1283_44839)">
                  <mask id="mask0_1283_44839" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                    <path d="M0 0.000289917H99.9997V100H0V0.000289917Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1283_44839)">
                    <path d="M8.78906 14.6487C8.78906 35.1437 25.4035 51.7579 45.8983 51.7579H60.8397C67.15 51.7579 72.2654 56.8733 72.2654 63.1837C72.2654 69.494 67.15 74.6094 60.8397 74.6094H52.7342V90.8203H58.9842C80.0185 90.8203 97.07 73.7686 97.07 52.7345C97.07 31.7004 80.0185 14.6487 58.9842 14.6487H8.78906Z" stroke="#D27722" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M38.0858 14.6487H8.78905C5.55312 14.6487 2.92969 12.0253 2.92969 8.78932C2.92969 5.5534 5.55312 2.92997 8.78905 2.92997H38.0858" stroke="#D27722" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M52.7343 90.8203C52.7343 90.8203 42.9687 97.0703 35.1562 97.0703C27.3438 97.0703 27.3438 89.8926 27.3438 89.8926C27.3438 89.8926 27.3438 82.7149 35.1562 82.7149H52.7343V90.8203Z" stroke="#D27722" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M52.7343 74.6094C52.7343 74.6094 42.9687 68.3594 35.1562 68.3594C27.3438 68.3594 27.3438 75.5371 27.3438 75.5371C27.3438 75.5371 27.3438 82.7148 35.1562 82.7148H52.7343V74.6094Z" stroke="#D27722" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M45.5923 51.7579C56.0173 51.7579 64.4532 43.3222 64.4532 32.8971" stroke="#D27722" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.1094 27.344C37.1094 28.962 35.7976 30.2737 34.1797 30.2737C32.5617 30.2737 31.25 28.962 31.25 27.344C31.25 25.726 32.5617 24.4143 34.1797 24.4143C35.7976 24.4143 37.1094 25.726 37.1094 27.344Z" fill="#D27722" />
                    <path d="M37.1094 27.344C37.1094 28.962 35.7976 30.2737 34.1797 30.2737C32.5617 30.2737 31.25 28.962 31.25 27.344C31.25 25.726 32.5617 24.4143 34.1797 24.4143C35.7976 24.4143 37.1094 25.726 37.1094 27.344Z" stroke="#D27722" />
                    <path d="M60.8398 74.6094H52.7344V90.8203H58.9844C65.6353 90.8203 71.8869 89.1139 77.3282 86.1174L65.0255 73.8147C63.6927 74.3405 62.2726 74.6101 60.8398 74.6094Z" stroke="#D27722" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M58.9842 14.6486H8.78906C8.78906 35.1437 25.4035 51.7579 45.8983 51.7579H60.8397C63.9948 51.7579 66.8512 53.0368 68.919 55.1044L91.357 32.6663C84.6382 21.8511 72.6533 14.6486 58.9842 14.6486Z" stroke="#D27722" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M94.8999 65.4298H72.0435C71.2781 69.2679 68.5898 72.4101 65.0254 73.8147L77.3281 86.1174C85.4536 81.643 91.7683 74.2888 94.8999 65.4298Z" stroke="#D27722" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M97.07 52.7345C97.07 45.3693 94.9773 38.494 91.357 32.6664L68.9189 55.1044C70.9865 57.1722 72.2654 60.0287 72.2654 63.1837C72.2653 63.9379 72.191 64.6902 72.0434 65.4298H94.8999C96.3036 61.4587 97.07 57.1865 97.07 52.7345Z" stroke="#D27722" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1283_44839">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Seafood Mastery</h3>
                  <div>
                    <svg className='group-hover:translate-x-[5px] group-hover:translate-y-[-5px]  transistion-all duration-100' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Dive into seafood: from grilling fish to creating sushi</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='landingExploreAndLearn group flex items-center gap-[1.667vw] group h-[121px] py-[24px] px-[2.361vw] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <svg className='min-w-[52px]' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1287_44634)">
                  <path d="M51.9948 27.7854V20.0717H51.9936L51.9948 19.5557L51.9933 19.4888C51.8558 16.1926 49.6468 13.1281 45.7728 10.86C39.5404 7.21118 31.0967 5.25021 21.9956 5.33491C17.4192 5.37817 13.2019 6.17879 9.79949 7.65023C5.66762 9.43722 2.84865 12.1139 1.42109 15.606C1.37376 15.7219 1.32613 15.8372 1.2787 15.9521C0.731582 17.2767 0.11134 18.7782 0.11134 20.7191V28.8801C-0.525051 34.0686 1.6035 39.6285 5.55235 43.072C8.27636 45.4474 11.6506 46.6675 15.3467 46.6675C16.9418 46.6675 18.5968 46.4402 20.2853 45.9805C22.9994 45.2418 25.2648 43.9393 27.4557 42.68C28.391 42.1423 29.2745 41.6345 30.1954 41.1646C32.9733 39.7478 35.2246 39.4314 38.3424 39.1105C44.3321 38.4938 48.3303 36.4297 50.5654 32.8002C51.5766 31.1584 52.0573 29.4712 51.9948 27.7854ZM48.8114 19.5907V20.0284C48.8101 20.0563 48.8081 20.0843 48.8063 20.1122C48.8045 20.1398 48.803 20.1672 48.8008 20.1948C48.7983 20.2256 48.7949 20.2564 48.7918 20.2871C48.789 20.3146 48.7865 20.3419 48.7832 20.3694C48.7795 20.4006 48.7748 20.432 48.7705 20.4634C48.7667 20.4905 48.7633 20.5176 48.7591 20.5447C48.7541 20.5764 48.7482 20.6083 48.7426 20.6401C48.7379 20.6669 48.7336 20.6938 48.7284 20.7207C48.7221 20.753 48.715 20.7853 48.7083 20.8176C48.7027 20.8441 48.6973 20.8706 48.6913 20.8972C48.6838 20.9301 48.6753 20.9631 48.6672 20.9962C48.6607 21.0223 48.6547 21.0483 48.6477 21.0744C48.6387 21.1079 48.629 21.1415 48.6193 21.1752C48.612 21.2008 48.6051 21.2265 48.5975 21.2521C48.5872 21.2862 48.576 21.3204 48.565 21.3547C48.557 21.38 48.5492 21.405 48.5408 21.4303C48.5291 21.4652 48.5164 21.4999 48.504 21.5348C48.4952 21.5595 48.4869 21.5843 48.4776 21.609C48.4646 21.6442 48.4505 21.6796 48.4366 21.7149C48.4271 21.7393 48.4179 21.7639 48.408 21.7882C48.3933 21.8243 48.3776 21.8605 48.3622 21.8966C48.352 21.9203 48.3425 21.9439 48.3319 21.9676C48.3153 22.0052 48.2977 22.0428 48.2802 22.0803C48.2698 22.1027 48.2601 22.1251 48.2493 22.1475C48.2316 22.1849 48.2126 22.2224 48.194 22.2598C48.1826 22.2825 48.1719 22.3052 48.1603 22.3279C48.1417 22.3642 48.1221 22.4006 48.1027 22.4368C48.09 22.4607 48.0778 22.4846 48.0647 22.5085C48.0454 22.5438 48.025 22.5791 48.0051 22.6143C47.991 22.6392 47.9772 22.6643 47.9627 22.6894C47.9484 22.7141 47.933 22.7389 47.9183 22.7635C47.8972 22.799 47.8766 22.8343 47.8548 22.8698C46.8427 24.5134 45.3293 25.7202 43.2186 26.5374C42.6632 26.7525 42.0664 26.9405 41.4265 27.1024C41.1705 27.1671 40.9076 27.2278 40.6377 27.2843C39.8281 27.4538 38.9553 27.586 38.0164 27.6826C37.8442 27.7003 37.672 27.7184 37.4999 27.7369C39.784 23.9331 42.8382 18.8334 45.4397 14.443C46.9876 15.5776 48.7026 17.333 48.8114 19.5907ZM42.7064 12.8116C39.5444 18.1479 35.7086 24.5404 33.4076 28.3669C31.8978 28.7121 30.404 29.2238 28.7491 30.0679C27.7571 30.5738 26.7974 31.1254 25.8693 31.659C25.5019 31.8708 25.1335 32.0812 24.7644 32.2901C28.3037 26.4816 34.1113 16.9247 37.7668 10.7756C39.5244 11.3509 41.1783 12.0313 42.7064 12.8116ZM34.5959 9.87871C29.8179 17.8963 21.9179 30.8479 19.6289 34.5961C19.5689 34.6132 19.5096 34.6314 19.449 34.6479C19.2843 34.6928 19.1203 34.734 18.9567 34.7737C18.7535 34.8229 18.5512 34.8688 18.35 34.9098L18.3277 34.9146C18.3136 34.9174 18.2995 34.9199 18.2853 34.9226C17.8149 35.0174 17.3405 35.0908 16.8635 35.1426C16.8031 35.1491 16.7431 35.1541 16.683 35.1598C16.6232 35.1654 16.5631 35.1719 16.5035 35.1768C16.3229 35.1915 16.1421 35.2027 15.9611 35.2104C15.7862 35.2183 15.612 35.224 15.4392 35.2253C15.3021 35.2262 15.1661 35.2245 15.0304 35.2214C14.4609 35.2089 13.893 35.1578 13.3305 35.0684C16.5332 29.8049 25.0871 15.7231 29.0963 8.89681C30.9967 9.12502 32.8357 9.45428 34.5959 9.87871ZM22.0257 8.51808C23.2106 8.5065 24.3956 8.53228 25.579 8.59537C21.1303 16.1154 12.8351 29.7607 10.1961 34.0961C9.61154 33.8158 9.05252 33.4852 8.52539 33.1079C8.49776 33.0882 8.47085 33.0675 8.44343 33.0476C8.38015 33.0014 8.31688 32.9555 8.25452 32.9081C8.22304 32.8841 8.19226 32.8591 8.16088 32.8348C8.1035 32.7902 8.04581 32.7459 7.98934 32.7002C7.95481 32.6723 7.92109 32.6433 7.88697 32.6151C7.83456 32.5717 7.78185 32.5289 7.73015 32.4846C7.6941 32.4537 7.65886 32.4217 7.62321 32.3903C7.57425 32.3474 7.525 32.3048 7.47665 32.261C7.44131 32.2291 7.40698 32.196 7.37204 32.1635C7.32421 32.1191 7.27617 32.0751 7.22904 32.0299C7.19522 31.9974 7.16222 31.964 7.1288 31.9311C7.08157 31.8847 7.03394 31.8387 6.98743 31.7914C6.95472 31.7582 6.92293 31.7242 6.89054 31.6906C6.84422 31.6425 6.79771 31.5948 6.75211 31.546C6.72001 31.5117 6.68893 31.4765 6.65725 31.4417C6.61236 31.3924 6.56726 31.3436 6.52308 31.2937C6.4919 31.2583 6.46143 31.2221 6.43056 31.1863C6.38709 31.136 6.34332 31.0859 6.30056 31.0347C6.27161 31.0001 6.24348 30.9646 6.21494 30.9297C10.0814 24.5025 16.3145 14.1071 19.4912 8.62696C20.3127 8.56297 21.158 8.52631 22.0257 8.51808ZM3.29502 20.7187C3.29482 19.4097 3.72402 18.3706 4.22107 17.1672C4.27002 17.0487 4.31897 16.93 4.36793 16.8105C5.90619 13.0473 9.89475 10.3741 15.4748 9.19357C12.3841 14.4617 7.71634 22.2536 4.34304 27.8654C4.334 27.8449 4.32456 27.8247 4.31562 27.8041C4.29511 27.7569 4.2755 27.7092 4.2556 27.6618C4.23031 27.6018 4.20482 27.5418 4.18034 27.4813C4.16084 27.433 4.14215 27.384 4.12306 27.3354C4.0995 27.2753 4.07583 27.2151 4.05318 27.1545C4.0346 27.1049 4.01703 27.0551 3.99895 27.0053C3.97711 26.945 3.95507 26.8846 3.93415 26.8238C3.91668 26.7732 3.90013 26.7222 3.88307 26.6714C3.86296 26.6108 3.84265 26.5505 3.82335 26.4896C3.8069 26.4379 3.79136 26.3858 3.77561 26.3338C3.75713 26.2731 3.73854 26.2127 3.72087 26.1517C3.70574 26.0992 3.69142 26.0463 3.67679 25.9935C3.65993 25.9327 3.64297 25.872 3.62703 25.8109C3.61291 25.7572 3.59981 25.7033 3.5864 25.6492C3.57137 25.5886 3.55604 25.5281 3.54182 25.4672C3.52902 25.4124 3.51693 25.3573 3.50475 25.3022C3.49134 25.2419 3.47783 25.1814 3.46524 25.1207C3.45356 25.0646 3.443 25.0085 3.43203 24.9523C3.42035 24.8923 3.40847 24.8322 3.3976 24.7718C3.38734 24.7148 3.378 24.6576 3.36845 24.6003C3.3585 24.5405 3.34824 24.4805 3.3391 24.4204C3.33016 24.3623 3.32224 24.304 3.31391 24.2457C3.30741 24.1994 3.30101 24.1533 3.29492 24.1069L3.29502 20.7187ZM47.8551 31.131C46.1503 33.899 43.0242 35.4284 38.0166 35.944C34.6484 36.2907 32.0121 36.6648 28.7491 38.329C27.7571 38.8351 26.7974 39.3867 25.8692 39.9203C23.7602 41.1327 21.768 42.278 19.4492 42.9092C13.6289 44.4937 9.81736 42.5676 7.64454 40.6729C5.24309 38.5789 3.67913 35.5115 3.28141 32.3373C3.29522 32.3559 3.30934 32.374 3.32325 32.3926C3.34753 32.4251 3.37211 32.4572 3.39658 32.4896C3.45325 32.5644 3.51064 32.6386 3.56853 32.7122C3.593 32.7433 3.61748 32.7745 3.64206 32.8054C3.7162 32.8984 3.79125 32.9906 3.86743 33.0818C3.87423 33.0898 3.88083 33.0982 3.88754 33.1063C3.97074 33.2053 4.05518 33.3033 4.14083 33.4002C4.165 33.4277 4.18958 33.4547 4.21396 33.482C4.37365 33.6606 4.53738 33.8355 4.70501 34.0066C4.72289 34.0249 4.74046 34.0433 4.75843 34.0615C4.84913 34.1531 4.94094 34.2434 5.03377 34.3324C5.05571 34.3534 5.07805 34.3742 5.09999 34.395C5.20133 34.4911 5.30399 34.5859 5.40793 34.6793C5.48014 34.7441 5.55306 34.8081 5.62649 34.8715C5.65157 34.8931 5.67625 34.9149 5.70144 34.9363C5.79915 35.0195 5.89786 35.1017 5.9976 35.1823C6.01324 35.1949 6.02908 35.207 6.04472 35.2197C6.12943 35.2875 6.21474 35.3543 6.30076 35.4203C6.33184 35.4441 6.36312 35.4676 6.3945 35.4912C6.46986 35.5479 6.54583 35.6039 6.62221 35.6591C6.65197 35.6806 6.68152 35.7022 6.71148 35.7235C6.81585 35.7979 6.92118 35.8709 7.02744 35.9425L7.03932 35.9503C7.10707 35.9956 7.17623 36.0409 7.24631 36.0862C7.26947 36.1011 7.29293 36.1161 7.31639 36.131C7.37499 36.1684 7.4344 36.2054 7.49453 36.2426C7.51403 36.2547 7.53322 36.2667 7.55303 36.2788C7.63021 36.3259 7.70872 36.3727 7.78855 36.4193C7.80927 36.4314 7.83039 36.4434 7.85122 36.4555C7.93989 36.5068 8.02913 36.5571 8.11893 36.6064C8.20442 36.6535 8.29038 36.6998 8.3768 36.7451C8.38462 36.7493 8.39275 36.7532 8.40057 36.7573C8.48131 36.7994 8.56347 36.841 8.64645 36.8824C8.67286 36.8956 8.69957 36.9086 8.72638 36.9218C8.80133 36.9585 8.8772 36.9948 8.95398 37.0307C8.97297 37.0397 8.99156 37.0487 9.01065 37.0574C9.1044 37.1008 9.19956 37.1435 9.29594 37.1856C9.32022 37.1962 9.34489 37.2066 9.36937 37.2171C9.44697 37.2504 9.52537 37.2834 9.60459 37.3159L9.68513 37.3488C9.78618 37.3895 9.88836 37.4296 9.99225 37.4687L10.0292 37.4823C10.1524 37.5282 10.2763 37.5724 10.4007 37.6148C10.4942 37.6467 10.5886 37.6782 10.6844 37.7087C10.7004 37.7137 10.7162 37.7191 10.7322 37.7243C10.8429 37.7592 10.9552 37.7929 11.0686 37.8258C11.0964 37.8338 11.1246 37.8416 11.1525 37.8495C11.2444 37.8755 11.3371 37.9007 11.4308 37.9252C11.4592 37.9326 11.4876 37.9402 11.5161 37.9474C11.6337 37.9775 11.7524 38.0065 11.8729 38.034C11.8895 38.0378 11.9066 38.0413 11.9234 38.0451C12.0286 38.0688 12.135 38.0915 12.2426 38.1132C12.2753 38.1198 12.308 38.1264 12.3408 38.1327C12.4541 38.1547 12.5684 38.1759 12.6841 38.1958C12.6959 38.1978 12.7077 38.2001 12.7196 38.2022C12.9867 38.2469 13.255 38.2844 13.5241 38.3149C13.5535 38.3182 13.5829 38.3219 13.6126 38.3251C13.7464 38.3395 13.8815 38.3526 14.0181 38.3636C14.0404 38.3655 14.0632 38.3668 14.0855 38.3685C14.3768 38.391 14.6686 38.4056 14.9607 38.4123C14.9646 38.4124 14.9682 38.4126 14.9721 38.4126C15.0885 38.415 15.2059 38.4165 15.3242 38.4165C15.3556 38.4165 15.3875 38.4158 15.4189 38.4156L15.4918 38.415C15.6374 38.4135 15.7842 38.4105 15.9327 38.4051C15.9485 38.4046 15.9644 38.4037 15.9802 38.403C16.1302 38.3973 16.2815 38.3894 16.4345 38.3795C16.4427 38.379 16.4509 38.3787 16.4591 38.378C16.6131 38.3677 16.7688 38.3546 16.9256 38.34C16.95 38.3376 16.9744 38.3355 16.9988 38.3331C17.1536 38.318 17.3082 38.3009 17.4625 38.2817C17.4877 38.2786 17.5128 38.2753 17.538 38.272C17.6985 38.2515 17.8601 38.2292 18.0235 38.204L18.0532 38.1992C18.2143 38.174 18.3771 38.1464 18.541 38.1165L18.5962 38.1067C18.7594 38.0764 18.9242 38.0434 19.0903 38.0085L19.1793 37.9896C19.344 37.954 19.51 37.9163 19.6774 37.8758C19.7034 37.8695 19.7295 37.8628 19.7555 37.8565C19.9309 37.8135 20.1074 37.7686 20.2857 37.7199C22.9998 36.9812 25.2653 35.6787 27.4562 34.4193C28.3916 33.8816 29.275 33.3739 30.1958 32.9041C30.2826 32.8598 30.3688 32.8166 30.4547 32.7744C33.115 31.4674 35.3225 31.1608 38.3428 30.8498C38.514 30.8323 38.6832 30.813 38.8511 30.7931C38.8982 30.7875 38.9446 30.7815 38.9914 30.7757C39.1145 30.7606 39.2366 30.7447 39.3579 30.7282L39.509 30.7074C39.6394 30.6889 39.7688 30.6697 39.897 30.6498C39.9302 30.6446 39.964 30.6397 39.9971 30.6345C40.1577 30.6089 40.3167 30.5822 40.474 30.5543C40.5067 30.5485 40.5388 30.5423 40.5714 30.5363C40.6949 30.5139 40.8183 30.4906 40.9415 30.4663C40.989 30.457 41.0363 30.4475 41.0835 30.4379C41.1953 30.4152 41.3069 30.3917 41.4183 30.3674C41.4606 30.3582 41.503 30.3491 41.545 30.3398C41.8397 30.274 42.1331 30.2022 42.4249 30.1244C42.4648 30.1136 42.5041 30.1028 42.5439 30.0919C42.803 30.0211 43.0606 29.9451 43.3167 29.8641C43.3444 29.8552 43.3723 29.8469 43.3998 29.838C43.5354 29.7943 43.6704 29.749 43.805 29.7021C43.8318 29.6927 43.858 29.683 43.8848 29.6736C43.9909 29.636 44.0959 29.5978 44.2 29.5587C44.2395 29.5439 44.2786 29.5287 44.3179 29.5137C44.4132 29.4771 44.5077 29.4398 44.6013 29.4018C44.6364 29.3876 44.6719 29.3734 44.7068 29.359C44.9551 29.2564 45.2006 29.1474 45.4432 29.032C45.4765 29.0161 45.5093 28.9999 45.5424 28.9838C45.6299 28.9414 45.7168 28.8982 45.8026 28.8543C45.8382 28.8361 45.8739 28.818 45.9093 28.7995C46.0009 28.7518 46.092 28.703 46.1824 28.6532C46.2057 28.6404 46.2294 28.6279 46.2525 28.6151C46.3645 28.5527 46.4755 28.4888 46.5856 28.4232C46.6086 28.4095 46.6309 28.3954 46.6538 28.3817C46.7732 28.3096 46.8914 28.2355 47.0084 28.1597C47.0849 28.11 47.1607 28.0596 47.2356 28.0086C47.2655 27.9883 47.2956 27.9682 47.3251 27.9477C47.5272 27.8077 47.7249 27.6616 47.918 27.5096C47.9469 27.4868 47.9752 27.4638 48.0039 27.4407C48.0718 27.3863 48.1389 27.3312 48.2053 27.2754C48.3067 27.1902 48.4067 27.1032 48.5051 27.0145C48.5265 26.9952 48.5484 26.9763 48.5697 26.9568C48.6517 26.8817 48.7326 26.8059 48.8121 26.7288V27.8169L48.8135 27.8831C48.8566 28.9349 48.5343 30.0278 47.8551 31.131Z" fill="#D27722" />
                </g>
                <defs>
                  <clipPath id="clip0_1287_44634">
                    <rect width="52" height="52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>BBQ & Grilling</h3>
                  <div>
                    <svg className='group-hover:translate-x-[5px] group-hover:translate-y-[-5px]  transistion-all duration-100' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Fire up your skills with mouth-watering BBQ dishes</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='landingExploreAndLearn group flex items-center gap-[1.667vw] group h-[121px] py-[24px] px-[2.361vw] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <svg className='min-w-[52px]' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1287_44637)">
                  <path d="M40.1803 17.7933L37.5782 1.313C37.5204 0.947026 37.3339 0.613689 37.0522 0.372984C36.7706 0.13228 36.4122 1.67324e-05 36.0417 0L15.958 0C15.5875 -3.94036e-06 15.2292 0.132252 14.9475 0.37296C14.6658 0.613668 14.4793 0.947017 14.4216 1.313L11.8195 17.7934C11.1638 21.9466 12.3543 26.1619 15.0857 29.3586C17.4776 32.1577 20.8255 33.9115 24.4444 34.3043V48.8889H17.5897C16.7306 48.8889 16.0342 49.5854 16.0342 50.4445C16.0342 51.3036 16.7306 52 17.5897 52H34.4101C35.2692 52 35.9656 51.3035 35.9656 50.4445C35.9656 49.5855 35.2692 48.8889 34.4101 48.8889H27.5554V34.3042C31.1741 33.9113 34.5221 32.1577 36.914 29.3585C39.6456 26.1619 40.836 21.9465 40.1803 17.7933ZM17.2872 3.11106H34.7125L36.0538 11.6063H15.946L17.2872 3.11106ZM34.5489 27.3375C32.4092 29.8414 29.2933 31.2774 25.9999 31.2774C22.7066 31.2774 19.5905 29.8413 17.4509 27.3375C16.3944 26.1026 15.6184 24.653 15.1767 23.089C14.735 21.525 14.638 19.8837 14.8924 18.2785L15.4547 14.7173H36.545L37.1072 18.2785C37.3617 19.8837 37.2647 21.5249 36.823 23.089C36.3813 24.653 35.6054 26.1026 34.5489 27.3375Z" fill="#D27722" />
                </g>
                <defs>
                  <clipPath id="clip0_1287_44637">
                    <rect width="52" height="52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Wine Pairing</h3>
                  <div>
                    <svg className='group-hover:translate-x-[5px] group-hover:translate-y-[-5px]  transistion-all duration-100' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Enhance culinary experiences by mastering wine pairing</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='landingExploreAndLearn group flex items-center gap-[1.667vw] group h-[121px] py-[24px] px-[2.361vw] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <svg className='min-w-[52px]' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1287_44640)">
                  <path d="M50.4766 48.9531V35.2422C50.4766 32.7221 48.4263 30.6719 45.9062 30.6719V16.7578C45.9062 14.2377 43.856 12.1875 41.3359 12.1875H31.6886C33.5752 10.3685 35.1406 8.45274 35.1406 5.81679C35.1406 2.64327 32.9129 0 29.8086 0C28.3097 0 26.9954 0.632633 25.9732 1.83767C25.0783 0.819305 23.7991 0 22.0898 0C18.9815 0 16.7578 2.64773 16.7578 5.81679C16.7578 8.30314 18.1477 10.1529 20.2888 12.1875H10.6641C8.14399 12.1875 6.09375 14.2377 6.09375 16.7578V30.6719C3.57368 30.6719 1.52344 32.7221 1.52344 35.2422V48.9531C0.682094 48.9531 0 49.6352 0 50.4766C0 51.3179 0.682094 52 1.52344 52H50.4766C51.3179 52 52 51.3179 52 50.4766C52 49.6352 51.3179 48.9531 50.4766 48.9531ZM19.8047 5.81679C19.8047 4.47403 20.6056 3.04688 22.0898 3.04688C23.7967 3.04688 24.5346 5.3689 24.5393 5.38393C24.6326 5.69888 24.8253 5.97524 25.0884 6.17179C25.3516 6.36835 25.6713 6.47456 25.9998 6.47461L26.0209 6.47451C26.353 6.46998 26.6745 6.35705 26.9364 6.15291C27.1984 5.94877 27.3864 5.66461 27.4719 5.34371C27.4781 5.32076 28.1314 3.04688 29.8086 3.04688C31.2928 3.04688 32.0938 4.47403 32.0938 5.81679C32.0938 7.78842 30.292 9.42967 27.1462 12.1875H24.8531L24.7344 12.0837C21.4951 9.25052 19.8047 7.68503 19.8047 5.81679ZM9.14062 16.7578C9.14062 15.9178 9.82404 15.2344 10.6641 15.2344H41.3359C42.176 15.2344 42.8594 15.9178 42.8594 16.7578V18.2812C42.8594 19.9613 41.4925 21.3281 39.8125 21.3281C38.1058 21.3281 36.6641 19.9329 36.6641 18.2812C36.6641 17.4399 35.982 16.7578 35.1406 16.7578C34.2993 16.7578 33.6172 17.4399 33.6172 18.2812C33.6172 19.9613 32.2504 21.3281 30.5703 21.3281C28.8903 21.3281 27.5234 19.9613 27.5234 18.2812C27.5234 17.4399 26.8413 16.7578 26 16.7578C25.1587 16.7578 24.4766 17.4399 24.4766 18.2812C24.4766 19.9329 23.0348 21.3281 21.3281 21.3281C19.6481 21.3281 18.2812 19.9613 18.2812 18.2812C18.2812 17.4399 17.5992 16.7578 16.7578 16.7578C15.9165 16.7578 15.2344 17.4399 15.2344 18.2812C15.2344 19.9613 13.8675 21.3281 12.1875 21.3281C10.5075 21.3281 9.14062 19.9613 9.14062 18.2812V16.7578ZM9.14062 23.5552C10.0659 24.093 11.1173 24.3759 12.1875 24.375C14.0056 24.375 15.6403 23.5746 16.7578 22.3078C17.8753 23.5746 19.5101 24.375 21.3281 24.375C22.9534 24.375 24.4959 23.7468 25.6714 22.6063C25.7781 22.5029 25.8811 22.3958 25.9802 22.2851C27.0982 23.5651 28.7414 24.375 30.5703 24.375C32.3992 24.375 34.0425 23.5651 35.1604 22.2851C35.2595 22.3958 35.3625 22.5029 35.4692 22.6063C36.6448 23.7468 38.1872 24.375 39.8125 24.375C40.8827 24.3759 41.9341 24.093 42.8594 23.5552V30.6719H9.14062V23.5552ZM47.4297 48.9531H4.57031V42.0396C5.49562 42.5773 6.54695 42.8602 7.61719 42.8594C9.43526 42.8594 11.07 42.059 12.1875 40.7922C13.305 42.059 14.9397 42.8594 16.7578 42.8594C18.5867 42.8594 20.23 42.0495 21.3479 40.7695C21.447 40.8802 21.55 40.9873 21.6567 41.0907C22.8323 42.2312 24.3747 42.8594 26 42.8594C27.8181 42.8594 29.4528 42.059 30.5703 40.7922C31.6878 42.059 33.3226 42.8594 35.1406 42.8594C36.7659 42.8594 38.3084 42.2312 39.4839 41.0907C39.5906 40.9873 39.6936 40.8802 39.7927 40.7695C40.9107 42.0495 42.5539 42.8594 44.3828 42.8594C45.453 42.8602 46.5044 42.5773 47.4297 42.0396V48.9531ZM47.4297 36.7656C47.4297 38.4457 46.0629 39.8125 44.3828 39.8125C42.7028 39.8125 41.3359 38.4457 41.3359 36.7656C41.3359 35.9243 40.6538 35.2422 39.8125 35.2422C38.9712 35.2422 38.2891 35.9243 38.2891 36.7656C38.2891 38.4172 36.8473 39.8125 35.1406 39.8125C33.4606 39.8125 32.0938 38.4457 32.0938 36.7656C32.0938 35.9243 31.4117 35.2422 30.5703 35.2422C29.729 35.2422 29.0469 35.9243 29.0469 36.7656C29.0469 38.4457 27.68 39.8125 26 39.8125C24.2933 39.8125 22.8516 38.4172 22.8516 36.7656C22.8516 35.9243 22.1695 35.2422 21.3281 35.2422C20.4868 35.2422 19.8047 35.9243 19.8047 36.7656C19.8047 38.4457 18.4379 39.8125 16.7578 39.8125C15.0778 39.8125 13.7109 38.4457 13.7109 36.7656C13.7109 35.9243 13.0288 35.2422 12.1875 35.2422C11.3462 35.2422 10.6641 35.9243 10.6641 36.7656C10.6641 38.4457 9.29723 39.8125 7.61719 39.8125C5.93714 39.8125 4.57031 38.4457 4.57031 36.7656V35.2422C4.57031 34.4022 5.25373 33.7188 6.09375 33.7188H45.9062C46.7463 33.7188 47.4297 34.4022 47.4297 35.2422V36.7656Z" fill="#D27722" />
                </g>
                <defs>
                  <clipPath id="clip0_1287_44640">
                    <rect width="52" height="52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Cake Decorating</h3>
                  <div>
                    <svg className='group-hover:translate-x-[5px] group-hover:translate-y-[-5px]  transistion-all duration-100' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Unleash creativity with cake decorating techniques</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='flex items-center justify-end gap-[15px] mt-[32px]'>
          {/* <Link to={'/search-tutors'}>
            <p className='font-outfit font-medium leading-[20px] text-[16px] text-TextColor'>Show more</p>
          </Link>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_60_812)">
              <path d="M10 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6025 5.39763 18.3334 10 18.3334Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.66667 10L10 13.3333L13.3333 10" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 6.66675V13.3334" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_60_812">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
        </div>
      </section>
      <section className='mt-[152px] xsm:mt-[112px] w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px] flex flex-col items-center'>
        <h2 className='font-rubik font-semibold text-[50px] leading-[59.25px] relative md:text-[42px] md:leading-[49.77px] sm:text-[42px] sm:leading-[49.77px] xsm:text-[30px] xsm:leading-[35.55px]'>Our Unique Benefits
          <svg className='absolute right-[-30px] top-[-15px]' width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8703 22.3536L25.9942 15.7492" stroke="#FFDBB8" strokeWidth="4" strokeLinecap="round" />
            <path d="M2.64703 15.7603L9.11337 1.99994" stroke="#FFDBB8" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </h2>
        <p className='font-outfit font-normal leading-[26.8px] text-[16px] mt-[15px] md:mt-[6px] sm:mt-[6px] xsm:mt-[6px] xsm:hidden'>Experience the perks of learning and teaching cooking on our platform</p>
        <div className='flex gap-x-[58px] gap-y-[33px] md:flex-col sm:flex-col xsm:flex-col items-center mt-[79px] xsm:mt-[53px]'>
          <div className='flex flex-col items-center gap-[27px] w-[25vw] md:w-[70.06vw] sm:w-[70.06vw] xsm:w-[83.59vw]'>
            <div className='w-[100px] h-[100px] bg-primary2 rounded-full flex justify-center items-center'>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1287_44643)">
                  <path d="M31.1377 34.6566L41.727 39.1152C43.8996 40.0301 45.3125 42.158 45.3125 44.5155V48.5352H4.6875V44.5155C4.6875 42.158 6.10039 40.0302 8.27314 39.1153L18.805 34.6809" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23.0221 36.6354L19.5312 40.625V48.5351" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25 36.7188C19.8224 36.7188 15.625 32.5214 15.625 27.3438V21.875H34.375V27.3438C34.375 32.5214 30.1776 36.7188 25 36.7188Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23.4375 31.25C23.9226 31.4926 24.4576 31.6188 25 31.6188C25.5424 31.6188 26.0774 31.4926 26.5625 31.25M15.625 16.4063H34.375M38.2812 6.93359C38.2812 3.91328 35.8328 1.46484 32.8125 1.46484C31.2818 1.46484 29.8989 2.09443 28.9062 3.10781C27.9136 2.09443 26.5307 1.46484 25 1.46484C23.4693 1.46484 22.0864 2.09443 21.0938 3.10781C20.1011 2.09443 18.7182 1.46484 17.1875 1.46484C14.1672 1.46484 11.7188 3.91328 11.7188 6.93359C11.7188 9.41074 13.3663 11.5021 15.625 12.1746V21.875H34.375V12.1746C36.6337 11.5021 38.2812 9.41074 38.2812 6.93359Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1287_44643">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em] md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px] xsm:text-[28px] xsm:leading-[33.18px] text-center'>Expert Chefs</h3>
            <p className='font-outfit font-normal leading-[28.8px] text-center text-[18px] text-TextColorSec'>Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.</p>
          </div>
          <div className='h-[42px] w-0 border-2 border-[rgba(255,219,184,1)] md:hidden sm:hidden xsm:hidden'></div>
          <div className='flex flex-col items-center gap-[27px] w-[25vw] md:w-[70.06vw] sm:w-[70.06vw] xsm:w-[83.59vw]'>
            <div className='w-[100px] h-[100px] bg-primary2 rounded-full flex justify-center items-center'>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1287_44649)">
                  <path d="M45.6055 19.1406C44.387 19.1406 42.1906 19.5877 39.9912 22.1483C37.327 19.3999 33.5153 17.6758 29.3945 17.6758H17.5781C17.0273 17.6758 16.4724 17.713 15.8787 17.7902C13.4396 13.9308 9.01367 14.1109 6.8665 14.8191C6.62875 14.8972 6.41502 15.0351 6.24572 15.2194C6.07643 15.4037 5.95723 15.6284 5.89951 15.8719C5.84109 16.1152 5.8462 16.3694 5.91433 16.6101C5.98246 16.8508 6.11133 17.07 6.28857 17.2466C7.13262 18.0906 7.79922 19.4052 8.23975 21.0804C6.49635 22.5384 5.1158 24.3817 4.20713 26.4649H1.46484C0.655176 26.4649 0 27.12 0 27.9297V36.7188C0 37.5284 0.655176 38.2813 1.46484 38.2813H4.20859C5.73926 41.7617 8.60029 44.5283 12.1293 45.9531L11.7388 48.2948C11.7036 48.5047 11.7146 48.7196 11.7712 48.9247C11.8278 49.1298 11.9285 49.3201 12.0663 49.4821C12.2036 49.6446 12.3747 49.7751 12.5677 49.8645C12.7606 49.954 12.9708 50.0002 13.1835 50H19.0429C19.3897 50.0001 19.7253 49.8771 19.9899 49.6528C20.2546 49.4286 20.4309 49.1177 20.4877 48.7755L20.7725 47.0703H26.2002L26.4849 48.7755C26.5416 49.1177 26.718 49.4286 26.9826 49.6528C27.2472 49.8771 27.5828 50.0001 27.9297 50H33.7891C34.7011 50 35.3826 49.1781 35.2339 48.2948L34.8448 45.956C40.3966 43.7415 44.1406 38.3553 44.1406 32.3242C44.1406 29.4571 43.2814 26.7996 41.8518 24.5383C43.0472 22.9684 44.355 22.0703 45.6055 22.0703C46.4437 22.0703 47.0703 22.4566 47.0703 22.8027C47.0703 23.3678 46.5038 23.7197 46.501 23.7211C45.7943 24.1174 45.5426 25.01 45.9374 25.7152C46.333 26.4202 47.2239 26.673 47.9315 26.2788C48.6997 25.8484 50 24.6323 50 22.8027C50 20.7485 48.0702 19.1406 45.6055 19.1406ZM32.772 43.5799C32.0682 43.7931 31.6305 44.4969 31.752 45.2221L32.0596 47.0703H29.1714L28.8867 45.3651C28.83 45.023 28.6536 44.7121 28.389 44.4878C28.1244 44.2635 27.7887 44.1405 27.4419 44.1406H19.5308C19.1839 44.1405 18.8483 44.2635 18.5837 44.4878C18.3191 44.7121 18.1427 45.023 18.0859 45.3651L17.8013 47.0703H14.9131L15.2206 45.2221C15.3422 44.4968 14.9045 43.793 14.2007 43.5799C10.6645 42.5084 7.81631 39.6985 6.58174 36.2281C6.48029 35.9432 6.29317 35.6966 6.04603 35.5221C5.7989 35.3477 5.50385 35.254 5.20137 35.2539H2.92969V29.3945H5.20137C5.50387 29.3944 5.79894 29.3008 6.04609 29.1263C6.29325 28.9519 6.48038 28.7053 6.58184 28.4203C7.37861 26.1773 8.81777 24.2476 10.7418 22.8399C10.9674 22.6745 11.1411 22.4481 11.2422 22.1872C11.3434 21.9264 11.3678 21.6421 11.3126 21.3679C10.9993 19.8258 10.5415 18.484 9.94219 17.3538C11.2511 17.4397 12.8332 18.0133 13.7616 20.0174C14.0463 20.6282 14.7086 20.9787 15.3681 20.84C16.2006 20.6799 16.9029 20.6055 17.5781 20.6055H29.3945C35.8562 20.6055 41.2109 25.8626 41.2109 32.3242C41.2109 37.4869 37.7616 42.0692 32.772 43.5799Z" fill="white" />
                  <path d="M13.1836 29.3945C13.9926 29.3945 14.6484 28.7387 14.6484 27.9297C14.6484 27.1207 13.9926 26.4648 13.1836 26.4648C12.3746 26.4648 11.7188 27.1207 11.7188 27.9297C11.7188 28.7387 12.3746 29.3945 13.1836 29.3945Z" fill="white" />
                  <path d="M25 14.7461C29.0384 14.7461 32.3242 11.4603 32.3242 7.42188C32.3242 3.3835 29.0384 0 25 0C20.9616 0 17.5781 3.3835 17.5781 7.42188C17.5781 11.4603 20.9616 14.7461 25 14.7461ZM25 2.92969C27.4232 2.92969 29.3945 4.99863 29.3945 7.42188C29.3945 9.84512 27.4232 11.8164 25 11.8164C22.5768 11.8164 20.5078 9.84512 20.5078 7.42188C20.5078 4.99863 22.5768 2.92969 25 2.92969ZM30.8594 23.5352H19.043C18.2333 23.5352 17.5781 24.1903 17.5781 25C17.5781 25.8097 18.2333 26.4648 19.043 26.4648H30.8594C31.669 26.4648 32.3242 25.8097 32.3242 25C32.3242 24.1903 31.669 23.5352 30.8594 23.5352Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1287_44649">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em] md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px] xsm:text-[28px] xsm:leading-[33.18px] text-center'>Save Time and Money</h3>
            <p className='font-outfit font-normal leading-[28.8px] text-center text-[18px] text-TextColorSec'>Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes.</p>
          </div>
          <div className='h-[42px] w-0 border-2 border-[rgba(255,219,184,1)] md:hidden sm:hidden xsm:hidden'></div>
          <div className='flex flex-col items-center gap-[27px] w-[25vw] md:w-[70.06vw] sm:w-[70.06vw] xsm:w-[83.59vw]'>
            <div className='w-[100px] h-[100px] bg-primary2 rounded-full flex justify-center items-center'>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1287_44654)">
                  <path d="M41.1119 17.9237C41.1119 21.3447 40.1252 24.4826 38.4271 27.1015C35.9489 30.8764 32.0249 33.5424 27.4585 34.2266C26.6783 34.3682 25.8752 34.4389 25.0491 34.4389C24.223 34.4389 23.4199 34.3682 22.6397 34.2266C18.0732 33.5424 14.1493 30.8764 11.6711 27.1015C9.97304 24.4826 8.98633 21.3447 8.98633 17.9237C8.98633 8.7931 16.1687 1.40845 25.0491 1.40845C33.9295 1.40845 41.1119 8.7931 41.1119 17.9237Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M46.2747 40.2664L42.4885 41.1864C41.6394 41.3988 40.9739 42.0594 40.7904 42.9323L39.9872 46.4006C39.5513 48.288 37.2106 48.8542 35.9945 47.3679L25.0489 34.4388L14.1031 47.3915C12.8869 48.8778 10.5463 48.3116 10.1104 46.4242L9.30722 42.9559C9.10072 42.083 8.43524 41.3988 7.60914 41.2101L3.82294 40.2899C2.07898 39.8652 1.45941 37.6239 2.72149 36.3263L11.6708 27.1249C14.149 30.8998 18.0729 33.5659 22.6394 34.2501C23.4196 34.3916 24.2228 34.4624 25.0489 34.4624C25.875 34.4624 26.678 34.3916 27.4582 34.2501C32.0247 33.5659 35.9486 30.8998 38.4269 27.1249L47.3761 36.3263C48.6382 37.6003 48.0186 39.8416 46.2747 40.2664Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M26.3799 10.7985L27.7338 13.5825C27.9173 13.96 28.3992 14.3375 28.8352 14.4083L31.2905 14.833C32.8509 15.0925 33.218 16.2722 32.0936 17.4282L30.189 19.3864C29.8678 19.7168 29.6842 20.3538 29.799 20.8256L30.3497 23.2558C30.7857 25.1668 29.799 25.9218 28.1468 24.9073L25.8521 23.5153C25.439 23.2558 24.7507 23.2558 24.3376 23.5153L22.0429 24.9073C20.3907 25.8982 19.404 25.1668 19.84 23.2558L20.3907 20.8256C20.4825 20.3774 20.3218 19.7168 20.0006 19.3864L18.096 17.4282C16.9716 16.2722 17.3388 15.1161 18.8992 14.833L21.3545 14.4083C21.7676 14.3375 22.2495 13.96 22.433 13.5825L23.7869 10.7985C24.4523 9.28859 25.6456 9.28859 26.3799 10.7985Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1287_44654">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em] md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px] xsm:text-[28px] xsm:leading-[33.18px] text-center'>Accessible Cooking</h3>
            <p className='font-outfit font-normal leading-[28.8px] text-center text-[18px] text-TextColorSec'>Start your culinary journey with ease. Our user-friendly platform makes navigation simple, letting you focus on learning and enjoying your online cooking classes.</p>
          </div>
        </div>
      </section>
      <section className='mt-[260px] md:mt-[163px] sm:mt-[163px] xsm:mt-[151px] px-[64px] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px] flex md:flex-col sm:flex-col xsm:flex-col items-center gap-x-[8.403vw] lg:gap-x-[3.403vw] gap-y-[162px] w-full'>
        <div className='relative w-fit h-fit'>
          <div className='xsm:w-[calc(100vw - 100%)] xsm:overflow-hidden flex justify-center'>
            <img className='min-w-[535px] md:w-[583px] sm:w-[583px] xsm:min-w-[110vw]' src={AdvantagesHero} />
          </div>
          <div className='absolute rounded-[16px] bg-primary2 h-[180px] w-[284px] bottom-[-27.023px] xsm:bottom-[-101px] left-[-5.694vw] xsm:left-[50%] xsm:translate-x-[-50%] p-[24px] flex flex-col items-end'>
            <h4 className='flex gap-[4px] items-center font-rubik font-medium text-right text-[white] text-[24px] leading-[28.44px]'>Level up <img src={AdvantagesIcon4} alt="" /></h4>
            <p className='font-outfit font-normal text-[14px] leading-[22.4px] text-right text-[white] mt-[16px]'>Take your culinary skills to new heights. Our platform provides you with the expert guidance you need to refine your skills and cook like a pro                          </p>
          </div>
        </div>
        <div>
          <h3 className='font-rubik font-semibold text-[31px] leading-[36.74px] tracking-[-0.02em] md:text-[36px] md:leading-[42.66px] sm:text-[36px] sm:leading-[42.66px] xsm:text-[30px] xsm:leading-[35.55px]'>Other Advantages</h3>
          <div className='mt-[29px] flex flex-col gap-[25px]'>
            <div className='landingExploreAndLearnOrangePerma flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px] xsm:flex-col gap-y-[16px]'>
              <svg className='min-w-[32px]' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.4375 19.8225C24.4375 20.3403 24.0178 20.76 23.5 20.76C22.9822 20.76 22.5625 20.3403 22.5625 19.8225C22.5625 19.3047 22.9822 18.885 23.5 18.885C24.0178 18.885 24.4375 19.3047 24.4375 19.8225ZM20.6875 17.9475C20.6875 18.4653 20.2678 18.885 19.75 18.885C19.2322 18.885 18.8125 18.4653 18.8125 17.9475C18.8125 17.4297 19.2322 17.01 19.75 17.01C20.2678 17.01 20.6875 17.4297 20.6875 17.9475ZM28.1875 21.6975C28.1875 22.2153 27.7678 22.635 27.25 22.635C26.7322 22.635 26.3125 22.2153 26.3125 21.6975C26.3125 21.1797 26.7322 20.76 27.25 20.76C27.7678 20.76 28.1875 21.1797 28.1875 21.6975ZM18.8125 21.6975C18.8125 22.2153 18.3928 22.635 17.875 22.635C17.3572 22.635 16.9375 22.2153 16.9375 21.6975C16.9375 21.1797 17.3572 20.76 17.875 20.76C18.3928 20.76 18.8125 21.1797 18.8125 21.6975Z" fill="#D27722" />
                <path d="M27.9678 13.7451C28.1135 13.2886 28.1875 12.8125 28.1875 12.3225C28.1875 9.73782 26.0847 7.63501 23.5 7.63501C22.8044 7.63501 22.1179 7.7927 21.4941 8.08763C20.449 6.64626 18.7766 5.76001 16.9375 5.76001C15.0639 5.76001 13.4019 6.68088 12.3789 8.09351C11.741 7.79763 11.0256 7.63501 10.3125 7.63501C7.94187 7.63501 5.978 9.40432 5.66875 11.6914C3.61306 12.4011 2.09375 14.271 1.897 16.5144C0.65525 18.6514 0 21.0864 0 23.5725C0 25.1233 1.26175 26.385 2.8125 26.385H29.125C30.6792 26.385 32 25.1289 32 23.5725C32 19.7514 30.4607 16.2822 27.9678 13.7451ZM23.5 9.51001C25.0438 9.51001 26.3003 10.76 26.312 12.3008C25.1376 11.4271 23.8346 10.7411 22.4497 10.2673C22.4156 10.0985 22.3738 9.93136 22.3244 9.76638C22.6892 9.59788 23.0867 9.51001 23.5 9.51001ZM16.9375 7.63501C18.3872 7.63501 19.6729 8.4822 20.2934 9.71707C19.4947 9.57929 18.6856 9.51002 17.875 9.51001C16.2988 9.51001 14.782 9.76857 13.3652 10.2451C13.8489 8.73288 15.2671 7.63501 16.9375 7.63501ZM10.3125 9.51001C10.7344 9.51001 11.1657 9.6052 11.5476 9.77488C11.4168 10.2122 11.34 10.6639 11.3189 11.1199C10.8451 11.3678 10.3857 11.6425 9.94312 11.9426C9.22986 11.5988 8.4519 11.4097 7.66038 11.3879C8.04638 10.2952 9.08938 9.51001 10.3125 9.51001ZM7.5 13.26C7.73975 13.26 7.97731 13.2832 8.20969 13.3279C6.50487 14.9229 5.19725 16.9336 4.45144 19.1958C4.00075 18.5683 3.75 17.8086 3.75 17.01C3.75 14.9421 5.43213 13.26 7.5 13.26ZM2.8125 24.51C2.29562 24.51 1.875 24.0894 1.875 23.5725C1.875 22.2268 2.09769 20.8989 2.52588 19.6406C2.87443 20.299 3.35046 20.8814 3.92625 21.354C3.80895 22.0877 3.75001 22.8295 3.75 23.5725C3.75 24.0894 3.32938 24.51 2.8125 24.51ZM29.125 24.51H5.46438C5.571 24.209 5.62533 23.8919 5.625 23.5725C5.625 16.8311 11.1428 11.385 17.875 11.385C24.593 11.385 30.125 16.8188 30.125 23.5725C30.125 24.072 29.6577 24.51 29.125 24.51Z" fill="#D27722" />
              </svg>
              <div>
                <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] text-TextColor xsm:text-[20px] xsm:leading-[23.7px]'>Diverse Range of Classes</h4>
                <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests.</p>
              </div>
            </div>
            <div className='landingExploreAndLearnOrangePerma flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px] xsm:flex-col'>
              <svg className='min-w-[28px] max-w-[28px]' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1287_44662)">
                  <path d="M8.72705 15.2727C8.72712 15.1772 8.70835 15.0826 8.67182 14.9943C8.63529 14.906 8.58172 14.8258 8.51417 14.7583C8.44662 14.6907 8.36642 14.6372 8.27816 14.6006C8.18989 14.5641 8.09528 14.5453 7.99976 14.5454C7.90423 14.5453 7.80963 14.5641 7.72136 14.6006C7.63309 14.6372 7.55289 14.6907 7.48534 14.7583C7.41779 14.8258 7.36422 14.906 7.3277 14.9943C7.29117 15.0826 7.2724 15.1772 7.27246 15.2727C7.27246 17.1825 9.37901 19.8047 9.61908 20.098C9.74169 20.2469 9.91833 20.3411 10.1103 20.36C10.3022 20.3789 10.4939 20.321 10.6432 20.1988C10.9535 19.9438 10.9983 19.4858 10.744 19.1747C9.96428 18.2244 8.72705 16.3252 8.72705 15.2727ZM23.9998 14.5454C23.9043 14.5453 23.8097 14.5641 23.7214 14.6006C23.6331 14.6372 23.5529 14.6907 23.4854 14.7583C23.4178 14.8258 23.3643 14.906 23.3277 14.9943C23.2912 15.0826 23.2724 15.1772 23.2725 15.2727C23.2725 16.3217 22.0353 18.223 21.2555 19.1754C21.0012 19.4858 21.0466 19.9439 21.3571 20.1988C21.4869 20.3056 21.6499 20.3639 21.818 20.3636C21.9255 20.3637 22.0318 20.3399 22.129 20.294C22.2263 20.248 22.3122 20.1811 22.3805 20.098C22.6205 19.8047 24.7271 17.1825 24.7271 15.2727C24.7271 15.1772 24.7084 15.0826 24.6719 14.9943C24.6353 14.906 24.5818 14.8258 24.5142 14.7583C24.4467 14.6907 24.3665 14.6372 24.2782 14.6006C24.1899 14.5641 24.0953 14.5453 23.9998 14.5454ZM15.9998 14.5454C15.9043 14.5453 15.8097 14.5641 15.7214 14.6006C15.6331 14.6372 15.5529 14.6907 15.4854 14.7583C15.4178 14.8258 15.3643 14.906 15.3277 14.9943C15.2912 15.0826 15.2724 15.1772 15.2725 15.2727V19.6363C15.2725 20.0383 15.5978 20.3636 15.9998 20.3636C16.4018 20.3636 16.7271 20.0383 16.7271 19.6363V15.2727C16.7271 15.1772 16.7084 15.0826 16.6718 14.9943C16.6353 14.9061 16.5817 14.8259 16.5142 14.7583C16.4466 14.6908 16.3664 14.6372 16.2782 14.6007C16.1899 14.5641 16.0953 14.5454 15.9998 14.5454Z" fill="#D27722" />
                  <path d="M24 2.90912C23.5593 2.90912 23.0987 2.96741 22.6204 3.05625C21.0186 1.18902 18.6475 0 16 0C13.3526 0 10.9814 1.18902 9.37964 3.05618C8.90128 2.96741 8.44071 2.90905 8.00005 2.90905C3.58875 2.90912 0 6.49787 0 10.9091C0 13.9318 1.70455 16.6797 4.38068 18.0383L4.3665 29.0291C4.36582 29.8224 4.674 30.5682 5.23439 31.1292C5.79546 31.6911 6.54048 32 7.33385 32H24.6691C26.3054 32 27.6364 30.669 27.6364 29.0327V18.0277C30.3026 16.6655 32.0001 13.9219 32.0001 10.9091C32 6.49787 28.4112 2.90912 24 2.90912ZM26.1818 29.0327C26.1818 29.8665 25.5029 30.5455 24.669 30.5455H7.33378C6.92966 30.5455 6.54969 30.3878 6.26346 30.1017C5.97791 29.8155 5.82028 29.4355 5.82096 29.0307L5.82478 26.1818H26.1818V29.0327ZM26.6321 16.8956C26.5937 16.9112 26.5575 16.9297 26.5234 16.9517C26.4338 17.0073 26.3577 17.082 26.3004 17.1704C26.2425 17.2584 26.2047 17.3581 26.1896 17.4623C26.1834 17.5028 26.1808 17.5436 26.1818 17.5845V24.7272H5.82662L5.83596 17.5944C5.83872 17.4689 5.80905 17.3449 5.74982 17.2343C5.69058 17.1237 5.60379 17.0302 5.49784 16.963C5.46146 16.9401 5.42321 16.9204 5.3835 16.904C2.99646 15.8601 1.45452 13.5092 1.45452 10.9091C1.45452 7.29969 4.39064 4.36364 7.99998 4.36364C8.14105 4.36364 8.28996 4.38068 8.43607 4.39221C7.70026 5.67103 7.27269 7.1488 7.27269 8.72728C7.27262 8.82281 7.29139 8.91741 7.32792 9.00568C7.36445 9.09395 7.41802 9.17415 7.48557 9.24169C7.55312 9.30924 7.63332 9.36281 7.72158 9.39934C7.80985 9.43587 7.90446 9.45464 7.99998 9.45458C8.09551 9.45464 8.19011 9.43587 8.27838 9.39934C8.36665 9.36281 8.44685 9.30924 8.5144 9.24169C8.58195 9.17415 8.63552 9.09395 8.67204 9.00568C8.70857 8.91741 8.72734 8.82281 8.72728 8.72728C8.72728 4.7173 11.9901 1.45452 16 1.45452C20.01 1.45452 23.2727 4.7173 23.2727 8.72728C23.2727 8.82281 23.2914 8.91741 23.328 9.00568C23.3645 9.09395 23.4181 9.17415 23.4856 9.24169C23.5531 9.30924 23.6334 9.36281 23.7216 9.39934C23.8099 9.43587 23.9045 9.45464 24 9.45458C24.0955 9.45464 24.1901 9.43587 24.2784 9.39934C24.3667 9.36281 24.4469 9.30924 24.5144 9.24169C24.582 9.17415 24.6356 9.09395 24.6721 9.00568C24.7086 8.91741 24.7274 8.82281 24.7273 8.72728C24.7273 7.1488 24.2997 5.67109 23.5639 4.39221C23.71 4.38068 23.8589 4.36364 24 4.36364C27.6094 4.36364 30.5455 7.29975 30.5455 10.9091C30.5455 13.5 29.01 15.848 26.6321 16.8956Z" fill="#D27722" />
                </g>
                <defs>
                  <clipPath id="clip0_1287_44662">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] text-TextColor xsm:text-[20px] xsm:leading-[23.7px]'>Opportunity to Teach</h4>
                <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.</p>
              </div>
            </div>
            <div className='landingExploreAndLearnOrangePerma flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px] xsm:flex-col'>
              <svg className='min-w-[32px]' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1287_44666)">
                  <path d="M31.6238 1.4073C31.2481 0.75668 30.6416 0.291305 29.916 0.0966796C29.1904 -0.0976329 28.4324 0.00230461 27.7817 0.377742L20.9617 4.31543C20.8551 4.37695 20.7616 4.45888 20.6866 4.55654C20.6117 4.65419 20.5567 4.76566 20.5248 4.88457C20.4929 5.00348 20.4848 5.12751 20.5009 5.24957C20.5169 5.37162 20.5569 5.48932 20.6184 5.59593L21.3147 6.80199L18.9673 11.9621L0.82375 22.4373C0.717121 22.4989 0.623664 22.5809 0.548716 22.6785C0.473767 22.7762 0.418795 22.8877 0.386937 23.0067C0.355083 23.1256 0.346966 23.2496 0.363052 23.3716C0.379139 23.4936 0.419112 23.6112 0.480687 23.7178L2.35569 26.9656C2.98169 28.0499 3.99269 28.8257 5.20213 29.1497C5.6003 29.2568 6.0108 29.3112 6.42312 29.3116C7.23537 29.3116 8.03687 29.0984 8.75925 28.6814L20.6672 21.8062C22.9057 20.514 23.6756 17.6412 22.3831 15.4029L20.7493 12.5728L22.4668 8.79743L22.4934 8.84355C22.6672 9.14455 22.9822 9.31255 23.3061 9.31255C23.4653 9.31255 23.6264 9.27199 23.7742 9.1868L30.5942 5.24905C31.9373 4.47393 32.3992 2.7503 31.6238 1.4073ZM19.7297 20.1824L7.82156 27.0577C7.17094 27.4332 6.41306 27.533 5.6875 27.3384C4.96169 27.1441 4.35525 26.6787 3.9795 26.0281L2.57325 23.5923L19.353 13.9046L20.7593 16.3404C21.5347 17.6834 21.073 19.4071 19.7297 20.1824ZM29.6567 3.62555L23.6484 7.0943L22.7109 5.47055L28.7192 2.00149C28.8257 1.9396 28.9435 1.89947 29.0656 1.88342C29.1877 1.86737 29.3118 1.87572 29.4307 1.90799C29.5498 1.93949 29.6614 1.99432 29.7592 2.0693C29.8569 2.14429 29.9387 2.23793 30 2.3448C30.2583 2.79255 30.1045 3.36699 29.6567 3.62555ZM1.198 15.4051C1.43816 15.4694 1.69407 15.4358 1.90944 15.3116L4.345 13.9051L5.75144 16.3409C5.92506 16.6417 6.24 16.8099 6.56419 16.8099C6.72313 16.8099 6.88425 16.7694 7.032 16.6841C7.48044 16.4251 7.63406 15.8519 7.37525 15.4034L5.96875 12.9676L8.40456 11.5613C8.5112 11.4998 8.60467 11.4178 8.67961 11.3201C8.75455 11.2224 8.8095 11.1109 8.84131 10.992C8.87322 10.8731 8.88138 10.7491 8.86534 10.6271C8.84929 10.5051 8.80936 10.3874 8.74781 10.2808C8.12156 9.19637 7.11081 8.42068 5.90137 8.09674C4.69187 7.77249 3.42869 7.93899 2.34425 8.56499C0.105687 9.85724 -0.663875 12.7298 0.628438 14.9683C0.752872 15.1836 0.957746 15.3407 1.198 15.4051ZM3.282 10.1888C3.71531 9.93855 4.19631 9.81087 4.68356 9.81087C4.92794 9.81087 5.17406 9.8428 5.41625 9.90774C5.82863 10.0184 6.20238 10.2164 6.51731 10.4859L1.92288 13.1386C1.71238 12.0001 2.22338 10.7999 3.282 10.1888ZM1.875 18.6848C1.875 19.2027 1.45531 19.6223 0.9375 19.6223C0.419688 19.6223 0 19.2027 0 18.6848C0 18.1671 0.419688 17.7473 0.9375 17.7473C1.45531 17.7473 1.875 18.1671 1.875 18.6848ZM7.56275 4.62187C7.56275 5.13968 7.14306 5.55937 6.62525 5.55937C6.10744 5.55937 5.68775 5.13968 5.68775 4.62187C5.68775 4.10405 6.10744 3.68437 6.62525 3.68437C7.14306 3.68437 7.56275 4.10405 7.56275 4.62187Z" fill="#D27722" />
                  <path d="M13.8918 11.4665C14.1211 11.4665 14.3531 11.4483 14.5852 11.4115C16.4693 11.1117 17.9385 9.57408 18.1585 7.67226C18.2091 7.23814 18.194 6.79886 18.1135 6.36926C17.9632 5.57114 17.448 4.91226 16.7002 4.56139C15.9297 4.19983 15.0271 4.22989 14.2859 4.64176C13.3789 5.14539 12.8526 6.09951 12.9447 7.07214C12.9524 7.15714 12.9495 7.24451 12.9356 7.33189C12.8772 7.6962 12.596 8.02039 12.2352 8.13833C11.9644 8.2272 11.7056 8.20176 11.4446 8.06114C11.2639 7.96387 11.0563 7.92859 10.8536 7.9607C10.6509 7.99281 10.4643 8.09054 10.3225 8.23889C10.1807 8.38718 10.0914 8.57795 10.0684 8.78189C10.0454 8.98583 10.09 9.19168 10.1953 9.36783C10.9844 10.6878 12.386 11.4667 13.8918 11.4665ZM14.7872 7.62808C14.8259 7.38591 14.834 7.13983 14.8113 6.89564C14.79 6.67126 14.9483 6.41858 15.1963 6.28064C15.4124 6.16076 15.6768 6.15251 15.9036 6.25895C16.0188 6.31289 16.2198 6.4442 16.271 6.71645C16.3164 6.95739 16.3248 7.20645 16.2957 7.45689C16.1738 8.50989 15.3306 9.3942 14.2903 9.5597C14.0367 9.6002 13.7847 9.60095 13.5408 9.56533C14.1965 9.12076 14.6607 8.41808 14.7872 7.62808Z" fill="#D27722" />
                </g>
                <defs>
                  <clipPath id="clip0_1287_44666">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] text-TextColor xsm:text-[20px] xsm:leading-[23.7px]'>Interactive Lessons</h4>
                <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px] mt-[199px]'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-[20px]'>
            <svg className='relative top-[15px] xsm:hidden' width="75" height="31" viewBox="0 0 75 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 24C7 24 20.6553 7 37.5 7C54.3447 7 68 24 68 24" stroke="#D27722" strokeWidth="14" strokeLinecap="round" />
            </svg>
            <svg className='hidden xsm:flex mt-[5px]' width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 17C5 17 11.4919 5 19.5 5C27.5081 5 34 17 34 17" stroke="#D27722" strokeWidth="9" strokeLinecap="round" />
            </svg>
            <div>
              <h3 className='font-rubik font-medium text-[50px] leading-[56.65px] tracking-[-0.02em] mb-[7px] md:text-[36px] md:leading-[40.79px] sm:text-[36px] sm:leading-[40.79px] xsm:text-[30px] xsm:leading-[33.99px] '>How It Works</h3>
              <p className='font-outfit font-normal text-[16px] leading-[26.8px] xsm:hidden'>Getting Started with the COOK Platform</p>
            </div>
          </div>
          <div className='flex items-center gap-[10px] xsm:hidden group cursor-pointer'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.25 19.25L15.2625 15.2625" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link to={'/search-tutors'}>
              <p className='font-outfit font-medium leading-[26.91px] text-[18px] text-TextColor group-hover:text-primary2 transition-all duration-200'>Search tutors by category</p>
            </Link>
          </div>
        </div>
        <div className='flex justify-between gap-[131px] xsm:gap-[42px] mt-[109px] xsm:mt-[94px] md:flex-col md:items-center sm:flex-col sm:items-center xsm:flex-col xsm:items-center'>
          <div className='relative'>
            <img className='absolute left-[-24px] select-none xsm:hidden' src={One} alt='' />
            <img className='w-[39.375vw] md:w-[551px] sm:w-[551px] xsm:min-w-[83.59vw]' src={HIW1} alt="" />
          </div>
          <div className='flex flex-col justify-center gap-[29px] w-[41.007vw] md:w-full sm:w-full xsm:w-full'>
            <h3 className='font-rubik font-semibold text-[36px] leading-[42.66px] xsm:text-[28px] xsm:leading-[33.18px]'>Explore Our Culinary Experts</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px]'>Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.</p>
            <Link className='xsm:self-center sm:self-center md:self-center' to={'/search-tutors'}>
              <button className='h-[41px] hover:bg-[white] border-2 border-primary2 hover:border-2 hover:border-primary2 hover:text-primary2 transition-all duration-200 w-[157px] text-[white] bg-primary2 font-outfit rounded-[4px] font-medium text-[20px] leading-[25.2px]'>Browse Tutors</button>
            </Link>
          </div>
        </div>
        <div className='flex justify-between gap-[131px] xsm:gap-[42px] mt-[109px] xsm:mt-[94px] md:flex-col-reverse md:items-center sm:flex-col sm:items-center xsm:flex-col-reverse xsm:items-center'>
          <div className='flex flex-col justify-center gap-[29px] w-[41.007vw] md:w-full sm:w-full xsm:w-full'>
            <h3 className='font-rubik font-semibold text-[36px] leading-[42.66px] xsm:text-[28px] xsm:leading-[33.18px]'>Select Your Perfect Match</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px]'>Once you've explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.</p>
          </div>
          <div className='h-fit relative'>
            <img className='absolute top-[-52px] left-[-37px] select-none xsm:hidden' src={Two} alt='' />
            <img className='w-[39.375vw] md:w-[551px] sm:w-[551px]  xsm:min-w-[83.59vw]' src={HIW2} alt="" />
          </div>
        </div>
        <div className='flex justify-between gap-[131px] xsm:gap-[42px] mt-[109px] xsm:mt-[94px] xsm:mt-[94px md:flex-col md:items-center sm:flex-col sm:items-center xsm:flex-col xsm:items-center'>
          <div className='h-fit relative'>
            <img className='absolute top-[-35px] left-[-24px] select-none xsm:hidden' src={Three} alt='' />
            <img className='w-[39.375vw] md:w-[551px] sm:w-[551px]  xsm:min-w-[83.59vw]' src={HIW3} alt="" />
          </div>
          <div className='flex flex-col justify-center gap-[29px] w-[41.007vw] md:w-full sm:w-full xsm:w-full'>
            <h3 className='font-rubik font-semibold text-[36px] leading-[42.66px] xsm:text-[28px] xsm:leading-[33.18px]'>Enjoy Your Interactive Lesson</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px]'>Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.</p>
            <Link className='xsm:self-center sm:self-center md:self-center' to={'signup'}>
              <button className='h-[41px] hover:bg-[white] border-2 border-primary2 hover:border-2 hover:border-primary2 hover:text-primary2 transition-all duration-200 w-[157px] text-[white] bg-primary2 font-outfit rounded-[4px] font-medium text-[20px] leading-[25.2px]'>Sign up for free</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className='xsm:hidden absolute w-full left-0 top-[50%] translate-y-[-50%] border border-[rgba(255,219,184,1)]'></div>
        <div className='w-[523px] bg-[rgba(255,253,244,1)] xsm:w-[83.59vw] min-h-[298px] xsm:pb-[52px] mt-[125px] xsm:mt-[148px] flex flex-col items-center  px-[25px] rounded-[16px] bg-primary2Lighten border border-[rgba(255,219,184,1)] m-auto relative'>
          <div className='relative top-[-70px] w-[100px] h-[100px] bg-primary2 rounded-full flex justify-center items-center'>
            <svg className='absolute top-[-19px] right-[-16px]' width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.9784 3.00958C22.9784 3.00958 30.0015 2.99594 33.514 5.54081C37.2367 8.23799 38.3369 15.0307 38.3369 15.0307" stroke="#D27722" strokeWidth="4" />
              <path d="M1.99293 6.1303C1.99293 6.1303 16.7094 6.36661 24.1657 11.7441C32.0684 17.4435 34.6294 31.4856 34.6294 31.4856" stroke="#D27722" strokeWidth="4" />
            </svg>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1287_44654)">
                <path d="M41.1119 17.9237C41.1119 21.3447 40.1252 24.4826 38.4271 27.1015C35.9489 30.8764 32.0249 33.5424 27.4585 34.2266C26.6783 34.3682 25.8752 34.4389 25.0491 34.4389C24.223 34.4389 23.4199 34.3682 22.6397 34.2266C18.0732 33.5424 14.1493 30.8764 11.6711 27.1015C9.97304 24.4826 8.98633 21.3447 8.98633 17.9237C8.98633 8.7931 16.1687 1.40845 25.0491 1.40845C33.9295 1.40845 41.1119 8.7931 41.1119 17.9237Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M46.2747 40.2664L42.4885 41.1864C41.6394 41.3988 40.9739 42.0594 40.7904 42.9323L39.9872 46.4006C39.5513 48.288 37.2106 48.8542 35.9945 47.3679L25.0489 34.4388L14.1031 47.3915C12.8869 48.8778 10.5463 48.3116 10.1104 46.4242L9.30722 42.9559C9.10072 42.083 8.43524 41.3988 7.60914 41.2101L3.82294 40.2899C2.07898 39.8652 1.45941 37.6239 2.72149 36.3263L11.6708 27.1249C14.149 30.8998 18.0729 33.5659 22.6394 34.2501C23.4196 34.3916 24.2228 34.4624 25.0489 34.4624C25.875 34.4624 26.678 34.3916 27.4582 34.2501C32.0247 33.5659 35.9486 30.8998 38.4269 27.1249L47.3761 36.3263C48.6382 37.6003 48.0186 39.8416 46.2747 40.2664Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26.3799 10.7985L27.7338 13.5825C27.9173 13.96 28.3992 14.3375 28.8352 14.4083L31.2905 14.833C32.8509 15.0925 33.218 16.2722 32.0936 17.4282L30.189 19.3864C29.8678 19.7168 29.6842 20.3538 29.799 20.8256L30.3497 23.2558C30.7857 25.1668 29.799 25.9218 28.1468 24.9073L25.8521 23.5153C25.439 23.2558 24.7507 23.2558 24.3376 23.5153L22.0429 24.9073C20.3907 25.8982 19.404 25.1668 19.84 23.2558L20.3907 20.8256C20.4825 20.3774 20.3218 19.7168 20.0006 19.3864L18.096 17.4282C16.9716 16.2722 17.3388 15.1161 18.8992 14.833L21.3545 14.4083C21.7676 14.3375 22.2495 13.96 22.433 13.5825L23.7869 10.7985C24.4523 9.28859 25.6456 9.28859 26.3799 10.7985Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1287_44654">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='mt-[-39px]'>
            <h3 className='font-rubik font-bold text-center text-[32px] tracking-[-0.02em] leading-[37.92px]'>Money-back guarantee</h3>
            <p className='font-outfit font-normal text-center text-[18px] leading-[28.8px] mt-[20px]'>We believe you'll enjoy your first cooking lesson. However, we've got your back if anything goes differently than expected. Our money-back guarantee ensures you can take the first step with complete confidence.</p>
          </div>
        </div>
      </section>
      <section className='w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px]'>
        <div className='flex justify-between items-center md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse gap-[9.097vw] mt-[123px]'>
          <div className='flex flex-col justify-center gap-[15px] w-[590.5px] md:w-[88.383vw] sm:w-[88.383vw] xsm:w-full'>
            <h3 className='font-rubik font-semibold text-[50px] leading-[56.65px] tracking-[-0.02em] xsm:text-[30px] xsm:leading-[33.99px]'>Become A Chef</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-TextColorSec mt-[1px]'>Share your culinary secrets, inspire cooking enthusiasts worldwide, and grow your career like never before. Our platform offers a unique way to connect, teach, and earn.</p>
            <div className='flex flex-col gap-[8px] my-[16px]'>
              <div className='flex items-start gap-[8px]'>
                <svg className='min-w-[22px]' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1287_44670)">
                    <path d="M21.3125 11C21.3125 11.88 20.2314 12.6053 20.0148 13.4166C19.7914 14.2553 20.3569 15.4241 19.9323 16.158C19.5009 16.9039 18.2033 16.9933 17.5983 17.5983C16.9933 18.2033 16.9039 19.5009 16.158 19.9323C15.4241 20.3569 14.2553 19.7914 13.4166 20.0148C12.6053 20.2314 11.88 21.3125 11 21.3125C10.12 21.3125 9.39469 20.2314 8.58344 20.0148C7.74469 19.7914 6.57594 20.3569 5.84203 19.9323C5.09609 19.5009 5.00672 18.2033 4.40172 17.5983C3.79672 16.9933 2.49906 16.9039 2.06766 16.158C1.64312 15.4241 2.20859 14.2553 1.98516 13.4166C1.76859 12.6053 0.6875 11.88 0.6875 11C0.6875 10.12 1.76859 9.39469 1.98516 8.58344C2.20859 7.74469 1.64312 6.57594 2.06766 5.84203C2.49906 5.09609 3.79672 5.00672 4.40172 4.40172C5.00672 3.79672 5.09609 2.49906 5.84203 2.06766C6.57594 1.64312 7.74469 2.20859 8.58344 1.98516C9.39469 1.76859 10.12 0.6875 11 0.6875C11.88 0.6875 12.6053 1.76859 13.4166 1.98516C14.2553 2.20859 15.4241 1.64312 16.158 2.06766C16.9039 2.49906 16.9933 3.79672 17.5983 4.40172C18.2033 5.00672 19.5009 5.09609 19.9323 5.84203C20.3569 6.57594 19.7914 7.74469 20.0148 8.58344C20.2314 9.39469 21.3125 10.12 21.3125 11Z" fill="#D27722" />
                    <path d="M13.9804 7.92685L10.0548 11.8525L8.01981 9.81919C7.80757 9.60708 7.51979 9.48792 7.21973 9.48792C6.91967 9.48792 6.63189 9.60708 6.41965 9.81919C6.20753 10.0314 6.08838 10.3192 6.08838 10.6193C6.08838 10.9193 6.20753 11.2071 6.41965 11.4193L9.2745 14.2742C9.48107 14.4805 9.76111 14.5964 10.0531 14.5964C10.3451 14.5964 10.6251 14.4805 10.8317 14.2742L15.5789 9.52701C15.791 9.31477 15.9101 9.02699 15.9101 8.72693C15.9101 8.42687 15.791 8.13908 15.5789 7.92685C15.474 7.82183 15.3494 7.73852 15.2122 7.68168C15.0751 7.62484 14.9281 7.59558 14.7797 7.59558C14.6312 7.59558 14.4842 7.62484 14.3471 7.68168C14.2099 7.73852 14.0854 7.82183 13.9804 7.92685Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1287_44670">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-TextColorSec'><span className='font-bold'>Build Your Brand.</span> Showcase your culinary skills and build your brand within our community.</p>
              </div>
              <div className='flex items-start gap-[8px]'>
                <svg className='min-w-[22px]' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1287_44670)">
                    <path d="M21.3125 11C21.3125 11.88 20.2314 12.6053 20.0148 13.4166C19.7914 14.2553 20.3569 15.4241 19.9323 16.158C19.5009 16.9039 18.2033 16.9933 17.5983 17.5983C16.9933 18.2033 16.9039 19.5009 16.158 19.9323C15.4241 20.3569 14.2553 19.7914 13.4166 20.0148C12.6053 20.2314 11.88 21.3125 11 21.3125C10.12 21.3125 9.39469 20.2314 8.58344 20.0148C7.74469 19.7914 6.57594 20.3569 5.84203 19.9323C5.09609 19.5009 5.00672 18.2033 4.40172 17.5983C3.79672 16.9933 2.49906 16.9039 2.06766 16.158C1.64312 15.4241 2.20859 14.2553 1.98516 13.4166C1.76859 12.6053 0.6875 11.88 0.6875 11C0.6875 10.12 1.76859 9.39469 1.98516 8.58344C2.20859 7.74469 1.64312 6.57594 2.06766 5.84203C2.49906 5.09609 3.79672 5.00672 4.40172 4.40172C5.00672 3.79672 5.09609 2.49906 5.84203 2.06766C6.57594 1.64312 7.74469 2.20859 8.58344 1.98516C9.39469 1.76859 10.12 0.6875 11 0.6875C11.88 0.6875 12.6053 1.76859 13.4166 1.98516C14.2553 2.20859 15.4241 1.64312 16.158 2.06766C16.9039 2.49906 16.9933 3.79672 17.5983 4.40172C18.2033 5.00672 19.5009 5.09609 19.9323 5.84203C20.3569 6.57594 19.7914 7.74469 20.0148 8.58344C20.2314 9.39469 21.3125 10.12 21.3125 11Z" fill="#D27722" />
                    <path d="M13.9804 7.92685L10.0548 11.8525L8.01981 9.81919C7.80757 9.60708 7.51979 9.48792 7.21973 9.48792C6.91967 9.48792 6.63189 9.60708 6.41965 9.81919C6.20753 10.0314 6.08838 10.3192 6.08838 10.6193C6.08838 10.9193 6.20753 11.2071 6.41965 11.4193L9.2745 14.2742C9.48107 14.4805 9.76111 14.5964 10.0531 14.5964C10.3451 14.5964 10.6251 14.4805 10.8317 14.2742L15.5789 9.52701C15.791 9.31477 15.9101 9.02699 15.9101 8.72693C15.9101 8.42687 15.791 8.13908 15.5789 7.92685C15.474 7.82183 15.3494 7.73852 15.2122 7.68168C15.0751 7.62484 14.9281 7.59558 14.7797 7.59558C14.6312 7.59558 14.4842 7.62484 14.3471 7.68168C14.2099 7.73852 14.0854 7.82183 13.9804 7.92685Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1287_44670">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-TextColorSec'><span className='font-bold'>Expand Your Reach.</span> Connect with cooking enthusiasts across the globe and expand your audience beyond geographical limits.</p>
              </div>
              <div className='flex items-start gap-[8px]'>
                <svg className='min-w-[22px]' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1287_44670)">
                    <path d="M21.3125 11C21.3125 11.88 20.2314 12.6053 20.0148 13.4166C19.7914 14.2553 20.3569 15.4241 19.9323 16.158C19.5009 16.9039 18.2033 16.9933 17.5983 17.5983C16.9933 18.2033 16.9039 19.5009 16.158 19.9323C15.4241 20.3569 14.2553 19.7914 13.4166 20.0148C12.6053 20.2314 11.88 21.3125 11 21.3125C10.12 21.3125 9.39469 20.2314 8.58344 20.0148C7.74469 19.7914 6.57594 20.3569 5.84203 19.9323C5.09609 19.5009 5.00672 18.2033 4.40172 17.5983C3.79672 16.9933 2.49906 16.9039 2.06766 16.158C1.64312 15.4241 2.20859 14.2553 1.98516 13.4166C1.76859 12.6053 0.6875 11.88 0.6875 11C0.6875 10.12 1.76859 9.39469 1.98516 8.58344C2.20859 7.74469 1.64312 6.57594 2.06766 5.84203C2.49906 5.09609 3.79672 5.00672 4.40172 4.40172C5.00672 3.79672 5.09609 2.49906 5.84203 2.06766C6.57594 1.64312 7.74469 2.20859 8.58344 1.98516C9.39469 1.76859 10.12 0.6875 11 0.6875C11.88 0.6875 12.6053 1.76859 13.4166 1.98516C14.2553 2.20859 15.4241 1.64312 16.158 2.06766C16.9039 2.49906 16.9933 3.79672 17.5983 4.40172C18.2033 5.00672 19.5009 5.09609 19.9323 5.84203C20.3569 6.57594 19.7914 7.74469 20.0148 8.58344C20.2314 9.39469 21.3125 10.12 21.3125 11Z" fill="#D27722" />
                    <path d="M13.9804 7.92685L10.0548 11.8525L8.01981 9.81919C7.80757 9.60708 7.51979 9.48792 7.21973 9.48792C6.91967 9.48792 6.63189 9.60708 6.41965 9.81919C6.20753 10.0314 6.08838 10.3192 6.08838 10.6193C6.08838 10.9193 6.20753 11.2071 6.41965 11.4193L9.2745 14.2742C9.48107 14.4805 9.76111 14.5964 10.0531 14.5964C10.3451 14.5964 10.6251 14.4805 10.8317 14.2742L15.5789 9.52701C15.791 9.31477 15.9101 9.02699 15.9101 8.72693C15.9101 8.42687 15.791 8.13908 15.5789 7.92685C15.474 7.82183 15.3494 7.73852 15.2122 7.68168C15.0751 7.62484 14.9281 7.59558 14.7797 7.59558C14.6312 7.59558 14.4842 7.62484 14.3471 7.68168C14.2099 7.73852 14.0854 7.82183 13.9804 7.92685Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1287_44670">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-TextColorSec'><span className='font-bold'>Grow Your Business Faster.</span> Utilize our platform's features and resources to accelerate your growth and increase your income.</p>
              </div>
            </div>
            <Link to={'signup'}>
              <button className='h-[39px] hover:bg-[white] border-2 border-primary2 hover:border-2 hover:border-primary2 hover:text-primary2 transition-all duration-200 w-[150px] xsm:w-full text-[white] bg-primary2 font-outfit rounded-[4px] font-medium text-[20px] leading-[25.2px]'>Become a chef</button>
            </Link>
            <div className='flex items-center gap-[8px] group cursor-pointer'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_81_758)">
                  <path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6.66663V9.99996" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 13.3334H10.0083" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_81_758">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Link to={'support'}>
                <p className='font-outfit font-medium leading-[22px] text-[14px] group-hover:text-primary2 transition-all duration-200'>Learn how our platform works</p>
              </Link>
            </div>
          </div>
          <div className='h-fit'>
            <div className='xsm:overflow-hidden xsm:max-w-[calc(100vw - 100%)] flex justify-center'>
              <img className='w-[38.264vw] md:w-[583px] sm:w-[583px] xsm:min-w-[110vw] xsm:m-auto' src={BecomeaChef} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full md:px-0 sm:px-0 xsm:px-0 px-[4.444vw] min-h-[647px] mt-[142px]'>
        <div className='bg-primary2 xsm:rounded-none sm:rounded-none md:rounded-none rounded-[26px] flex md:items-center sm:items-center md:px-[42px] sm:px-[36px] px-0 gap-[5.036vw] xsm:gap-0 xsm:flex-col'>
          <div className='xsm:overflow-hidden xsm:w-[calc(100vw - 100%)] flex justify-center'>
            <img className='object-cover rounded-s-[26px] lg:min-w-[39.167vw] xl:min-w-[39.167vw] 2xl:min-w-[39.167vw] md:min-w-[278.999px] sm:min-w-[230.999px] xsm:min-w-[105vw] xsm:m-auto md:rounded-[24px] sm:rounded-[24px] md:h-[506px] sm:h-[506px]' src={BecomeaStudent} alt="" />
            {/* <img className='' src={BecomeaStudent} alt="" /> */}
          </div>
          <div className='pt-[90px] w-full xsm:pt-[65px] xsm:pb-[65px] xsm:px-[31.997px] md:pr-0 sm:pr-0 pr-[5.556vw] pb-[74px] flex flex-col gap-[31px]'>
            <h3 className='font-rubik font-semibold tracking-[-0.02em] text-[50px] md:text-[42px] md:leading-[47.59px] sm:text-[42px] sm:leading-[47.59px] xsm:text-[30px] xsm:leading-[33.99px] leading-[56.65px] text-[white]'>Become A Student</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white]'>Kick-start your culinary adventure with COOK. We provide a space for cooking enthusiasts of all levels to learn, explore, and master culinary arts from professional chefs worldwide. So dive in and transform your kitchen into a playground of flavors.</p>
            <div className='flex flex-col gap-[8px]'>
              <div className='flex items-start gap-[8px]'>
                <svg className='min-w-[22px]' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1287_44698)">
                    <path d="M21.3125 11C21.3125 11.88 20.2314 12.6053 20.0148 13.4166C19.7914 14.2553 20.3569 15.4241 19.9323 16.158C19.5009 16.9039 18.2033 16.9933 17.5983 17.5983C16.9933 18.2033 16.9039 19.5009 16.158 19.9323C15.4241 20.3569 14.2553 19.7914 13.4166 20.0148C12.6053 20.2314 11.88 21.3125 11 21.3125C10.12 21.3125 9.39469 20.2314 8.58344 20.0148C7.74469 19.7914 6.57594 20.3569 5.84203 19.9323C5.09609 19.5009 5.00672 18.2033 4.40172 17.5983C3.79672 16.9933 2.49906 16.9039 2.06766 16.158C1.64312 15.4241 2.20859 14.2553 1.98516 13.4166C1.76859 12.6053 0.6875 11.88 0.6875 11C0.6875 10.12 1.76859 9.39469 1.98516 8.58344C2.20859 7.74469 1.64312 6.57594 2.06766 5.84203C2.49906 5.09609 3.79672 5.00672 4.40172 4.40172C5.00672 3.79672 5.09609 2.49906 5.84203 2.06766C6.57594 1.64312 7.74469 2.20859 8.58344 1.98516C9.39469 1.76859 10.12 0.6875 11 0.6875C11.88 0.6875 12.6053 1.76859 13.4166 1.98516C14.2553 2.20859 15.4241 1.64312 16.158 2.06766C16.9039 2.49906 16.9933 3.79672 17.5983 4.40172C18.2033 5.00672 19.5009 5.09609 19.9323 5.84203C20.3569 6.57594 19.7914 7.74469 20.0148 8.58344C20.2314 9.39469 21.3125 10.12 21.3125 11Z" fill="#FFDBB8" />
                    <path d="M13.9804 7.92688L10.0548 11.8525L8.01981 9.81922C7.80757 9.60711 7.51979 9.48795 7.21973 9.48795C6.91967 9.48795 6.63189 9.60711 6.41965 9.81922C6.20753 10.0315 6.08838 10.3192 6.08838 10.6193C6.08838 10.9194 6.20753 11.2071 6.41965 11.4194L9.2745 14.2742C9.48107 14.4806 9.76111 14.5965 10.0531 14.5965C10.3451 14.5965 10.6251 14.4806 10.8317 14.2742L15.5789 9.52704C15.791 9.3148 15.9101 9.02702 15.9101 8.72696C15.9101 8.4269 15.791 8.13911 15.5789 7.92688C15.474 7.82186 15.3494 7.73855 15.2122 7.68171C15.0751 7.62487 14.9281 7.59561 14.7797 7.59561C14.6312 7.59561 14.4842 7.62487 14.3471 7.68171C14.2099 7.73855 14.0854 7.82186 13.9804 7.92688Z" fill="#D27722" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1287_44698">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white] md:text-[16px] md:leading-[24.08px] sm:text-[16px] sm:leading-[24.08px]'><span className='font-bold'>Diverse Classes:</span> Showcase your culinary skills and build your brand within our community.</p>
              </div>
              <div className='flex items-start gap-[8px]'>
                <svg className='min-w-[22px]' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1287_44698)">
                    <path d="M21.3125 11C21.3125 11.88 20.2314 12.6053 20.0148 13.4166C19.7914 14.2553 20.3569 15.4241 19.9323 16.158C19.5009 16.9039 18.2033 16.9933 17.5983 17.5983C16.9933 18.2033 16.9039 19.5009 16.158 19.9323C15.4241 20.3569 14.2553 19.7914 13.4166 20.0148C12.6053 20.2314 11.88 21.3125 11 21.3125C10.12 21.3125 9.39469 20.2314 8.58344 20.0148C7.74469 19.7914 6.57594 20.3569 5.84203 19.9323C5.09609 19.5009 5.00672 18.2033 4.40172 17.5983C3.79672 16.9933 2.49906 16.9039 2.06766 16.158C1.64312 15.4241 2.20859 14.2553 1.98516 13.4166C1.76859 12.6053 0.6875 11.88 0.6875 11C0.6875 10.12 1.76859 9.39469 1.98516 8.58344C2.20859 7.74469 1.64312 6.57594 2.06766 5.84203C2.49906 5.09609 3.79672 5.00672 4.40172 4.40172C5.00672 3.79672 5.09609 2.49906 5.84203 2.06766C6.57594 1.64312 7.74469 2.20859 8.58344 1.98516C9.39469 1.76859 10.12 0.6875 11 0.6875C11.88 0.6875 12.6053 1.76859 13.4166 1.98516C14.2553 2.20859 15.4241 1.64312 16.158 2.06766C16.9039 2.49906 16.9933 3.79672 17.5983 4.40172C18.2033 5.00672 19.5009 5.09609 19.9323 5.84203C20.3569 6.57594 19.7914 7.74469 20.0148 8.58344C20.2314 9.39469 21.3125 10.12 21.3125 11Z" fill="#FFDBB8" />
                    <path d="M13.9804 7.92688L10.0548 11.8525L8.01981 9.81922C7.80757 9.60711 7.51979 9.48795 7.21973 9.48795C6.91967 9.48795 6.63189 9.60711 6.41965 9.81922C6.20753 10.0315 6.08838 10.3192 6.08838 10.6193C6.08838 10.9194 6.20753 11.2071 6.41965 11.4194L9.2745 14.2742C9.48107 14.4806 9.76111 14.5965 10.0531 14.5965C10.3451 14.5965 10.6251 14.4806 10.8317 14.2742L15.5789 9.52704C15.791 9.3148 15.9101 9.02702 15.9101 8.72696C15.9101 8.4269 15.791 8.13911 15.5789 7.92688C15.474 7.82186 15.3494 7.73855 15.2122 7.68171C15.0751 7.62487 14.9281 7.59561 14.7797 7.59561C14.6312 7.59561 14.4842 7.62487 14.3471 7.68171C14.2099 7.73855 14.0854 7.82186 13.9804 7.92688Z" fill="#D27722" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1287_44698">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white] md:text-[16px] md:leading-[24.08px] sm:text-[16px] sm:leading-[24.08px]'><span className='font-bold'>World-Class Chefs:</span> Learn directly from professional chefs sharing their unique culinary secrets.</p>
              </div>
              <div className='flex items-start gap-[8px]'>
                <svg className='min-w-[22px]' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1287_44698)">
                    <path d="M21.3125 11C21.3125 11.88 20.2314 12.6053 20.0148 13.4166C19.7914 14.2553 20.3569 15.4241 19.9323 16.158C19.5009 16.9039 18.2033 16.9933 17.5983 17.5983C16.9933 18.2033 16.9039 19.5009 16.158 19.9323C15.4241 20.3569 14.2553 19.7914 13.4166 20.0148C12.6053 20.2314 11.88 21.3125 11 21.3125C10.12 21.3125 9.39469 20.2314 8.58344 20.0148C7.74469 19.7914 6.57594 20.3569 5.84203 19.9323C5.09609 19.5009 5.00672 18.2033 4.40172 17.5983C3.79672 16.9933 2.49906 16.9039 2.06766 16.158C1.64312 15.4241 2.20859 14.2553 1.98516 13.4166C1.76859 12.6053 0.6875 11.88 0.6875 11C0.6875 10.12 1.76859 9.39469 1.98516 8.58344C2.20859 7.74469 1.64312 6.57594 2.06766 5.84203C2.49906 5.09609 3.79672 5.00672 4.40172 4.40172C5.00672 3.79672 5.09609 2.49906 5.84203 2.06766C6.57594 1.64312 7.74469 2.20859 8.58344 1.98516C9.39469 1.76859 10.12 0.6875 11 0.6875C11.88 0.6875 12.6053 1.76859 13.4166 1.98516C14.2553 2.20859 15.4241 1.64312 16.158 2.06766C16.9039 2.49906 16.9933 3.79672 17.5983 4.40172C18.2033 5.00672 19.5009 5.09609 19.9323 5.84203C20.3569 6.57594 19.7914 7.74469 20.0148 8.58344C20.2314 9.39469 21.3125 10.12 21.3125 11Z" fill="#FFDBB8" />
                    <path d="M13.9804 7.92688L10.0548 11.8525L8.01981 9.81922C7.80757 9.60711 7.51979 9.48795 7.21973 9.48795C6.91967 9.48795 6.63189 9.60711 6.41965 9.81922C6.20753 10.0315 6.08838 10.3192 6.08838 10.6193C6.08838 10.9194 6.20753 11.2071 6.41965 11.4194L9.2745 14.2742C9.48107 14.4806 9.76111 14.5965 10.0531 14.5965C10.3451 14.5965 10.6251 14.4806 10.8317 14.2742L15.5789 9.52704C15.791 9.3148 15.9101 9.02702 15.9101 8.72696C15.9101 8.4269 15.791 8.13911 15.5789 7.92688C15.474 7.82186 15.3494 7.73855 15.2122 7.68171C15.0751 7.62487 14.9281 7.59561 14.7797 7.59561C14.6312 7.59561 14.4842 7.62487 14.3471 7.68171C14.2099 7.73855 14.0854 7.82186 13.9804 7.92688Z" fill="#D27722" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1287_44698">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white] md:text-[16px] md:leading-[24.08px] sm:text-[16px] sm:leading-[24.08px]'><span className='font-bold'>Interactive Learning:</span> Ask questions and receive real-time feedback in our interactive classes.</p>
              </div>
            </div>
            <Link className='xsm:w-full' to={'signup'}>
              <button className='h-[39px] hover:bg-primary2 hover:text-[rgba(255,219,184,1)] hover:border-2 hover:border-primaryLighten2 transition-all duration-200 w-[90px] xsm:w-full text-[rgba(255,219,184,1)] border-2 border-[rgba(255,219,184,1)] text-primary2 bg-[rgba(255,219,184,1)] font-outfit rounded-[4px] font-medium text-[20px] leading-[23px]'>Sign up</button>
            </Link>
          </div>
        </div>
      </section>
      <section className='w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px] mt-[142px] xsm:mt-[104px] flex md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse gap-[5.069vw] lg:gap-[2.5vw]'>
        <div className=''>
          <div className='flex items-center gap-[0.903vw]'>
            <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3043 3.0638C21.7732 -0.244989 33.7595 0.0042736 33.7595 0.0042736C33.7595 0.0042736 38.8006 15.0966 33.7595 22.2951C26.3461 32.8811 0 22.2951 0 22.2951C0 22.2951 6.65613 7.4873 15.3043 3.0638Z" fill="#D27722" />
            </svg>
            <h3 className='font-semibold font-rubik text-[40px] leading-[45.32px]  xsm:text-[30px] xsm:leadnig-[33.99px] tracking-[-0.02em]'>Popular online classes</h3>
          </div>
          <div className='ml-[49px] md:ml-0 sm:ml-0 xsm:ml-0 mt-[47px]'>
            <h4 className='font-[600] font-outfit text-[24px] leading-[30.24px] md:leading-[36px] sm:leading-[36px]'>Find a tutor by category</h4>
            <div className='w-[34.444vw] md:w-full sm:w-full xsm:w-full flex flex-wrap gap-[16px] mt-[26px]'>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 text-primary2 transition-all duration-200 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Bakery</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 text-primary2 transition-all duration-200 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Japanese Sushi Making</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 text-primary2 transition-all duration-200 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Thai</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 text-primary2 transition-all duration-200 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Seafood</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 text-primary2 transition-all duration-200 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Italian Cuisine</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 text-primary2 transition-all duration-200 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Vegan</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 text-primary2 transition-all duration-200 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>BBQ & Grilling</p>
              </Link>
            </div>
          </div>
          <div className='ml-[49px] md:ml-0 sm:ml-0 xsm:ml-0 mt-[75px]'>
            <h4 className='font-[600] font-outfit text-[24px] leading-[30.24px]  md:leading-[36px] sm:leading-[36px]'>Find a tutor by country</h4>
            <div className='w-[22.847vw] md:w-full sm:w-full xsm:w-full flex flex-wrap gap-[16px] mt-[26px]'>
              <Link to={'/search-tutors'}>
                <p className=' px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 transition-all duration-200 text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>USA</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 transition-all duration-200 text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Spain</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 transition-all duration-200 text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>France</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 transition-all duration-200 text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Mexico</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] hover:text-[white] hover:bg-primary2 transition-all duration-200 text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Germany</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='h-[159.01px] border border-[rgba(255,219,184,1)] self-center md:hidden sm:hidden xsm:hidden'></div>
        <div className='flex flex-col  w-full md:w-full sm:w-full xsm:w-full'>
          <div className='flex items-center gap-[13px]'>
            <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3043 3.0638C21.7732 -0.244989 33.7595 0.0042736 33.7595 0.0042736C33.7595 0.0042736 38.8006 15.0966 33.7595 22.2951C26.3461 32.8811 0 22.2951 0 22.2951C0 22.2951 6.65613 7.4873 15.3043 3.0638Z" fill="#D27722" />
            </svg>
            <h3 className='font-semibold font-rubik text-[40px] leading-[45.32px] xsm:text-[36px] xsm:leadnig-[40.79px] tracking-[-0.02em]'>COOK Blog</h3>
          </div>
          <div className='grid grid-cols-2 xsm:grid-cols-1 mt-[53px] gap-[23px]'>
            <Link to={"/blog"}>
              <div className='landingExploreAndLearnOrange gap-[23px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img className='' src={CookBlog1} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/blog"}>
              <div className='landingExploreAndLearnOrange gap-[23px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog2} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/blog"}>
              <div className='landingExploreAndLearnOrange gap-[23px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog3} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/blog"}>
              <div className='landingExploreAndLearnOrange gap-[23px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog4} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}


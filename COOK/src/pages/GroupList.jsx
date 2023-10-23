import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GroupHeroPattern from "../assets/GroupList/GroupHeroPattern.png"
import FilterIcon from "../assets/TutorList/FilterIcon.svg"
import UpsideDown from "../assets/TutorList/UpsideDown.svg"
import JoinClassGroup from '../assets/allAssets/join-cook-groups.jpg'
import Availability from '../components/DropDowns/Availability'
import IWantToLearn from '../components/DropDowns/IWantToLearn'
import PricePerLesson from '../components/DropDowns/PricePerLesson'
import SortBy from '../components/DropDowns/SortBy'
import GroupCard from '../components/GroupList/GroupCard'
import Pagination from '../components/utils/Pagination'
export default function GroupList() {
  const [iWantToLearn, setIWantToLearn] = useState(false);
  const [pricePerLesson, setPricePerLesson] = useState(false);
  const [availability, setAvailability] = useState(false);
  const [sort, setSort] = useState(false);
  const handleScroll = (event, id) => {
    event.preventDefault();
    const targetElementId = id;
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop + -125,
        behavior: 'smooth',
      });
    }
  };
  return (
    <main className='xsm:overflow-hidden'>
      <div className='w-full min-h-[411px] flex items-center md:justify-center sm:justify-center bg-[rgba(255,253,244,1)] xsm:mt-[104px]'>
        <div className='pl-[67px] pr-[118px] xsm:pl-[8.205vw] xsm:pr-[8.205vw] flex items-center justify-between w-full'>
          <div className='flex flex-col gap-[20px] md:items-center sm:items-center xsm:items-center md:flex-1 sm:flex-1'>
            <h1 className='font-bold font-rubik text-[54px] leading-[63.99px] tracking-[-0.02em] md:text-center sm:text-center xsm:text-center md:text-[36px] md:leading-[42.66px] xsm:text-[42px] xsm:leading-[50.11px]'>Cook Together with <span className='font-pacifico font-normal leading-[63.99px] text-primary2 md:leading-[63.22px] sm:leading-[63.22px]'>Group</span></h1>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec w-[37.014vw] md:w-[63.832vw] sm:w-[63.832vw] xsm:w-[83.59vw] md:text-center sm:text-center xsm:text-center'>Embrace the fun of learning with COOK's group lessons. Dive into lively discussions, collaborate on recipes, and connect with a diverse community of food lovers. Transform your kitchen into a vibrant, interactive culinary classroom!</p>
            <div className='flex items-center gap-[17.006px] xsm:gap-[8px]'>
              <a onClick={(e) => handleScroll(e, "explore")} href="#explore">
                <button className='hover:bg-[rgba(0,0,0,0)] xsm:text-[16px] border-2 border-primary2 hover:border-2 hover:border-primary2 hover:text-primary2 transition-all duration-200 px-[1.111vw] h-[39px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-[white] bg-primary2'>Explore groups</button>
              </a>
              <Link to={'/search-tutors'}>
                <button className='px-[1.111vw] hover:bg-primary2 xsm:text-[16px] hover:text-[white] transition-all duration-200 h-[39px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-primary2 bg-[rgba(0,0,0,0)] border-2 border-primary2'>Find A Tutor</button>
              </Link>
            </div>
          </div>
          <div className='md:hidden sm:hidden xsm:hidden'>
            <div className='w-fit relative'>
              <img className='w-[306px] absolute z-10 right-[-35px] bottom-[-40px]' src={GroupHeroPattern} alt="" />
              <img className='w-[470px] rounded-[9px] relative z-20' src={JoinClassGroup} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='pl-[65px] pr-[63px] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw] '>
        <button className='w-full rounded-[12px] justify-center py-[14px] mt-[21px] mb-[41px] xsm:flex hidden gap-[12px] items-center border-2 border-[rgba(255,219,184,1)]'>
          <img src={FilterIcon} alt="" />
          <p className='font-outfit font-medium text-[22px] leading-[33px]'>Filters</p>
        </button>
        {/* <div className='flex gap-[21px] mt-[81px] mb-[79px] flex-wrap xsm:hidden'>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Category</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Baking</option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Price</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Mon, 27 Apr </option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Time</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">9:00pm - 10:00pm</option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Date</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Mon, 27 Apr </option>
            </select>
          </div>
        </div> */}
        <div className='mt-[52px] flex justify-between items-center xsm:hidden'>
          <div className='flex gap-[21px]'>
            <div className='relative w-[15.694vw] md:w-[27.784vw] sm:w-[27.784vw]'>
              <div style={iWantToLearn ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} onClick={() => setIWantToLearn(!iWantToLearn)} className='cursor-pointer h-[67px]  rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                <p name="" className='h-full flex items-center font-medium md:text-[18px] md:leading-[27px] text-[20px] leading-[24.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">I want to Learn</p>
                <svg style={iWantToLearn?{transform:"rotate(-45deg)"}:{}} className='transition-all duration-200 self-center mr-[20px]' width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.18205 6.40236C5.79792 6.76062 5.20208 6.76062 4.81795 6.40236L0.861155 2.71208C0.197273 2.09292 0.635403 0.980775 1.5432 0.980775L9.4568 0.980776C10.3646 0.980776 10.8027 2.09292 10.1388 2.71208L6.18205 6.40236Z" fill="#D27722" />
                </svg>
              </div>
              {iWantToLearn &&
                <IWantToLearn />
              }
            </div>
            <div className='relative w-[15.694vw] md:w-[27.784vw] sm:w-[27.784vw]'>
              <div style={pricePerLesson ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} onClick={() => setPricePerLesson(!pricePerLesson)} className='cursor-pointer h-[67px] w-full md:w-[27.784vw] sm:w-[27.784vw]  rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                <p name="" className='h-full flex items-center font-medium md:text-[18px] md:leading-[27px] text-[20px] leading-[24.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">Price per lesson</p>
                <svg style={pricePerLesson?{transform:"rotate(-45deg)"}:{}} className='transition-all duration-200 self-center mr-[20px]' width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.18205 6.40236C5.79792 6.76062 5.20208 6.76062 4.81795 6.40236L0.861155 2.71208C0.197273 2.09292 0.635403 0.980775 1.5432 0.980775L9.4568 0.980776C10.3646 0.980776 10.8027 2.09292 10.1388 2.71208L6.18205 6.40236Z" fill="#D27722" />
                </svg>
              </div>
              {pricePerLesson &&
                <PricePerLesson />
              }
            </div>
            <div className='relative w-[19.792vw] md:w-[27.784vw] sm:w-[27.784vw]'>
              <div style={availability ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} onClick={() => setAvailability(!availability)} className='cursor-pointer h-[67px] w-full rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                <p name="" className='h-full flex items-center font-outfit font-medium md:text-[18px] md:leading-[27px] text-[20px] leading-[24.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">Availability</p>
                <svg style={availability?{transform:"rotate(-45deg)"}:{}} className='transition-all duration-200 self-center mr-[20px]' width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.18205 6.40236C5.79792 6.76062 5.20208 6.76062 4.81795 6.40236L0.861155 2.71208C0.197273 2.09292 0.635403 0.980775 1.5432 0.980775L9.4568 0.980776C10.3646 0.980776 10.8027 2.09292 10.1388 2.71208L6.18205 6.40236Z" fill="#D27722" />
                </svg>
              </div>
              {availability &&
                <Availability />
              }
            </div>
          </div>

          <div className='flex gap-[20px] items-center md:hidden sm:hidden'>
            <div className='flex gap-[10px] items-center px-[16px] w-[226px] h-[55px] border-2 border-[rgba(255,219,184,1)] rounded-[8px]'>
              <svg className='min-w-[26px] min-h-[26px]' width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9167 21.0833C16.7031 21.0833 20.5833 17.2031 20.5833 12.4167C20.5833 7.6302 16.7031 3.75 11.9167 3.75C7.1302 3.75 3.25 7.6302 3.25 12.4167C3.25 17.2031 7.1302 21.0833 11.9167 21.0833Z" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.75 23.25L18.0375 18.5375" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input type="text" name="" id="" placeholder='Search' className='placeholder:text-TextColor w-full outline-none font-outfit text-[20px] leading-[22.68px]' />
            </div>
            <div className='relative'>
              <svg onClick={() => setSort(!sort)} className='transition-all duration-200 group cursor-pointer min-w-[64px] min-h-[61px]' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className='transition-all duration-200 ' style={sort ? { stroke: "#D27722", fill: "#D27722" } : { stroke: "#FFDBB8" }} x="0.5" y="0.5" width="47" height="47" rx="23.5" />
                <path className='transition-all duration-200 ' style={sort ? { fill: "#FFDBB8" } : { fill: "#D27722" }} d="M31.7071 16.293L27.7071 12.2929L27.7066 12.2925C27.6834 12.2694 27.6591 12.2474 27.6338 12.2267C27.6222 12.2172 27.6101 12.2089 27.5982 12.2C27.584 12.1894 27.57 12.1784 27.5552 12.1685C27.541 12.159 27.5262 12.1507 27.5116 12.142C27.4982 12.134 27.4851 12.1256 27.4713 12.1182C27.4564 12.1102 27.4411 12.1035 27.4259 12.0963C27.4115 12.0895 27.3973 12.0823 27.3826 12.0762C27.3679 12.0701 27.3528 12.0651 27.3378 12.0598C27.322 12.0541 27.3064 12.0481 27.2903 12.0432C27.2753 12.0386 27.26 12.0353 27.2449 12.0315C27.2284 12.0273 27.2121 12.0227 27.1954 12.0194C27.1778 12.0159 27.1601 12.0138 27.1424 12.0113C27.1279 12.0092 27.1135 12.0064 27.0987 12.005C27.0331 11.9985 26.9669 11.9985 26.9013 12.005C26.8865 12.0064 26.8722 12.0092 26.8576 12.0113C26.8399 12.0138 26.8221 12.0159 26.8046 12.0194C26.7878 12.0227 26.7716 12.0273 26.7552 12.0315C26.74 12.0353 26.7247 12.0386 26.7097 12.0432C26.6936 12.0481 26.678 12.0541 26.6622 12.0598C26.6472 12.0652 26.6322 12.0701 26.6174 12.0762C26.6026 12.0823 26.5885 12.0895 26.5741 12.0963C26.5589 12.1035 26.5436 12.1102 26.5287 12.1182C26.5149 12.1256 26.5018 12.134 26.4884 12.142C26.4738 12.1507 26.459 12.159 26.4448 12.1685C26.43 12.1784 26.4161 12.1894 26.4019 12.2C26.39 12.2089 26.3778 12.2172 26.3662 12.2267C26.3409 12.2475 26.3165 12.2693 26.2934 12.2925L26.2929 12.2929L22.2929 16.2929C21.9024 16.6834 21.9024 17.3166 22.2929 17.7071C22.6834 18.0976 23.3166 18.0976 23.7072 17.7071L26 15.4142V27.0001C26 27.5523 26.4477 28 27 28C27.5523 28 28 27.5523 28 27.0001V15.4143L30.2929 17.7072C30.6834 18.0977 31.3166 18.0977 31.7071 17.7072C32.0976 17.3166 32.0976 16.6835 31.7071 16.293ZM24.2929 30.2929L22 32.5858V21.0001C22 20.4478 21.5523 20.0001 21 20.0001C20.4477 20.0001 20 20.4478 20 21.0001V32.5858L17.7071 30.2929C17.3166 29.9024 16.6834 29.9024 16.2929 30.2929C15.9024 30.6834 15.9024 31.3166 16.2929 31.7071L20.2929 35.7071L20.2934 35.7076C20.3165 35.7307 20.3409 35.7526 20.3661 35.7734C20.3777 35.7829 20.39 35.7911 20.4019 35.8001C20.4161 35.8107 20.43 35.8217 20.4447 35.8316C20.459 35.8411 20.4738 35.8494 20.4884 35.8581C20.5018 35.8661 20.5149 35.8745 20.5287 35.8819C20.5436 35.8898 20.5589 35.8966 20.5741 35.9038C20.5885 35.9106 20.6026 35.9177 20.6173 35.9238C20.6321 35.9299 20.6472 35.9349 20.6622 35.9402C20.678 35.9459 20.6936 35.952 20.7097 35.9568C20.7247 35.9614 20.7399 35.9647 20.7551 35.9685C20.7716 35.9727 20.7878 35.9773 20.8046 35.9806C20.8222 35.9841 20.8399 35.9861 20.8576 35.9887C20.8722 35.9907 20.8865 35.9935 20.9013 35.995C20.9669 36.0015 21.0331 36.0015 21.0987 35.995C21.1135 35.9935 21.1278 35.9908 21.1424 35.9887C21.1601 35.9861 21.1779 35.9841 21.1954 35.9806C21.2122 35.9772 21.2284 35.9726 21.2449 35.9685C21.26 35.9647 21.2753 35.9613 21.2903 35.9568C21.3064 35.9519 21.322 35.9459 21.3378 35.9402C21.3528 35.9348 21.3679 35.9299 21.3826 35.9238C21.3973 35.9177 21.4115 35.9105 21.4258 35.9037C21.441 35.8966 21.4564 35.8898 21.4713 35.8818C21.485 35.8744 21.4981 35.866 21.5115 35.8581C21.5261 35.8493 21.5409 35.8411 21.5552 35.8315C21.5699 35.8216 21.5838 35.8107 21.598 35.8001C21.6099 35.7911 21.6222 35.7828 21.6338 35.7733C21.6589 35.7527 21.683 35.731 21.706 35.7081L21.707 35.7071L25.707 31.7071C26.0975 31.3166 26.0975 30.6834 25.707 30.2929C25.3165 29.9024 24.6834 29.9024 24.2929 30.2929Z" fill="#D17721" />
              </svg>
              {sort && <div className='absolute top-[110%] right-0 w-[19.792vw] md:w-[27.784vw] sm:w-[27.784vw]'>
                <div style={sort ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} className='cursor-pointer h-[67px] w-full rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                  <p name="" className='h-full flex items-center font-outfit font-normal md:text-[18px] md:leading-[27px] text-[18px] leading-[22.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">Sort By</p>
                </div>
                <SortBy />
              </div>}
            </div>
          </div>
        </div>
        <div className='w-full mt-[52px]'>
          <div>
            <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Popular classes</h3>
            <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 items-center gap-x-[20px] gap-y-[42px] mt-[26px]'>
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
            </div>
          </div>
          <div className='w-full mt-[87px]' id='explore'>
            <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>All group classes</h3>
            <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 items-center gap-x-[20px] xsm:gap-y-[42px] gap-y-[55px] mt-[26px]'>
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <div className='xsm:w-[100vw] w-full xsm:ml-[-8.205vw] col-span-4 md:col-span-2 sm:col-span-2 xsm:col-span-1'>
                <div className='w-full  my-[55px] min-h-[245px] md:justify-center sm:justify-center xsm:rounded-[0px] xsm:justify-center bg-primary2 md:py-[62px] md:px-[72px] sm:py-[62px] sm:px-[72px] xsm:py-[54px] xsm:px-[8.205vw] rounded-[16px] md:min-w-full sm:min-w-full xsm:min-w-full pl-[3.194vw] pr-[4.028vw] flex items-center'>
                  <div className='flex md:flex-col sm:flex-col xsm:flex-col items-center gap-x-[5.208vw] gap-y-[24px] w-full'>
                    <h3 className='w-[42.083vw] md:w-[56vw] xsm:w-full sm:w-[56vw] md:text-center sm:text-center xsm:text-center font-rubik font-semibold text-[51px] leading-[60.08px] tracking-[-0.02em] md:tracking-[0px] sm:tracking-[0px] text-[white] md:text-[36px] md:leading-[42.41px] sm:text-[36px] sm:leading-[42.41px] '>Improve your skills with <span className='text-[rgba(255,219,184,1)] font-pacifico font-normal'>one-on-one coaching</span></h3>
                    <p className='w-[37.014vw] md:w-[63.832vw] xsm:w-full sm:w-[63.832vw] md:text-center sm:text-center xsm:text-center font-outfit font-normal text-[18px] leading-[27px] text-[white]'>Looking for personalized guidance? Explore our dedicated tutors who are ready to share their culinary wisdom. Tailor your learning journey to your pace and preferences with one-on-one coaching.</p>
                    <button className='hidden md:flex sm:flex xsm:flex text-[rgba(255,219,184,1)] border-2 border-[rgba(255,219,184,1)] rounded-[4px] px-[16px] py-[8px] font-outfit font-medium text-[18px] leading-[22.68px]'>Find A Tutor</button>
                  </div>
                </div>
              </div>

              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </div>
            <Pagination currentPage={1} totalPages={6} />
          </div>
        </div>

      </div>
    </main>
  )
}

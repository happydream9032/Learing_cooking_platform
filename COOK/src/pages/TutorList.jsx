import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollArrow from '../assets/GroupList/ScrollArrow.svg'
import FilterButtonIcon from "../assets/TutorList/FilterButtonIcon.svg"
import FilterIcon from "../assets/TutorList/FilterIcon.svg"
import UpsideDown from "../assets/TutorList/UpsideDown.svg"
import Availability from '../components/DropDowns/Availability'
import IWantToLearn from '../components/DropDowns/IWantToLearn'
import PricePerLesson from '../components/DropDowns/PricePerLesson'
import SortBy from '../components/DropDowns/SortBy'
import GroupCardScroll from '../components/GroupList/GroupCardScroll'
import TutorCard from '../components/TutorList/TutorCard'
import Pagination from '../components/utils/Pagination'

export default function TutorList() {
  const [iWantToLearn, setIWantToLearn] = useState(false);
  const [pricePerLesson, setPricePerLesson] = useState(false);
  const [availability, setAvailability] = useState(false);
  const [sort, setSort] = useState(false);

  const scrollRef = useRef(null);
  const divRef = useRef(null);

  const [width, setWidth] = useState()

  useEffect(() => {
    const windowWidthHandler = () => {
      if (divRef.current) {
        const width = divRef.current.offsetWidth;
        setWidth(+width + 20)
      }
    }

    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setWidth(+width + 20)
    }

    window.addEventListener('resize', windowWidthHandler);

    // Cleanup by removing the event listener
    return () => {
      window.removeEventListener('resize', windowWidthHandler);
    };
  }, [])

  const handleScroll = () => {
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const targetScrollLeft = currentScrollLeft + width;

    scrollRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  }

  const handleScrollLeft = () => {
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const targetScrollLeft = currentScrollLeft - width;

    scrollRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <main className='w-full pt-[43px] xsm:pt-[72px] '>
      <div className='mx-[64px] md:mx-[5.749vw] sm:mx-[5.749vw] xsm:mx-[0px] xsm:w-full bg-primary2 rounded-[16px] flex justify-between items-center py-[43px] px-[52px] xsm:px-[5.128vw] xsm:rounded-[0px]'>
        <div className='xsm:flex xsm:items-center xsm:flex-1 sm:flex sm:items-center sm:flex-1 md:flex md:items-center md:flex-1 xsm:flex-col sm:flex-col md:flex-col'>
          <h1 className='font-rubik font-bold text-[42px] leading-[50px] trakcing-[-0.02em] text-[white] xsm:text-center sm:text-center md:text-center xsm:text-[36px] xsm:font-semibold xsm:leading-[43.13px]'>Find Your Perfect Chef</h1>
          <p className="font-outfit font-normal text-[24px] leading-[30.24px] text-[rgba(255,219,184,1)] xsm:text-center sm:text-center md:text-center xsm:text-[22px] xsm:leading-[27.72px]">Discover, Learn, Cook with Masters</p>
        </div>
        <div className='flex flex-col items-end md:hidden sm:hidden xsm:hidden'>
          <div className='flex items-center gap-[8px]'>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1005_50990)">
                <path d="M15.9583 6.325C15.9071 6.16645 15.8104 6.02646 15.6802 5.92248C15.5501 5.81851 15.3922 5.75515 15.2262 5.7403L10.6082 5.32094L8.78209 1.04677C8.6474 0.733546 8.34077 0.530853 8.00007 0.530853C7.65937 0.530853 7.35271 0.733577 7.21808 1.04755L5.39197 5.32097L0.7732 5.7403C0.607451 5.75548 0.449802 5.81898 0.3198 5.92291C0.189799 6.02685 0.0931609 6.16666 0.0418688 6.325C-0.0634776 6.64901 0.0338061 7.00436 0.290531 7.22837L3.78125 10.2897L2.75191 14.8239C2.67659 15.1573 2.80597 15.5019 3.0826 15.7018C3.23126 15.8093 3.40524 15.864 3.58065 15.864C3.7319 15.864 3.8819 15.8232 4.01659 15.7426L8.00007 13.3618L11.9821 15.7426C12.2735 15.9179 12.6408 15.9019 12.9168 15.7018C13.0519 15.604 13.1553 15.4687 13.2141 15.3126C13.2729 15.1565 13.2845 14.9865 13.2475 14.8239L12.2182 10.2897L15.7089 7.22899C15.8345 7.11932 15.925 6.97517 15.9694 6.81446C16.0137 6.65374 16.0099 6.48354 15.9583 6.325Z" fill="#FFDBB8" />
              </g>
              <defs>
                <clipPath id="clip0_1005_50990">
                  <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
            <h3 className='font-rubik font-semibold text-[22px] leading-[26.07px] tracking-[-0.02em] text-[white]'>Popular categories</h3>
          </div>
          <p className="font-outfit font-normal text-[18px] leading-[22.68px] mt-[8px] text-[rgba(255,219,184,1)] text-right">Italian Cuisine • Vegan Cooking • Pastry & Baking </p>
        </div>
      </div>

      <div className='px-[64px] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px]'>
        <div className='mt-[99px] flex justify-between items-center xsm:hidden '>
          <div className='flex gap-[21px]'>
            <div className='relative w-[15.694vw] md:w-[27.784vw] sm:w-[27.784vw]'>
              <div style={iWantToLearn ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} onClick={() => setIWantToLearn(!iWantToLearn)} className='cursor-pointer h-[67px]  rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                <p name="" className='h-full flex items-center font-outfit font-medium md:text-[18px] md:leading-[27px] text-[20px] leading-[24.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">I want to Learn</p>
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
                <p name="" className='h-full flex items-center font-outfit font-medium md:text-[18px] md:leading-[27px] text-[20px] leading-[24.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">Price per lesson</p>
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

        <div className='mt-[42px] '>
          {/* Mobile search and filter */}
          <div className='mt-[1px] hidden xsm:grid'>
            <div className='xsm:w-full xsm:flex gap-[15px] w-[37.153vw] h-[49px] border-2 border-primary2 rounded-[4px] hidden items-center px-[16px] relative mt-[31px]'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.9999 21.5L16.6499 17.15" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input type="text" className='w-full font-medium font-outfit text-[20px] leading-[25.2px] h-full outline-none bg-[#00000000] text-primary2 placeholder:text-primary2' placeholder='Search' />
            </div>

            <div className='flex items-center justify-between mt-[14px] mb-[58px]'>
              <div className='flex gap-[12px] items-center'>
                <img src={FilterIcon} alt="" />
                <p className='font-outfit font-medium text-[22px] leading-[33px]'>Filters</p>
              </div>
              <div className='relative'>
                {/* <img  src={FilterButtonIcon} alt="" /> */}
                <svg className='cursor-pointer' onClick={() => setSort(!sort)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="10" fill="#D17721" />
                  <path d="M31.7071 16.293L27.7071 12.2929L27.7066 12.2925C27.6834 12.2694 27.6591 12.2474 27.6338 12.2267C27.6222 12.2172 27.6101 12.2089 27.5982 12.2C27.584 12.1894 27.57 12.1784 27.5552 12.1685C27.541 12.159 27.5262 12.1507 27.5116 12.142C27.4982 12.134 27.4851 12.1256 27.4713 12.1182C27.4564 12.1102 27.4411 12.1035 27.4259 12.0963C27.4115 12.0895 27.3973 12.0823 27.3826 12.0762C27.3679 12.0701 27.3528 12.0651 27.3378 12.0598C27.322 12.0541 27.3064 12.0481 27.2903 12.0432C27.2753 12.0386 27.26 12.0353 27.2449 12.0315C27.2284 12.0273 27.2121 12.0227 27.1954 12.0194C27.1778 12.0159 27.1601 12.0138 27.1424 12.0113C27.1279 12.0092 27.1135 12.0064 27.0987 12.005C27.0331 11.9985 26.9669 11.9985 26.9013 12.005C26.8865 12.0064 26.8722 12.0092 26.8576 12.0113C26.8399 12.0138 26.8221 12.0159 26.8046 12.0194C26.7878 12.0227 26.7716 12.0273 26.7552 12.0315C26.74 12.0353 26.7247 12.0386 26.7097 12.0432C26.6936 12.0481 26.678 12.0541 26.6622 12.0598C26.6472 12.0652 26.6322 12.0701 26.6174 12.0762C26.6026 12.0823 26.5885 12.0895 26.5741 12.0963C26.5589 12.1035 26.5436 12.1102 26.5287 12.1182C26.5149 12.1256 26.5018 12.134 26.4884 12.142C26.4738 12.1507 26.459 12.159 26.4448 12.1685C26.43 12.1784 26.4161 12.1894 26.4019 12.2C26.39 12.2089 26.3778 12.2172 26.3662 12.2267C26.3409 12.2475 26.3165 12.2693 26.2934 12.2925L26.2929 12.2929L22.2929 16.2929C21.9024 16.6834 21.9024 17.3166 22.2929 17.7071C22.6834 18.0976 23.3166 18.0976 23.7072 17.7071L26 15.4142V27.0001C26 27.5523 26.4477 28 27 28C27.5523 28 28 27.5523 28 27.0001V15.4143L30.2929 17.7072C30.6834 18.0977 31.3166 18.0977 31.7071 17.7072C32.0976 17.3166 32.0976 16.6835 31.7071 16.293ZM24.2929 30.2929L22 32.5858V21.0001C22 20.4478 21.5523 20.0001 21 20.0001C20.4477 20.0001 20 20.4478 20 21.0001V32.5858L17.7071 30.2929C17.3166 29.9024 16.6834 29.9024 16.2929 30.2929C15.9024 30.6834 15.9024 31.3166 16.2929 31.7071L20.2929 35.7071L20.2934 35.7076C20.3165 35.7307 20.3409 35.7526 20.3661 35.7734C20.3777 35.7829 20.39 35.7911 20.4019 35.8001C20.4161 35.8107 20.43 35.8217 20.4447 35.8316C20.459 35.8411 20.4738 35.8494 20.4884 35.8581C20.5018 35.8661 20.5149 35.8745 20.5287 35.8819C20.5436 35.8898 20.5589 35.8966 20.5741 35.9038C20.5885 35.9106 20.6026 35.9177 20.6173 35.9238C20.6321 35.9299 20.6472 35.9349 20.6622 35.9402C20.678 35.9459 20.6936 35.952 20.7097 35.9568C20.7247 35.9614 20.7399 35.9647 20.7551 35.9685C20.7716 35.9727 20.7878 35.9773 20.8046 35.9806C20.8222 35.9841 20.8399 35.9861 20.8576 35.9887C20.8722 35.9907 20.8865 35.9935 20.9013 35.995C20.9669 36.0015 21.0331 36.0015 21.0987 35.995C21.1135 35.9935 21.1278 35.9908 21.1424 35.9887C21.1601 35.9861 21.1779 35.9841 21.1954 35.9806C21.2122 35.9772 21.2284 35.9726 21.2449 35.9685C21.26 35.9647 21.2753 35.9613 21.2903 35.9568C21.3064 35.9519 21.322 35.9459 21.3378 35.9402C21.3528 35.9348 21.3679 35.9299 21.3826 35.9238C21.3973 35.9177 21.4115 35.9105 21.4258 35.9037C21.441 35.8966 21.4564 35.8898 21.4713 35.8818C21.485 35.8744 21.4981 35.866 21.5115 35.8581C21.5261 35.8493 21.5409 35.8411 21.5552 35.8315C21.5699 35.8216 21.5838 35.8107 21.598 35.8001C21.6099 35.7911 21.6222 35.7828 21.6338 35.7733C21.6589 35.7527 21.683 35.731 21.706 35.7081L21.707 35.7071L25.707 31.7071C26.0975 31.3166 26.0975 30.6834 25.707 30.2929C25.3165 29.9024 24.6834 29.9024 24.2929 30.2929Z" fill="#FFDBB8" />
                </svg>

                {sort && <div className='absolute top-[110%] right-0 w-[19.792vw] bg-[white] xsm:w-[285.005px] md:w-[27.784vw] sm:w-[27.784vw]'>
                  <div style={sort ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} className='cursor-pointer h-[67px] w-full rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                    <p name="" className='h-full flex items-center font-outfit font-normal md:text-[18px] md:leading-[27px] text-[18px] leading-[22.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">Sort By</p>
                  </div>
                  <SortBy />
                </div>}
              </div>
            </div>
          </div>


          <div className='flex justify-between items-center mb-[92px] xsm:hidden'>
            <h3 className='font-outfit font-medium text-[22px] leading-[27.72px] text-TextColor'>100 tutors found</h3>
            <div className='gap-[20px] items-center hidden md:flex sm:flex'>
              <div className='overflow-hidden relative p-[16px] w-[226px] h-[55px] border-2 border-[rgba(255,219,184,1)] rounded-[8px]'>
                <svg className='min-w-[26px] absolute top-[50%] translate-y-[-50%]' width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9167 21.0833C16.7031 21.0833 20.5833 17.2031 20.5833 12.4167C20.5833 7.6302 16.7031 3.75 11.9167 3.75C7.1302 3.75 3.25 7.6302 3.25 12.4167C3.25 17.2031 7.1302 21.0833 11.9167 21.0833Z" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22.75 23.25L18.0375 18.5375" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input type="text" name="" id="" placeholder='Search' className='indent-[35px] placeholder:text-TextColor outline-none font-outfit text-[20px] leading-[22.68px] ' />
              </div>
              <div className='relative'>
                <svg className='cursor-pointer' onClick={() => setSort(!sort)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="10" fill="#D17721" />
                  <path d="M31.7071 16.293L27.7071 12.2929L27.7066 12.2925C27.6834 12.2694 27.6591 12.2474 27.6338 12.2267C27.6222 12.2172 27.6101 12.2089 27.5982 12.2C27.584 12.1894 27.57 12.1784 27.5552 12.1685C27.541 12.159 27.5262 12.1507 27.5116 12.142C27.4982 12.134 27.4851 12.1256 27.4713 12.1182C27.4564 12.1102 27.4411 12.1035 27.4259 12.0963C27.4115 12.0895 27.3973 12.0823 27.3826 12.0762C27.3679 12.0701 27.3528 12.0651 27.3378 12.0598C27.322 12.0541 27.3064 12.0481 27.2903 12.0432C27.2753 12.0386 27.26 12.0353 27.2449 12.0315C27.2284 12.0273 27.2121 12.0227 27.1954 12.0194C27.1778 12.0159 27.1601 12.0138 27.1424 12.0113C27.1279 12.0092 27.1135 12.0064 27.0987 12.005C27.0331 11.9985 26.9669 11.9985 26.9013 12.005C26.8865 12.0064 26.8722 12.0092 26.8576 12.0113C26.8399 12.0138 26.8221 12.0159 26.8046 12.0194C26.7878 12.0227 26.7716 12.0273 26.7552 12.0315C26.74 12.0353 26.7247 12.0386 26.7097 12.0432C26.6936 12.0481 26.678 12.0541 26.6622 12.0598C26.6472 12.0652 26.6322 12.0701 26.6174 12.0762C26.6026 12.0823 26.5885 12.0895 26.5741 12.0963C26.5589 12.1035 26.5436 12.1102 26.5287 12.1182C26.5149 12.1256 26.5018 12.134 26.4884 12.142C26.4738 12.1507 26.459 12.159 26.4448 12.1685C26.43 12.1784 26.4161 12.1894 26.4019 12.2C26.39 12.2089 26.3778 12.2172 26.3662 12.2267C26.3409 12.2475 26.3165 12.2693 26.2934 12.2925L26.2929 12.2929L22.2929 16.2929C21.9024 16.6834 21.9024 17.3166 22.2929 17.7071C22.6834 18.0976 23.3166 18.0976 23.7072 17.7071L26 15.4142V27.0001C26 27.5523 26.4477 28 27 28C27.5523 28 28 27.5523 28 27.0001V15.4143L30.2929 17.7072C30.6834 18.0977 31.3166 18.0977 31.7071 17.7072C32.0976 17.3166 32.0976 16.6835 31.7071 16.293ZM24.2929 30.2929L22 32.5858V21.0001C22 20.4478 21.5523 20.0001 21 20.0001C20.4477 20.0001 20 20.4478 20 21.0001V32.5858L17.7071 30.2929C17.3166 29.9024 16.6834 29.9024 16.2929 30.2929C15.9024 30.6834 15.9024 31.3166 16.2929 31.7071L20.2929 35.7071L20.2934 35.7076C20.3165 35.7307 20.3409 35.7526 20.3661 35.7734C20.3777 35.7829 20.39 35.7911 20.4019 35.8001C20.4161 35.8107 20.43 35.8217 20.4447 35.8316C20.459 35.8411 20.4738 35.8494 20.4884 35.8581C20.5018 35.8661 20.5149 35.8745 20.5287 35.8819C20.5436 35.8898 20.5589 35.8966 20.5741 35.9038C20.5885 35.9106 20.6026 35.9177 20.6173 35.9238C20.6321 35.9299 20.6472 35.9349 20.6622 35.9402C20.678 35.9459 20.6936 35.952 20.7097 35.9568C20.7247 35.9614 20.7399 35.9647 20.7551 35.9685C20.7716 35.9727 20.7878 35.9773 20.8046 35.9806C20.8222 35.9841 20.8399 35.9861 20.8576 35.9887C20.8722 35.9907 20.8865 35.9935 20.9013 35.995C20.9669 36.0015 21.0331 36.0015 21.0987 35.995C21.1135 35.9935 21.1278 35.9908 21.1424 35.9887C21.1601 35.9861 21.1779 35.9841 21.1954 35.9806C21.2122 35.9772 21.2284 35.9726 21.2449 35.9685C21.26 35.9647 21.2753 35.9613 21.2903 35.9568C21.3064 35.9519 21.322 35.9459 21.3378 35.9402C21.3528 35.9348 21.3679 35.9299 21.3826 35.9238C21.3973 35.9177 21.4115 35.9105 21.4258 35.9037C21.441 35.8966 21.4564 35.8898 21.4713 35.8818C21.485 35.8744 21.4981 35.866 21.5115 35.8581C21.5261 35.8493 21.5409 35.8411 21.5552 35.8315C21.5699 35.8216 21.5838 35.8107 21.598 35.8001C21.6099 35.7911 21.6222 35.7828 21.6338 35.7733C21.6589 35.7527 21.683 35.731 21.706 35.7081L21.707 35.7071L25.707 31.7071C26.0975 31.3166 26.0975 30.6834 25.707 30.2929C25.3165 29.9024 24.6834 29.9024 24.2929 30.2929Z" fill="#FFDBB8" />
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

          <div className="ml-[11.528vw] mr-[11.597vw] md:mx-[0px] sm:mx-[0px] xsm:mx-[0px] w-fit m-auto flex flex-col">
            <div className='flex flex-col gap-[35px]'>
              <TutorCard />
              <TutorCard />
              <TutorCard />
            </div>

            <div className='mt-[122px]'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <svg width="28" height="33" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="11.5" cy="10.5" rx="11.5" ry="10.5" fill="#FFDBB8" />
                  </svg>
                  <p className='font-rubik font-semibold text-[24px] leading-[18.96px] relative left-[-13px]'>Group Lesson</p>
                </div>
                <Link to={'/group'}>
                  <p className='font-rubik font-semibold text-[16px] leading-[18.96px] relative left-[-13px]'>View all</p>
                </Link>
              </div>
              <div className='w-fit relative mt-[21px]'>
                <img onClick={handleScroll} className='cursor-pointer z-[999] opacity-80 hover:opacity-100 transition-all duration-150 absolute right-[-5%] xsm:right-[-0%] xsm:left-[100%] top-[50%] translate-x-[-50%]' src={ScrollArrow} alt="" />
                <img onClick={handleScrollLeft} className='cursor-pointer z-[999] opacity-80 hover:opacity-100 transition-all duration-150 absolute left-[-0%] rotate-180 top-[50%] translate-x-[-50%]' src={ScrollArrow} alt="" />
                <div ref={scrollRef} className='pb-[50px] flex gap-[20px] w-full max-w-[67.986vw] md:max-w-[88.383vw] xsm:max-w-[83.077vw] overflow-scroll hideScrollbar'>
                  <GroupCardScroll divRef={divRef} />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                </div>
              </div>

            </div>

            <div className='flex flex-col gap-[35px] mt-[103px]'>
              <TutorCard />
              <TutorCard />
              <TutorCard />
            </div>

          </div>
          <Pagination currentPage={1} totalPages={6} />
        </div>
      </div>
    </main>
  )
}

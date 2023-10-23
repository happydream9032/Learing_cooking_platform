import React from 'react';
import CategoriesIcon3 from '../assets/Support/CategoriesIcon3.svg';
import CategoryCard from '../components/Support/CategoryCard';

export default function Support() {
  return (
    <main>
      <div className='xsm:px-[0px] xsm:pl-[8.205vw] xsm:pr-[8.205vw]'>
        <div className='xsm:w-full xsm:flex w-[37.153vw] h-[49px] border-2 border-[#FFDBB8] gap-[15px] rounded-[4px] hidden items-center px-[16px] relative mt-[31px]'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.9999 21.5L16.6499 17.15" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input type="text" className='w-full font-medium font-outfit text-[20px] leading-[25.2px] h-full outline-none bg-[#00000000] text-primary2 placeholder:text-primary2' placeholder='Search' />
        </div>
      </div>
      <section className='w-full pt-[75px] xsm:pt-[72px] px-[175px] md:px-[0px] sm:px-[0px] md:pl-[77px] sm:pl-[77px] md:pr-[44px] sm:pr-[44px] xsm:px-[0px] xsm:pl-[8.205vw] xsm:pr-[8.205vw]'>
        <CategoryCard icon={<svg className='absolute top-[-34px] left-[-29px] xsm:left-[19px] xsm:top-[-34px] xsm:w-[74px] xsm:h-[74px]' width="79" height="82" viewBox="0 0 79 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="79" height="82" rx="16" fill="#D27722" />
          <path d="M47.5378 39.1841C50.7371 36.8508 52.8205 33.0746 52.8205 28.8205C52.8205 21.7513 47.0692 16 40 16C32.9308 16 27.1795 21.7513 27.1795 28.8205C27.1795 33.0746 29.2628 36.8508 32.4622 39.1841C24.5091 42.2275 18.8462 49.9386 18.8462 58.9487C18.8462 62.8368 22.0094 66 25.8975 66H54.1025C57.9906 66 61.1538 62.8368 61.1538 58.9487C61.1538 49.9386 55.4909 42.2275 47.5378 39.1841ZM31.0257 28.8205C31.0257 23.8721 35.0516 19.8462 40 19.8462C44.9484 19.8462 48.9743 23.8721 48.9743 28.8205C48.9743 33.7689 44.9484 37.7949 40 37.7949C35.0516 37.7949 31.0257 33.7689 31.0257 28.8205ZM54.1025 62.1538H25.8975C24.1302 62.1538 22.6924 60.716 22.6924 58.9486C22.6924 49.4051 30.4564 41.6409 40.0001 41.6409C49.5438 41.6409 57.3078 49.405 57.3078 58.9486C57.3077 60.716 55.8699 62.1538 54.1025 62.1538Z" fill="#FFDBB8" />
        </svg>
        } title={"COOK account"} description={"Find all the information you need to manage your COOK account. From setting up your profile to account security, we've got you covered."} />

        <CategoryCard icon={<svg className='absolute top-[-34px] left-[-29px] xsm:left-[19px] xsm:top-[-34px] xsm:w-[74px] xsm:h-[74px]' width="79" height="82" viewBox="0 0 79 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="79" height="82" rx="16" fill="#D27722" />
          <mask id="mask0_1292_46537" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="15" y="15" width="50" height="51">
            <path d="M63.5 64.4999V17.4999H16.5V64.4999H63.5Z" fill="white" stroke="white" strokeWidth="3" />
          </mask>
          <g mask="url(#mask0_1292_46537)">
            <path d="M44.9079 31.2395C44.9146 32.3265 45.8016 33.2024 46.889 33.1958L47.9642 33.1891C49.0521 33.1825 49.9284 32.2951 49.9211 31.2075L49.921 31.1961C49.9189 30.8906 49.8457 30.5898 49.7073 30.3174C49.5688 30.0451 49.3689 29.8088 49.1232 29.6271L45.6972 27.0925C45.4498 26.9095 45.2487 26.6711 45.1102 26.3963C44.9716 26.1215 44.8994 25.8181 44.8994 25.5103C44.8994 24.4232 45.781 23.542 46.8685 23.542H47.9453C49.0327 23.542 49.9144 24.4232 49.9144 25.5103" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M47.4102 23.542V22.1356" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M47.4102 34.6023V33.1959" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M58.3179 28.3689C58.3179 34.391 53.4343 39.2731 47.4102 39.2731C41.3859 39.2731 36.5024 34.391 36.5024 28.3689C36.5024 22.3467 41.3859 17.4647 47.4102 17.4647C53.4343 17.4647 58.3179 22.3467 58.3179 28.3689Z" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.355 64.535L16.4648 50.232L24.5472 47.4705L29.4372 61.7736L21.355 64.535Z" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M50.9955 49.1581L58.3162 44.2606C58.8727 43.8707 59.5358 43.6617 60.2153 43.662C61.2067 43.662 62.1856 44.1053 62.8373 44.9442C63.9948 46.4335 63.6773 48.5868 62.1407 49.6805L52.4696 56.5594C49.8818 58.4011 46.7845 59.3906 43.6083 59.3905L28.7793 59.8495" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.6064 52.0662H47.8713C48.2817 52.0668 48.6882 51.9863 49.0673 51.8292C49.4464 51.6721 49.7908 51.4416 50.0805 51.1509C50.6461 50.5855 50.996 49.8045 50.996 48.9424C50.996 47.2171 49.5972 45.8187 47.8713 45.8187H43.2927" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.9849 48.1423C29.5176 45.0183 32.7306 42.8679 36.4456 42.8679C39.1438 42.8679 41.5763 44.0017 43.2926 45.8191" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.9853 48.1425L25.3311 49.7655" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
        } title={"Payments"} description={"Understand our payment process, from scheduling a class to refund policies. We're here to ensure a secure and seamless transaction experience."} />
        <CategoryCard type={"image"} icon={CategoriesIcon3} title={"Learning"} description={"Explore our resources to optimize your learning journey on COOK. Discover tips on class selection, progress tracking, and more."} />
        <CategoryCard icon={<svg className='absolute top-[-34px] left-[-29px] xsm:left-[19px] xsm:top-[-34px] xsm:w-[74px] xsm:h-[74px]' width="79" height="82" viewBox="0 0 79 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="79" height="82" rx="16" fill="#D27722" />
          <mask id="mask0_1292_46557" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="15" y="16" width="50" height="50">
            <path d="M16.5 17.5H63.5V64.5H16.5V17.5Z" fill="white" stroke="#FFDBB8" strokeWidth="3" />
          </mask>
          <g mask="url(#mask0_1292_46557)">
            <mask id="mask1_1292_46557" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="17" y="18" width="46" height="46">
              <path d="M60.9992 62.0001V20H18.999V62.0001H60.9992Z" fill="white" stroke="white" strokeWidth="3" />
            </mask>
            <g mask="url(#mask1_1292_46557)">
              <path d="M54.0616 61.7426H26.0244V51.1956H54.0616V61.7426Z" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" />
              <path d="M30.0332 36.0784C29.323 33.1015 28.9248 30.1898 28.9248 27.8606C28.9248 23.6618 33.8829 20.258 39.9991 20.258C46.1152 20.258 51.0733 23.6618 51.0733 27.8606C51.0733 30.1595 50.6681 33.0799 49.9465 36.0784" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" />
              <path d="M35.7804 50.9886C35.7804 50.9886 33.8722 47.127 32.1602 42.6703" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" />
              <path d="M50.2822 25.8831C56.3984 25.8831 60.7412 29.2869 60.7412 33.4857C60.7412 42.6703 54.1494 51.0199 54.1494 51.0199" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" />
              <path d="M29.7159 25.8831C23.5997 25.8831 19.2568 29.2869 19.2568 33.4857C19.2568 42.6703 25.9365 51.0199 25.9365 51.0199" stroke="#FFDBB8" strokeWidth="3" strokeMiterlimit="10" />
            </g>
          </g>
        </svg>
        } title={"For Chefs"} description={"Get the support you need to thrive as a chef on COOK. Learn about class creation, schedule management, and ways to engage with your students."} />
      </section>
    </main>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import BlogSecondImage from "../assets/Blog/BlogSecondImage.png"
import Category2 from "../assets/Blog/Category2.svg"
import Category3 from "../assets/Blog/Category3.svg"
import Category4 from "../assets/Blog/Category4.svg"
import Category5 from "../assets/Blog/Category5.svg"
import CookingIcon from "../assets/Blog/CookingIcon.svg"
import DrinksIcon from "../assets/Blog/DrinksIcon.svg"
import XSMDidYouKnow from "../assets/Blog/XSMDidYouKnow.png"
import BlogCard from '../components/Blog/BlogCard'
import BlogCategoriesCard from '../components/Blog/BlogCategoriesCard'
import HeroImage from '../components/Blog/HeroImage'
import BlogNav from '../layout/BlogNav'
import LandingFooter from '../layout/LandingFooter'
export default function Blog() {
  return (
    <>
      <BlogNav />
      <div className='px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px] w-full pt-[28px]'>
        <div className='flex justify-end xsm:hidden'>
          {/* <button className='w-[85px] h-[30px] rounded-[8px] bg-primary2 text-[white] font-outfit font-medium text-[14px] leading-[17.64px]'>Business</button> */}
          <div className='flex gap-[14px]'>
            <Link to={'/blog/category'}>
              <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Home Cooking</button>
            </Link>
            <Link to={'/blog/category'}>
              <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Recipes</button>
            </Link>
            <Link to={'/blog/category'}>
              <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Chef Spotlight</button>
            </Link>
          </div>
        </div>
      </div>
      <section className='w-full flex flex-col items-center'>
        <HeroImage />
        <div className='w-full relative'>
          <div className='absolute top-[50%] z-10 border w-full border-[rgba(255,219,184,1)] md:hidden sm:hidden xsm:hidden'></div>
          <h1 className='relative z-20 m-auto font-rubik font-bold text-[48px] leading-[56.16px] tracking-[-0.02em] xsm:w-[83.59vw] bg-[white] text-center md:text-[40px] md:leading-[46.8px] sm:text-[40px] sm:leading-[46.8px] xsm:text-[32px] xsm:leading-[37.44px]'>Recipes, Tips, and Stories from COOK</h1>
        </div>
        <div className='flex gap-[14px] mt-[22px] xsm:flex-wrap xsm:px-[32px] xsm:justify-center'>
          <Link to={'/blog/category'}>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Home Cooking</button>
          </Link>
          <Link to={'/blog/category'}>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Recipe Inspiration</button>
          </Link>
          <Link to={'/blog/category'}>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Chef Spotlight</button>
          </Link>
          <Link to={'/blog/category'}>
            <button className='md:hidden sm:hidden xsm:hidden px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Food Culture and Travel</button>
          </Link>
          <Link to={'/blog/category'}>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Cooking Tips and Hacks</button>
          </Link>
        </div>
      </section>
      <section className='mt-[172px] w-full px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[6px]'>
            <img src={CookingIcon} alt="" />
            <p className='font-rubik font-medium text-[32px] leading-[41.92px] tracking-[-0.02em]'>Cooking</p>
          </div>
          <Link to={'/blog/category'}>
            <div className='flex items-center gap-[9px]'>
              <p className='font-outfit font-medium text-[18px] leading-[23.58px] tracking-[-0.02em] text-primary2'>View all articles</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 gap-[4.444vw] md:gap-[3.832vw] sm:gap-[2.874vw] mt-[49px]'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
      <section className='mt-[91px] w-full px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[6px]'>
            <img src={DrinksIcon} alt="" />
            <p className='font-rubik font-medium text-[32px] leading-[41.92px] tracking-[-0.02em]'>Drinks</p>
          </div>
          <Link to={'/blog/category'}>
            <div className='flex items-center gap-[9px]'>
              <p className='font-outfit font-medium text-[18px] leading-[23.58px] tracking-[-0.02em] text-primary2'>View all articles</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 gap-[4.444vw] md:gap-[3.832vw] sm:gap-[2.874vw] mt-[49px]'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
      <section className='w-full bg-[rgba(255,253,244,1)] min-h-[442px] mt-[159px] px-[11.875vw] xsm:px-[0px] md:pb-[92px] md:pt-[42px] sm:pb-[92px] sm:pt-[42px] xsm:pb-[92px] xsm:pt-[42px] flex items-center md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse gap-[8.472vw] md:gap-[52px] sm:gap-[52px] xsm:gap-[34px]'>
        <div className='w-full flex-1'>
          <div className='xsm:px-[11.875vw]'>
            <h3 className='font-rubik font-medium text-[48px] leading-[56.16px] tracking-[-0.02em]'>Did you know?</h3>
            <p className='font-outfit font-normal text-[18px] leading-[31.14px] tracking-[-0.02em] mt-[27px]'>With COOK you can discover and connect with professional chefs from around the world. Find your perfect chef or become one, as our platform provides a seamless experience for cooking enthusiasts. Unleash your culinary dreams and join our vibrant community today!</p>
            <Link to='/search-tutors'>
              <button className='bg-primary2 text-[white] mt-[35px] w-[129px] h-[39px] rounded-[4px] font-outfit font-normal text-[18px] leading-[22.68px]'>Find A Tutor</button>
            </Link>
          </div>
        </div>
        <div className='h-fit max-w-[434px] xsm:max-w-full relative '>
          <img className='relative z-20 w-full xsm:hidden' src={BlogSecondImage} alt="" />
          <img className='z-20 w-full hidden xsm:flex min-w-[calc(100vw-64px)]' src={XSMDidYouKnow} alt="" />
          <svg className='absolute z-10 xsm:hidden bottom-[-63px] right-[-80px]' width="258" height="258" viewBox="0 0 258 258" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="258" height="258" rx="129" fill="#FFDBB8" />
          </svg>
        </div>
      </section>
      <section className='w-full px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px] mt-[131px]'>
        <h2 className='font-rubik font-semibold text-[48px] leading-[62.88px] tracking-[-0.02em] text-center mb-[47px] xsm:text-[42px] xsm:leading-[55.02px]'>Categories</h2>
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 gap-x-[21px] gap-y-[36px]'>
          <BlogCategoriesCard img={<svg className='min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1283_44982)">
              <path d="M17.7231 35.2996C16.645 35.2996 15.77 36.174 15.77 37.252C15.77 38.3299 16.645 39.2051 17.7231 39.2051C18.8013 39.2051 19.6763 38.3301 19.6763 37.252C19.6763 36.1738 18.8013 35.2996 17.7231 35.2996Z" fill="#D27722" />
              <path d="M72.4459 58.6365C72.2646 58.4551 72.0494 58.3112 71.8124 58.213C71.5755 58.1148 71.3215 58.0643 71.065 58.0643C71.0451 58.0682 70.2943 58.0262 69.6842 58.6365L68.3039 60.0166L63.8162 55.5297C73.7191 41.6481 72.2131 22.499 60.0176 10.3043C46.2801 -3.43319 24.0436 -3.43553 10.3045 10.3043C-3.43301 24.041 -3.43535 46.2783 10.3045 60.0174C22.4695 72.1834 41.6109 73.7442 55.5291 63.8162L60.0168 68.3037L58.6367 69.6838C57.8744 70.4461 57.8738 71.6836 58.6367 72.4465L83.3285 97.1359C87.1439 100.954 93.3199 100.956 97.1361 97.1367C100.954 93.3221 100.955 87.1453 97.1361 83.3291L72.4459 58.6365ZM62.7787 65.5418L58.5971 61.3602C59.083 60.9246 59.5582 60.4774 60.0176 60.0174C60.478 59.5564 60.9258 59.0829 61.3604 58.5975L65.542 62.7791L62.7787 65.5418ZM13.0662 57.2555C0.854688 45.0445 0.85332 25.2785 13.0662 13.066C25.2771 0.854505 45.0434 0.853137 57.2557 13.066C69.4398 25.2496 69.5018 45.0111 57.2557 57.2555C44.8717 69.641 25.1107 69.3008 13.0662 57.2555ZM71.065 62.7793L76.5879 68.3027L68.3031 76.5877L62.7795 71.0649L71.065 62.7793ZM94.3742 94.375C92.0855 96.666 88.3814 96.6668 86.091 94.375L71.065 79.3496L79.3498 71.0649L94.3752 86.0916C96.6654 88.3797 96.6678 92.0838 94.3742 94.3748V94.375Z" fill="#D27722" />
              <path d="M54.4948 15.8287C43.8143 5.14827 26.5116 5.14221 15.8268 15.8272C5.16841 26.4877 5.16841 43.834 15.8268 54.4951C26.5131 65.1811 43.8059 65.1817 54.4932 54.4951C65.1538 43.834 65.1545 26.4885 54.4948 15.8287ZM51.7313 51.7326C42.5723 60.8918 27.7499 60.894 18.5885 51.7334C9.45298 42.5947 9.45298 27.7268 18.5885 18.5883C27.743 9.43459 42.5752 9.43225 51.7331 18.5906C60.8698 27.7274 60.869 42.5949 51.7313 51.7326Z" fill="#D27722" />
              <path d="M35.1609 15.6334C29.9409 15.6334 25.0368 17.6643 21.3517 21.3516C19.2156 23.4879 17.6431 26.0117 16.6788 28.8543C16.3324 29.8752 16.8786 30.9846 17.9001 31.3309C18.9234 31.678 20.031 31.1287 20.3775 30.1094C21.1472 27.8399 22.4046 25.8223 24.1136 24.1127C27.0617 21.1639 30.9847 19.5397 35.1609 19.5397C36.2398 19.5397 37.114 18.6653 37.114 17.5865C37.114 16.5078 36.2398 15.6334 35.1609 15.6334Z" fill="#D27722" />
            </g>
            <defs>
              <clipPath id="clip0_1283_44982">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
          } title={'Dish Discoveries'} />
          <BlogCategoriesCard type='image' img={Category2} title={'Ingredient Insights'} />
          <BlogCategoriesCard type='image' img={Category3} title={'Kitchen Gadgets'} />
          <BlogCategoriesCard type='image' img={Category5} title={'Health & Nutrition'} />
          <BlogCategoriesCard type='image' img={Category4} title={'Global Gastronomy'} />
          <BlogCategoriesCard img={<svg className='min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1283_44896" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
              <path d="M2 98V2H98V98H2Z" fill="white" stroke="#D27722" strokeWidth="6" />
            </mask>
            <g mask="url(#mask0_1283_44896)">
              <mask id="mask1_1283_44896" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="4" y="5" width="91" height="91">
                <path d="M92.9998 93.0004V7.00005H6.99951V93.0004H92.9998Z" fill="white" stroke="white" strokeWidth="6" />
              </mask>
              <g mask="url(#mask1_1283_44896)">
                <path d="M78.1252 91.4847H22.0508V70.3909H78.1252V91.4847Z" stroke="#D27722" strokeWidth="6" strokeMiterlimit="10" />
                <path d="M30.0683 40.1565C28.648 34.2028 27.8516 28.3793 27.8516 23.7209C27.8516 15.3234 37.7678 8.51576 50.0001 8.51576C62.2324 8.51576 72.1486 15.3234 72.1486 23.7209C72.1486 28.3188 71.3381 34.1595 69.8949 40.1565" stroke="#D27722" strokeWidth="6" strokeMiterlimit="10" />
                <path d="M41.5622 69.9768C41.5622 69.9768 37.7458 62.2535 34.3218 53.3401" stroke="#D27722" strokeWidth="6" strokeMiterlimit="10" />
                <path d="M70.5664 19.7658C82.7987 19.7658 91.4844 26.5735 91.4844 34.9709C91.4844 53.3402 78.3008 70.0394 78.3008 70.0394" stroke="#D27722" strokeWidth="6" strokeMiterlimit="10" />
                <path d="M29.4332 19.7658C17.2009 19.7658 8.51514 26.5735 8.51514 34.9709C8.51514 53.3402 21.8746 70.0394 21.8746 70.0394" stroke="#D27722" strokeWidth="6" strokeMiterlimit="10" />
              </g>
            </g>
          </svg>
          } title={'Chef Interviews'} />
        </div>
      </section>
      <section className='mt-[166px] w-full px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px] mb-[29px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[6px]'>
            <p className='font-rubik font-medium text-[32px] leading-[41.92px] tracking-[-0.02em]'>Latest Articles</p>
          </div>
          <Link to={'/blog/category'}>
            <div className='flex items-center gap-[9px]'>
              <p className='font-outfit font-medium text-[18px] leading-[23.58px] tracking-[-0.02em] text-primary2'>View all articles</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 gap-x-[4.444vw] md:gap-[3.832vw] sm:gap-[2.874vw] gap-y-[112px] mt-[49px]'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
      <LandingFooter />
    </>
  )
}

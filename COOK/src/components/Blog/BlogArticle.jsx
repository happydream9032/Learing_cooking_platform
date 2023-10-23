import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArticleAuthorProfile from "../../assets/Blog/ArticleAuthorProfile.png";
import BlogArticle1 from "../../assets/Blog/BlogArticle1.svg";
import BlogArticleImage from "../../assets/Blog/BlogArticleImage.png";
import BlogNav from '../../layout/BlogNav';
import LandingFooter from '../../layout/LandingFooter';
import CopyrightTable from '../Copyright/CopyrightTable';
import BlogCard from './BlogCard';

export default function BlogArticle() {
  const navigate = useNavigate();
  const params = useParams()

  return (
    <>
      <BlogNav />
      <div className='px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px] w-full pt-[28px]'>
        <div className='flex justify-between xsm:justify-center'>
          <nav className="">
            <ol className="list-reset flex">
              <li onClick={() => navigate(-2)} className='cursor-pointer'>
                <p className="font-outfit font-normal text-[16px] leading-[20.16px] text-primary2 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Articles</p>
              </li>
              <li>
                <span className="font-outfit font-normal text-[16px] leading-[20.16px] mx-2 text-neutral-500 dark:text-neutral-400 text-primary">{`>`}</span>
              </li>
              <li onClick={() => navigate(-1)} className='cursor-pointer'>
                <p className="font-outfit font-normal text-[16px] leading-[20.16px] text-primary2 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">{params?.category}</p>
              </li>
              <li>
                <span className="font-outfit font-normal text-[16px] leading-[20.16px] mx-2 text-neutral-500 dark:text-neutral-400 text-primary">{`>`}</span>
              </li>
              <li className='cursor-pointer'>
                <p className="font-outfit font-normal text-[16px] leading-[20.16px] text-primary2 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">{'Article'}</p>
              </li>
            </ol>
          </nav>
          <div className='flex gap-[14px] xsm:hidden'>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Home Cooking</button>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Recipes</button>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Chef Spotlight</button>
          </div>
        </div>
      </div>

      <div className=''>
        <h1 className='font-rubik font-bold text-[48px] leading-[56.16px] tracking-[-0.02em] text-center mt-[70px] xsm:mt-[40px] mb-[16px]'>Lorem Ipsum</h1>
        <div className='flex items-center justify-center gap-[5px]'>
          <img className='w-[32px]' src={ArticleAuthorProfile} alt="" />
          <p className='font-outfit font-medium text-[16px] leading-[20.96px] tracking-[-0.02em] text-primary2'>by Jane Doe</p>
        </div>
      </div>

      <div className='mt-[82px] w-full px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px] flex gap-[4.236vw]'>
        <div className='w-fit md:hidden sm:hidden xsm:hidden'>
          <img src={BlogArticle1} alt="" />
          <p className='font-outfit font-semibold text-[24px] leading-[28.08px] tracking-[-0.02em] mt-[27px]'>Learn more about cooking  </p>
          <Link to={'/search-tutors'}>
            <button className='w-[129px] h-[39px] bg-primary2 text-[white] font-outfit font-medium text-[16px] leading-[22.68px] rounded-[4px] mt-[27px]'>Find A Tutor</button>
          </Link>
        </div>
        <div className='w-[44.375vw] md:w-full sm:w-full xsm:w-full'>
          <img className='w-[639px] ' src={BlogArticleImage} alt="" />

          <div className='w-[269px] flex-col mt-[53px] border border-[rgba(255,219,184,1)] rounded-[8px] p-[24px] hidden md:flex sm:flex xsm:flex'>
            <h4 className='font-outfit font-semibold text-[24px] leading-[28.08px] tracking-[-0.02em]'>Table of content</h4>
            <div className='flex flex-col gap-[16px] mt-[26px]'>
              <CopyrightTable />
              <CopyrightTable />
              <CopyrightTable />
            </div>
          </div>

          <div className='mt-[80px] md:mt-[51px] sm:mt-[51px]'>
            <div className=''>
              <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Lorem ipsum dolor sit amet consectetur</h3>
              <p className='font-outfit font-normal text-[20px] leading-[30px] mt-[16px]'>Lorem ipsum dolor sit amet consectetur. Eget neque ultrices nisl pretium. Nibh scelerisque commodo etiam mattis ut tincidunt volutpat blandit ullamcorper. Sit ornare eget gravida adipiscing euismod tellus vitae laoreet. Elementum vulputate a tellus a tellus vel amet et non. Viverra tincidunt auctor venenatis adipiscing semper nulla ultricies.</p>
            </div>
            <div className='mt-[33px]'>
              <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Lorem ipsum dolor sit amet consectetur</h3>
              <p className='font-outfit font-normal text-[20px] leading-[30px] mt-[16px]'>Lorem ipsum dolor sit amet consectetur. Eget neque ultrices nisl pretium. Nibh scelerisque commodo etiam mattis ut tincidunt volutpat blandit ullamcorper. Sit ornare eget gravida adipiscing euismod tellus vitae laoreet. Elementum vulputate a tellus a tellus vel amet et non. Viverra tincidunt auctor venenatis adipiscing semper nulla ultricies.</p>
            </div>
            <div className='mt-[33px]'>
              <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Lorem ipsum dolor sit amet consectetur</h3>
              <p className='font-outfit font-normal text-[20px] leading-[30px] mt-[16px]'>Lorem ipsum dolor sit amet consectetur. Eget neque ultrices nisl pretium. Nibh scelerisque commodo etiam mattis ut tincidunt volutpat blandit ullamcorper. Sit ornare eget gravida adipiscing euismod tellus vitae laoreet. Elementum vulputate a tellus a tellus vel amet et non. Viverra tincidunt auctor venenatis adipiscing semper nulla ultricies.</p>
            </div>
            <div className='mt-[33px]'>
              <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Lorem ipsum dolor sit amet consectetur</h3>
              <p className='font-outfit font-normal text-[20px] leading-[30px] mt-[16px]'>Lorem ipsum dolor sit amet consectetur. Eget neque ultrices nisl pretium. Nibh scelerisque commodo etiam mattis ut tincidunt volutpat blandit ullamcorper. Sit ornare eget gravida adipiscing euismod tellus vitae laoreet. Elementum vulputate a tellus a tellus vel amet et non. Viverra tincidunt auctor venenatis adipiscing semper nulla ultricies.</p>
            </div>
          </div>

          <div className='flex items-center justify-center gap-[26px] my-[55px] md:mb-[42px]'>
            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3.54492L26.4075 14.6386L38.5 16.4285L29.75 25.0588L31.815 37.2513L21 31.4918L10.185 37.2513L12.25 25.0588L3.5 16.4285L15.5925 14.6386L21 3.54492Z" stroke="#D27722" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3.54492L26.4075 14.6386L38.5 16.4285L29.75 25.0588L31.815 37.2513L21 31.4918L10.185 37.2513L12.25 25.0588L3.5 16.4285L15.5925 14.6386L21 3.54492Z" stroke="#D27722" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3.54492L26.4075 14.6386L38.5 16.4285L29.75 25.0588L31.815 37.2513L21 31.4918L10.185 37.2513L12.25 25.0588L3.5 16.4285L15.5925 14.6386L21 3.54492Z" stroke="#D27722" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3.54492L26.4075 14.6386L38.5 16.4285L29.75 25.0588L31.815 37.2513L21 31.4918L10.185 37.2513L12.25 25.0588L3.5 16.4285L15.5925 14.6386L21 3.54492Z" stroke="#D27722" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3.54492L26.4075 14.6386L38.5 16.4285L29.75 25.0588L31.815 37.2513L21 31.4918L10.185 37.2513L12.25 25.0588L3.5 16.4285L15.5925 14.6386L21 3.54492Z" stroke="#D27722" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className='hidden md:flex sm:flex xsm:flex items-center gap-[16px] justify-center'>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="23" fill="#D27722" />
              <path d="M34 14.0003C33.0424 14.6758 31.9821 15.1924 30.86 15.5303C30.2577 14.8378 29.4573 14.347 28.567 14.1242C27.6767 13.9015 26.7395 13.9575 25.8821 14.2847C25.0247 14.612 24.2884 15.1947 23.773 15.954C23.2575 16.7133 22.9877 17.6126 23 18.5303V19.5303C21.2426 19.5759 19.5013 19.1861 17.931 18.3957C16.3607 17.6054 15.0103 16.4389 14 15.0003C14 15.0003 10 24.0003 19 28.0003C16.9405 29.3983 14.4872 30.0992 12 30.0003C21 35.0003 32 30.0003 32 18.5003C31.9991 18.2217 31.9723 17.9439 31.92 17.6703C32.9406 16.6638 33.6608 15.393 34 14.0003Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="23" fill="#D27722" />
              <path d="M27 19C28.5913 19 30.1174 19.6321 31.2426 20.7574C32.3679 21.8826 33 23.4087 33 25V32H29V25C29 24.4696 28.7893 23.9609 28.4142 23.5858C28.0391 23.2107 27.5304 23 27 23C26.4696 23 25.9609 23.2107 25.5858 23.5858C25.2107 23.9609 25 24.4696 25 25V32H21V25C21 23.4087 21.6321 21.8826 22.7574 20.7574C23.8826 19.6321 25.4087 19 27 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 20H13V32H17V20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="23" fill="#D27722" />
              <path d="M28 13H18C15.2386 13 13 15.2386 13 18V28C13 30.7614 15.2386 33 18 33H28C30.7614 33 33 30.7614 33 28V18C33 15.2386 30.7614 13 28 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M27 22.3703C27.1234 23.2025 26.9812 24.0525 26.5937 24.7993C26.2062 25.5461 25.5931 26.1517 24.8416 26.53C24.0901 26.9082 23.2384 27.0399 22.4077 26.9062C21.5771 26.7726 20.8097 26.3804 20.2148 25.7855C19.6199 25.1905 19.2277 24.4232 19.094 23.5925C18.9604 22.7619 19.092 21.9102 19.4703 21.1587C19.8485 20.4072 20.4541 19.794 21.2009 19.4065C21.9477 19.019 22.7977 18.8769 23.63 19.0003C24.4789 19.1262 25.2648 19.5218 25.8716 20.1286C26.4785 20.7355 26.8741 21.5214 27 22.3703Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28.5 17.5H28.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="23" fill="#D27722" />
              <path d="M29 13H26C24.6739 13 23.4021 13.5268 22.4645 14.4645C21.5268 15.4021 21 16.6739 21 18V21H18V25H21V33H25V25H28L29 21H25V18C25 17.7348 25.1054 17.4804 25.2929 17.2929C25.4804 17.1054 25.7348 17 26 17H29V13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div>
          <div className='flex md:hidden sm:hidden xsm:hidden items-center gap-[16px]'>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="23" fill="#D27722" />
              <path d="M34 14.0003C33.0424 14.6758 31.9821 15.1924 30.86 15.5303C30.2577 14.8378 29.4573 14.347 28.567 14.1242C27.6767 13.9015 26.7395 13.9575 25.8821 14.2847C25.0247 14.612 24.2884 15.1947 23.773 15.954C23.2575 16.7133 22.9877 17.6126 23 18.5303V19.5303C21.2426 19.5759 19.5013 19.1861 17.931 18.3957C16.3607 17.6054 15.0103 16.4389 14 15.0003C14 15.0003 10 24.0003 19 28.0003C16.9405 29.3983 14.4872 30.0992 12 30.0003C21 35.0003 32 30.0003 32 18.5003C31.9991 18.2217 31.9723 17.9439 31.92 17.6703C32.9406 16.6638 33.6608 15.393 34 14.0003Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="23" fill="#D27722" />
              <path d="M27 19C28.5913 19 30.1174 19.6321 31.2426 20.7574C32.3679 21.8826 33 23.4087 33 25V32H29V25C29 24.4696 28.7893 23.9609 28.4142 23.5858C28.0391 23.2107 27.5304 23 27 23C26.4696 23 25.9609 23.2107 25.5858 23.5858C25.2107 23.9609 25 24.4696 25 25V32H21V25C21 23.4087 21.6321 21.8826 22.7574 20.7574C23.8826 19.6321 25.4087 19 27 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 20H13V32H17V20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="23" fill="#D27722" />
              <path d="M28 13H18C15.2386 13 13 15.2386 13 18V28C13 30.7614 15.2386 33 18 33H28C30.7614 33 33 30.7614 33 28V18C33 15.2386 30.7614 13 28 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M27 22.3703C27.1234 23.2025 26.9812 24.0525 26.5937 24.7993C26.2062 25.5461 25.5931 26.1517 24.8416 26.53C24.0901 26.9082 23.2384 27.0399 22.4077 26.9062C21.5771 26.7726 20.8097 26.3804 20.2148 25.7855C19.6199 25.1905 19.2277 24.4232 19.094 23.5925C18.9604 22.7619 19.092 21.9102 19.4703 21.1587C19.8485 20.4072 20.4541 19.794 21.2009 19.4065C21.9477 19.019 22.7977 18.8769 23.63 19.0003C24.4789 19.1262 25.2648 19.5218 25.8716 20.1286C26.4785 20.7355 26.8741 21.5214 27 22.3703Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28.5 17.5H28.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="23" fill="#D27722" />
              <path d="M29 13H26C24.6739 13 23.4021 13.5268 22.4645 14.4645C21.5268 15.4021 21 16.6739 21 18V21H18V25H21V33H25V25H28L29 21H25V18C25 17.7348 25.1054 17.4804 25.2929 17.2929C25.4804 17.1054 25.7348 17 26 17H29V13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className='w-full flex-col border border-[rgba(255,219,184,1)] mt-[18px] rounded-[8px] p-[24px] flex md:hidden sm:hidden xsm:hidden'>
            <h4 className='font-outfit font-semibold text-[24px] leading-[28.08px] tracking-[-0.02em]'>Table of content</h4>
            <div className='flex flex-col gap-[16px] mt-[26px]'>
              <CopyrightTable />
              <CopyrightTable />
              <CopyrightTable />
            </div>
          </div>
        </div>
      </div>

      <section className='mt-[166px] w-full px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px] mb-[-55px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[6px]'>
            <p className='font-rubik font-medium text-[32px] leading-[41.92px] tracking-[-0.02em]'>Similar articles</p>
          </div>
          <div className='flex items-center gap-[9px]'>
            <p className='font-outfit font-medium text-[18px] leading-[23.58px] tracking-[-0.02em] text-primary2'>View all articles</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 gap-x-[4.444vw] gap-y-[112px] mt-[49px]'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>

      <LandingFooter />
    </>
  )
}

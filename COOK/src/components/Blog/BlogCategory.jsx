import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import BlogCategoryHeroImage from "../../assets/Blog/BlogCategoryHeroImage.svg";
import BlogSecondImage from "../../assets/Blog/BlogSecondImage.png";
import XSMDidYouKnow from "../../assets/Blog/XSMDidYouKnow.png";
import BlogNav from '../../layout/BlogNav';
import LandingFooter from '../../layout/LandingFooter';
import Pagination from '../utils/Pagination';
import BlogCard from './BlogCard';

export default function BlogCategory() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams()

  return (
    <>
      <BlogNav />
      <div className='px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px] w-full pt-[28px]'>
        <div className='flex justify-between xsm:hidden'>
          <nav className="" >
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
            </ol>
          </nav>
          <div className='flex gap-[14px]'>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Home Cooking</button>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Recipes</button>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Chef Spotlight</button>
          </div>
        </div>
      </div>

      <section className='flex flex-col items-center w-full px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px]'>
        <img src={BlogCategoryHeroImage} alt="" />
        <div className='w-full relative mt-[48px] md:mt-[41px] sm:mt-[41px] xsm:mt-[36px]'>
          <h1 className='relative z-20 m-auto font-rubik font-bold text-[48px] leading-[56.16px] tracking-[-0.02em] bg-[white] text-center xsm:text-[34px] xsm:leading-[39.78px]'>Ingredient Insights</h1>
          <p className='font-outfit font-normal text-[16px] leading-[28.48px] w-[45.069vw] text-center m-auto mt-[24px] xsm:w-full'>Discover the secrets behind various ingredients, their unique characteristics, and how to incorporate them into your culinary creations</p>
        </div>
      </section>

      <section className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 gap-[4.444vw] gap-y-[46px] w-full px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px] mt-[101px] mb-[87px]'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
      <Pagination currentPage={1} totalPages={6} />

      <section className='w-full bg-[rgba(255,253,244,1)] min-h-[442px] mt-[159px] px-[11.875vw] xsm:px-[0px] md:pb-[92px] md:pt-[42px] sm:pb-[92px] sm:pt-[42px] xsm:pb-[92px] xsm:pt-[42px] flex items-center md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse gap-[122px] md:gap-[52px] sm:gap-[52px] xsm:gap-[34px]'>
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

      <LandingFooter />
    </>
  )
}

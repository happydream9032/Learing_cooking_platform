import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { suportArticlesData } from '../utils/consts';
import SupportArticlesRow from './SupportArticlesRow';

export default function SupportArticles() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className='xsm:px-[0px] xsm:pl-[8.205vw] xsm:pr-[8.205vw]'>
        <div className='xsm:w-full xsm:flex w-[37.153vw] h-[49px] border-2 border-[#FFDBB8] rounded-[4px] hidden items-center px-[16px] relative mt-[31px] gap-[15px]'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.9999 21.5L16.6499 17.15" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input type="text" className='w-full font-medium font-outfit text-[20px] leading-[25.2px] h-full outline-none bg-[#00000000] text-primary2 placeholder:text-primary2' placeholder='Search' />
        </div>
      </div>
      <nav className="ml-[12.153vw] mr-[10.764vw] md:ml-[5.749vw] md:mr-[5.749vw] sm:ml-[5.749vw] sm:mr-[5.749vw] xsm:ml-[8.205vw] xsm:mr-[8.205vw] rounded-md">
        <ol className="list-reset flex items-center gap-[6px] py-[56px] xsm:py-[35px]">
          <li onClick={() => navigate(-1)} className='cursor-pointer'>
            <p className="font-outfit font-normal text-[16px] leading-[20.16px] text-primary2 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">All questions</p>
          </li>
          <li>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L5 5L1 1" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </li>
          <li className='inline whitespace-nowrap overflow-hidden overflow-ellipsis'>
            <p className="font-outfit font-normal text-[16px] leading-[20.16px] text-primary2 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">{location.state?.category}</p>
          </li>
        </ol>
      </nav>
      <main className='ml-[12.153vw] mr-[10.764vw] md:ml-[5.749vw] md:mr-[5.749vw] sm:ml-[5.749vw] sm:mr-[5.749vw] xsm:ml-[8.205vw] xsm:mr-[8.205vw] border border-[rgba(255,219,184,1)] rounded-[16px] p-[32px] xsm:p-[24px] xsm:pt-[0px] divide-y divide-[rgba(255,219,184,1)]'>
        {suportArticlesData.map((articleTitle, index) => {
          return (
            <SupportArticlesRow key={index} category={location.state.category} articleTitle={articleTitle} />
          )
        })
        }
      </main>
    </>
  )
}

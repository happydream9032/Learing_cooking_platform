import React, { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import arrow from "../assets/StudentDashboard/arrow.svg"
import burgerMenu from "../assets/StudentDashboard/burgerMenu.svg"
import search from "../assets/StudentDashboard/search.svg"
import user from "../assets/StudentDashboard/user.svg"
import Menu from './Menu'
import LanguageModal from './LanguageModal'
import CurrencyModal from './CurrencyModal'

const DashboardLayout = () => {
  const location = useLocation()

  const [currencyModal, setCurrencyModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Menu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />

      <div className='sticky top-0'>
        <nav >
          <div className='h-[104px] w-[100%] px-[64px] sm:px-[48px] xsm:px-[32px] bg-[white] z-[1000] flex items-center justify-between'>
            <div className='flex items-center gap-[32px]'>
              <Link to={'/'}>
                <svg width="88" height="38" viewBox="0 0 88 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.424 30.32C8.37333 30.32 5.984 29.584 4.256 28.112C2.54933 26.6187 1.64267 24.464 1.536 21.648C1.51467 21.072 1.504 20.1333 1.504 18.832C1.504 17.5093 1.51467 16.5493 1.536 15.952C1.64267 13.1787 2.57067 11.0453 4.32 9.552C6.06933 8.03733 8.43733 7.28 11.424 7.28C13.3013 7.28 14.9867 7.6 16.48 8.24C17.9733 8.85867 19.1467 9.75467 20 10.928C20.8747 12.08 21.3227 13.4347 21.344 14.992V15.056C21.344 15.2267 21.2693 15.376 21.12 15.504C20.992 15.6107 20.8427 15.664 20.672 15.664H16.352C16.0747 15.664 15.8613 15.6107 15.712 15.504C15.5627 15.376 15.4347 15.152 15.328 14.832C15.0293 13.744 14.56 12.9867 13.92 12.56C13.28 12.112 12.4373 11.888 11.392 11.888C8.87467 11.888 7.57333 13.296 7.488 16.112C7.46667 16.688 7.456 17.5733 7.456 18.768C7.456 19.9627 7.46667 20.8693 7.488 21.488C7.57333 24.304 8.87467 25.712 11.392 25.712C12.4373 25.712 13.2907 25.488 13.952 25.04C14.6133 24.5707 15.072 23.8133 15.328 22.768C15.4133 22.448 15.5307 22.2347 15.68 22.128C15.8293 22 16.0533 21.936 16.352 21.936H20.672C20.864 21.936 21.024 22 21.152 22.128C21.3013 22.256 21.3653 22.416 21.344 22.608C21.3227 24.1653 20.8747 25.5307 20 26.704C19.1467 27.856 17.9733 28.752 16.48 29.392C14.9867 30.0107 13.3013 30.32 11.424 30.32ZM33.2208 30.32C30.2128 30.32 27.8448 29.584 26.1168 28.112C24.3888 26.64 23.4714 24.4747 23.3648 21.616C23.3434 20.9973 23.3328 20.08 23.3328 18.864C23.3328 17.6267 23.3434 16.6987 23.3648 16.08C23.4714 13.264 24.3994 11.0987 26.1488 9.584C27.9194 8.048 30.2768 7.28 33.2208 7.28C36.1648 7.28 38.5221 8.048 40.2928 9.584C42.0634 11.0987 42.9914 13.264 43.0768 16.08C43.1194 17.3173 43.1408 18.2453 43.1408 18.864C43.1408 19.4613 43.1194 20.3787 43.0768 21.616C42.9701 24.4747 42.0528 26.64 40.3248 28.112C38.5968 29.584 36.2288 30.32 33.2208 30.32ZM33.2208 25.712C34.3941 25.712 35.3221 25.36 36.0048 24.656C36.7088 23.952 37.0821 22.8747 37.1248 21.424C37.1674 20.1867 37.1888 19.312 37.1888 18.8C37.1888 18.2453 37.1674 17.3707 37.1248 16.176C37.0821 14.7253 36.7088 13.648 36.0048 12.944C35.3008 12.24 34.3728 11.888 33.2208 11.888C32.0688 11.888 31.1408 12.24 30.4368 12.944C29.7541 13.648 29.3808 14.7253 29.3168 16.176C29.2954 16.7733 29.2848 17.648 29.2848 18.8C29.2848 19.9307 29.2954 20.8053 29.3168 21.424C29.3808 22.8747 29.7541 23.952 30.4368 24.656C31.1194 25.36 32.0474 25.712 33.2208 25.712ZM55.362 30.32C52.354 30.32 49.986 29.584 48.258 28.112C46.53 26.64 45.6127 24.4747 45.506 21.616C45.4847 20.9973 45.474 20.08 45.474 18.864C45.474 17.6267 45.4847 16.6987 45.506 16.08C45.6127 13.264 46.5407 11.0987 48.29 9.584C50.0607 8.048 52.418 7.28 55.362 7.28C58.306 7.28 60.6633 8.048 62.434 9.584C64.2047 11.0987 65.1327 13.264 65.218 16.08C65.2607 17.3173 65.282 18.2453 65.282 18.864C65.282 19.4613 65.2607 20.3787 65.218 21.616C65.1113 24.4747 64.194 26.64 62.466 28.112C60.738 29.584 58.37 30.32 55.362 30.32ZM55.362 25.712C56.5353 25.712 57.4633 25.36 58.146 24.656C58.85 23.952 59.2233 22.8747 59.266 21.424C59.3087 20.1867 59.33 19.312 59.33 18.8C59.33 18.2453 59.3087 17.3707 59.266 16.176C59.2233 14.7253 58.85 13.648 58.146 12.944C57.442 12.24 56.514 11.888 55.362 11.888C54.21 11.888 53.282 12.24 52.578 12.944C51.8953 13.648 51.522 14.7253 51.458 16.176C51.4367 16.7733 51.426 17.648 51.426 18.8C51.426 19.9307 51.4367 20.8053 51.458 21.424C51.522 22.8747 51.8953 23.952 52.578 24.656C53.2607 25.36 54.1887 25.712 55.362 25.712ZM69.1513 30C68.9379 30 68.7459 29.9253 68.5753 29.776C68.4259 29.6053 68.3513 29.4133 68.3513 29.2V8.4C68.3513 8.16533 68.4259 7.97333 68.5753 7.824C68.7459 7.67467 68.9379 7.6 69.1513 7.6H73.1833C73.4179 7.6 73.6099 7.67467 73.7593 7.824C73.9086 7.97333 73.9833 8.16533 73.9833 8.4V15.504L79.9033 8.208C80.1593 7.80267 80.5753 7.6 81.1513 7.6H85.7593C85.9513 7.6 86.1113 7.67467 86.2393 7.824C86.3673 7.952 86.4313 8.10133 86.4313 8.272C86.4313 8.42133 86.3993 8.54933 86.3353 8.656L78.6553 18.32L86.9113 28.944C86.9966 29.0293 87.0393 29.1573 87.0393 29.328C87.0393 29.4987 86.9753 29.6587 86.8473 29.808C86.7193 29.936 86.5593 30 86.3673 30H81.5993C81.0873 30 80.6606 29.7867 80.3193 29.36L73.9833 21.456V29.2C73.9833 29.4347 73.9086 29.6267 73.7593 29.776C73.6099 29.9253 73.4179 30 73.1833 30H69.1513Z" fill="#D27722" />
                </svg>
              </Link>
              <div className='sm:hidden xsm:hidden md:hidden h-[15px] border border-primaryLighten2 rouded-[16px]'></div>
              <div className='sm:hidden xsm:hidden md:hidden flex gap-[24px]'>
                <Link to={'/search-tutors'}>
                  <div className='flex gap-[7px]'>
                    <img src={search} />
                    <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Find Tutors</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className='flex items-center gap-[22px] xsm:hidden sm:hidden md:hidden'>
              <div onClick={(e) => { setLanguageModal(!languageModal); setCurrencyModal(false); e.stopPropagation(); }} className='flex items-center gap-[0.278vw] cursor-pointer group relative'>
                <LanguageModal state={languageModal} closeModal={(e) => { setLanguageModal(false) }} />
                <p className='font-outfit font-normal text-[19px] leading-[19px]'>Eng</p>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
                </svg>
              </div>
              <div onClick={(e) => { setCurrencyModal(!currencyModal); setLanguageModal(false); e.stopPropagation(); }} className='flex items-center gap-[0.278vw] cursor-pointer relative'>
                <CurrencyModal state={currencyModal} closeModal={(e) => { setCurrencyModal(false) }} />
                <p className='font-outfit font-normal text-[18px] leading-[18px]'>USD</p>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
                </svg>
              </div>
              <div className='h-[15px] border border-primaryLighten2 rouded-[16px]'></div>
              <div className='flex gap-[12px] items-center'>
                <Link to={'/support'}>
                  <div className='custom-tooltip' data-tooltip="Support">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 16.5V12.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 8.5H12.01" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
                <Link to={'chat'}>
                  <div className='custom-tooltip' data-tooltip="Messages">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
                <Link to={'/setting'}>
                  <div className='custom-tooltip' data-tooltip="Setting">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_308_4742)">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_308_4742">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </Link>
              </div>
              <div className='h-[15px] border border-primaryLighten2 rouded-[16px]'></div>
              <div>
                <img src={user} alt="" className='h-[48px] w-[48px]' />
              </div>
            </div>
            <div className='hidden cursor-pointer xsm:block sm:block md:block'>
              {/* <img src={burgerMenu} onClick={() => setShowMenu(true)} className='cursor-pointer' alt="" /> */}
              <div className='sm:block xsm:block md:block hidden cursor-pointer'>
                <svg className='cursor-pointer' onClick={() => setShowMenu(true)} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="42" height="42" rx="10" fill="#D17721" />
                  <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                  <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div className='flex justify-between bg-primary2 pr-[61px] pl-[64px] py-[10px] xsm:pl-[32px] sm:pl-[48px]'>
          <div className='flex items-center gap-[29px]'>
            <NavLink to={'/student-dashboard'} className={({ isActive }) => { return (isActive && location.pathname !== '/student-dashboard/chat') ? "font-outfit font-[600] text-[16px] leading-[18.31px] text-[white]" : "font-outfit font-[600] text-[16px] leading-[18.31px] text-primaryLighten2" }}>Lessons</NavLink>
            <NavLink to={'/student-dashboard/chat'} className={({ isActive }) => { return isActive ? "font-outfit font-[600] text-[16px] leading-[18.31px] text-[white]" : "font-outfit font-[600] text-[16px] leading-[18.31px] text-primaryLighten2" }}>Messages</NavLink>
          </div>
          <div className='xsm:hidden flex items-center gap-[8px]'>
            <Link to={'/online-lesson'}>
              <p className='font-outfit font-[600] text-[16px] leading-[18.31px] text-[white]'>Join your group lesson</p>
            </Link>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default DashboardLayout
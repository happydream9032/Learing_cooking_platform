import React from 'react'
import user from "../assets/StudentDashboard/user.svg"

const StudentDashboard = () => {
  return (
    <>
      <div className='flex flex-col mt-[95px] sm:mt-[76px] md:mt-[76px] xsm:mt-[59px] px-[19.86111111111111vw] sm:px-[48px] md:px-[48px] xsm:px-[32px] mb-[172px] sm:mb-[201px] md:mb-[201px] xsm:mb-[68px]'>
        <div className='flex flex-col gap-[29px] xsm:gap-[30px]'>
          <h1 className='font-[600] font-rubik text-[40px] tracking-[-0.02em] leading-[45.32px] xsm:leading-[36.26px] xsm:text-[32px]'>Lessons</h1>
          <div className='flex gap-[24px] xsm:gap-[16px] xsm:flex-col sm:flex-col md:flex-col'>
            <div className='p-[16px] pr-0 bg-primaryLighten flex gap-[24px]'>
              <svg className='max-w-[80px] max-h-[80px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1283_45003)">
                  <path d="M81.25 100H18.75C13.7772 100 9.00805 98.0246 5.49175 94.5083C1.97544 90.9919 0 86.2228 0 81.25L0 18.75C0 13.7772 1.97544 9.00805 5.49175 5.49175C9.00805 1.97544 13.7772 0 18.75 0L81.25 0C86.2228 0 90.9919 1.97544 94.5083 5.49175C98.0246 9.00805 100 13.7772 100 18.75V81.25C100 86.2228 98.0246 90.9919 94.5083 94.5083C90.9919 98.0246 86.2228 100 81.25 100Z" fill="#FFDBB8" />
                  <path d="M54.9406 56.8969C53.7594 58.0781 52.1906 58.7281 50.5219 58.7281C48.8531 58.7281 47.2844 58.0781 46.1031 56.8969L37.25 48.0437C36.0688 46.8625 35.4187 45.2937 35.4187 43.625C35.4187 41.9563 36.0688 40.3875 37.25 39.2063C38.4313 38.025 40 37.375 41.6687 37.375C43.3375 37.375 44.9063 38.025 46.0875 39.2063L50.5219 43.6406L64.5 29.6625C64.4093 29.1974 64.1607 28.7778 63.7962 28.4749C63.4318 28.172 62.9739 28.0042 62.5 28H31.25C27.8031 28 25 30.8031 25 34.25V65.5C25 68.9469 27.8031 71.75 31.25 71.75H62.5C65.9469 71.75 68.75 68.9469 68.75 65.5V43.0875L54.9406 56.8969Z" fill="#D27722" />
                  <path d="M50.5221 54.5625C50.2487 54.5631 49.9778 54.5095 49.7252 54.4049C49.4726 54.3003 49.2432 54.1468 49.0502 53.9531L40.1971 45.1C39.8441 44.702 39.6564 44.1842 39.6723 43.6524C39.6883 43.1206 39.9066 42.615 40.2828 42.2388C40.659 41.8627 41.1646 41.6443 41.6964 41.6284C42.2281 41.6124 42.7459 41.8001 43.1439 42.1531L50.5252 49.5344L71.4471 28.6125C71.8451 28.2595 72.3629 28.0718 72.8947 28.0877C73.4264 28.1037 73.932 28.322 74.3082 28.6982C74.6844 29.0744 74.9028 29.58 74.9187 30.1118C74.9346 30.6435 74.7469 31.1613 74.394 31.5594L51.9971 53.9562C51.6042 54.3444 51.0743 54.5622 50.5221 54.5625Z" fill="#E5984F" />
                </g>
                <defs>
                  <clipPath id="clip0_1283_45003">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className='flex flex-col '>
                <h2 className='text-[24px] font-outfit font-[600] xsm:text-[20px] text-[black]'>12 Finished Lessons</h2>
                <p className='font-outfit mt-[4px] xsm:mt-[8px] text-[16px] text-TextColorSec'>Celebrate your progress with completed lessons</p>
              </div>
            </div>
            <div className='p-[16px] pr-0 bg-primaryLighten flex gap-[24px]'>
              <svg className='max-w-[80px] max-h-[80px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1283_45267)">
                  <path d="M81.25 100H18.75C8.39395 100 0 91.6061 0 81.25V18.75C0 8.39395 8.39395 0 18.75 0H81.25C91.6061 0 100 8.39395 100 18.75V81.25C100 91.6061 91.6061 100 81.25 100Z" fill="#FFDBB8" />
                  <path d="M66.6656 34.8969C66.6656 31.7375 64.0969 29.1688 60.9375 29.1688H30.7281C27.5688 29.1656 25 31.7375 25 34.8969V41.6688H66.6656V34.8969Z" fill="#D17721" />
                  <path d="M35.4154 35.4156C34.2656 35.4156 33.3311 34.4811 33.3311 33.3313V27.0813C33.3342 25.9316 34.2656 25 35.4154 25C36.5652 25 37.4998 25.9316 37.4998 27.0844V33.3344C37.4998 34.4842 36.5682 35.4156 35.4154 35.4156ZM56.2498 35.4156C55.1 35.4156 54.1654 34.4811 54.1654 33.3313V27.0813C54.1654 25.9316 55.1 25 56.2498 25C57.3996 25 58.3342 25.9346 58.3342 27.0844V33.3344C58.3342 34.4842 57.4025 35.4156 56.2498 35.4156Z" fill="#E5984F" />
                  <path d="M41.6656 64.5844H31.25C27.8031 64.5844 25 61.7813 25 58.3344V37.5C25 36.3502 25.9316 35.4156 27.0844 35.4156C28.2371 35.4156 29.1656 36.3502 29.1656 37.5V58.3344C29.1656 59.4842 30.1002 60.4188 31.25 60.4188H41.6656C42.8184 60.4156 43.75 61.3504 43.75 62.5C43.75 63.6496 42.8184 64.5844 41.6656 64.5844ZM64.5844 43.75C63.4316 43.75 62.5 42.8155 62.5 41.6656V37.5C62.5 36.3502 63.4316 35.4156 64.5844 35.4156C65.7342 35.4156 66.6687 36.3502 66.6687 37.5V41.6656C66.6656 42.8155 65.7342 43.75 64.5844 43.75Z" fill="#D17721" />
                  <path d="M61.4596 47.9156C53.9941 47.9156 47.9189 53.991 47.9189 61.4563C47.9189 68.9215 53.9912 75 61.4596 75C68.9279 75 75.0002 68.9248 75.0002 61.4594C75.0002 53.994 68.925 47.9156 61.4596 47.9156ZM67.7217 59.1782L60.95 66.9907C60.7626 67.2069 60.5328 67.3823 60.2747 67.5059C60.0167 67.6296 59.7359 67.6988 59.45 67.7094H59.3752C58.8233 67.7091 58.294 67.4899 57.9035 67.0998L54.2566 63.453C53.4441 62.6405 53.4441 61.3221 54.2566 60.5065C55.0691 59.6908 56.3875 59.694 57.2031 60.5065L59.266 62.5688L64.5723 56.4469C64.7512 56.2399 64.9692 56.0703 65.2138 55.9477C65.4584 55.8252 65.7247 55.7521 65.9976 55.7327C66.2705 55.7133 66.5446 55.7479 66.8041 55.8346C67.0635 55.9213 67.3034 56.0584 67.5098 56.2379C68.3816 56.9908 68.4717 58.3092 67.7217 59.1782Z" fill="#E5984F" />
                </g>
                <defs>
                  <clipPath id="clip0_1283_45267">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className='flex flex-col '>
                <h2 className='text-[24px] font-outfit font-[600] xsm:text-[20px] text-[black]'>2 Upcoming Lessons</h2>
                <p className='font-outfit mt-[4px] xsm:mt-[8px] text-[16px] text-TextColorSec'>Stay excited for what's ahead with upcoming lessons</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-[100px] xsm:mt-[103px] gap-[112px] xsm:gap-[68px]'>
          <div className='flex flex-col gap-[37px] xsm:gap-[29px]'>
            <h2 className='font-rubik font-semibold text-[28px] leading-[31.72px] tracking-[-0.02em] xsm:text-[24px] xsm:leading-[27.19px]'>Upcoming Classes</h2>
            <div className='flex flex-col gap-[12px] xsm:gap-[14px]'>
              {[1, 2, 3].map((val, index) => {
                return (
                  <div key={index} className='flex justify-between p-[16px] border border-primaryLighten2 rounded-lg'>
                    <div className='flex gap-[16px] items-center xsm:flex-col xsm:items-start'>
                      <img src={user} alt="" />
                      <div className='flex flex-col gap-[5px]'>
                        <h2 className='text-[16px] font-outfit leading-[18.13px] text-primary2'>Lesson with Jack</h2>
                        <p className='text-[22px] xsm:text-[16px] xsm:leading-[18.13px] leading-[24.93px] font-[600] font-outfit'>Monday, 26 June, 19:00-22:00</p>
                      </div>
                    </div>
                    <p className='text-[24px] font-outfit font-[700] text-primary2 leading-[27.19px]'>$10</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex flex-col gap-[37px] xsm:gap-[29px]'>
            <h2 className='font-rubik font-semibold text-[28px] leading-[31.72px] tracking-[-0.02em] xsm:text-[24px] xsm:leading-[27.19px]'>Past Classes</h2>
            <div className='flex flex-col gap-[12px] xsm:gap-[14px]'>
              {[1, 2, 3].map((val, index) => {
                return (
                  <div className='flex justify-between p-[16px] border border-primaryLighten2 rounded-lg'>
                    <div className='flex gap-[16px] items-center xsm:flex-col xsm:items-start'>
                      <img src={user} alt="" />
                      <div className='flex flex-col gap-[5px]'>
                        <h2 className='text-[16px] font-outfit leading-[18.13px] text-[#349910]'>Lesson with Jack  •  Confirmed</h2>
                        <p className='text-[22px] xsm:text-[16px] xsm:leading-[18.13px] leading-[24.93px] font-[600] font-outfit'>Monday, 26 June, 19:00-22:00</p>
                      </div>
                    </div>
                    <p className='text-[24px] font-outfit font-[700] text-primary2 leading-[27.19px]'>$10</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='mx-[19.86111111111111vw] xsm:mx-0 sm:m-0 md:m-0 h-[2px] bg-primaryLighten2'></div>
      <footer className='flex justify-center items-center flex-col gap-[8px] pt-[52px] pb-[78px] sm:pb-[78px] md:pb-[78px] xsm:pb-[51px]'>
        <h1 className='text-[32px] font-rubik font-[700] text-primary2 leading-[37.92px] tracking-[-0.02em]'>COOK</h1>
        <div className='flex gap-[10px] items-center'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5 6.5H17.51" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 2.99998C22.0424 3.67546 20.9821 4.19209 19.86 4.52999C19.2577 3.8375 18.4573 3.34668 17.567 3.12391C16.6767 2.90115 15.7395 2.95718 14.8821 3.28444C14.0247 3.6117 13.2884 4.19439 12.773 4.9537C12.2575 5.71302 11.9877 6.61232 12 7.52998V8.52998C10.2426 8.57555 8.50127 8.1858 6.93101 7.39543C5.36074 6.60506 4.01032 5.43862 3 3.99998C3 3.99998 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.49998C20.9991 7.22144 20.9723 6.94358 20.92 6.66999C21.9406 5.66348 22.6608 4.3927 23 2.99998Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 9H2V21H6V9Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </footer>
    </>
  )
}

export default StudentDashboard
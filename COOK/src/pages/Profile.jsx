import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileBakerIcon from '../assets/Profile/ProfileBakerIcon.svg'
import ProfilePicture from "../assets/Profile/ProfilePicture.png"
import ReviewProfilePic from "../assets/Profile/ReviewProfilePic.png"
import StarIcon2 from "../assets/TutorList/StarIcon2.svg"
import ProfileReviewCard from '../components/Profile/ProfileReviewCard'
export default function Profile() {
  const [resumeTab, setResumeTab] = useState('education');
  const scrollRef = useRef(null);
  const handleScrollRight = () => {
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const targetScrollLeft = currentScrollLeft + 256.33;
    scrollRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  };
  const handleScrollLeft = () => {
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const targetScrollLeft = currentScrollLeft - 256.33;
    scrollRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  };
  const handleScroll = (event, id) => {
    event.preventDefault();
    const targetElementId = id;
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop + -112,
        behavior: 'smooth',
      });
    }
  };
  const ScrollToTop = (e) => {
    window.scrollTo({
      top: 0,
    });
  }
  return (
    <main className='px-[12.153vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw] flex justify-start gap-[23px] pt-[79px]'>
      <div>
        <div className='w-[52.361vw] md:w-full sm:w-full xsm:w-full flex gap-[20px]'>
          <div className='flex gap-[66px] min-w-[52.361vw] md:w-full sm:w-full xsm:w-full sm:flex-col xsm:flex-col'>
            <div className='relative w-fit'>
              <img className='w-[267px] relative' src={ProfilePicture} alt="" />
              <svg className='absolute bottom-[13px] right-[15px]' width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="67" height="67" rx="33.5" fill="#D27722" />
                <path d="M25 20L45.4167 33.125L25 46.25V20Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div>
                <h1 className='font-rubik font-semibold text-[42px] leading-[49.77px] tracking-[-0.02em]'>Sarah Doe</h1>
                <p className='font-outfit font-normal text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <div className='flex flex-col gap-[6px] mt-[30px]'>
                <div className='flex items-center gap-[7px]'>
                  <svg className='max-w-[20px] max-h-[20px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.9165 93.75C22.9165 94.3025 23.136 94.8324 23.5267 95.2231C23.9174 95.6138 24.4473 95.8333 24.9998 95.8333H74.9998C75.5523 95.8333 76.0823 95.6138 76.473 95.2231C76.8636 94.8324 77.0831 94.3025 77.0831 93.75V79.1667H22.9165V93.75ZM18.0623 51.4375L22.4998 75H37.2915L35.4165 54.3542C35.3919 54.0806 35.4214 53.8048 35.5033 53.5426C35.5853 53.2804 35.718 53.037 35.8941 52.8261C36.0701 52.6152 36.286 52.4411 36.5293 52.3137C36.7727 52.1862 37.0387 52.108 37.3123 52.0833C37.5859 52.0587 37.8617 52.0882 38.1238 52.1702C38.386 52.2521 38.6295 52.3849 38.8404 52.5609C39.0512 52.737 39.2254 52.9528 39.3528 53.1962C39.4803 53.4395 39.5585 53.7056 39.5831 53.9792L41.479 75H58.5206L60.4165 53.9792C60.4411 53.7056 60.5194 53.4395 60.6468 53.1962C60.7743 52.9528 60.9484 52.737 61.1593 52.5609C61.3701 52.3849 61.6136 52.2521 61.8758 52.1702C62.138 52.0882 62.4137 52.0587 62.6873 52.0833C62.9609 52.108 63.227 52.1862 63.4703 52.3137C63.7136 52.4411 63.9295 52.6152 64.1055 52.8261C64.2816 53.037 64.4144 53.2804 64.4963 53.5426C64.5783 53.8048 64.6078 54.0806 64.5831 54.3542L62.7081 75H77.4998L81.9373 51.4375C84.5116 50.7479 86.9094 49.5174 88.9706 47.8281C91.0319 46.1387 92.7094 44.0294 93.8912 41.6407C95.073 39.252 95.732 36.6387 95.8243 33.9753C95.9166 31.3118 95.44 28.6592 94.4263 26.1944C93.4126 23.7296 91.8852 21.5093 89.9457 19.6814C88.0063 17.8534 85.6995 16.46 83.179 15.5939C80.6586 14.7277 77.9825 14.4089 75.3291 14.6585C72.6758 14.9082 70.1061 15.7206 67.7915 17.0417C66.5488 13.3055 64.1615 10.0554 60.9681 7.75213C57.7747 5.44886 53.9372 4.20935 49.9998 4.20935C46.0624 4.20935 42.225 5.44886 39.0315 7.75213C35.8381 10.0554 33.4508 13.3055 32.2081 17.0417C29.8935 15.7206 27.3238 14.9082 24.6705 14.6585C22.0171 14.4089 19.341 14.7277 16.8206 15.5939C14.3002 16.46 11.9933 17.8534 10.0539 19.6814C8.11446 21.5093 6.58699 23.7296 5.57331 26.1944C4.55963 28.6592 4.08303 31.3118 4.1753 33.9753C4.26758 36.6387 4.92659 39.252 6.10841 41.6407C7.29023 44.0294 8.9677 46.1387 11.029 47.8281C13.0903 49.5174 15.488 50.7479 18.0623 51.4375Z" fill="#D27722" />
                  </svg>
                  <p className='font-outfit font-normal text-[18px] leading-[27px]'>Baker</p>
                </div>
                <div className='flex items-center gap-[7px]'>
                  <svg className='max-w-[20px] max-h-[20px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.0002 44.7367C62.3539 44.7367 72.3686 34.7221 72.3686 22.3684C72.3686 10.0147 62.3539 0 50.0002 0C37.6465 0 27.6318 10.0147 27.6318 22.3684C27.6318 34.7221 37.6465 44.7367 50.0002 44.7367Z" fill="#D27722" />
                    <path d="M50 50C28.1994 50 10.5264 67.6732 10.5264 89.4736C10.5264 95.2871 15.2393 100 21.0527 100H78.9475C84.7609 100 89.4738 95.2871 89.4738 89.4736C89.4736 67.6732 71.8006 50 50 50Z" fill="#D27722" />
                  </svg>
                  <p className='font-outfit font-normal text-[18px] leading-[27px]'>15 active students</p>
                </div>
                <div className='flex items-center gap-[7px]'>
                  <svg className='max-w-[20px] max-h-[20px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1283_45210)">
                      <path d="M97.8723 23.2432L76.754 2.12489C73.8221 -0.807056 69.0246 -0.699173 66.2354 2.41328L46.171 24.8095C43.6047 27.6747 43.725 32.0481 46.4449 34.7681L65.2291 53.5523C67.9464 56.2697 72.3213 56.3909 75.1876 53.8261L97.5839 33.7618C100.692 30.9763 100.809 26.1803 97.8723 23.2432ZM56.7878 29.2668C56.6144 29.0934 56.4769 28.8876 56.383 28.661C56.2892 28.4344 56.2408 28.1916 56.2408 27.9464C56.2408 27.7011 56.2892 27.4583 56.383 27.2317C56.4769 27.0052 56.6144 26.7993 56.7878 26.6259L70.4136 13.0002C70.7651 12.6566 71.238 12.4655 71.7295 12.4684C72.2211 12.4712 72.6917 12.6678 73.0393 13.0154C73.3869 13.363 73.5834 13.8336 73.5862 14.3251C73.589 14.8167 73.3978 15.2895 73.0542 15.6411L59.4285 29.2668C59.2551 29.4402 59.0493 29.5777 58.8227 29.6716C58.5962 29.7654 58.3534 29.8137 58.1082 29.8137C57.863 29.8137 57.6202 29.7654 57.3936 29.6716C57.1671 29.5777 56.9612 29.4402 56.7878 29.2668ZM62.8086 37.1888C62.6352 37.0154 62.4976 36.8096 62.4038 36.583C62.3099 36.3564 62.2616 36.1136 62.2616 35.8684C62.2616 35.6231 62.3099 35.3803 62.4038 35.1537C62.4976 34.9272 62.6352 34.7213 62.8086 34.5479L78.3356 19.021C78.6871 18.6774 79.16 18.4863 79.6515 18.4891C80.1431 18.492 80.6137 18.6885 80.9613 19.0361C81.3089 19.3837 81.5054 19.8543 81.5082 20.3459C81.511 20.8375 81.3198 21.3103 80.9762 21.6618L65.4493 37.1888C65.099 37.5389 64.6241 37.7355 64.1289 37.7355C63.6337 37.7355 63.1588 37.5389 62.8086 37.1888ZM86.9968 29.5836L73.371 43.2093C73.1978 43.383 72.992 43.5207 72.7654 43.6145C72.5389 43.7084 72.296 43.7565 72.0507 43.7562C70.4022 43.7562 69.5505 41.7483 70.7304 40.5687L84.3561 26.9429C85.0854 26.2139 86.2675 26.2139 86.9968 26.9429C87.1702 27.1163 87.3077 27.3222 87.4015 27.5487C87.4954 27.7753 87.5437 28.0181 87.5437 28.2633C87.5437 28.5085 87.4954 28.7513 87.4015 28.9778C87.3077 29.2044 87.1702 29.4102 86.9968 29.5836ZM52.752 49.8863L39.2022 63.4361C42.3271 66.5612 41.9439 70.8334 39.4304 73.3469L14.7851 97.9942C12.1034 100.672 7.77395 100.666 5.10258 97.9942L2.00299 94.8946C-0.665059 92.2266 -0.665059 87.8822 2.00299 85.212L26.6503 60.5668C29.12 58.0971 33.3696 57.6033 36.5611 60.795L50.1109 47.2452C50.8391 46.517 52.0217 46.517 52.752 47.2452C53.4802 47.9755 53.4802 49.1581 52.752 49.8863Z" fill="#D27722" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1283_45210">
                        <rect width="100" height="100" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className='font-outfit font-normal text-[18px] leading-[27px]'>100 lessons on COOK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[52.361vw] md:w-full sm:w-full xsm:w-full border border-[rgba(255,219,184,1)] mt-[50px] min-h-[110px] rounded-[12px] px-[16px] py-[12px]'>
          <div className='flex items-center gap-[16px] '>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4 className='font-outfit font-semibold text-[22px] leading-[27.72px]'>Verified tutor</h4>
          </div>
          <p className='font-outfit font-normal text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet consectetur. Vel mattis gravida elementum tellus sollicitudin vitae auctor lacus luctus. Neque sed ullamcorper lectus.</p>
        </div>
        <div className='w-[52.361vw] md:w-full sm:w-full xsm:w-full mt-[50px] lg:hidden xl:hidden 2xl:hidden rounded-[12px] py-[30px] px-[37px] bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)]'>
          <div>
            <div className='flex items-center justify-center gap-[20px]'>
              <div className='flex flex-col justify-center items-center'>
                <p className='font-rubik font-bold text-[32px] leading-[37.92px]'>$1000</p>
                <p className='font-outfit font-[300] text-[18px] leading-[22.68px] text-TextColorSec'>50-minutes</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex items-center gap-[4px]'>
                  <p className='font-rubik font-bold text-[32px] leading-[37.92px]'>5</p>
                  <img className='w-[27px]' src={StarIcon2} alt="" />
                </div>
                <p className='font-outfit font-[300] text-[18px] leading-[22.68px] text-TextColorSec'>100 reviews</p>
              </div>
            </div>
            <div className='flex gap-[13px] mt-[27px] xsm:flex-col sm:flex-col xsm:items-center sm:items-center justify-center'>
              <button className='w-[242px] h-[39px] border-2 border-primary rounded-[4px] font-outfit font-normal text-[18px] leading-[22.68px] text-primary2 '>Send A Message</button>
              <button className='w-[242px] h-[39px] border-2 border-primary rounded-[4px] font-kanit font-normal text-[18px] leading-[26.91px] bg-primary2 text-[white] '>Book A Trial Lesson</button>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-[18px] mt-[60px] flex-wrap'>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            <button className='px-[21px] min-h-[43px] bg-primary2 text-[white] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>About</button>
          </a>
          <a href="#availability" onClick={(e) => handleScroll(e, "availability")}>
            <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Availability</button>
          </a>
          <a href="#reviews" onClick={(e) => handleScroll(e, "reviews")}>
            <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Reviews (100)</button>
          </a>
          <a href="#resume" onClick={(e) => handleScroll(e, "resume")}>
            <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Resume</button>
          </a>
          <a href="#subjects" onClick={(e) => handleScroll(e, "subjects")}>
            <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Subjects</button>
          </a>
        </div>
        <div id='about' className='w-[52.361vw] md:w-full sm:w-full xsm:w-full  border border-[rgba(255,219,184,1)] mt-[50px] min-h-[110px] rounded-[12px] px-[32px] bg-[rgba(255,253,244,1)] py-[24px]'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>About</h4>
          <p className='font-outfit font-normal text-[16px] leading-[24.8px] mt-[12px] w-full'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum. Sit netus tincidunt massa fames id iaculis molestie at. Egestas duis et id tincidunt eros elit urna. Sed nunc nec fringilla gravida faucibus consequat feugiat fermentum tempus. Eleifend tempus mauris ac metus quis tellus feugiat. At libero pellentesque enim senectus odio suscipit augue eu pulvinar. Nisl integer quis tellus id hendrerit.</p>
        </div>
        <div id='availability' className='w-[52.361vw] md:w-full sm:w-full xsm:w-full  mt-[50px] xsm:hidden'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Availability</h4>
          <div className='min-h-[49px] w-full bg-primary2 rounded-[8px] py-[12px] px-[16px] mt-[18px] mb-[32px] flex items-center gap-[1.916vw]'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.09003 9.50002C9.32513 8.83169 9.78918 8.26813 10.4 7.90915C11.0108 7.55018 11.7289 7.41896 12.4272 7.53873C13.1255 7.65851 13.7588 8.02154 14.2151 8.56355C14.6714 9.10555 14.9211 9.79154 14.92 10.5C14.92 12.5 11.92 13.5 11.92 13.5" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 17.5H12.01" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className='font-outfit font-normal text-[16px] leading-[24.8px] text-[white]'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus s</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[5px]'>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 3.83331H4.16667C3.24619 3.83331 2.5 4.57951 2.5 5.49998V17.1666C2.5 18.0871 3.24619 18.8333 4.16667 18.8333H15.8333C16.7538 18.8333 17.5 18.0871 17.5 17.1666V5.49998C17.5 4.57951 16.7538 3.83331 15.8333 3.83331Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.3333 2.16669V5.50002" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66669 2.16669V5.50002" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 8.83331H17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className='font-outfit font-semibold text-[20px] leading-[31px]'>Mon, 24 Apr</p>
            </div>
            <div className='flex items-center gap-[5px]'>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.8334C14.6024 18.8334 18.3333 15.1024 18.3333 10.5C18.3333 5.89765 14.6024 2.16669 10 2.16669C5.39762 2.16669 1.66666 5.89765 1.66666 10.5C1.66666 15.1024 5.39762 18.8334 10 18.8334Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 5.5V10.5L13.3333 12.1667" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className='font-outfit font-semibold text-[20px] leading-[31px]'>Spain, GMT +2:00</p>
            </div>
          </div>
          <div className='flex justify-between mt-[25px]'>
            <div className='w-[84px] px-[0.972vw] '>
              <div className='border-t-8 border-primary2'>
                <div className=' m-auto mt-[12px] mb-[24px]'>
                  <p className='px-[14px] font-outfit font-normal text-[18px] leading-[27.9px] text-center'>SAT 22</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
                </div>
              </div>
            </div>
            <div className='w-[84px] px-[0.972vw] '>
              <div className='border-t-8 border-primary2'>
                <div className=' m-auto mt-[12px] mb-[24px]'>
                  <p className='px-[14px] font-outfit font-normal text-[18px] leading-[27.9px] text-center'>SUN 23</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
                </div>
              </div>
            </div>
            <div className='w-[84px] px-[0.972vw] '>
              <div className='border-t-8 border-primary2'>
                <div className=' m-auto mt-[12px] mb-[24px]'>
                  <p className='px-[14px] w-f[14px] font-outfit font-normal text-[18px] leading-[27.9px] text-center'>MON 24</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
                </div>
              </div>
            </div>
            <div className='w-[84px] px-[0.972vw] '>
              <div className='border-t-8 border-primary2'>
                <div className=' m-auto mt-[12px] mb-[24px]'>
                  <p className='px-[14px] font-outfit font-normal text-[18px] leading-[27.9px] text-center'>TUE 25</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
                </div>
              </div>
            </div>
            <div className='w-[84px] px-[0.972vw] '>
              <div className='border-t-8 border-primary2'>
                <div className=' m-auto mt-[12px] mb-[24px]'>
                  <p className='px-[14px] font-outfit font-normal text-[18px] leading-[27.9px] text-center'>WED 26</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
                </div>
              </div>
            </div>
            <div className='w-[84px] px-[0.972vw] '>
              <div className='border-t-8 border-primary2'>
                <div className=' m-auto mt-[12px] mb-[24px]'>
                  <p className='px-[14px] font-outfit font-normal text-[18px] leading-[27.9px] text-center'>THU 27</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
                </div>
              </div>
            </div>
            <div className='w-[84px] px-[0.972vw] '>
              <div className='border-t-8 border-primary2'>
                <div className=' m-auto mt-[12px] mb-[24px]'>
                  <p className='px-[14px] font-outfit font-normal text-[18px] leading-[27.9px] text-center'>FRI 28</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                  <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="reviews" className='w-[52.361vw] md:w-full sm:w-full xsm:w-full '>
          <div className='w-full mt-[50px]'>
            <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Reviews</h4>
            <div className='flex gap-x-[8.862vw] items-center mt-[40px] xsm:flex-col sm:flex-col xsm:items-start gap-y-[22px] sm:items-start'>
              <div className='w-[119px]'>
                <div className='flex items-center gap-[3px]'>
                  <h2 className='font-rubik font-semibold text-[49px] leading-[58.07px]'>4.5</h2>
                  <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6037 0.561416C17.9709 -0.180611 19.0291 -0.180611 19.3963 0.561417L24.2928 10.4574C24.4385 10.7519 24.7196 10.956 25.0448 11.0034L35.9922 12.5997C36.8129 12.7194 37.1396 13.7285 36.5448 14.3064L28.628 21.9989C28.3914 22.2288 28.2834 22.5605 28.3393 22.8856L30.2079 33.7542C30.3483 34.5709 29.4915 35.1942 28.7578 34.8092L18.9646 29.6714C18.6737 29.5188 18.3263 29.5188 18.0354 29.6714L8.24224 34.8092C7.50847 35.1942 6.65172 34.5709 6.79212 33.7542L8.66071 22.8856C8.71659 22.5605 8.60859 22.2288 8.37204 21.9989L0.455202 14.3064C-0.139597 13.7285 0.187125 12.7194 1.00779 12.5997L11.9552 11.0034C12.2804 10.956 12.5615 10.7519 12.7072 10.4574L17.6037 0.561416Z" fill="#D3CD39" />
                  </svg>
                </div>
                <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-primary2 text-center mt-[-1px]'>200 reviews</p>
              </div>
              <div className='min-h-[113.5px] border border-[rgba(255,219,184,1)] sm:hidden xsm:hidden'></div>
              <div className='flex flex-col gap-[4px]'>
                <div className='flex items-center gap-[10px]'>
                  <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>5</p>
                  <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                    <div className='w-[90%] h-full rounded-[26px] bg-primary2'></div>
                  </div>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>4</p>
                  <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                    <div className='w-[30%] h-full rounded-[26px] bg-primary2'></div>
                  </div>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>3</p>
                  <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                    <div className='w-[10%] h-full rounded-[26px] bg-primary2'></div>
                  </div>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>2</p>
                  <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                    <div className='w-[14%] h-full rounded-[26px] bg-primary2'></div>
                  </div>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>1</p>
                  <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                    <div className='w-[3%] h-full rounded-[26px] bg-primary2'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full mt-[67.5px] flex flex-col gap-[62px]'>
            <ProfileReviewCard />
            <ProfileReviewCard />
            <ProfileReviewCard />
            <button className='mt-[15px] w-[225px] h-[35px] rounded-[54px] bg-primary2 text-[white] self-center font-outfit font-medium text-[18px] leading-[22.68px] hover:bg-[white] hover:text-primary2 border-2 border-primary2 transition-all duration-200'>Read More</button>
          </div>
        </div>
        <div id='resume' className='w-[52.361vw] md:w-full sm:w-full xsm:w-full  border border-[rgba(255,219,184,1)] mt-[50px] min-h-[110px] rounded-[12px] px-[32px] bg-[rgba(255,253,244,1)] py-[24px]'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] mb-[20px]'>Resume</h4>
          <div className='flex items-center gap-[15px]'>
            <button onClick={() => setResumeTab("education")} style={resumeTab === "education" ? { background: "#D27722", color: "#fff" } : { border: "1px solid #D27722", color: "#D27722" }} className='h-[35px] px-[16px] rounded-[4px] font-kanit font-normal text-[18px] leading-[26.91px] '>Education</button>
            <button onClick={() => setResumeTab("experience")} style={resumeTab === "experience" ? { background: "#D27722", color: "#fff" } : { border: "1px solid #D27722", color: "#D27722" }} className='h-[35px] px-[16px] rounded-[4px]  font-kanit font-normal text-[18px] leading-[26.91px]'>Experience</button>
          </div>
          <p className='font-outfit font-normal text-[16px] leading-[24.8px] mt-[20px] w-full'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum. Sit netus tincidunt massa fames id iaculis molestie at. Egestas duis et id tincidunt eros elit urna. Sed nunc nec fringilla gravida faucibus consequat feugiat fermentum tempus. Eleifend tempus mauris ac metus quis tellus feugiat. At libero pellentesque enim senectus odio suscipit augue eu pulvinar. Nisl integer quis tellus id hendrerit.</p>
        </div>
        <div id='subjects' className='w-[52.361vw] md:w-full sm:w-full xsm:w-full  mt-[124px]'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] mb-[28px]'>Subjects</h4>
          <div className='flex items-center gap-[26px] sm:flex-col xsm:flex-col'>
            <Link to={'/search-tutors'}>
              <div className='w-[196px] xsm:w-full h-[136px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-center'>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="32" fill="#D27722" />
                  <path d="M44.5243 33.2123C41.1538 30.9779 36.7059 29.7472 32 29.7472C27.2941 29.7472 22.8462 30.9778 19.4757 33.2123C15.9446 35.5532 14 38.7181 14 42.1239C14 45.1458 15.5343 47.6634 19.7499 48.9137C22.7895 49.8152 26.8453 50 32 50C37.1546 50 41.2104 49.8152 44.2501 48.9137C48.4642 47.6638 50 45.1473 50 42.1239C50 38.7181 48.0554 35.5532 44.5243 33.2123ZM39.3828 33.1731C40.1156 33.4229 40.8206 33.7109 41.4922 34.0355V37.6233C41.4922 38.2437 41.0191 38.7485 40.4375 38.7485C39.8559 38.7485 39.3828 38.2437 39.3828 37.6233V33.1731ZM30.9453 32.0206C31.2949 32.0058 31.6465 31.9976 32 31.9976C32.3535 31.9976 32.7051 32.0058 33.0547 32.0206V37.5363C33.0547 38.1567 32.5816 38.6615 32 38.6615C31.4184 38.6615 30.9453 38.1567 30.9453 37.5363V32.0206ZM22.5078 34.0355C23.1794 33.7109 23.8844 33.4229 24.6172 33.1731V37.6233C24.6172 38.2437 24.1441 38.7485 23.5625 38.7485C22.9809 38.7485 22.5078 38.2437 22.5078 37.6233V34.0355ZM32 47.7497C21.6942 47.7497 16.1094 46.8532 16.1094 42.1239C16.1094 39.5827 17.6309 37.15 20.3984 35.2529V37.6233C20.3984 39.4845 21.8178 40.9988 23.5625 40.9988C25.3072 40.9988 26.7266 39.4845 26.7266 37.6233V32.5773C27.4241 32.4187 28.128 32.2932 28.8359 32.201V37.5363C28.8359 39.3975 30.2553 40.9118 32 40.9118C33.7447 40.9118 35.1641 39.3975 35.1641 37.5363V32.201C35.872 32.2932 36.5759 32.4187 37.2734 32.5773V37.6233C37.2734 39.4845 38.6928 40.9988 40.4375 40.9988C42.1822 40.9988 43.6016 39.4845 43.6016 37.6233V35.2529C46.3691 37.15 47.8906 39.5827 47.8906 42.1239C47.8906 46.8532 42.3058 47.7497 32 47.7497ZM27.3643 20.637C28.3653 19.9251 28.9629 18.7199 28.9629 17.413C28.9629 16.1061 28.3653 14.9009 27.3643 14.1891C26.8796 13.8444 26.2248 13.9841 25.9017 14.5011C25.5786 15.0182 25.7096 15.7167 26.1942 16.0614C26.6131 16.3594 26.8535 16.852 26.8535 17.413C26.8535 17.9741 26.6131 18.4668 26.1942 18.7647C25.702 19.1139 25.2985 19.5876 25.0196 20.1436C24.7407 20.6996 24.595 21.3205 24.5957 21.9511C24.595 22.5817 24.7407 23.2027 25.0196 23.7587C25.2985 24.3147 25.702 24.7884 26.1942 25.1376C26.678 25.4817 27.3331 25.3436 27.6568 24.8256C27.98 24.3086 27.849 23.61 27.3643 23.2653C26.9454 22.9674 26.705 22.4884 26.705 21.9511C26.705 21.414 26.9454 20.935 27.3643 20.637ZM32.6377 20.637C33.6387 19.9251 34.2363 18.7199 34.2363 17.413C34.2363 16.1061 33.6387 14.9009 32.6377 14.1891C32.153 13.8444 31.4982 13.9841 31.1752 14.5011C30.852 15.0182 30.983 15.7167 31.4677 16.0614C31.8866 16.3594 32.1269 16.852 32.1269 17.413C32.1269 17.9741 31.8866 18.4668 31.4677 18.7647C30.9755 19.1139 30.5719 19.5876 30.293 20.1436C30.0141 20.6996 29.8685 21.3205 29.8691 21.9511C29.8685 22.5817 30.0141 23.2027 30.293 23.7587C30.572 24.3147 30.9755 24.7884 31.4677 25.1376C31.9515 25.4817 32.6066 25.3436 32.9302 24.8256C33.2534 24.3086 33.1224 23.61 32.6377 23.2653C32.2188 22.9674 31.9785 22.4884 31.9785 21.9511C31.9785 21.414 32.2188 20.935 32.6377 20.637ZM37.9112 20.637C38.9121 19.9251 39.5097 18.7199 39.5097 17.413C39.5097 16.1061 38.9121 14.9009 37.9112 14.1891C37.4264 13.8444 36.7716 13.9841 36.4486 14.5011C36.1254 15.0182 36.2564 15.7167 36.7411 16.0614C37.16 16.3594 37.4004 16.852 37.4004 17.413C37.4004 17.9741 37.16 18.4668 36.7411 18.7647C36.2489 19.1139 35.8454 19.5876 35.5665 20.1436C35.2875 20.6996 35.1419 21.3205 35.1425 21.9511C35.1419 22.5817 35.2876 23.2027 35.5665 23.7587C35.8454 24.3147 36.2489 24.7884 36.7411 25.1376C37.2249 25.4817 37.88 25.3436 38.2037 24.8256C38.5268 24.3086 38.3958 23.61 37.9112 23.2653C37.4923 22.9674 37.2519 22.4884 37.2519 21.9511C37.2519 21.414 37.4923 20.935 37.9112 20.637Z" fill="white" />
                </svg>
                <p className='font-outfit font-medium text-[20px] leading-[31px]'>Subject name 1</p>
              </div>
            </Link>
            <Link to={'/search-tutors'}>
              <div className='w-[196px] xsm:w-full h-[136px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-center'>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="32" fill="#D27722" />
                  <path d="M44.5243 33.2123C41.1538 30.9779 36.7059 29.7472 32 29.7472C27.2941 29.7472 22.8462 30.9778 19.4757 33.2123C15.9446 35.5532 14 38.7181 14 42.1239C14 45.1458 15.5343 47.6634 19.7499 48.9137C22.7895 49.8152 26.8453 50 32 50C37.1546 50 41.2104 49.8152 44.2501 48.9137C48.4642 47.6638 50 45.1473 50 42.1239C50 38.7181 48.0554 35.5532 44.5243 33.2123ZM39.3828 33.1731C40.1156 33.4229 40.8206 33.7109 41.4922 34.0355V37.6233C41.4922 38.2437 41.0191 38.7485 40.4375 38.7485C39.8559 38.7485 39.3828 38.2437 39.3828 37.6233V33.1731ZM30.9453 32.0206C31.2949 32.0058 31.6465 31.9976 32 31.9976C32.3535 31.9976 32.7051 32.0058 33.0547 32.0206V37.5363C33.0547 38.1567 32.5816 38.6615 32 38.6615C31.4184 38.6615 30.9453 38.1567 30.9453 37.5363V32.0206ZM22.5078 34.0355C23.1794 33.7109 23.8844 33.4229 24.6172 33.1731V37.6233C24.6172 38.2437 24.1441 38.7485 23.5625 38.7485C22.9809 38.7485 22.5078 38.2437 22.5078 37.6233V34.0355ZM32 47.7497C21.6942 47.7497 16.1094 46.8532 16.1094 42.1239C16.1094 39.5827 17.6309 37.15 20.3984 35.2529V37.6233C20.3984 39.4845 21.8178 40.9988 23.5625 40.9988C25.3072 40.9988 26.7266 39.4845 26.7266 37.6233V32.5773C27.4241 32.4187 28.128 32.2932 28.8359 32.201V37.5363C28.8359 39.3975 30.2553 40.9118 32 40.9118C33.7447 40.9118 35.1641 39.3975 35.1641 37.5363V32.201C35.872 32.2932 36.5759 32.4187 37.2734 32.5773V37.6233C37.2734 39.4845 38.6928 40.9988 40.4375 40.9988C42.1822 40.9988 43.6016 39.4845 43.6016 37.6233V35.2529C46.3691 37.15 47.8906 39.5827 47.8906 42.1239C47.8906 46.8532 42.3058 47.7497 32 47.7497ZM27.3643 20.637C28.3653 19.9251 28.9629 18.7199 28.9629 17.413C28.9629 16.1061 28.3653 14.9009 27.3643 14.1891C26.8796 13.8444 26.2248 13.9841 25.9017 14.5011C25.5786 15.0182 25.7096 15.7167 26.1942 16.0614C26.6131 16.3594 26.8535 16.852 26.8535 17.413C26.8535 17.9741 26.6131 18.4668 26.1942 18.7647C25.702 19.1139 25.2985 19.5876 25.0196 20.1436C24.7407 20.6996 24.595 21.3205 24.5957 21.9511C24.595 22.5817 24.7407 23.2027 25.0196 23.7587C25.2985 24.3147 25.702 24.7884 26.1942 25.1376C26.678 25.4817 27.3331 25.3436 27.6568 24.8256C27.98 24.3086 27.849 23.61 27.3643 23.2653C26.9454 22.9674 26.705 22.4884 26.705 21.9511C26.705 21.414 26.9454 20.935 27.3643 20.637ZM32.6377 20.637C33.6387 19.9251 34.2363 18.7199 34.2363 17.413C34.2363 16.1061 33.6387 14.9009 32.6377 14.1891C32.153 13.8444 31.4982 13.9841 31.1752 14.5011C30.852 15.0182 30.983 15.7167 31.4677 16.0614C31.8866 16.3594 32.1269 16.852 32.1269 17.413C32.1269 17.9741 31.8866 18.4668 31.4677 18.7647C30.9755 19.1139 30.5719 19.5876 30.293 20.1436C30.0141 20.6996 29.8685 21.3205 29.8691 21.9511C29.8685 22.5817 30.0141 23.2027 30.293 23.7587C30.572 24.3147 30.9755 24.7884 31.4677 25.1376C31.9515 25.4817 32.6066 25.3436 32.9302 24.8256C33.2534 24.3086 33.1224 23.61 32.6377 23.2653C32.2188 22.9674 31.9785 22.4884 31.9785 21.9511C31.9785 21.414 32.2188 20.935 32.6377 20.637ZM37.9112 20.637C38.9121 19.9251 39.5097 18.7199 39.5097 17.413C39.5097 16.1061 38.9121 14.9009 37.9112 14.1891C37.4264 13.8444 36.7716 13.9841 36.4486 14.5011C36.1254 15.0182 36.2564 15.7167 36.7411 16.0614C37.16 16.3594 37.4004 16.852 37.4004 17.413C37.4004 17.9741 37.16 18.4668 36.7411 18.7647C36.2489 19.1139 35.8454 19.5876 35.5665 20.1436C35.2875 20.6996 35.1419 21.3205 35.1425 21.9511C35.1419 22.5817 35.2876 23.2027 35.5665 23.7587C35.8454 24.3147 36.2489 24.7884 36.7411 25.1376C37.2249 25.4817 37.88 25.3436 38.2037 24.8256C38.5268 24.3086 38.3958 23.61 37.9112 23.2653C37.4923 22.9674 37.2519 22.4884 37.2519 21.9511C37.2519 21.414 37.4923 20.935 37.9112 20.637Z" fill="white" />
                </svg>
                <p className='font-outfit font-medium text-[20px] leading-[31px]'>Subject name 1</p>
              </div>
            </Link>
            <Link to={'/search-tutors'}>
              <div className='w-[196px] xsm:w-full h-[136px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-center'>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="32" fill="#D27722" />
                  <path d="M44.5243 33.2123C41.1538 30.9779 36.7059 29.7472 32 29.7472C27.2941 29.7472 22.8462 30.9778 19.4757 33.2123C15.9446 35.5532 14 38.7181 14 42.1239C14 45.1458 15.5343 47.6634 19.7499 48.9137C22.7895 49.8152 26.8453 50 32 50C37.1546 50 41.2104 49.8152 44.2501 48.9137C48.4642 47.6638 50 45.1473 50 42.1239C50 38.7181 48.0554 35.5532 44.5243 33.2123ZM39.3828 33.1731C40.1156 33.4229 40.8206 33.7109 41.4922 34.0355V37.6233C41.4922 38.2437 41.0191 38.7485 40.4375 38.7485C39.8559 38.7485 39.3828 38.2437 39.3828 37.6233V33.1731ZM30.9453 32.0206C31.2949 32.0058 31.6465 31.9976 32 31.9976C32.3535 31.9976 32.7051 32.0058 33.0547 32.0206V37.5363C33.0547 38.1567 32.5816 38.6615 32 38.6615C31.4184 38.6615 30.9453 38.1567 30.9453 37.5363V32.0206ZM22.5078 34.0355C23.1794 33.7109 23.8844 33.4229 24.6172 33.1731V37.6233C24.6172 38.2437 24.1441 38.7485 23.5625 38.7485C22.9809 38.7485 22.5078 38.2437 22.5078 37.6233V34.0355ZM32 47.7497C21.6942 47.7497 16.1094 46.8532 16.1094 42.1239C16.1094 39.5827 17.6309 37.15 20.3984 35.2529V37.6233C20.3984 39.4845 21.8178 40.9988 23.5625 40.9988C25.3072 40.9988 26.7266 39.4845 26.7266 37.6233V32.5773C27.4241 32.4187 28.128 32.2932 28.8359 32.201V37.5363C28.8359 39.3975 30.2553 40.9118 32 40.9118C33.7447 40.9118 35.1641 39.3975 35.1641 37.5363V32.201C35.872 32.2932 36.5759 32.4187 37.2734 32.5773V37.6233C37.2734 39.4845 38.6928 40.9988 40.4375 40.9988C42.1822 40.9988 43.6016 39.4845 43.6016 37.6233V35.2529C46.3691 37.15 47.8906 39.5827 47.8906 42.1239C47.8906 46.8532 42.3058 47.7497 32 47.7497ZM27.3643 20.637C28.3653 19.9251 28.9629 18.7199 28.9629 17.413C28.9629 16.1061 28.3653 14.9009 27.3643 14.1891C26.8796 13.8444 26.2248 13.9841 25.9017 14.5011C25.5786 15.0182 25.7096 15.7167 26.1942 16.0614C26.6131 16.3594 26.8535 16.852 26.8535 17.413C26.8535 17.9741 26.6131 18.4668 26.1942 18.7647C25.702 19.1139 25.2985 19.5876 25.0196 20.1436C24.7407 20.6996 24.595 21.3205 24.5957 21.9511C24.595 22.5817 24.7407 23.2027 25.0196 23.7587C25.2985 24.3147 25.702 24.7884 26.1942 25.1376C26.678 25.4817 27.3331 25.3436 27.6568 24.8256C27.98 24.3086 27.849 23.61 27.3643 23.2653C26.9454 22.9674 26.705 22.4884 26.705 21.9511C26.705 21.414 26.9454 20.935 27.3643 20.637ZM32.6377 20.637C33.6387 19.9251 34.2363 18.7199 34.2363 17.413C34.2363 16.1061 33.6387 14.9009 32.6377 14.1891C32.153 13.8444 31.4982 13.9841 31.1752 14.5011C30.852 15.0182 30.983 15.7167 31.4677 16.0614C31.8866 16.3594 32.1269 16.852 32.1269 17.413C32.1269 17.9741 31.8866 18.4668 31.4677 18.7647C30.9755 19.1139 30.5719 19.5876 30.293 20.1436C30.0141 20.6996 29.8685 21.3205 29.8691 21.9511C29.8685 22.5817 30.0141 23.2027 30.293 23.7587C30.572 24.3147 30.9755 24.7884 31.4677 25.1376C31.9515 25.4817 32.6066 25.3436 32.9302 24.8256C33.2534 24.3086 33.1224 23.61 32.6377 23.2653C32.2188 22.9674 31.9785 22.4884 31.9785 21.9511C31.9785 21.414 32.2188 20.935 32.6377 20.637ZM37.9112 20.637C38.9121 19.9251 39.5097 18.7199 39.5097 17.413C39.5097 16.1061 38.9121 14.9009 37.9112 14.1891C37.4264 13.8444 36.7716 13.9841 36.4486 14.5011C36.1254 15.0182 36.2564 15.7167 36.7411 16.0614C37.16 16.3594 37.4004 16.852 37.4004 17.413C37.4004 17.9741 37.16 18.4668 36.7411 18.7647C36.2489 19.1139 35.8454 19.5876 35.5665 20.1436C35.2875 20.6996 35.1419 21.3205 35.1425 21.9511C35.1419 22.5817 35.2876 23.2027 35.5665 23.7587C35.8454 24.3147 36.2489 24.7884 36.7411 25.1376C37.2249 25.4817 37.88 25.3436 38.2037 24.8256C38.5268 24.3086 38.3958 23.61 37.9112 23.2653C37.4923 22.9674 37.2519 22.4884 37.2519 21.9511C37.2519 21.414 37.4923 20.935 37.9112 20.637Z" fill="white" />
                </svg>
                <p className='font-outfit font-medium text-[20px] leading-[31px]'>Subject name 1</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='blurEnd w-[52.569vw] md:w-[88.263vw] sm:w-[88.263vw] xsm:w-[83.59vw] mt-[124px] flex flex-col '>
          <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] mb-[47px]'>Other Tutors</h4>
          <div ref={scrollRef} className='hideScrollbar xsm:w-full pb-[38px] bg-[rgba(0,0,0,0.0)] flex items-center gap-[12px] max-w-full overflow-y-auto overflow-x-scroll'>
            <Link to={'/profile'} onClick={ScrollToTop}>
              <div className=' min-w-[244.33px] xsm:flex-col p-[16px] min-h-[384px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-start'>
                <img className='w-[100px]' src={ReviewProfilePic} alt="" />
                <div className='flex flex-col items-center mt-[24px]'>
                  <h5 className='font-rubik font-semibold text-[26px] leading-[30.81px] tracking-[-0.02em]'>Sarah Doe</h5>
                  <div className='flex items-center gap-[7px]'>
                    <img src={ProfileBakerIcon} alt="" />
                    <p className='font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Baker</p>
                  </div>
                  <p className='font-outfit font-normal text-[16px] leading-[24px] text-center mt-[16px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et</p>
                  <p className='font-kanit font-semibold text-[16px] leading-[23.92px] text-primary2'>Learn more</p>
                </div>
              </div>
            </Link>
            <Link to={'/profile'} onClick={ScrollToTop}>
              <div className=' min-w-[244.33px] p-[16px] min-h-[384px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-start'>
                <img className='w-[100px]' src={ReviewProfilePic} alt="" />
                <div className='flex flex-col items-center mt-[24px]'>
                  <h5 className='font-rubik font-semibold text-[26px] leading-[30.81px] tracking-[-0.02em]'>Sarah Doe</h5>
                  <div className='flex items-center gap-[7px]'>
                    <img src={ProfileBakerIcon} alt="" />
                    <p className='font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Baker</p>
                  </div>
                  <p className='font-outfit font-normal text-[16px] leading-[24px] text-center mt-[16px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et</p>
                  <p className='font-kanit font-semibold text-[16px] leading-[23.92px] text-primary2'>Learn more</p>
                </div>
              </div>
            </Link>
            <Link to={'/profile'} onClick={ScrollToTop}>
              <div className=' min-w-[244.33px] p-[16px] min-h-[384px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-start'>
                <img className='w-[100px]' src={ReviewProfilePic} alt="" />
                <div className='flex flex-col items-center mt-[24px]'>
                  <h5 className='font-rubik font-semibold text-[26px] leading-[30.81px] tracking-[-0.02em]'>Sarah Doe</h5>
                  <div className='flex items-center gap-[7px]'>
                    <img src={ProfileBakerIcon} alt="" />
                    <p className='font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Baker</p>
                  </div>
                  <p className='font-outfit font-normal text-[16px] leading-[24px] text-center mt-[16px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et</p>
                  <p className='font-kanit font-semibold text-[16px] leading-[23.92px] text-primary2'>Learn more</p>
                </div>
              </div>
            </Link>
            <Link to={'/profile'} onClick={ScrollToTop}>
              <div className=' min-w-[244.33px] p-[16px] min-h-[384px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-start'>
                <img className='w-[100px]' src={ReviewProfilePic} alt="" />
                <div className='flex flex-col items-center mt-[24px]'>
                  <h5 className='font-rubik font-semibold text-[26px] leading-[30.81px] tracking-[-0.02em]'>Sarah Doe</h5>
                  <div className='flex items-center gap-[7px]'>
                    <img src={ProfileBakerIcon} alt="" />
                    <p className='font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Baker</p>
                  </div>
                  <p className='font-outfit font-normal text-[16px] leading-[24px] text-center mt-[16px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et</p>
                  <p className='font-kanit font-semibold text-[16px] leading-[23.92px] text-primary2'>Learn more</p>
                </div>
              </div>
            </Link>
            <Link to={'/profile'} onClick={ScrollToTop}>
              <div className=' min-w-[244.33px] p-[16px] min-h-[384px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-start'>
                <img className='w-[100px]' src={ReviewProfilePic} alt="" />
                <div className='flex flex-col items-center mt-[24px]'>
                  <h5 className='font-rubik font-semibold text-[26px] leading-[30.81px] tracking-[-0.02em]'>Sarah Doe</h5>
                  <div className='flex items-center gap-[7px]'>
                    <img src={ProfileBakerIcon} alt="" />
                    <p className='font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Baker</p>
                  </div>
                  <p className='font-outfit font-normal text-[16px] leading-[24px] text-center mt-[16px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et</p>
                  <p className='font-kanit font-semibold text-[16px] leading-[23.92px] text-primary2'>Learn more</p>
                </div>
              </div>
            </Link>
            <Link to={'/profile'} onClick={ScrollToTop}>
              <div className=' min-w-[244.33px] p-[16px] min-h-[384px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-start'>
                <img className='w-[100px]' src={ReviewProfilePic} alt="" />
                <div className='flex flex-col items-center mt-[24px]'>
                  <h5 className='font-rubik font-semibold text-[26px] leading-[30.81px] tracking-[-0.02em]'>Sarah Doe</h5>
                  <div className='flex items-center gap-[7px]'>
                    <img src={ProfileBakerIcon} alt="" />
                    <p className='font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Baker</p>
                  </div>
                  <p className='font-outfit font-normal text-[16px] leading-[24px] text-center mt-[16px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et</p>
                  <p className='font-kanit font-semibold text-[16px] leading-[23.92px] text-primary2'>Learn more</p>
                </div>
              </div>
            </Link>
          </div>
          <div className='flex gap-[12px] self-end'>
            <svg className='cursor-pointer' onClick={handleScrollLeft} width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.3409 19.8182L13.2955 19.8182" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.8182 26.3409L13.2955 19.8182L19.8182 13.2955" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className='cursor-pointer' onClick={handleScrollRight} width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="41" height="41" rx="20.5" fill="#D27722" />
              <path d="M13.6591 20.1818H26.7045" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.1818 13.6591L26.7045 20.1818L20.1818 26.7045" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className='w-[313px] md:hidden sm:hidden xsm:hidden sticky h-[243px] top-[140px] rounded-[12px] py-[30px] px-[37px] bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)]'>
        <div>
          <div className='flex items-center justify-between gap-[20px]'>
            <div className='flex flex-col justify-center items-center'>
              <p className='font-rubik font-bold text-[32px] leading-[37.92px]'>$1000</p>
              <p className='font-outfit font-[300] text-[18px] leading-[22.68px] text-TextColorSec'>50-minutes</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex items-center gap-[4px]'>
                <p className='font-rubik font-bold text-[32px] leading-[37.92px]'>5</p>
                <img className='w-[27px]' src={StarIcon2} alt="" />
              </div>
              <p className='font-outfit font-[300] text-[18px] leading-[22.68px] text-TextColorSec'>100 reviews</p>
            </div>
          </div>
          <button className='w-full h-[39px] border-2 border-primary2 rounded-[4px] font-outfit font-normal text-[18px] leading-[22.68px] text-primary2 mt-[27px] hover:bg-primary2 hover:text-[white] transition-all duration-200'>Send A Message</button>
          <button className='w-full h-[39px] border-2 border-primary2 rounded-[4px] font-kanit font-normal text-[18px] leading-[26.91px] bg-primary2 text-[white] mt-[12px] hover:bg-[rgba(0,0,0,0)] hover:text-primary2 transition-all duration-200'>Book A Trial Lesson</button>
        </div>
      </div>
    </main>
  )
}

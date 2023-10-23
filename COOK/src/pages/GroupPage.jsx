import React, { useRef, useState } from 'react'
import card from './../assets/GroupList/card.jpg'
import groupsize from './../assets/GroupList/groupsize.svg'
import left from './../assets/GroupList/left.svg'
import level from './../assets/GroupList/level.svg'
import mainImage from './../assets/GroupList/mainImage.png'
import ratingStar from './../assets/GroupList/ratingStar.svg'
import right from './../assets/GroupList/right.svg'
import specialization from './../assets/GroupList/specialization.svg'
import star2 from './../assets/GroupList/star2.svg'
import user from './../assets/StudentDashboard/user.svg'
const GroupPage = () => {

  const scrollRef = useRef(null);
  const handleScrollRight = () => {
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const targetScrollLeft = currentScrollLeft + 378;
    scrollRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  };
  const handleScrollLeft = () => {
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const targetScrollLeft = currentScrollLeft - 378;
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
  const [arr, setArr] = useState([1, 2, 3, 1, 1])
  return (
    <div className='flex justify-start gap-[23px]'>
      <div>
        <div className='flex flex-col gap-[71px] sm:flex-col md:flex-col sm:gap-[42px] md:gap-[42px] xsm:flex-col xsm:gap-[59px] ml-[64px] mr-[71px] sm:ml-[50px] sm:mr-[48px] md:mr-[48px] md:ml-[50px] xsm:mr-[34px] xsm:ml-[30px]'>
          <div className='flex flex-col mt-[80px] sm:mt-[55px] md:mt-[55px] xsm:mt-[37px] gap-[16px] xsm:flex-col-reverse xsm:gap-[27px]'>
            <div className='flex flex-col gap-[11px]'>
              <h1 className='text-[40px] font-[600] font-rubik leading-[47.4px] tracking-[-0.02em] xsm:text-[32px] xsm:leading-[37.92px]'>Lorem ipsum dolor sit</h1>
              <div className='flex items-center'>
                <div className='flex w-fit'>
                  <img className='w-[35px]' src={user} alt="" />
                </div>
                <h1 className='ml-[7px] text-[18px] font-[500] font-outfit leading-[27px]'>Jack Doe</h1>
                <div className='flex gap-[8px] ml-[30px] items-center'>
                  <p className='flex gap-[3px] items-center font-outfit font-[700] leading-[27px] text-[18px]'><img src={ratingStar} alt="" />5</p>
                  <p className='text-[16px] leading-[24px] text-TextColorSec font-outfit'>(15 reviews)</p>
                </div>
              </div>
            </div>
            <div>
              <img src={mainImage} className='w-[52.638888888888886vw] xsm:mt-10 sm:w-full md:w-full xsm:w-full' alt="" />
            </div>
          </div>
          <div className='w-full hidden md:flex sm:flex xsm:flex flex-col xsm:mt-0 sm:mt-0 md:mt-0 border rounded-[12px] border-primaryLighten2 flex-1 bg-primaryLighten px-[37px] py-[30px] sm:py-[30px] md:py-[30px] xsm:px-[16px] xsm:py-[24px]'>
            <h1 className='text-[32px] font-[600] font-outfit xsm:text-[24px] leading-[40p.32x] xsm:leading-[30.24px] mb-[32px] xsm:mb-[50px]'>$1000 <span className='text-[18px] font-[300] leading-[27px] text-TextColorSec'>/ class</span></h1>
            <p className='leading-[17.64px] font-outfit text-[14px] text-primary2 font-[600] uppercase'>Upcoming group lessons</p>
            <div className='mt-[10px] xsm:mt-[8px]  flex flex-col divide-y-2 divide-primaryLighten2'>
              <div className='pb-[28px]'>
                <div className='flex justify-between'>
                  <h1 className='text-[24px] xsm:text-[20px] font-[600] leading-[30.24px] font-outfit xsm:leading-[25px]'>Thu, 27 Apr</h1>
                  <p className='leading-[22px] xsm:text-[18px] font-[600] font-outfit'>14:30 - 15:30</p>
                </div>
                <div className='flex mt-[14px] justify-between'>
                  <div className='flex w-fit'>
                    {arr.map((n, index) => {
                      const adjustedNumber = arr.length - index;
                      const leftPosition = `-${index * 18}px`;
                      return (
                        <img
                          key={index}
                          style={index !== 0 ? { left: leftPosition, zIndex: adjustedNumber } : { zIndex: adjustedNumber }}
                          className='relative w-[35px]'
                          src={user}
                          alt=""
                        />
                      );
                    })}
                  </div>
                  <button className='w-[73px] h-[39px] rounded-[4px] bg-primary2 text-[white] font-outfit font-medium text-[18px] leading-[22.68px]'>Book</button>
                </div>
              </div>
              <div className='py-[28px]'>
                <div className='flex justify-between'>
                  <h1 className='text-[24px] xsm:text-[20px] font-[600] leading-[30.24px] font-outfit xsm:leading-[25px]'>Thu, 27 Apr</h1>
                  <p className='leading-[22px] xsm:text-[18px] font-[600] font-outfit'>14:30 - 15:30</p>
                </div>
                <div className='flex mt-[14px] justify-between'>
                  <div className='flex w-fit'>
                    {arr.map((n, index) => {
                      const adjustedNumber = arr.length - index;
                      const leftPosition = `-${index * 18}px`;
                      return (
                        <img
                          key={index}
                          style={index !== 0 ? { left: leftPosition, zIndex: adjustedNumber } : { zIndex: adjustedNumber }}
                          className='relative w-[35px]'
                          src={user}
                          alt=""
                        />
                      );
                    })}
                  </div>
                  <button className='w-[73px] h-[39px] rounded-[4px] bg-primary2 text-[white] font-outfit font-medium text-[18px] leading-[22.68px]'>Book</button>
                </div>
              </div>
              <div className='pt-[28px]'>
                <div className='flex justify-between'>
                  <h1 className='text-[24px] xsm:text-[20px] font-[600] leading-[30.24px] font-outfit xsm:leading-[25px]'>Thu, 27 Apr</h1>
                  <p className='leading-[22px] xsm:text-[18px] font-[600] font-outfit'>14:30 - 15:30</p>
                </div>
                <div className='flex mt-[14px] justify-between'>
                  <div className='flex w-fit'>
                    {arr.map((n, index) => {
                      const adjustedNumber = arr.length - index;
                      const leftPosition = `-${index * 18}px`;
                      return (
                        <img
                          key={index}
                          style={index !== 0 ? { left: leftPosition, zIndex: adjustedNumber } : { zIndex: adjustedNumber }}
                          className='relative w-[35px]'
                          src={user}
                          alt=""
                        />
                      );
                    })}
                  </div>
                  <button className='w-[73px] h-[39px] rounded-[4px] bg-primary2 text-[white] font-outfit font-medium text-[18px] leading-[22.68px]'>Book</button>
                </div>
              </div>
            </div>
            <button className='w-full border-[2px] h-[39px] font-outfit border-primary rounded-[4px] mt-[32px] xsm:mt-[50px] text-[18px] font-[500] leading-[22.68px] text-primary'>Send A Message</button>
          </div>
        </div>
        <div className='sm:mt-[130px] lg:max-w-[52.638888888888886vw] xl:max-w-[52.638888888888886vw] 2xl:max-w-[52.638888888888886vw] md:mt-[130px] xsm:mt-[130px] mt-[43px] ml-[64px] mr-[71px] sm:ml-[50px] sm:mr-[48px] md:mr-[48px] md:ml-[50px] xsm:mr-[34px] xsm:ml-[30px]'>
          <div className='flex gap-[18px]  flex-wrap'>
            <a onClick={(e) => handleScroll(e, "details")} href="#details">
              <button className='font-outfit rounded-[8px] text-[white] px-[21px] py-[8px] bg-primary2 leading-[22.68px] font-[400]'>
                Details
              </button>
            </a>
            <a onClick={(e) => handleScroll(e, "about")} href="#about">
              <button className='font-outfit rounded-[8px] px-[21px] py-[8px] border border-primaryLighten2 leading-[22.68px] font-[400]'>
                About Tutor
              </button>
            </a>
            <a onClick={(e) => handleScroll(e, "reviews")} href="#reviews">
              <button className='font-outfit rounded-[8px] px-[21px] py-[8px] border border-primaryLighten2 leading-[22.68px] font-[400]'>
                Reviews (100)
              </button>
            </a>
          </div>
          <div className='mt-[47px] xsm:mt-[41px] flex flex-col gap-[13px]'>
            <div className='flex justify-between p-[13px] rounded-[12px] border border-primaryLighten2'>
              <div className='flex flex-1 gap-[8px]'>
                <img src={specialization} alt="" />
                <h1 className='text-[18px] font-outfit leading-[22.68px] font-[500]'>Specialization</h1>
              </div>
              <h1 className='text-[18px] font-outfit leading-[22.68px] font-[400]'>Baking</h1>
            </div>
            <div className='flex justify-between p-[13px] rounded-[12px] border border-primaryLighten2'>
              <div className='flex flex-1 gap-[8px]'>
                <img src={groupsize} alt="" />
                <h1 className='text-[18px] font-outfit leading-[22.68px] font-[500]'>Group size</h1>
              </div>
              <h1 className='text-[18px] font-outfit leading-[22.68px] font-[400]'>2-5</h1>
            </div>
            <div className='flex justify-between p-[13px] rounded-[12px] border border-primaryLighten2'>
              <div className='flex flex-1 gap-[8px]'>
                <img src={level} alt="" />
                <h1 className='text-[18px] font-outfit leading-[22.68px] font-[500]'>Level</h1>
              </div>
              <h1 className='text-[18px] font-outfit leading-[22.68px] font-[400]'>Intermediate</h1>
            </div>
          </div>
          <div id='details' className='px-[32px] py-[24px] mt-[47px] xsm:mt-[75px] xsm:px-[16px] border bg-backSec border-primaryLighten2 rounded-[16px]'>
            <h1 className='font-rubik text-[24px] leading-[28.44px] font-[600] tracking-[-0.02em] mb-[12px]'>Details</h1>
            <p className='font-outfit text-[16px] text-TextColor leading-[24.8px] xsm:leading-[25.76px]'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum. Sit netus tincidunt massa fames id iaculis molestie at. Egestas duis et id tincidunt eros elit urna. Sed nunc nec fringilla gravida faucibus consequat feugiat fermentum tempus. Eleifend tempus mauris ac metus quis tellus feugiat. At libero pellentesque enim senectus odio suscipit augue eu pulvinar. Nisl integer quis tellus id hendrerit.</p>
          </div>
          <div id='about' className='px-[32px] xsm:px-[16px] mt-[59px] sm:mt-[56px] md:mt-[56px] xsm:mt-[112px]'>
            <h1 className='font-rubik text-[24px] leading-[28.44px] font-[600] tracking-[-0.02em] mb-[16px]'>About Tutor</h1>
            <div className='flex items-center mb-[16px]'>
              <img src={user} className='h-[48px] w-[48px]' alt="" />
              <h1 className='ml-[7px] text-[18px] font-[500] font-kanit leading-[26.61px]'>Jack Doe</h1>
              <div className='flex gap-[8px] ml-[28px] items-center'>
                <p className='flex gap-[3px] items-center font-outfit font-[700] leading-[27px] text-[18px]'><img src={ratingStar} alt="" />5</p>
                <p className='text-[16px] leading-[24px] text-TextColorSec font-outfit'>(15 reviews)</p>
              </div>
            </div>
            <p className='font-outfit text-[16px] text-TextColor leading-[24.8px] xsm:leading-[27.92px]'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum. Sit netus tincidunt massa fames id iaculis molestie at. Egestas duis et id tincidunt eros elit urna. Sed nunc nec fringilla gravida faucibus consequat feugiat fermentum tempus. Eleifend tempus mauris ac metus quis tellus feugiat. At libero pellentesque enim senectus odio suscipit augue eu pulvinar. Nisl integer quis tellus id hendrerit.</p>
          </div>
          <div id='reviews' className='px-[32px] xsm:px-[16px] mt-[80px] sm:mt-[82px] md:mt-[82px] xsm:mt-[58px] flex flex-col gap-[40px] sm:gap-[36px] md:gap-[36px] xsm:gap-[17px]'>
            <h1 className='font-rubik p-[10px] text-[24px] leading-[28.44px] font-[600] tracking-[-0.02em] mb-[16px]'>Reviews</h1>
            <div className='flex xsm:flex-col xsm:divide-x-0 px-[23px] md:px-0 sm:px-0 xsm:px-0 divide-x-2 divide-primaryLighten2'>
              <div className='flex flex-col justify-center items-start pr-[74px] xsm:pr-0'>
                <div className='flex gap-[3px] items-center'>
                  <h1 className='text-[49px] font-rubik font-[600] leading-[58.07px]'>4.5</h1>
                  <img src={ratingStar} alt="" className='h-[37px] w-[39px]' />
                </div>
                <p className='text-primary2 font-outfit font-[500] leading-[20.16px]'>200 reviews</p>
              </div>
              <div className='pl-[74px] flex flex-1 flex-col gap-[8px] xsm:mt-[22px] xsm:pl-0'>
                <div className='flex gap-[10px] items-center'>
                  <h1 className='text-[16px] leading-[23.92px] font-[400] font-kanit'>5</h1>
                  <div className='p-[3px] rounded-[26px] bg-primary2 w-full'></div>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <h1 className='text-[16px] leading-[23.92px] font-[400] font-kanit'>4</h1>
                  <div className='p-[3px] rounded-[26px] bg-primaryLighten2 w-full'></div>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <h1 className='text-[16px] leading-[23.92px] font-[400] font-kanit'>3</h1>
                  <div className='p-[3px] rounded-[26px] bg-primaryLighten2 w-full'></div>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <h1 className='text-[16px] leading-[23.92px] font-[400] font-kanit'>2</h1>
                  <div className='p-[3px] rounded-[26px] bg-primaryLighten2 w-full'></div>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <h1 className='text-[16px] leading-[23.92px] font-[400] font-kanit'>1</h1>
                  <div className='p-[3px] rounded-[26px] bg-primaryLighten2 w-full'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='px-[32px] xsm:px-[16px] mt-[67.5px] flex flex-col gap-[62px] sm:gap-[37px] md:gap-[37px] xsm:gap-[58px] sm:mt-[72.5px] md:mt-[72.5px] xsm:mt-[62px]'>
            {[1, 2, 3].map((val, index) => {
              return (
                <div key={index} className='flex xsm:flex-col xsm:gap-[12px] gap-[19px] w-full items-start'>
                  <img src={user} className='h-[86px] w-[86px] xsm:w-[64px] xsm:h-[64px]' alt="" />
                  <div className='flex flex-col justify-between w-full items-center'>
                    <div className='flex justify-between w-full items-center'>
                      <div className='flex flex-col'>
                        <h1 className='text-[14px] font-outfit text-TextColorSec'>Apr 21, 2023</h1>
                        <p className='text-[22px] font-rubik font-[600] leading-[26.07px] mt-[-5px]'>Jenny Doe</p>
                      </div>
                      <div className='flex gap-[5px] items-center'>
                        <h1 className='text-[32px] font-kanit font-[500] leading-[47.84px]'>5</h1>
                        <img src={ratingStar} className='w-[22px] h-[22px]' alt="" />
                      </div>
                    </div>
                    <div className='w-full mt-[13px] text-[16px] leading-[24.8px] font-outfit'>
                      Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum.
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='px-[32px] xsm:px-[16px] mt-[77px] flex justify-center xsm:mt-[57px] sm:mt-[52px] md:mt-[52px]'>
            <button className='w-[225px] hover:bg-[white] hover:text-primary2 border-2 border-primary2 transition-all duration-200 h-[35px] bg-primary2 text-[white] leading-[22.68px] font-outfit font-[500] rounded-[54px]'>
              Read more
            </button>
          </div>
        </div>
        <div className='blurEndGroup ml-[62px] md:pl-[23px] md:m-auto sm:m-auto xsm:m-auto sm:pl-[23px] xsm:pl-[23px] mt-[92px] md:w-[88.263vw] sm:w-[88.263vw] xsm:w-[83.59vw] md:max-w-full sm:max-w-full xsm:max-w-full max-w-[51.181vw] min-w-[51.181vw] sm:mt-[75px] md:mt-[75px] xsm:mt-[57px]'>
          <h1 className='font-rubik p-[10px] text-[24px] leading-[28.44px] font-[600] tracking-[-0.02em] mb-[16px]'>Other groups</h1>
          <div ref={scrollRef} className='flex pb-[49px] gap-[20px] xsm:pl-[10px] overflow-scroll max-w-[51.181vw] min-w-[51.181vw] hideScrollbar md:w-[88.263vw] sm:w-[88.263vw] xsm:w-[83.59vw] md:max-w-full sm:max-w-full xsm:max-w-full'>
            {[1, 2, 3,4,5].map((val, index) => {
              return (
                <div key={index} className='relative max-w-[358px] min-w-[358px] rounded-[12px] border border-[rgba(255,219,184,1)] xsm:max-w-[286px] xsm:min-w-[286px]'>
                  <img src={card} className='rounded-[12px] h-[208px] w-full' alt="" />
                  <div className='mt-[14px] px-[16px] divide-y-2 divide-primaryLighten2'>
                    <div className='flex flex-col  pb-[16px]'>
                      <h1 className='text-[28px] font-rubik font-[600] leading-[33.18px] tracking-[-0.02em]'>Group lesson name</h1>
                      <div className='flex items-center mt-[16px]'>
                        <h1 className='text-[20px] font-[500] font-outfit leading-[25px]'>Jack Doe</h1>
                        <div className='flex gap-[7px] ml-[21px] items-center'>
                          <p className='flex gap-[3px] items-center font-outfit font-[700] leading-[27px] text-[18px]'>5</p>
                          <img src={star2} className='' alt="" />
                        </div>
                      </div>
                      <p className='ellipsisShow2 font-outfit text-[16px] leading-[20.16px] mt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus suscipit voluptatum maxime eum id dolor corporis labore blanditiis nesciunt sint ipsum, tenetur, incidunt iste nulla culpa quod soluta minus. Reprehenderit, distinctio minus deserunt unde cumque ratione eligendi maiores aliquid pariatur quidem, at, exercitationem aperiam recusandae harum quasi animi fuga quaerat?</p>
                    </div>
                    <div className='flex justify-between py-[16px]'>
                      <img src={user} className='h-[35px] w-[35px]' alt="" />
                      <p className='text-primary2 font-rubik text-[24px] leading-[28.44px] font-[700]'>$19</p>
                    </div>
                  </div>
                  <div className='absolute flex justify-center items-center text-[white] font-outfit text-[16px] font-[500] top-[15px] left-[15.87px] rounded-[5px] h-[32px] w-[117px] bg-primary2'>For Beginner</div>
                </div>
              )
            })}
          </div>
          <div className='w-[51.181vw] max-w-[51.181vw] min-w-[51.181vw] md:w-[88.263vw] sm:w-[88.263vw] xsm:w-[83.59vw] md:max-w-full sm:max-w-full xsm:max-w-full flex justify-end gap-[12px] xsm:justify-end items-center'>
            <img src={left} onClick={handleScrollLeft} className='hover:cursor-pointer' alt="" />
            <img src={right} onClick={handleScrollRight} className='hover:cursor-pointer' alt="" />
          </div>
        </div>
      </div>
      <div className='mt-[80px] sticky top-[140px] md:hidden sm:hidden xsm:hidden max-w-[33.125vw] h-fit xsm:mt-0 sm:mt-0 md:mt-0 border rounded-[12px] border-primaryLighten2 flex-1 bg-primaryLighten px-[37px] py-[30px] sm:py-[30px] md:py-[30px] xsm:px-[16px] xsm:py-[24px]'>
        <h1 className='text-[32px] font-[600] font-outfit xsm:text-[24px] leading-[40p.32x] xsm:leading-[30.24px] mb-[32px] xsm:mb-[50px]'>$1000 <span className='text-[18px] font-[300] leading-[27px] text-TextColorSec'>/ class</span></h1>
        <p className='leading-[17.64px] font-outfit text-[14px] text-primary2 font-[600] uppercase'>Upcoming group lessons</p>
        <div className='mt-[10px] xsm:mt-[8px]  flex flex-col divide-y-2 divide-primaryLighten2'>
          <div className='pb-[28px]'>
            <div className='flex justify-between'>
              <h1 className='text-[24px] xsm:text-[20px] font-[600] leading-[30.24px] font-outfit xsm:leading-[25px]'>Thu, 27 Apr</h1>
              <p className='leading-[22px] xsm:text-[18px] font-[600] font-outfit'>14:30 - 15:30</p>
            </div>
            <div className='flex mt-[14px] justify-between'>
              <div className='flex w-fit'>
                {arr.map((n, index) => {
                  const adjustedNumber = arr.length - index;
                  const leftPosition = `-${index * 18}px`;
                  return (
                    <img
                      key={index}
                      style={index !== 0 ? { left: leftPosition, zIndex: adjustedNumber } : { zIndex: adjustedNumber }}
                      className='relative w-[35px]'
                      src={user}
                      alt=""
                    />
                  );
                })}
              </div>
              <button className='w-[73px] h-[39px] rounded-[4px] hover:bg-[rgba(0,0,0,0)] border-2 border-primary2 hover:text-primary2 transition-all duration-200 bg-primary2 text-[white] font-outfit font-medium text-[18px] leading-[22.68px]'>Book</button>
            </div>
          </div>
          <div className='py-[28px]'>
            <div className='flex justify-between'>
              <h1 className='text-[24px] xsm:text-[20px] font-[600] leading-[30.24px] font-outfit xsm:leading-[25px]'>Thu, 27 Apr</h1>
              <p className='leading-[22px] xsm:text-[18px] font-[600] font-outfit'>14:30 - 15:30</p>
            </div>
            <div className='flex mt-[14px] justify-between'>
              <div className='flex w-fit'>
                {arr.map((n, index) => {
                  const adjustedNumber = arr.length - index;
                  const leftPosition = `-${index * 18}px`;
                  return (
                    <img
                      key={index}
                      style={index !== 0 ? { left: leftPosition, zIndex: adjustedNumber } : { zIndex: adjustedNumber }}
                      className='relative w-[35px]'
                      src={user}
                      alt=""
                    />
                  );
                })}
              </div>
              <button className='w-[73px] h-[39px] rounded-[4px] hover:bg-[rgba(0,0,0,0)] border-2 border-primary2 hover:text-primary2 transition-all duration-200 bg-primary2 text-[white] font-outfit font-medium text-[18px] leading-[22.68px]'>Book</button>
            </div>
          </div>
          <div className='pt-[28px]'>
            <div className='flex justify-between'>
              <h1 className='text-[24px] xsm:text-[20px] font-[600] leading-[30.24px] font-outfit xsm:leading-[25px]'>Thu, 27 Apr</h1>
              <p className='leading-[22px] xsm:text-[18px] font-[600] font-outfit'>14:30 - 15:30</p>
            </div>
            <div className='flex mt-[14px] justify-between'>
              <div className='flex w-fit'>
                {arr.map((n, index) => {
                  const adjustedNumber = arr.length - index;
                  const leftPosition = `-${index * 18}px`;
                  return (
                    <img
                      key={index}
                      style={index !== 0 ? { left: leftPosition, zIndex: adjustedNumber } : { zIndex: adjustedNumber }}
                      className='relative w-[35px]'
                      src={user}
                      alt=""
                    />
                  );
                })}
              </div>
              <button className='w-[73px] h-[39px] rounded-[4px] hover:bg-[rgba(0,0,0,0)] border-2 border-primary2 hover:text-primary2 transition-all duration-200 bg-primary2 text-[white] font-outfit font-medium text-[18px] leading-[22.68px]'>Book</button>
            </div>
          </div>
        </div>
        <button className='w-full border-[2px] h-[39px] font-outfit border-primary2 rounded-[4px] mt-[32px] xsm:mt-[50px] text-[18px] font-[500] leading-[22.68px] text-primary2 hover:bg-primary2 hover:text-primaryLighten transition-all duration-200'>Send A Message</button>
      </div>
    </div>
  )
}
export default GroupPage
import React, { useEffect, useRef } from 'react';

export default function Notes() {
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='hideScrollbar pr-[64px] flex flex-col gap-[21px] pl-[20px] py-[46px] overflow-scroll max-h-[calc(100vh-114px)] overflow-x-hidden'>
      <div className='w-full bg-[rgba(255,253,244,1)] p-[20px] rounded-[6px]'>
        <div className='flex items-center justify-between'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[36px] mb-[6px]'>Note Title</h4>
          <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3.00006C17.2626 2.73741 17.5744 2.52907 17.9176 2.38693C18.2608 2.24479 18.6286 2.17163 19 2.17163C19.3714 2.17163 19.7392 2.24479 20.0824 2.38693C20.4256 2.52907 20.7374 2.73741 21 3.00006C21.2626 3.2627 21.471 3.57451 21.6131 3.91767C21.7553 4.26083 21.8284 4.62862 21.8284 5.00006C21.8284 5.37149 21.7553 5.73929 21.6131 6.08245C21.471 6.42561 21.2626 6.73741 21 7.00006L7.5 20.5001L2 22.0001L3.5 16.5001L17 3.00006Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Lorem ipsum dolor sit amet consectetur. Facilisis consectetur pellentesque eget proin fermentum nibh sit. Odio nunc interdum vitae amet tincidunt. Laoreet ipsum ornare eros dui vitae a volutpat.</p>
      </div>

      <div className='w-full bg-[rgba(255,253,244,1)] p-[20px] rounded-[6px]'>
        <div className='flex items-center justify-between'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[36px] mb-[6px]'>Note Title</h4>
          <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3.00006C17.2626 2.73741 17.5744 2.52907 17.9176 2.38693C18.2608 2.24479 18.6286 2.17163 19 2.17163C19.3714 2.17163 19.7392 2.24479 20.0824 2.38693C20.4256 2.52907 20.7374 2.73741 21 3.00006C21.2626 3.2627 21.471 3.57451 21.6131 3.91767C21.7553 4.26083 21.8284 4.62862 21.8284 5.00006C21.8284 5.37149 21.7553 5.73929 21.6131 6.08245C21.471 6.42561 21.2626 6.73741 21 7.00006L7.5 20.5001L2 22.0001L3.5 16.5001L17 3.00006Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Lorem ipsum dolor sit amet consectetur. Facilisis consectetur pellentesque eget proin fermentum nibh sit. Odio nunc interdum vitae amet tincidunt. Laoreet ipsum ornare eros dui vitae a volutpat.</p>
      </div>
      <div className='w-full bg-[rgba(255,253,244,1)] p-[20px] rounded-[6px]'>
        <div className='flex items-center justify-between'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[36px] mb-[6px]'>Note Title</h4>
          <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3.00006C17.2626 2.73741 17.5744 2.52907 17.9176 2.38693C18.2608 2.24479 18.6286 2.17163 19 2.17163C19.3714 2.17163 19.7392 2.24479 20.0824 2.38693C20.4256 2.52907 20.7374 2.73741 21 3.00006C21.2626 3.2627 21.471 3.57451 21.6131 3.91767C21.7553 4.26083 21.8284 4.62862 21.8284 5.00006C21.8284 5.37149 21.7553 5.73929 21.6131 6.08245C21.471 6.42561 21.2626 6.73741 21 7.00006L7.5 20.5001L2 22.0001L3.5 16.5001L17 3.00006Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Lorem ipsum dolor sit amet consectetur. Facilisis consectetur pellentesque eget proin fermentum nibh sit. Odio nunc interdum vitae amet tincidunt. Laoreet ipsum ornare eros dui vitae a volutpat.</p>
      </div>
      <div className='w-full bg-[rgba(255,253,244,1)] p-[20px] rounded-[6px]'>
        <div className='flex items-center justify-between'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[36px] mb-[6px]'>Note Title</h4>
          <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3.00006C17.2626 2.73741 17.5744 2.52907 17.9176 2.38693C18.2608 2.24479 18.6286 2.17163 19 2.17163C19.3714 2.17163 19.7392 2.24479 20.0824 2.38693C20.4256 2.52907 20.7374 2.73741 21 3.00006C21.2626 3.2627 21.471 3.57451 21.6131 3.91767C21.7553 4.26083 21.8284 4.62862 21.8284 5.00006C21.8284 5.37149 21.7553 5.73929 21.6131 6.08245C21.471 6.42561 21.2626 6.73741 21 7.00006L7.5 20.5001L2 22.0001L3.5 16.5001L17 3.00006Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Lorem ipsum dolor sit amet consectetur. Facilisis consectetur pellentesque eget proin fermentum nibh sit. Odio nunc interdum vitae amet tincidunt. Laoreet ipsum ornare eros dui vitae a volutpat.</p>
      </div>

      <div className='w-full bg-[rgba(255,253,244,1)] p-[20px] rounded-[6px] divide-y divide-[rgba(255,219,184,1)]'>
        <div className='flex items-center justify-between'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[36px] mb-[6px] text-[rgba(160,160,160,1)]'>Title</h4>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H5H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 11V17" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 11V17" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <input type="text" placeholder='Note text' className='w-full outline-none bg-[rgba(0,0,0,0.0)] pt-[12px]' />
      </div>

      <div ref={targetRef} className='cursor-pointer relative flex justify-center items-center h-fit '>
        <div className='w-[300px] border-[1.5px] border-primary2 z-10 absolute top-[50%] translate-y-[-50%]'></div>
        <p className='flex justify-center items-center relative z-20 w-[96px] h-[47px] bg-[white] text-primary2 font-outfit font-normal text-[18px] leading-[27px]'>Add Note</p>
      </div>

    </div>
  )
}

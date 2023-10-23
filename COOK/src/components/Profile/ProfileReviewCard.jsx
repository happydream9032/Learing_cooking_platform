import React from 'react'
import ReviewProfilePic from "../../assets/Profile/ReviewProfilePic.png"

export default function ProfileReviewCard() {
  return (
    <div className='flex items-start gap-[19px] xsm:flex-col'>
      <img className='w-[86px]' src={ReviewProfilePic} alt="" />
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-outfit font-normal text-[14px] leading-[17.64px]'>Apr 21, 2023</p>
            <h5 className='font-rubik font-semibold text-[22px] leading-[26.07px]'>Jenny Doe</h5>
          </div>
          <div className='flex items-center gap-[4px] '>
            <p className='font-kanit font-medium text-[32px] leading-[47.84px]'>5</p>
            <svg width="22" height="22" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6037 0.561416C17.9709 -0.180611 19.0291 -0.180611 19.3963 0.561417L24.2928 10.4574C24.4385 10.7519 24.7196 10.956 25.0448 11.0034L35.9922 12.5997C36.8129 12.7194 37.1396 13.7285 36.5448 14.3064L28.628 21.9989C28.3914 22.2288 28.2834 22.5605 28.3393 22.8856L30.2079 33.7542C30.3483 34.5709 29.4915 35.1942 28.7578 34.8092L18.9646 29.6714C18.6737 29.5188 18.3263 29.5188 18.0354 29.6714L8.24224 34.8092C7.50847 35.1942 6.65172 34.5709 6.79212 33.7542L8.66071 22.8856C8.71659 22.5605 8.60859 22.2288 8.37204 21.9989L0.455202 14.3064C-0.139597 13.7285 0.187125 12.7194 1.00779 12.5997L11.9552 11.0034C12.2804 10.956 12.5615 10.7519 12.7072 10.4574L17.6037 0.561416Z" fill="#D3CD39" />
            </svg>
          </div>
        </div>
        <p className='font-outfit font-normal text-[16px] leading-[24.8px] text-TextColorSec mt-[13px]'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum.</p>
      </div>
    </div>
  )
}

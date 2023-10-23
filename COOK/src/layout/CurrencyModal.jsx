import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react'

export default function CurrencyModal({ state, closeModal, mobileNav = false }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideCurrency = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClickOutsideCurrency);

    return () => {
      document.removeEventListener('click', handleClickOutsideCurrency);
    };
  }, [closeModal]);

  return (
    <div ref={modalRef} style={state ? { maxHeight: "272px", border: "1px" } : { maxHeight: "0px", border: "0px" }} onClick={(e) => e.stopPropagation()} className={mobileNav ? 'landingExploreAndLearnOrangePerma transition-all duration-300 left-0 overflow-hidden absolute top-[25px] rounded-[6px] w-[255px] border border-[rgba(255,219,184,1)] bg-[white] z-[1000]': 'landingExploreAndLearnOrangePerma transition-all duration-300 right-0 overflow-hidden absolute top-[25px] rounded-[6px] w-[255px] border border-[rgba(255,219,184,1)] bg-[white]'}>
      <div className='m-[16px]'>
        <h5 className='font-outfit font-bold text-[18px] leading-[22.68px] text-TextColor'>Select a currency</h5>
        <div className='mt-[17px] flex flex-col gap-[5px]'>
          <div className='flex gap-[10px] items-center h-[36px] bg-[rgba(255,219,184,1)] px-[12px] '>
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>USD</p>
          </div>
          <div className='flex gap-[10px] items-center h-[36px] px-[12px]'>
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>EUR</p>
          </div>
          <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>UAH</p>
          </div>
          <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>GBP</p>
          </div>
          <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>VHF</p>
          </div>
        </div>
      </div>
    </div>
  )
}

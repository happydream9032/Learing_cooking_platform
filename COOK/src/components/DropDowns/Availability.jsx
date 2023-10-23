import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Availability() {
  const [currentMonth,setCurrentMonth]=useState("april")
  const [value, onChange] = useState(new Date());

  const onChangeHandler = (e) => {
    onChange(e);
  }

  return (
    <div className='absolute z-40 w-full p-[16px] flex flex-col gap-[18px] bg-[white] border-2 border-t-[0px] border-[rgba(255,219,184,1)] rounded-bl-[8px] rounded-br-[8px]'>
      <div className='flex gap-[10px] items-center justify-between'>
        <p onClick={()=> setCurrentMonth('april')} style={currentMonth === "april" ?{background:"#D27722",color:"white"}:{}} className='cursor-pointer px-[12px] py-[4px] rounded-[76px] font-outfit text-[16px] leading-[20.16px] text-primary2'>April</p>
        <p onClick={()=> setCurrentMonth('may')} style={currentMonth === "may" ?{background:"#D27722",color:"white"}:{}} className='cursor-pointer px-[12px] py-[4px] rounded-[76px] font-outfit text-[16px] leading-[20.16px] text-primary2'>May</p>
        <p onClick={()=> setCurrentMonth('june')} style={currentMonth === "june" ?{background:"#D27722",color:"white"}:{}} className='cursor-pointer px-[12px] py-[4px] rounded-[76px] font-outfit text-[16px] leading-[20.16px] text-primary2'>June</p>
      </div>
      <Calendar selectRange onChange={(e) => onChangeHandler(e)} value={value} className="border-0 outline-none" />
    </div>
  )
}

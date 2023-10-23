import React, { useCallback, useEffect, useRef, useState } from "react";

export default function PricePerLesson({ min = 20, max = 100 }) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    value => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className='absolute z-40 w-full p-[16px] flex flex-col gap-[22px] pb-[32px] bg-[white] border-2 border-t-[0px] border-[rgba(255,219,184,1)] rounded-bl-[8px] rounded-br-[8px]'>
      <div className="flex gap-[12px] items-center">
        <p className="w-[5.59vw] p-[8px] border-b border-[rgba(255,219,184,1)] font-outfit font-normal text-[18px] leading-[22.68px]">${minVal}</p>
        <p className="font-outfit font-normal text-[18px] leading-[22.68px]">-</p>
        <p className="w-[5.59vw] p-[8px] border-b border-[rgba(255,219,184,1)] font-outfit font-normal text-[18px] leading-[22.68px]">${maxVal}</p>

      </div>
      <div>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={event => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={event => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />

        <div className="!w-full slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>
    </div>
  );
};

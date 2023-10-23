import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
  // Generate array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex items-center justify-center space-x-2 mt-[110px]">
      <button className="w-[40px] h-[40px] px-2 py-1 bg-gray-200 rounded-md font-outfit font-medium text-[16px] leading-[20.16px]" disabled={currentPage === 1}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 6L9 12L15 18" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {pageNumbers.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            style={pageNumber === currentPage ? { background: "#E08836", color: "white" } : { background: "#E0883600" }}
            className={'w-[40px] h-[40px] rounded-full px-2 py-1 font-outfit font-medium text-[16px] leading-[20.16px]'}>
            {pageNumber}
          </button>
        )
      })}

      <button className="w-[40px] h-[40px] px-2 py-1 bg-gray-200 rounded-md font-outfit font-medium text-[16px] leading-[20.16px]" disabled={currentPage === totalPages}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
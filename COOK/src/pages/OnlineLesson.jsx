import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import VideoImage from '../assets/OnlineLesson/VideoImage.png';
export default function OnlineLesson() {
  const [currentTab, setCurrentTab] = useState("chat");
  const [width, setWidth] = useState('932px');
  const [widthNumber, setWidthNumber] = useState('1024');
  const resizableDivRef = useRef(null);
  const handleDivRef = useRef(null);
  const [newWidth, setNewWidth] = useState()
  
  const handleDrag = (event) => {
    setNewWidth(event.clientX || (event?.touches && event?.touches[0].clientX))
    let newWidth = event.clientX || (event?.touches && event?.touches[0].clientX) + "px";
    let newWidthNumber = event.clientX || (event?.touches && event?.touches[0].clientX);
    if (newWidth !== '0px' && newWidthNumber < windowSize.width) {
      setWidth(newWidth);
      setWidthNumber(newWidthNumber)
    } else if (newWidthNumber > windowSize.width && newWidth !== '0px') {
      setWidth(windowSize.width);
      setWidthNumber(windowSize.width)
    }
  };
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      if (newWidth > window.innerWidth) {
        setWidth(window.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
  }, [])
  const [img, setImg] = useState(document.createElement("img"))
  useEffect(() => {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  }, [])
  const handleDragStart = (event) => {
    event.dataTransfer.setDragImage(img, 0, 0);
  };
  const handleDragEnd = (event) => {
    event.target.style.opacity = '1';
  };
  return (
    <main className='min-h-screen max-h-screen w flex md:flex-col sm:flex-col xsm:flex-col'>
      <div ref={resizableDivRef} style={widthNumber < windowSize.width ? { width } : { width: "100%" }} className='h-full relative min-w-[508px] xsm:min-w-[320px]'>
        <img className='object-cover w-full h-screen' src={VideoImage} alt="" />
        <div className='absolute top-[38px] w-full px-[44px] flex justify-between items-center'>
          <svg width="54" height="54" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64.4" height="64.4" rx="32.2" fill="#D27722" />
            <path d="M35.75 20.75L40.75 20.75C41.413 20.75 42.0489 21.0134 42.5178 21.4822C42.9866 21.9511 43.25 22.587 43.25 23.25L43.25 40.75C43.25 41.413 42.9866 42.0489 42.5178 42.5178C42.0489 42.9866 41.413 43.25 40.75 43.25L35.75 43.25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27 25.75L20.75 32L27 38.25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.75 32L35.75 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="54" height="54" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.400024" width="64.4" height="64.4" rx="32.2" fill="white" />
            <g clipPath="url(#clip0_634_45488)">
              <path d="M45.4 20.625V29.1298C45.4 29.5608 45.2288 29.9741 44.9241 30.2789C44.6193 30.5836 44.206 30.7548 43.775 30.7548C43.344 30.7548 42.9307 30.5836 42.626 30.2789C42.3212 29.9741 42.15 29.5608 42.15 29.1298V24.5481L36.1003 30.5979C35.7951 30.9007 35.3824 31.0703 34.9525 31.0694C34.5226 31.0686 34.1106 30.8975 33.8066 30.5935C33.5026 30.2895 33.3314 29.8775 33.3306 29.4476C33.3298 29.0177 33.4993 28.605 33.8021 28.2998L39.852 22.25H35.2702C34.8392 22.25 34.4259 22.0788 34.1211 21.774C33.8164 21.4693 33.6452 21.056 33.6452 20.625C33.6452 20.194 33.8164 19.7807 34.1211 19.476C34.4259 19.1712 34.8392 19 35.2702 19H43.775C44.206 19 44.6193 19.1712 44.9241 19.476C45.2288 19.7807 45.4 20.194 45.4 20.625ZM19.4 43.375C19.4 43.806 19.5712 44.2193 19.876 44.524C20.1807 44.8288 20.594 45 21.025 45H29.5299C29.9608 45 30.3742 44.8288 30.6789 44.524C30.9837 44.2193 31.1549 43.806 31.1549 43.375C31.1549 42.944 30.9837 42.5307 30.6789 42.226C30.3742 41.9212 29.9608 41.75 29.5299 41.75H24.9482L30.9979 35.7002C31.3027 35.3955 31.4739 34.9822 31.4739 34.5512C31.4739 34.1202 31.3027 33.7069 30.9979 33.4021C30.6932 33.0974 30.2798 32.9262 29.8489 32.9262C29.4179 32.9262 29.0045 33.0974 28.6998 33.4021L22.65 39.4519V34.8702C22.65 34.4392 22.4788 34.0259 22.1741 33.7212C21.8693 33.4164 21.456 33.2452 21.025 33.2452C20.594 33.2452 20.1807 33.4164 19.876 33.7212C19.5712 34.0259 19.4 34.4392 19.4 34.8702V43.375Z" fill="#D27722" />
            </g>
            <defs>
              <clipPath id="clip0_634_45488">
                <rect width="26" height="26" fill="white" transform="translate(19.4 19)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className='absolute bottom-0 w-full h-[102px] bg-[rgba(37,36,34,0.5)] flex items-center justify-center gap-[25px]'>
          <svg width="54" height="54" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64.4" height="64.4" rx="32.2" fill="white" />
            <g clipPath="url(#clip0_634_45472)">
              <path d="M32.2 16.7998C31.0861 16.7998 30.0178 17.2423 29.2302 18.03C28.4425 18.8176 28 19.8859 28 20.9998V32.1998C28 33.3137 28.4425 34.382 29.2302 35.1697C30.0178 35.9573 31.0861 36.3998 32.2 36.3998C33.3139 36.3998 34.3822 35.9573 35.1698 35.1697C35.9575 34.382 36.4 33.3137 36.4 32.1998V20.9998C36.4 19.8859 35.9575 18.8176 35.1698 18.03C34.3822 17.2423 33.3139 16.7998 32.2 16.7998Z" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M42 29.3999V32.1999C42 34.799 40.9675 37.2917 39.1297 39.1295C37.2918 40.9674 34.7991 41.9999 32.2 41.9999C29.6009 41.9999 27.1082 40.9674 25.2704 39.1295C23.4325 37.2917 22.4 34.799 22.4 32.1999V29.3999" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.2 42V47.6" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.6 47.6001H37.8" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_634_45472">
                <rect width="33.6" height="33.6" fill="white" transform="translate(15.4 15.3999)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="54" height="54" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.400024" width="64.4" height="64.4" rx="32.2" fill="white" />
            <g clipPath="url(#clip0_634_45478)">
              <path d="M48 25.1997L38.2 32.1997L48 39.1997V25.1997Z" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M35.4 22.3999H20C18.4536 22.3999 17.2 23.6535 17.2 25.1999V39.1999C17.2 40.7463 18.4536 41.9999 20 41.9999H35.4C36.9463 41.9999 38.2 40.7463 38.2 39.1999V25.1999C38.2 23.6535 36.9463 22.3999 35.4 22.3999Z" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_634_45478">
                <rect width="33.6" height="33.6" fill="white" transform="translate(15.7999 15.3999)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="54" height="54" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.800049" width="64.4" height="64.4" rx="32.2" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M23.9518 42.0722H19.1197C17.1183 42.0722 15.4956 40.4497 15.4956 38.4481C15.4956 34.4964 15.4956 26.6957 15.4956 22.7437C15.4956 20.7423 17.1183 19.1196 19.1197 19.1196H45.6962C47.6979 19.1196 49.3203 20.7423 49.3203 22.7437V38.4481C49.3203 40.4497 47.6979 42.0722 45.6962 42.0722H40.864V43.0135C40.864 44.4951 39.6632 45.6962 38.1814 45.6962C35.4013 45.6962 29.4146 45.6962 26.6345 45.6962C25.153 45.6962 23.9518 44.4951 23.9518 43.0135V42.0722ZM26.3678 42.0722V43.0135C26.3678 43.1608 26.4872 43.2803 26.6345 43.2803H38.1814C38.3287 43.2803 38.4481 43.1608 38.4481 43.0135V42.0722H26.3678ZM46.9043 22.7437V38.4481C46.9043 39.1152 46.3633 39.6562 45.6962 39.6562C39.8458 39.6562 24.9704 39.6562 19.1197 39.6562C18.4526 39.6562 17.9118 39.1152 17.9118 38.4481C17.9118 34.4964 17.9118 26.6957 17.9118 22.7437C17.9118 22.0766 18.4526 21.5359 19.1197 21.5359H45.6962C46.3633 21.5359 46.9043 22.0766 46.9043 22.7437ZM31.2 29.2844L29.8454 30.6389C29.374 31.1104 28.6083 31.1104 28.1369 30.6389C27.6655 30.1675 27.6655 29.4018 28.1369 28.9304L31.5537 25.5136C32.0257 25.0419 32.7905 25.0419 33.2622 25.5136L36.679 28.9304C37.1504 29.4018 37.1504 30.1675 36.679 30.6389C36.2076 31.1104 35.4422 31.1104 34.9707 30.6389L33.6159 29.2844V34.824C33.6159 35.4908 33.0746 36.0321 32.4081 36.0321C31.7413 36.0321 31.2 35.4908 31.2 34.824V29.2844Z" fill="#D27722" />
          </svg>
        </div>
      </div>
      <div ref={handleDivRef} draggable onDragStart={handleDragStart} onDrag={handleDrag} onDragEnd={handleDragEnd} className='line md:hidden sm:hidden xsm:hidden transition-all duration-200 min-h-full bg-[#FFDBB8] w-[3px] cursor-e-resize'>
      </div>
      <div className='flex-1 flex flex-col min-h-screen xsm:hidden'>
        <div className='pl-[1.389vw] h-[114px] w-full flex items-center justify-between pr-[3.055vw] border-b border-b-[rgba(255,219,184,1)]'>
          <NavLink to={'members'} className={({ isActive }) => isActive && location.pathname === "/online-lesson/members" ? "bg-primary2 text-[white] px-[16px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]" : "ml-[0px] px-[16px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px] text-[black]"}>
            <button onClick={() => setCurrentTab('member')} style={currentTab === 'member' ? { background: '#D27722', color: '#fff' } : {}} className='h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]'>
              <svg className={location.pathname === "/online-lesson/members" ? "stroke-[white]" : "stroke-[black]"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21.5V19.5C17 18.4391 16.5786 17.4217 15.8284 16.6716C15.0783 15.9214 14.0609 15.5 13 15.5H5C3.93913 15.5 2.92172 15.9214 2.17157 16.6716C1.42143 17.4217 1 18.4391 1 19.5V21.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 11.5C11.2091 11.5 13 9.70914 13 7.5C13 5.29086 11.2091 3.5 9 3.5C6.79086 3.5 5 5.29086 5 7.5C5 9.70914 6.79086 11.5 9 11.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 21.4999V19.4999C22.9993 18.6136 22.7044 17.7527 22.1614 17.0522C21.6184 16.3517 20.8581 15.8515 20 15.6299" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.62988C16.8604 3.85018 17.623 4.35058 18.1676 5.05219C18.7122 5.7538 19.0078 6.61671 19.0078 7.50488C19.0078 8.39305 18.7122 9.25596 18.1676 9.95757C17.623 10.6592 16.8604 11.1596 16 11.3799" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className='font-outfit font-medium text-[20px] leading-[30px]'>Member</p>
            </button>
          </NavLink>
          <div className='flex items-center gap-[16px]'>
            <NavLink to={'notes'} className={({ isActive }) => isActive && location.pathname === "/online-lesson/notes" ? "bg-primary2 text-[white] w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]" : "w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px] text-[black]"}>
              <button onClick={() => setCurrentTab('notes')} className='w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]'>
                <svg className={location.pathname === "/online-lesson/notes" ? "stroke-[white]" : "stroke-[black]"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4.5H4C3.46957 4.5 2.96086 4.71071 2.58579 5.08579C2.21071 5.46086 2 5.96957 2 6.5V20.5C2 21.0304 2.21071 21.5391 2.58579 21.9142C2.96086 22.2893 3.46957 22.5 4 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 2.99998C18.8978 2.60216 19.4374 2.37866 20 2.37866C20.5626 2.37866 21.1022 2.60216 21.5 2.99998C21.8978 3.39781 22.1213 3.93737 22.1213 4.49998C22.1213 5.06259 21.8978 5.60216 21.5 5.99998L12 15.5L8 16.5L9 12.5L18.5 2.99998Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='font-outfit font-medium text-[20px] leading-[30px]'>Notes</p>
              </button>
            </NavLink>
            <NavLink to={''} className={({ isActive }) => isActive && location.pathname === "/online-lesson" ? "bg-primary2 text-[white] w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]" : "w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px] text-[black]"}>
              <button onClick={() => setCurrentTab('chat')} className='w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]'>
                <svg className={location.pathname === "/online-lesson" ? "stroke-[white]" : "stroke-[black]"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21.0034 13.3199 20.6951 14.6219 20.1 15.8C19.3944 17.2118 18.3098 18.3992 16.9674 19.2293C15.6251 20.0594 14.0782 20.4994 12.5 20.5C11.1801 20.5035 9.87812 20.1951 8.7 19.6L3 21.5L4.9 15.8C4.30493 14.6219 3.99656 13.3199 4 12C4.00061 10.4218 4.44061 8.87488 5.27072 7.53258C6.10083 6.19028 7.28825 5.1056 8.7 4.40003C9.87812 3.80496 11.1801 3.49659 12.5 3.50003H13C15.0843 3.61502 17.053 4.49479 18.5291 5.97089C20.0052 7.44699 20.885 9.41568 21 11.5V12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='font-outfit font-medium text-[20px] leading-[30px]'>Chat</p>
              </button>
            </NavLink>
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

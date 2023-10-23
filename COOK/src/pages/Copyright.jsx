import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from "../assets/About/Hamburger.svg"
import Nav2 from "../assets/About/Nav2.svg"
import ChineseIcon from "../assets/LandingPage/ChineseIcon.svg"
import EnglishIcon from "../assets/LandingPage/EnglishIcon.svg"
import GermanIcon from "../assets/LandingPage/GermanIcon.svg"
import HebrewIcon from "../assets/LandingPage/HebrewIcon.svg"
import ItalianIcon from "../assets/LandingPage/ItalianIcon.svg"
import CookLogoLight from "../assets/Legal/CookLogoLight.svg"
import CopyrightTable from '../components/Copyright/CopyrightTable'
import LandingFooter from '../layout/LandingFooter'
import Menu from '../layout/Menu'
import LanguageModal from '../layout/LanguageModal'
import CurrencyModal from '../layout/CurrencyModal'
const Copyright = () => {
  const [currencyModal, setCurrencyModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Menu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
      <nav className='sticky top-0 h-[84px] z-10 w-[100%] px-[64px] xsm:px-[32px] flex items-center bg-primary2 justify-between'>
        <div className='flex items-center gap-[32px]'>
          {/* <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em] text-primaryLighten2'>COOK</h1> */}
          <Link to={'/'}>
            <img src={CookLogoLight} alt="" />
          </Link>
          <div className='md:hidden sm:hidden xsm:hidden h-[15px] border border-primary rouded-[16px]'></div>
          <div className='md:hidden sm:hidden xsm:hidden flex gap-[24px]'>
            <Link to={'/search-tutors'} className='flex gap-[7px]'>
              <svg className='min-w-[24px] min-h-[24px]' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5933 14.6145H17.0944Z" fill="#FFDBB8" />
                <path d="M15.5933 14.6145H17.0944" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                <mask id="mask0_1287_44710" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                  <path d="M24 24.3334H0V0.333374H24V24.3334Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1287_44710)">
                  <path d="M12.3577 17.516H6.55014C4.78186 17.516 3.35107 16.0817 3.35107 14.3169V13.8564H15.5567V14.3169C15.5567 16.0817 14.1259 17.516 12.3577 17.516Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.9229 15.3384H17.1738V13.89H19.9229C20.3237 13.89 20.6471 14.2134 20.6471 14.6142C20.6471 15.015 20.3237 15.3384 19.9229 15.3384Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.0655 10.3354C10.2535 11.1475 10.3519 12.5678 10.3519 12.5678C10.3519 12.5678 11.7721 12.6697 12.5842 11.8541C13.3963 11.0421 13.2978 9.62181 13.2978 9.62181C13.2978 9.62181 11.8776 9.52338 11.0655 10.3354Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.35007 12.2226C5.87036 12.7429 6.93202 12.5249 6.93202 12.5249C6.93202 12.5249 7.14998 11.4632 6.62969 10.9429C6.10589 10.4227 5.04774 10.6406 5.04774 10.6406C5.04774 10.6406 4.82978 11.7023 5.35007 12.2226Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.35059 8.85942C7.35059 9.45353 7.8322 9.93866 8.42983 9.93866C9.02394 9.93866 9.50907 9.45704 9.50907 8.85942C9.50907 8.26179 9.02394 7.78017 8.42983 7.78017C7.8322 7.78017 7.35059 8.2653 7.35059 8.85942Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.0435 7.78135C11.0435 8.12938 11.3247 8.4071 11.6692 8.4071C12.0137 8.4071 12.2985 8.12938 12.2985 7.78135C12.2985 7.43332 12.0172 7.1556 11.6727 7.1556C11.3282 7.1556 11.0435 7.43332 11.0435 7.78135Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.59912 11.6408V12.1716Z" fill="#FFDBB8" />
                  <path d="M8.59912 11.6408V12.1716" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Cooking Classes</p>
            </Link>
            <Link to={'/signup'} className='flex gap-[7px]'>
              <svg className='max-w-[20px] max-h-[20px] min-w-[20px] min-h-[20px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9165 93.75C22.9165 94.3025 23.136 94.8324 23.5267 95.2231C23.9174 95.6138 24.4473 95.8333 24.9998 95.8333H74.9998C75.5523 95.8333 76.0822 95.6138 76.473 95.2231C76.8637 94.8324 77.0831 94.3025 77.0831 93.75V79.1667H22.9165V93.75ZM18.0623 51.4375L22.4998 75H37.2915L35.4165 54.3542C35.3919 54.0806 35.4214 53.8048 35.5033 53.5426C35.5853 53.2804 35.718 53.037 35.8941 52.8261C36.0701 52.6152 36.286 52.4411 36.5293 52.3137C36.7727 52.1862 37.0387 52.108 37.3123 52.0833C37.5859 52.0587 37.8617 52.0882 38.1238 52.1702C38.386 52.2521 38.6295 52.3849 38.8404 52.5609C39.0512 52.737 39.2254 52.9528 39.3528 53.1962C39.4803 53.4395 39.5585 53.7056 39.5831 53.9792L41.479 75H58.5206L60.4165 53.9792C60.4411 53.7056 60.5194 53.4395 60.6468 53.1962C60.7743 52.9528 60.9484 52.737 61.1593 52.5609C61.3701 52.3849 61.6136 52.2521 61.8758 52.1702C62.138 52.0882 62.4137 52.0587 62.6873 52.0833C62.9609 52.108 63.227 52.1862 63.4703 52.3137C63.7136 52.4411 63.9295 52.6152 64.1055 52.8261C64.2816 53.037 64.4144 53.2804 64.4963 53.5426C64.5783 53.8048 64.6078 54.0806 64.5831 54.3542L62.7081 75H77.4998L81.9373 51.4375C84.5116 50.7479 86.9094 49.5174 88.9706 47.8281C91.0319 46.1387 92.7094 44.0294 93.8912 41.6407C95.073 39.252 95.732 36.6387 95.8243 33.9753C95.9166 31.3118 95.44 28.6592 94.4263 26.1944C93.4126 23.7296 91.8852 21.5093 89.9457 19.6814C88.0063 17.8534 85.6995 16.46 83.179 15.5939C80.6586 14.7277 77.9825 14.4089 75.3291 14.6585C72.6758 14.9082 70.1061 15.7206 67.7915 17.0417C66.5488 13.3055 64.1615 10.0554 60.9681 7.75213C57.7747 5.44886 53.9372 4.20935 49.9998 4.20935C46.0624 4.20935 42.225 5.44886 39.0315 7.75213C35.8381 10.0554 33.4508 13.3055 32.2081 17.0417C29.8935 15.7206 27.3238 14.9082 24.6705 14.6585C22.0171 14.4089 19.341 14.7277 16.8206 15.5939C14.3002 16.46 11.9933 17.8534 10.0539 19.6814C8.11446 21.5093 6.58699 23.7296 5.57331 26.1944C4.55963 28.6592 4.08303 31.3118 4.1753 33.9753C4.26758 36.6387 4.92659 39.252 6.10841 41.6407C7.29023 44.0294 8.9677 46.1387 11.029 47.8281C13.0903 49.5174 15.488 50.7479 18.0623 51.4375Z" fill="#FFDBB8" />
              </svg>
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Become a Chef</p>
            </Link>
            <Link to={'/search-groups'} className='flex gap-[7px]'>
              <svg className='max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M96.0742 72.7539C95.0977 80.1172 90.8203 86.6016 84.0039 90.9766C78.3984 94.4922 71.9141 96.3477 65.293 96.2891C63.6133 96.2891 61.9336 96.1719 60.2734 95.9571C51.9922 94.9805 44.3359 91.0938 38.6523 85.0196C35.0977 81.2305 32.7344 76.4844 31.8359 71.3672C15.7227 69.5313 3.71094 57.9102 3.71094 43.9258C3.71094 33.0274 11.2891 23.1446 22.7734 18.711C22.6758 18.5938 22.5977 18.4571 22.5586 18.3203C22.3047 17.6172 22.6758 16.836 23.3984 16.6016C26.5625 15.5469 29.8437 14.8633 33.1836 14.5703C33.3203 14.1211 33.457 13.6719 33.5938 13.2422C33.5938 13.2227 33.6133 13.2032 33.6133 13.1836C34.1211 11.543 34.7852 9.96097 35.5859 8.45706C36.4062 6.95315 37.3633 5.52737 38.457 4.19925C38.9453 3.63284 39.8242 3.57425 40.3906 4.06253L43.9258 7.12894C44.4922 7.61722 44.5508 8.49612 44.0625 9.06253C42.6367 10.8008 41.543 12.793 40.8398 14.9414C44.375 15.4297 48.6133 16.3672 51.4648 18.1055C52.0508 18.4375 52.2852 19.1602 52.0117 19.7852C58.9648 23.1055 64.2578 28.4961 66.8555 34.9024C68.0664 32.8516 69.5703 31.0157 71.3281 29.4141C71.8945 28.9063 72.7539 28.9649 73.2617 29.5313L76.3672 33.0469C76.875 33.6133 76.8164 34.4727 76.25 34.9805C74.6094 36.5235 73.2617 38.3399 72.3047 40.3907C75.7422 41.3282 79.8242 42.8125 82.4414 44.9219C82.8711 45.2735 83.0469 45.8203 82.8906 46.3477C82.8516 46.4453 82.8125 46.543 82.7539 46.6407C92.2266 52.7539 97.4023 62.7149 96.0742 72.7539Z" fill="#FFDBB8" />
                <path d="M82.7539 46.6211C82.8125 46.5235 82.8516 46.4258 82.8906 46.3282C83.0469 45.8008 82.8516 45.2344 82.4414 44.9024C79.8242 42.793 75.7422 41.3282 72.3047 40.3711C73.2617 38.3399 74.6094 36.5039 76.25 34.961C76.8164 34.4532 76.875 33.5938 76.3672 33.0274L73.2617 29.5117C72.7539 28.9453 71.8945 28.8867 71.3281 29.3946C69.5703 30.9961 68.0664 32.8321 66.8555 34.8828C64.2578 28.4766 58.9648 23.086 52.0117 19.7657C52.2852 19.1407 52.0508 18.4375 51.4648 18.086C48.5938 16.3477 44.3555 15.4102 40.8398 14.9219C41.543 12.7735 42.6172 10.7813 44.0625 9.043C44.5508 8.47659 44.4922 7.61722 43.9258 7.10941L40.3906 4.043C39.8242 3.55472 38.9648 3.61331 38.457 4.17972C37.3633 5.50784 36.3867 6.93362 35.5859 8.43753C34.7656 9.94144 34.1211 11.5235 33.6133 13.1641C33.6133 13.1836 33.5938 13.2032 33.5938 13.2227C33.457 13.6524 33.3203 14.1016 33.1836 14.5508C29.8437 14.8242 26.5625 15.5078 23.3984 16.5821C22.6953 16.836 22.3242 17.5977 22.5586 18.3008C22.5977 18.4375 22.6758 18.5742 22.7734 18.6914C11.2891 23.1446 3.71094 33.0469 3.71094 43.9258C3.71094 57.9102 15.7227 69.5313 31.8359 71.3672C32.7344 76.4844 35.1172 81.2305 38.6523 85.0196C44.3359 91.1133 52.0117 94.9805 60.2734 95.9571C61.9336 96.1719 63.6133 96.2891 65.293 96.2891C71.9141 96.3477 78.3984 94.4922 84.0039 90.9766C90.8203 86.6016 95.0977 80.1172 96.0742 72.7539C97.4023 62.7149 92.2266 52.7539 82.7539 46.6211ZM65.7617 44.1016C66.1133 42.9688 66.5234 41.875 66.9531 40.8203C67.1094 40.4492 67.2656 40.0782 67.4219 39.7266C67.4609 39.6485 67.5 39.5703 67.5391 39.4727C68.6719 36.8555 70.2344 34.4532 72.168 32.3633L73.457 33.8282C71.6211 35.8399 70.1562 38.1641 69.1016 40.6836C68.7891 41.3672 69.1211 42.1875 69.8047 42.4805C69.8828 42.5196 69.9609 42.5391 70.0195 42.5586C72.4023 43.125 74.7266 43.8867 76.9727 44.8438C75.5664 44.8633 74.1797 44.7461 72.793 44.4922C72.0508 44.336 71.3281 44.7852 71.1523 45.5274C71.0352 46.0157 71.2109 46.543 71.6016 46.875C72.7344 47.8125 73.7891 48.8282 74.7852 49.9219C73.0469 49.668 71.3867 49.043 69.9023 48.1055C69.3164 47.6367 68.457 47.7344 67.9883 48.3399C67.9297 48.418 67.8711 48.4961 67.832 48.5938C67.0898 50.1172 66.1719 51.543 65.1172 52.8516C64.7852 51.3867 64.4922 49.9219 64.2578 48.418C64.1406 47.6758 63.4375 47.168 62.6953 47.2852C62.6367 47.2852 62.5781 47.3047 62.5195 47.3242C61.0938 47.7149 59.6289 47.9688 58.1445 48.0664C59.1406 47.3828 60.0586 46.5625 60.8398 45.6446C61.3281 45.0586 61.25 44.1992 60.6641 43.7305C60.5664 43.6524 60.4492 43.5742 60.332 43.5157C59.4336 43.1055 58.6133 42.5977 57.832 41.9922C59.7656 41.7578 61.7188 41.6407 63.6719 41.6797C63.4766 42.2071 63.3008 42.7344 63.1445 43.2617C62.9102 43.9844 63.3203 44.7461 64.043 44.9805C64.7656 45.2149 65.5273 44.8242 65.7617 44.1016ZM32.4805 17.3633C32.3633 17.9102 32.2461 18.4571 32.1484 19.0039C32.0117 19.7461 32.5195 20.4492 33.2617 20.586C33.3398 20.6055 33.418 20.6055 33.4961 20.6055C34.1602 20.6055 34.7266 20.1172 34.8437 19.4727C35.0586 18.3008 35.3125 17.168 35.5859 16.0742C35.6836 15.6836 35.8008 15.3125 35.8984 14.9414L35.9766 14.668C36.7578 11.9336 38.0078 9.3555 39.6484 7.03128L41.1328 8.32034C39.5703 10.5664 38.418 13.0469 37.7148 15.7032C37.5 16.4258 37.9297 17.1875 38.6523 17.4024C38.7305 17.4219 38.8086 17.4414 38.8867 17.4414C41.3086 17.6953 43.7305 18.1446 46.0742 18.7891C44.6875 19.0039 43.2812 19.0625 41.8945 18.9844C41.1328 18.9258 40.4883 19.4727 40.4102 20.2344C40.3711 20.7422 40.6055 21.2305 41.0352 21.5039C42.2656 22.3047 43.457 23.1641 44.5898 24.1016C42.832 24.0821 41.0938 23.6914 39.5117 22.9297C38.8672 22.5391 38.0273 22.7539 37.6367 23.418C37.5781 23.4961 37.5391 23.5938 37.5195 23.6914C36.9727 25.293 36.25 26.8164 35.3711 28.2617C34.8438 26.8555 34.375 25.4297 33.9453 23.9844C33.7695 23.3985 33.2422 23.0078 32.6367 23.0078C32.4414 23.0078 32.2656 23.0469 32.0898 23.125C30.7227 23.6914 29.3164 24.1211 27.8516 24.4141C28.75 23.6133 29.5313 22.6758 30.1953 21.6602C30.5859 21.0157 30.4102 20.1758 29.7656 19.7657C29.6484 19.6875 29.5313 19.6485 29.4141 19.6094C28.4766 19.3164 27.5977 18.9258 26.7383 18.418C28.6133 17.9492 30.5273 17.5782 32.4805 17.3633ZM31.6992 64.2774C31.5039 65.7032 31.4453 67.1485 31.5234 68.5742C17.1289 66.6992 6.44531 56.3281 6.44531 43.9258C6.44531 33.711 13.9844 24.4532 25.2539 20.7227C25.7617 21.0352 26.2891 21.3086 26.8359 21.5625C25.8398 22.6172 24.707 23.5352 23.4766 24.2969L23.0469 24.5899C22.4219 25.0196 22.2656 25.8789 22.6953 26.4844C22.8516 26.7188 23.0859 26.8946 23.3594 26.9922C25.9766 27.9102 29.6875 26.875 31.7383 26.1524C32.7148 29.2188 33.6523 31.3672 33.6914 31.4844C33.8672 31.8946 34.2383 32.1875 34.668 32.2852C34.7656 32.3047 34.8437 32.3047 34.9414 32.3047C35.293 32.3047 35.625 32.168 35.8789 31.9336C37.5977 30.293 38.8867 27.5977 39.5508 25.9375C42.8711 27.1094 47.3828 26.836 47.5977 26.8164C48.3398 26.7774 48.9258 26.1133 48.8672 25.3711C48.8672 25.293 48.8477 25.2149 48.8281 25.1563C48.5742 24.0625 47.2852 22.7539 45.8008 21.5625C46.6406 21.4649 47.4805 21.3282 48.3203 21.1719C56.7383 24.3555 62.9492 30.6641 65.0586 38.1836C64.9414 38.4571 64.8047 38.711 64.6875 38.9844C61.3477 38.8282 58.0078 39.0821 54.7266 39.7071C53.9844 39.8633 53.5156 40.586 53.6719 41.3086C53.7109 41.4649 53.7695 41.6016 53.8477 41.7383C41.9141 44.668 33.125 53.4766 31.6992 64.2774ZM93.3789 72.4024C92.5195 78.9649 88.6719 84.7461 82.5391 88.6914C76.0156 92.7539 68.2422 94.375 60.6445 93.2617C53.0078 92.3633 45.9375 88.8086 40.6836 83.1836C35.7813 77.793 33.5547 71.211 34.4141 64.6485C35.7422 54.5313 44.4336 46.3282 56.0938 44.1016C56.5625 44.4727 57.0313 44.8242 57.5391 45.1367C56.4063 46.0547 55.1758 46.8164 53.8672 47.4219C53.6914 47.5 53.5352 47.5782 53.3984 47.6563C52.7344 48.0078 52.4609 48.8282 52.8125 49.4922C52.9492 49.7461 53.1641 49.961 53.418 50.0782C55.8789 51.3281 59.707 50.7813 61.8164 50.3321C62.3828 53.4961 63.0273 55.7617 63.0664 55.8594C63.2812 56.5821 64.0234 57.0117 64.7656 56.7969C64.9219 56.7578 65.0586 56.6797 65.1953 56.5821C67.1094 55.1953 68.7305 52.6758 69.6094 51.1133C72.7539 52.7149 77.2656 53.0274 77.4805 53.0274C77.8711 53.0664 78.2617 52.9102 78.5547 52.6172C78.8281 52.3242 78.9648 51.9336 78.9453 51.543C78.8477 50.4297 77.7148 48.9649 76.4063 47.5782C77.2656 47.5977 78.125 47.5782 78.9844 47.5196C89.0039 52.9492 94.6484 62.6563 93.3789 72.4024Z" fill="#FFB875" />
                <path d="M39.7653 72.6758C39.5309 71.9531 38.7692 71.5625 38.0465 71.7969C37.3238 72.0312 36.9332 72.793 37.1676 73.5156C37.734 75.2539 38.5348 76.9336 39.5309 78.4766C39.7848 78.8672 40.2145 79.1211 40.6832 79.1016C40.9371 79.1016 41.191 79.0234 41.4059 78.8867C42.0504 78.4766 42.2262 77.6367 41.8356 76.9922C40.9762 75.6641 40.2731 74.1992 39.7653 72.6758Z" fill="#FFB875" />
              </svg>
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Group Cooking</p>
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-[22px] xsm:hidden sm:hidden md:hidden'>
          <div onClick={(e) => { setLanguageModal(!languageModal); setCurrencyModal(false); e.stopPropagation(); }} className='flex items-center gap-[4px] relative cursor-pointer'>
            <LanguageModal state={languageModal} closeModal={(e) => { setLanguageModal(false) }} />
            <p className='font-outfit font-normal text-[19px] leading-[19px] text-[white]'>Eng</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
            </svg>
          </div>
          <div onClick={(e) => { setCurrencyModal(!currencyModal); setLanguageModal(false); e.stopPropagation(); }} className='flex items-center gap-[0.278vw] cursor-pointer relative'>
            <CurrencyModal state={currencyModal} closeModal={(e) => { setCurrencyModal(false) }} />
            <p className='font-outfit font-normal text-[18px] leading-[18px] text-[white]'>USD</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
            </svg>
          </div>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <Link to={'/support'}>
            <div className='custom-tooltip' data-tooltip="Support">
              <svg className='stroke-primaryLighten2 group fill-primary2 hover:fill-primaryLighten2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path className='group-hover:stroke-primary2 transition-all duration-200 stroke-primaryLighten2' d="M12 16.5V12.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path className='group-hover:stroke-primary2 transition-all duration-200 stroke-primaryLighten2' d="M12 8.5H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div>
            <Link to={'/signin'} className='group transition-all duration-200 hover:bg-primaryLighten2 hover:text-primary2 w-[131px] h-[41px] border-[2px] border-primaryLighten2 text-backPri font-outfit font-[500] text-[20px] leading-[25px] flex justify-center items-center gap-[8px] rounded-[4px]'>
              Log In
              <svg className='stroke-[white] group-hover:stroke-primary2 transition-all duration-200' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 2.75H14.75C15.1478 2.75 15.5294 2.90804 15.8107 3.18934C16.092 3.47064 16.25 3.85218 16.25 4.25V14.75C16.25 15.1478 16.092 15.5294 15.8107 15.8107C15.5294 16.092 15.1478 16.25 14.75 16.25H11.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 13.25L11.75 9.5L8 5.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.75 9.5H2.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        {/* <img className='sm:block xsm:block hidden cursor-pointer' onClick={() => setShowMenu(true)} src={Hamburger} alt="" /> */}
        <div className='sm:block xsm:block md:block hidden cursor-pointer'>
          <svg className='cursor-pointer' onClick={() => setShowMenu(true)} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="10" fill="#FFDBB8" />
            <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#D27722" />
            <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#D27722" />
          </svg>
        </div>
      </nav>
      <div className='flex xsm:flex-col sm:flex-col md:flex-col xsm:gap-[36px] sm:gap-[36px] md:gap-[36px] gap-[54px] pl-[64px] py-[94px] pr-[69px] sm:pt-[89px] md:pt-[89px] sm:px-[48px] md:px-[48px] xsm:pt-[80px] xsm:pr-[32px] xsm:pl-[34px]'>
        <div className='mt-[10px] h-full sticky md:relative sm:relative xsm:relative md:top-[0px] sm:top-[0px] xsm:top-[0px] top-[130px]'>
          <h1 className='mb-[36px] hidden sm:block md:block xsm:block text-[48px] xsm:text-[36px] font-[700] sm:leading-[56.88px] font-rubik'>Terms Of Service</h1>
          <div className='relative mb-[30px] h-[50px] w-[313px] xsm:w-full sm:w-full md:w-full border-[2px] rounded-[4px] border-primaryLighten2 pl-[36px] pr-[10px]'>
            <input type="text" className='h-full w-full outline-none font-medium leading-[26.46px] font-outfit placeholder:text-primary2 pl-4 text-[20px]' placeholder="Search" />
            <svg className='absolute top-[50%] left-[13px] transform translate-y-[-50%]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 20.9999L16.65 16.6499" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='flex p-[24px] w-[313px] xsm:w-full sm:w-full md:w-full flex-col border-[2px] rounded-[8px] border-primaryLighten2'>
            <h1 className='mb-[27px] tracking-[-0.02em] font-outfit leading-[28.4px] font-[600] text-[24px] xsm:text-[20px]'>Table of content</h1>
            <div className='flex flex-col gap-[16px]'>
              <CopyrightTable />
              <CopyrightTable />
              <CopyrightTable />
            </div>
          </div>
        </div>
        <div className='flex flex-col xsm:w-full sm:w-full md:w-full'>
          <h1 className='mb-[36px] mt-[-10px] block sm:hidden md:hidden xsm:hidden text-[48px] xsm:text-[36px] font-[700] sm:leading-[56.88px] font-rubik'>Copyright Policy</h1>
          <div className='w-[59px] rounded-full border-[2px] mb-[36px] xsm:hidden sm:hidden md:hidden border-primaryLighten2'></div>
          <div className='flex flex-col gap-[36px]'>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}
export default Copyright
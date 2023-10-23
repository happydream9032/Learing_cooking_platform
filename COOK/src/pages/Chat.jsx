import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user from './../assets/StudentDashboard/user.svg';
const Chat = () => {
  const [currentChat, setCurrentChat] = useState({});
  const navigate = useNavigate()
  const [allChats, setAllChats] = useState([
    {
      id: 1,
      name: 'Tutor 1',
      message: 'Hey, how can I assist you today?',
      chats: [
        {
          id: 1,
          senderId: 1,
          message: 'Hi there! I need help with my math assignment.',
        },
        {
          id: 2,
          senderId: 2,
          message: 'Sure, I\'d be happy to help. Can you provide me with the details?',
        },
        {
          id: 3,
          senderId: 1,
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vitae repellendus? Placeat, similique, doloremque recusandae pariatur corrupti inventore ut dicta omnis asperiores aliquid non aspernatur eius vitae, optio esse laborum!',
        },
        {
          id: 4,
          senderId: 2,
          message: 'No problem. Let me explain it to you step by step.',
        },
        {
          id: 5,
          senderId: 1,
          message: 'Thank you for the explanation. It\'s much clearer now.',
        },
        {
          id: 6,
          senderId: 2,
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vitae repellendus? Placeat, similique, doloremque recusandae pariatur corrupti inventore ut dicta omnis asperiores aliquid non aspernatur eius vitae, optio esse laborum!',
        },
        {
          id: 7,
          senderId: 1,
          message: 'I also need help with the last problem. It involves logarithms.',
        },
        {
          id: 8,
          senderId: 2,
          message: 'Logarithms can be tricky. Let\'s go through it step by step as well.',
        },
        {
          id: 9,
          senderId: 1,
          message: 'I think I understand it now. Thanks for your help!',
        },
        {
          id: 10,
          senderId: 2,
          message: 'You\'re welcome! I\'m glad I could assist you. If you need further assistance, don\'t hesitate to reach out.',
        },
        // Additional chat messages
      ],
    },
    {
      id: 2,
      name: 'Tutor 2',
      message: 'Let me know if you have any questions.',
      chats: [
        {
          id: 1,
          senderId: 1,
          message: 'Hello, I have a question about the literature assignment.',
        },
        {
          id: 2,
          senderId: 2,
          message: 'Sure, go ahead and ask. I\'ll do my best to help you.',
        },
        {
          id: 3,
          senderId: 1,
          message: 'I\'m struggling to analyze the symbolism in this novel.',
        },
        {
          id: 4,
          senderId: 2,
          message: 'Symbolism can be complex. Let\'s break it down and discuss the key symbols.',
        },
        {
          id: 5,
          senderId: 1,
          message: 'Thank you for guiding me through the symbolism. It makes more sense now.',
        },
        {
          id: 6,
          senderId: 2,
          message: 'You\'re welcome! If you have more questions or need further analysis, feel free to ask.',
        },
        {
          id: 7,
          senderId: 1,
          message: 'I\'m also curious about the historical context of the novel.',
        },
        {
          id: 8,
          senderId: 2,
          message: 'The historical context plays a significant role. Let\'s explore it together.',
        },
        {
          id: 9,
          senderId: 1,
          message: 'I appreciate your insights into the historical context. It enriches my understanding of the novel.',
        },
        {
          id: 10,
          senderId: 2,
          message: 'I\'m glad I could help. If you have more questions or need further analysis, feel free to reach out.',
        },
        // Additional chat messages
      ],
    },
    {
      id: 3,
      name: 'Tutor 3',
      message: 'Looking forward to our session.',
      chats: [
        {
          id: 1,
          senderId: 1,
          message: 'Hi, I would like to schedule a tutoring session for next week.',
        },
        {
          id: 2,
          senderId: 2,
          message: 'Great! Let me check my availability and get back to you.',
        },
        {
          id: 3,
          senderId: 1,
          message: 'Sure, take your time. I\'m available on weekdays after 4 PM.',
        },
        {
          id: 4,
          senderId: 2,
          message: 'I have a slot available on Thursday at 5 PM. Does that work for you?',
        },
        {
          id: 5,
          senderId: 1,
          message: 'Thursday at 5 PM works for me. Let\'s schedule it.',
        },
        {
          id: 6,
          senderId: 2,
          message: 'Excellent! I have booked the session for Thursday at 5 PM. Looking forward to it.',
        },
        {
          id: 7,
          senderId: 1,
          message: 'Thank you for scheduling the session. I\'m excited to learn from you.',
        },
        {
          id: 8,
          senderId: 2,
          message: 'You\'re welcome! I\'m excited to work with you and assist you in your learning journey.',
        },
        {
          id: 9,
          senderId: 1,
          message: 'See you on Thursday! Have a great day.',
        },
        {
          id: 10,
          senderId: 2,
          message: 'See you on Thursday! Take care and have a wonderful day as well.',
        },
        // Additional chat messages
      ],
    },
    // Add more chat objects as needed
  ]);
  const userId = 1;
  const handleCardClick = (chatId) => {
    const selectedChat = allChats.find((chat) => chat.id === chatId);
    if (window.innerWidth < 577)
      navigate('/singleChat', { state: selectedChat })
    else
      setCurrentChat(selectedChat);
  };
  return (
    <div className='flex min-h-[calc(100vh-142.3px)]'>
      <div className={`w-[377px] sm:w-[260px] md:w-[260px] flex flex-col  xsm:min-w-full br-1px h-full pl-[38px] pr-[26px] pt-[38px] sm:pt-27px sm:pl-[20px] sm:pr-[20px] md:pt-27px md:pl-[20px] md:pr-[20px] xsm:pl-[32px] xsm:pr-[32px] xsm:pt-[23px] xsm:pb-0`}>
        {allChats.map((chat) => (
          <div className='card flex cursor-pointer hover:bg-[#cccccc27] items-center gap-[16px] px-[23px] py-[12px] sm:px-0 md:px-0 xsm:px-0 xsm:pr-[4px]' key={chat.id} onClick={() => handleCardClick(chat.id)}>
            <img src={user} alt='' />
            <div className='flex flex-col gap-[7px]'>
              <h1 className='font-outfit text-[16px] leading-[18.13px] tracking-[-0.02em] font-[600]'>{chat.name}</h1>
              <h1 className='ellipsisShow font-outfit text-[16px] leading-[18.13px] tracking-[-0.02em] text-[#949494] font-[400]'>{chat.message}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='flex-1 xsm:hidden pr-[65px] sm:w-[65vw] md:w-[65vw] md:pr-0 sm:pr-0 w-[72vw]'>
        <div className={`border-primaryLighten2 border-l-[2px] border-r-[2px] sm:border-r-0  md:border-r-0`}>
          {Object.keys(currentChat).length === 0 && (
            <div className='flex flex-col gap-2 min-h-[calc(100vh-142px)] justify-center items-center font-outfit text-[20px] leading-[18.13px]  text-[#949494] font-[600]'>
              <svg width='45' height='45' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.2L2 15.2V2H18V14Z' fill='#1E1E21' fillOpacity='0.4' />
              </svg>
              <span>{allChats.length === 0 ? 'No chats found' : 'Open a chat'}</span>
            </div>
          )}
          {Object.keys(currentChat).length !== 0 && (
            <div className='flex flex-col '>
              <div className='z-10 max-h-[calc(100vh-228.3px)] min-h-[calc(100vh-228.3px)] sm:max-h-[calc(100vh-213.3px)] md:max-h-[calc(100vh-213.3px)] sm:min-h-[calc(100vh-213.3px)] md:min-h-[calc(100vh-213.3px)]  overflow-auto'>
                <div className='ml-[26px] mr-[41px] mt-[38px] flex flex-col sm:ml-[20px] sm:mr-[20px] md:ml-[20px] md:mr-[20px]'>
                  {currentChat.chats.map((chat, index) =>
                    userId === chat.senderId ? (
                      <div className='flex  my-[12px] justify-center ml-auto items-start' key={index}>
                        <div className='flex flex-col gap-[5px]'>
                          <div style={{ borderRadius: '16px 16px 0px 16px' }} className='flex justify-center items-center py-[12px] px-[16px] bg-primary'>
                            <p className='max-w-[528px] sm:max-w-[320px] md:max-w-[320px] xsm:text-[0.75em] text-[white] text-[16px] font-[400] font-outfit '>{chat.message}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className='flex my-[12px]' key={index}>
                        <img src={user} className='mr-[11px] h-[42px] w-[42px] cursor-pointer rounded-full' alt='user' />
                        <div className='flex flex-col gap-[5px] mt-[10px]'>
                          <div style={{ borderRadius: '0px 12px 12px 12px' }} className='flex justify-center items-center py-[12px] px-[16px] bg-backSec'>
                            <p className='max-w-[528px] sm:max-w-[320px] md:max-w-[320px] xsm:text-[0.75em] text-[black] text-[16px] font-[400] font-outfit'>{chat.message}</p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className='h-[86px] sm:h-[71px] md:h-[71px] pl-[27px] pr-[40px] sm:pl-[36px] md:pl-[36px] sm:pr-[46px] md:pr-[46px]'>
                <div className='flex gap-[16px] items-center'>
                  <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="49.4383" height="50.6106" rx="24.7192" fill="#D27722" />
                    <path d="M34.4383 24.6622L25.2483 33.8522C24.1225 34.9781 22.5955 35.6106 21.0033 35.6106C19.4112 35.6106 17.8842 34.9781 16.7583 33.8522C15.6325 32.7264 15 31.1994 15 29.6072C15 28.015 15.6325 26.4881 16.7583 25.3622L25.9483 16.1722C26.6989 15.4217 27.7169 15 28.7783 15C29.8398 15 30.8578 15.4217 31.6083 16.1722C32.3589 16.9228 32.7806 17.9408 32.7806 19.0022C32.7806 20.0637 32.3589 21.0817 31.6083 21.8322L22.4083 31.0222C22.0331 31.3975 21.5241 31.6083 20.9933 31.6083C20.4626 31.6083 19.9536 31.3975 19.5783 31.0222C19.2031 30.6469 18.9922 30.138 18.9922 29.6072C18.9922 29.0765 19.2031 28.5675 19.5783 28.1922L28.0683 19.7122" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className='flex items-center flex-1 border-[2px] border-primaryLighten2 rounded-[4px] h-[44px] px-[15px] '>
                    <input placeholder='Send a message' type="text" className='outline-none h-[40px]  flex-1' />
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4384 2.3053L11.4384 13.3053" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.4384 2.3053L15.4384 22.3053L11.4384 13.3053L2.43835 9.3053L22.4384 2.3053Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Chat;

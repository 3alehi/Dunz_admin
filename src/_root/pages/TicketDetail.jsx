import React, { useState } from 'react'
import NewTicketModal from '../../components/shared/modals/NewTicketModal';
import User from '../../components/images/User.png';
import Admin from '../../components/images/Admin.png';
import { useNavigate, useParams } from 'react-router-dom';
import DragAndDrop from '../../components/shared/DragAndDrop';

const TicketDetail = () => {
  const navigate = useNavigate()
  const [messages , setMessages] = useState([
    {
      sender: 'user',
      name: 'هادی زناتی',
      profPic: Admin,
      message:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
    },
    {
      sender: 'admin',
      name: 'پشتیبانی',
      profPic: User,
      message:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
    },
    {
      sender: 'admin',
      name: 'پشتیبانی',
      profPic: User,
      message:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
    },
  ])
  const [newMessage, setNewMessage] = useState('');
  const handleNewMessage = () => {
    if (newMessage.trim() !== ''){
      setMessages([
        ...messages,
        {
          sender:'admin' , profPic: Admin ,message:newMessage
        }
      ])
      setNewMessage('')
    }
  }
  
  return (
    <div className="flex w-full flex-col">
      <div id="header" className="md:flex w-full">
        <div className="flex items-center mr-6 mt-6">
          <img
            src="/assets/icons/Category.svg"
            alt="Category"
            className="w-6 h-6"
          />
          <h4 className="font-bold mr-[6px]">جزییات تیکت 23455</h4>
        </div>
        <div className="md:flex items-center ml-6 mt-6 ms-auto">
          <button onClick={() => navigate('/tickets')} className="px-4 border py-[14px] rounded-xl border-[#26397F] md:ml-4 md:mr-0 mr-6">
            بستن گفتگو
          </button>
          <NewTicketModal />
        </div>
      </div>
      <div className="h-[60vh] overflow-auto mx-6 my-8 bg-white  rounded-lg p-10">
        {messages.map((message, ind) => (
          <div className="flex flex-col" key={ind}>
            {message.sender === "user" ? (
              <div className=" w-full flex">
                <div>
                  <img
                    src={message.profPic}
                    alt="User"
                    className="w-[60px] h-[60px]"
                  />
                  <h6 className="text-xs mt-[6px]">{message.name}</h6>
                </div>
                <p className="rounded-[20px] h-fit rounded-tr-none MessageBG text-sm pr-[23px] pt-[22px] pb-[28px] mr-[17px] w-full">
                  {message.message}
                </p>
              </div>
            ) : (
              <div
                className={`flex self-end w-[94%] ${
                  ind === 1 ? "mt-[39px]" : "mt-5"
                }`}
                key={ind}
              >
                <div>
                  <img
                    src={message.profPic}
                    alt="User"
                    className="w-[60px] h-[60px]"
                  />
                  <h6 className="text-xs text-center mt-[6px]">
                    {message.name}
                  </h6>
                </div>
                <div className="rounded-[20px] h-fit rounded-tr-none border-[#E0DEF7] border text-sm pr-[23px] pt-[21px] pb-[23px] mr-[17px] w-full">
                  <h2 className="font-bold">پاسخ :</h2>
                  <p className="mt-2">{message.message}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mx-6 my-8 bg-white  rounded-lg p-10">
        <div>
          <p className="text-sm">شرح تیکت را بنویسید</p>
          <textarea className="bg-[#F7F7FA] outline-none border border-[#E0DEF7] rounded-lg w-full mt-2 h-[100px] px-3 py-1.5" />
        </div>
        <div className="mt-5">
          <DragAndDrop />
        </div>
        <div className='flex w-full justify-end'>
          <button className='w-[200px] bg-[#27397D] py-[14px] mt-5 text-white rounded-xl'>ثبت تیکت جدید</button>
        </div>
      </div>
    </div>
  );
}

export default TicketDetail

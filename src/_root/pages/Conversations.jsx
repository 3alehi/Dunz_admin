import React, { useState } from "react";
import House_1 from "../../components/images/House1.png";
import House_2 from "../../components/images/House2.png";
import House_3 from "../../components/images/House3.png";
import House_4 from "../../components/images/House4.png";

const Conversations = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [pause, setPause] = useState(false);

  const conversations = [
    {
      id: 1,
      pic: House_1,
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از ",
      date: "23:23 1400/09/09",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
      notif: 2,
    },
    {
      id: 2,
      pic: House_2,
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از ",
      date: "23:23 1400/09/09",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
      notif: 2,
      
    },
    {
      id: 3,
      pic: House_3,
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از ",
      date: "23:23 1400/09/09",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
      notif: 7,
    },
    {
      id: 4,
      pic: House_4,
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از ",
      date: "23:23 1400/09/09",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
      notif: 4,
    },
  ];
  const [messages, setMessages] = useState([
    {
      sender: "admin",
      time: "",
      messageType: 1,
      message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ",
    },
    {
      sender: "user",
      profPic: "",
      messageType: 1,
      seen: true,
      message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهومنن از صنعت ",
    },
    {
      sender: "admin",
      profPic: "",
      messageType: 2,
      message: "",
    },
    {
      sender: "user",
      profPic: "",
      messageType: 3,
      seen: false,
      message: "",
    },
    {
      sender: "admin",
      profPic: "",
      messageType: 3,
      message: "",
    },
  ]);

  const handleSelectedHouse = (itemId) => {
    setSelectedHouse(itemId);
  };
  return (
    <div>
      <div className="flex items-center mr-6 mt-6">
        <img
          src="/assets/icons/Category.svg"
          alt="Category"
          className="w-6 h-6"
        />
        <h4 className="font-bold mr-[6px]">گفتگوها</h4>
      </div>
      <div className="md:flex md:mx-6 mt-10 ">
        <div className="md:h-screen bg-white  md:w-1/4 border border-[#E0DEF7] rounded-xl">
          {conversations.map((item, und) => (
            <div
              onClick={() => handleSelectedHouse(item.id)}
              className={`border-b border-[#E0DEF7] pb-4 px-4 cursor-pointer pt-6 ${
                selectedHouse === item.id ? "bg-[#F4F5F8]" : ""
              }`}
              key={und}
            >
              <div className="flex">
                <div className="relative w-fit">
                  <img src={item.pic} alt="house" />
                  <div className="absolute bg-[#CB9044] w-5 h-5 rounded-full flex justify-center -top-1.5 text-white -left-1.5">
                    {item.notif}
                  </div>
                </div>
                <div className="w-4/5 mr-2">
                  <h2 className="truncate font-extrabold">{item.title}</h2>
                  <h6 className="text-[#828892] text-[10px] mt-2">
                    {item.date}
                  </h6>
                </div>
              </div>
              <p className="text-[#232F43] truncate mt-2">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="relative md:h-screen bg-white md:w-9/12 md:mt-0 mt-8  md:mr-8 md:border border-[#E0DEF7] rounded-xl flex flex-col">
          {selectedHouse != null ? (
            <div className=" w-full">
              <div className="flex w-full border-b pt-5 px-5 pb-4 bg-white z-10">
                <img src={House_1} alt="Hose" />
                <div className="mr-[10px] flex flex-col justify-between">
                  <h4 className="IranYekan-extrabold">
                    محل قرارگیری عنوان کامل آگهی ملک
                  </h4>
                  <h6 className="text-sm text-[#828892]">نرگس یوسفی</h6>
                </div>
                <div className="ms-auto cursor-pointer relative">
                  <div onClick={() => setDropdown(!dropdown)} className="">
                    <img src="/assets/icons/Ellipse.svg" alt="Ellipse" />
                  </div>
                  {dropdown === true && (
                    <div className="border border-[#CFD8DC] rounded-lg flex flex-col absolute left-0 bg-white">
                      <button className="text-right py-2 pr-4 w-[148px] hover:bg-[#ECEFF1]">
                        حذف گفتگو
                      </button>
                      <button className="text-right py-2 pr-4 w-[148px] hover:bg-[#ECEFF1]">
                        بستن گفتگو
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col mr-5 overflow-x-hidden overflow-y-scroll h-[85vh]">
                <h4 className="mx-auto text-[#626A78] text-sm mt-6">
                  1401/09/09 23:23
                </h4>
                {messages.map((message, ind) => (
                  <div className="flex flex-col mb-20" key={ind}>
                    {message.sender === "user" ? (
                      <div className=" flex w-fit">
                        {message.messageType === 1 && (
                          <p className="rounded-[20px] h-fit rounded-tr-none bg-[#26397F] text-sm pt-[22px] px-4 text-white pb-[28px] w-full">
                            {message.message}
                          </p>
                        )}
                        {message.messageType === 2 && (
                          <img src={House_1} alt="House" />
                        )}
                        {message.messageType === 3 && (
                          <div className="flex items-start gap-2.5 bg-[#26397F] rounded-3xl rounded-tr-none px-4 py-2 min-w-fit">
                            <div className="flex flex-col gap-1 ">
                              <div className="flex flex-col w-full max-w-[320px] leading-1.5 py-2 rounded-e-xl rounded-es-xl">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse ">
                                  <button
                                    className="inline-flex self-center ml-2 bg-[#7181BE] rounded-full items-center p-2 text-sm font-medium text-center text-gray-900 min-w-[34px] min-h-[34px]"
                                    type="button"
                                    onClick={() => setPause(!pause)}
                                  >
                                    {pause ? (
                                      <svg
                                        className="w-4 h-4 text-gray-800 dark:text-white "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 12 16"
                                      >
                                        <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                                      </svg>
                                    ) : (
                                      <img
                                        src="/assets/icons/Play.svg"
                                        className="w-4 h-4"
                                      />
                                    )}
                                  </button>
                                  <img src="/assets/icons/Voice2.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <h4 className="self-end mr-2">23:23</h4>
                      </div>
                    ) : (
                      <div
                        className={`flex self-end ${
                          ind === 1 ? "mt-[39px]" : "mt-5"
                        }`}
                        key={ind}
                      >
                        <h4 className="self-end ml-2">23:23</h4>
                        <div className="rounded-[20px] h-fit rounded-tl-none MessageBG text-sm pt-[10px] pb-[10px] px-2 w-full">
                          {message.messageType === 1 && (
                            <p className="rounded-[20px] h-fit rounded-tr-none text-sm pt-[22px] px-4 pb-[22px] w-full">
                              {message.message}
                            </p>
                          )}
                          {message.messageType === 2 && (
                            <img
                              src={House_1}
                              alt="House"
                              className="h-[123px] w-auto"
                            />
                          )}
                          {message.messageType === 3 && (
                            <div className="flex items-start gap-2.5 rounded-3xl px-4 py-2">
                              <div className="flex flex-col gap-1 ">
                                <div className="flex flex-col w-full max-w-[320px] leading-1.5 rounded-e-xl rounded-es-xl">
                                  <div className="flex items-center space-x-2 rtl:space-x-reverse ">
                                    <button
                                      className="min-w-[34px] min-h-[34px] inline-flex self-center ml-2 bg-[#CB9044] rounded-full items-center p-2 text-sm font-medium text-center text-gray-900"
                                      type="button"
                                      onClick={() => setPause(!pause)}
                                    >
                                      {pause ? (
                                        <svg
                                          className="w-4 h-4 text-gray-800 dark:text-white "
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 12 16"
                                        >
                                          <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                                        </svg>
                                      ) : (
                                        <img
                                          src="/assets/icons/Play.svg"
                                          className="w-4 h-4"
                                        />
                                      )}
                                    </button>
                                    <img src="/assets/icons/Voice.svg" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 right-2 w-full flex">
                <div className="relative h-[56px] w-[87%]">
                  <input
                    className="w-full rounded-full h-full bg-[#EAECF3] pr-[60px] outline-none"
                    placeholder="تایپ کنید..."
                  />
                  <img
                    src="/assets/icons/Sticker.svg"
                    alt="Sticker"
                    className="absolute top-4 right-6"
                  />
                </div>
                <button className="w-[56px] h-[56px] bg-[#26397F] flex justify-center items-center rounded-full mr-5">
                  <img src="/assets/icons/Send.svg" alt="Send" />
                </button>
              </div>
            </div>
          ) : (
            <div className="m-auto">
              <img
                src="assets/icons/EmptyConversation.svg"
                alt="EmptyConversation"
              />
              <h4 className="mt-[28px]">یک گفتگو را انتخاب کنید</h4>
            </div>
          )}
        </div> 
      </div>
    </div>
  );
};

export default Conversations;

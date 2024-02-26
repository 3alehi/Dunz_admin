import React, { useEffect } from 'react'

const SideMenuOptions = ({activeMenu}) => {
  let activeMenuItem = () => {
    let loc = window.location.pathname.split("/");
    console.log(loc);
    document
      .querySelector(`.menu a[href="/${loc[1]}"]`)
      ?.classList.add("bg-gray-300");
    document
      .querySelector(`.menu a[href="/${loc[1]}"] img`)
      ?.classList.add("Selected");
    document
      .querySelector(`.menu a[href="/${loc[1]}"] h4`)
      ?.classList.add("text-[#26397F]");
  };
  useEffect(() => {
    activeMenuItem();
  }, []);

  return (
    <div className="w-full h-full bg-[#FFFFFF] border-l border-[#ECEFF1] flex flex-col relative z-10">
      <img
        src="/assets/icons/X.svg"
        alt="X"
        className={`w-8 h-8 mt-4 mr-4 ${activeMenu ? "md:hidden" : "hidden"}`}
        onClick={() => activeMenu(false)}
      />
      <img
        src="/assets/icons/logo.svg"
        alt="logo"
        className="h-[60px] mx-auto mt-[34px]"
      />
      <div className='flex flex-col menu'>
        <a className="mt-7 flex h-[48px] w-10/12 mx-auto rounded-lg" href='/ads-management'>
          <img
            src="/assets/icons/DailyOffer.svg"
            alt="daily-offer"
            className="pr-6 w-12 h-12"
          />
          <h4 className="mr-[14px] my-auto">پیشنهادات روز</h4>
        </a>
        <a className="mt-4 flex h-[48px] w-10/12 mx-auto rounded-lg" href='/conversations'>
          <img
            src="/assets/icons/ActiveOffer.svg"
            alt="daily-offer"
            className="pr-6 w-12 h-12"
          />
          <h4 className="mr-[14px] my-auto">پیشنهادات فعال</h4>
        </a>
        <a className="mt-4 flex h-[48px] w-10/12 mx-auto rounded-lg" href='/'>
          <img
            src="/assets/icons/File.svg"
            alt="daily-offer"
            className="pr-6 w-12 h-12"
          />
          <h4 className="mr-[14px] my-auto">پوشه</h4>
        </a>
        <a className="mt-4 flex h-[48px] w-10/12 mx-auto rounded-lg" href='/tickets'>
          <img
            src="/assets/icons/Cloud.svg"
            alt="daily-offer"
            className="pr-6 w-12 h-12"
          />
          <h4 className="mr-[14px] my-auto">بایگانی</h4>
        </a>
        <a className="mt-4 flex h-[48px] w-10/12 mx-auto rounded-lg" href='/finantial'>
          <img
            src="/assets/icons/Wallet.svg"
            alt="daily-offer"
            className="pr-6 w-12 h-12"
          />
          <h4 className="mr-[14px] my-auto">کیف پول</h4>
        </a>
        <a className="mt-4 flex h-[48px] w-10/12 mx-auto rounded-lg" >
          <img
            src="/assets/icons/UserProfile.svg"
            alt="daily-offer"
            className="pr-6 w-12 h-12"
          />
          <h4 className="mr-[14px] my-auto">پروفایل کاربری</h4>
        </a>
      </div>
      <div className="mt-4 flex h-[48px] w-10/12 mx-auto rounded-lg">
        <img src="/assets/icons/Exit.svg" alt="daily-offer" className="pr-6 w-12 h-12" />
        <h4 className="mr-[14px] my-auto">خروج</h4>
      </div>
      <div className="bg-[#26397F] h-fit w-10/12 rounded-[20px] flex flex-col text-white  mt-32 mx-auto mb-4">
        <div className="bg-white rounded-full p-[13px] mx-auto -mt-8 Box-Shadow flex justify-center">
          <img src="/assets/icons/Info.svg" alt="Info" className="m-auto" />
        </div>
        <h1 className="text-center text-lg IranYekan-extrabold mt-1">
          رسیدگی به شکایات
        </h1>
        <p className="text-center w-10/12 mx-auto font-light mt-3">
          با ثبت سیمکارت خود در این قسمت، سیمکارت شما به مدت 48 ساعت در تمامی
        </p>
        <button className="bg-[#CB9044] w-10/12 mx-auto mt-[15px] mb-4 py-3 rounded-[10px]">
          ثبت شکایات
        </button>
      </div>
    </div>
  );
}

export default SideMenuOptions

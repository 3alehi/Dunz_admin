import React, { useState } from 'react'
import TransactionTable from '../../components/shared/tables/TransactionTable';
import UsageReportTable from '../../components/shared/tables/UsageReportTable';

const Finantial = () => {
    const [payment, setPayment] = useState(true);
    const [paymentType, setPaymentType] = useState(true);
  return (
    <div>
      <div id="header" className="md:flex w-full">
        <div className="flex items-center mr-6 mt-6">
          <img
            src="/assets/icons/Category.svg"
            alt="Category"
            className="w-6 h-6"
          />
          <h4 className="font-bold mr-[6px]">مالی</h4>
        </div>
      </div>
      <div className="bg-white border border-[#E0DEF7] py-6 md:mx-6 px-[38px] mt-[30px] rounded-xl md:flex justify-between min-w-fit">
        <div className="flex-col flex w-fit">
          <div className="bg-[#EAECF3] p-[5px] w-fit rounded-3xl md:rounded-full flex md:flex-row flex-col font-extrabold">
            <button
              onClick={() => {
                setPayment(false);
              }}
              className={`py-2 w-[170px] rounded-full ${
                payment ? "" : "bg-[#26397F] text-white"
              }`}
            >
              شارژ کیف پول
            </button>
            <button
              onClick={() => {
                setPayment(true);
              }}
              className={`py-2 w-[170px] rounded-full ${
                payment ? "bg-[#26397F] text-white" : ""
              }`}
            >
              برداشت وجه
            </button>
          </div>
          <h4 className="mt-5">مبلغ(تومان)</h4>
          <input className="bg-[#F7F7FA] mt-0.5 h-12 rounded-lg border border-[#E0DEF7] px-4 outline-none" />
          <button className="bg-[#26397F] py-[14px] mt-6 text-white rounded-lg">
            پرداخت
          </button>
        </div>
        <div className="md:mt-0 mt-12">
          <div className="bg-gradient-to-r from-[#CA8E45] relative to-[#E19F4E] text-white md:w-[365px] rounded-[20px] overflow-hidden right-0 left-0">
            <img
              src="/assets/icons/CardBG.svg"
              alt="CardBG"
              className="absolute bottom-0 top-0 h-full"
            />
            <div className="md:flex justify-between items-center mt-4 px-5">
              <span className="font-extrabold">موجودی فعلی</span>
              <h4 className="IranYekanExtraBold font-extrabold text-[25px] md:mt-0 mt-2">
                3،459،000 تومان
              </h4>
            </div>
            <div className="md:flex justify-between items-center md:my-4 mt-6 px-5">
              <span className="font-extrabold">درآمد شما</span>
              <h4 className="IranYekanExtraBold font-extrabold text-[25px] md:mt-0 mt-2">
                3،459،000 تومان
              </h4>
            </div>
          </div>
          <div>
            <div className="flex mt-6">
              <img src="/assets/icons/Exclamation.svg" />
              <h2 className="font-extrabold mr-1">نکات مهم</h2>
            </div>
            <div>
              <div className="flex items-center mt-3 text-[#434C5D]">
                <div className="h-[5px] w-[5px] bg-[#434C5D] rounded-full"></div>
                <span className="mr-[5px]">
                  بعد از پرداخت،امکان بازگشت وجه وجود ندارد
                </span>
              </div>
              <div className="flex items-center mt-3 text-[#434C5D]">
                <div className="h-[5px] w-[5px] bg-[#434C5D] rounded-full"></div>
                <span className="mr-[5px]">
                  9 درصد مالیات بر ارزش افزوده به مبلغ شارژ اضافه میشود
                </span>
              </div>
              <div className="flex items-center mt-3 text-[#434C5D]">
                <div className="h-[5px] w-[5px] bg-[#434C5D] rounded-full"></div>
                <span className="mr-[5px]">
                  شما تنها امکان برداشت پول از درآمد خود را دارید
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 mt-[50px]">
        <div className='flex'>
          <button
            onClick={() => setPaymentType(true)}
            className={`md:mr-7 mr-3 w-[93px] b-1 ${paymentType ? "text-[#CB9044]" : ""}`}
          >
            تراکنش ها{" "}
            {paymentType ? (
              <div className="min-w-[93px] h-1 bg-[#CB9044] rounded-t-[4px] mt-3 mx-autos"></div>
            ) : (
              <></>
            )}
          </button>
          <button
            onClick={() => setPaymentType(false)}
            className={`md:mr-[47px] mr-4 ${paymentType ? "" : "text-[#CB9044]"}`}
          >
            گزارش مصرف مشاورین{" "}
            {paymentType ? (
              <></>
            ) : (
              <div className="min-w-[93px] h-1 bg-[#CB9044] rounded-t-[4px] mt-3 mx-auto"></div>
            )}
          </button>
        </div>
        <div className="bg-white border border-[#E0DEF7] rounded-xl py-6">
          {paymentType ? <TransactionTable /> : <UsageReportTable />}
        </div>
      </div>
    </div>
  );
}

export default Finantial

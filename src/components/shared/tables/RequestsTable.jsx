import React, { useState } from 'react'
import Toastify from '../../Toast/Toastify';
import DeclineModal from '../modals/DeclineModal';

const RequestsTable = ({ Counsels, currentItems }) => {
  const [openToast, setOpenToast] = useState(false);

  const CloseToast = () => {
    setOpenToast(false);
  }
  const handleToastTimeout = () => {
    setOpenToast(true);
    const timeoutId = setTimeout(() => {
      setOpenToast(false);
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }
  return (
    <table className="w-full h-full">
      <tr className="h-16 mr-2 pr-4 w-full">
        <th className="font-normal text-[#626A78] text-right -translate-x-4 md:w-[23%] min-w-36">
          نام و نام خانوادگی
        </th>
        <th className="font-normal text-[#626A78] text-right -translate-x-4 md:w-[23%] min-w-44">
          تاریخ ارسال درخواست
        </th>
        <th className="font-normal text-[#626A78] text-right -translate-x-4 md:w-[23%] min-w-36">
          کد ملی
        </th>
        <th className="md:w-[9%] min-w-16"></th>
      </tr>
      {Counsels.length > 0 ? (
        currentItems.map((item, ind) => (
          <tr className="even:bg-[#F4F5F8] h-14" key={ind}>
            <td className="pr-7">{item.name}</td>
            <td className="pr-7">{item.date}</td>
            <td>{item.code}</td>
            <td className="pr-7 w-full">
              <div className=" flex justify-center items-center rounded-lg w-full">
                <DeclineModal/>
                <button onClick={() => handleToastTimeout()} className="bg-[#26397F] rounded-xl py-2 px-2 text-white hover:opacity-85">
                  قبول درخواست
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <></>
      )}
      {openToast ? <Toastify message="نرگس یوسفی به لیست مشاورین شما اضافه شد" CloseToast={CloseToast}/> : <></>}
    </table>
  );
};

export default RequestsTable

import React from 'react'
import AcceptModal from '../modals/AcceptModal';
import DeclineModal from '../modals/DeclineModal';

const CounselTable = ({currentItems,Counsels}) => {
  return (
    <table className="w-full mt-4 h-full">
      <tr className="h-16 mr-2 w-full">
        <th className="font-normal pr-4 text-[#626A78] text-right -translate-x-4 md:w-[23%] min-w-36">
          نام و نام خانوادگی
        </th>
        <th className="font-normal text-[#626A78] text-right -translate-x-4 md:w-[25%] min-w-36">
          تاریخ ارسال درخواست
        </th>
        <th className="font-normal text-[#626A78] text-right -translate-x-4 md:w-[23%] min-w-36">
          کد ملی
        </th>
        <th className="font-normal text-[#626A78] text-right -translate-x-4 md:w-[23%] min-w-36">
          سهمیه مشاور(تومان)
        </th>
        <th className="md:w-[7%] min-w-16"></th>
      </tr>
      {Counsels.length > 0 ? (
        currentItems.map((item, ind) => (
          <tr className="even:bg-[#F4F5F8] h-14" key={ind}>
            <td className="pr-10">{item.name}</td>
            <td className="pr-11">{item.date}</td>
            <td>{item.code}</td>
            <td className="pr-9">
              {item.quote.length > 0 ? (
                <div className="flex items-center">
                  <h4 className="ml-2">{item.quote}</h4>
                  <img src="/assets/icons/EditPen.svg" alt="Edit-Pen" />
                </div>
              ) : (
                <AcceptModal />
              )}
            </td>
            <td>
              <div className="w-[30px] h-[30px] bg-[#EAECF3] hover:bg-gray-400 flex justify-center items-center rounded-lg  cursor-pointer">
                <img src="/assets/icons/Trash.svg" alt="trash" />
              </div>
            </td>
          </tr>
        ))
      ) : (
        <></>
      )}
    </table>
  );
}

export default CounselTable

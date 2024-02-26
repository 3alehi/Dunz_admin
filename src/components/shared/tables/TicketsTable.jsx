import React from 'react';
import { useNavigate } from 'react-router-dom';

const TicketsTable = ({Counsels,currentItems}) => {
    const navigate = useNavigate()
    
  return (
    <table className="w-full h-full">
      <tr className="h-16 mr-2 pr-4 w-full">
        <th className="font-normal text-[#626A78] text-center md:w-[14%] min-w-36">
          شماره تیکت
        </th>
        <th className="font-normal text-[#626A78] text-center md:w-[14%] min-w-44">
          تاریخ ارسال بررسی
        </th>
        <th className="font-normal text-[#626A78] text-center md:w-[36%] min-w-36">
          عنوان تیکت
        </th>
        <th className="font-normal text-[#626A78] text-center md:w-[14%] min-w-36">
          وضعیت
        </th>
        <th className="md:w-[12%] min-w-16"></th>
      </tr>
      {Counsels.length > 0 ? (
        currentItems.map((item, ind) => {
          switch (item.statue) {
            case 1:
              return (
                <tr className="even:bg-[#F4F5F8] h-14" key={ind}>
                  <td className="text-center">{item.num}</td>
                  <td className="text-center">{item.date}</td>
                  <td className='text-center'>{item.detail}</td>
                  <td className="text-[#1BA781] text-center">پاسخ داده شده</td>
                  <td className='flex justify-center items-center h-full'>
                    <button className='text-white bg-[#26397F] py-1.5 px-2.5 rounded-xl' onClick={() => navigate('123456')}>مشاهده جزییات</button>
                  </td>
                </tr>
              );
            case 2:
              return (
                <tr className="even:bg-[#F4F5F8] h-14" key={ind}>
                  <td className="text-center">{item.num}</td>
                  <td className="text-center">{item.date}</td>
                  <td className='text-center'>{item.detail}</td>
                  <td className="text-[#FC5700] text-center">درحال بررسی</td>
                  <td className='flex justify-center items-center h-full'>
                    <button className='text-white bg-[#26397F] py-1.5 px-2.5 rounded-xl' onClick={() => navigate('123456')}>مشاهده جزییات</button>
                  </td>
                </tr>
              );
            case 3:
              return (
                <tr className="even:bg-[#F4F5F8] h-14" key={ind}>
                  <td className="text-center">{item.num}</td>
                  <td className="text-center">{item.date}</td>
                  <td className='text-center'>{item.detail}</td>
                  <td className="text-[#E11640] text-center">بسته</td>
                  <td className='flex justify-center items-center h-full'>
                    <button className='text-white bg-[#26397F] py-1.5 px-2.5 rounded-xl' onClick={() => navigate('123456')}>مشاهده جزییات</button>
                  </td>
                </tr>
              );
            default:
              console.log("error");
          }
        })
      ) : (
        <></>
      )}
    </table>
  );
}

export default TicketsTable
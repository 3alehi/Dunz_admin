import React, { useState } from 'react'
import Pagination from '../Pagination';
import Filters from '../Filters';

const TransactionTable = () => {
  const Counsels = [
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "واریز به کیف پول",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "برداشت از کیف پول",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "واریز سهمیه مشاور",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "برداشت از کیف پول",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "واریز سهمیه مشاور",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "برداشت از کیف پول",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "واریز سهمیه مشاور",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "برداشت از کیف پول",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "واریز سهمیه مشاور",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "برداشت از کیف پول",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "واریز سهمیه مشاور",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "برداشت از کیف پول",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "واریز سهمیه مشاور",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "برداشت از کیف پول",
    },
    {
      trancNum: "2345567889",
      date: "23:23 1400/09/09",
      price: "1234567890",
      trancType: "واریز سهمیه مشاور",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const indexOfLastItem = currentPage + itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Counsels.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const [filter, setFilter] = useState(false)

  return (
    <div>
      <div className="flex md:flex-row flex-col w-full justify-between">
        <div className="flex md:mt-4 mt-2 justify-between">
          <h4 className=" font-extrabold mr-8">تراکنش ها</h4>
          <div className="flex ml-8  md:hidden" onClick={() => setFilter(!filter)}>
            <h4 className="ml-1">فیلترها</h4>
            <img src="/assets/icons/Filter.svg" alt="Filter" />
          </div>
        </div>
        <div className='md:block hidden'>
          <Filters />
        </div>
        {filter ? <Filters /> : null}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full h-full mt-[60px]">
          <tr className="h-16 mr-2 pr-4 w-full">
            <th className="font-normal text-[#626A78] text-center md:w-[14%] min-w-36">
              شماره تراکنش
            </th>
            <th className="font-normal text-[#626A78] text-center md:w-[14%] min-w-44">
              تاریخ
            </th>
            <th className="font-normal text-[#626A78] text-center md:w-[14%] min-w-36">
              مبلغ( تومان)
            </th>
            <th className="font-normal text-[#626A78] text-center md:w-[14%] min-w-16">
              نوع تراکنش
            </th>
          </tr>
          {Counsels.length > 0 ? (
            currentItems.map((item, ind) => (
              <tr className="even:bg-[#F4F5F8] h-14" key={ind}>
                <td className="text-center">{item.trancNum}</td>
                <td className="text-center">{item.date}</td>
                <td className="text-center">{item.price}</td>
                <td className="text-center">{item.trancType}</td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </table>
      </div>
      <div
        className={`flex-col items-center py-20 rounded-lg mx-5 bg-[#F4F5F8] ${
          Counsels.length > 0 ? "hidden" : "flex"
        }`}
      >
        <h4 className="text-center mt-4">هنوز تراکنشی انجام نگرفته است</h4>
      </div>
      <Pagination
        totalItems={Counsels.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default TransactionTable

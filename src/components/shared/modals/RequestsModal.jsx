import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import RequestsTable from "../tables/RequestsTable";

const RequestsModal = ({closeModal, openModal}) => {
  
  
  const Counsels = [
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'2,000,000',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'2,000,000',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'2,000,000',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'2,000,000',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'2,000,000',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'',
    },
    {
        name: 'نرگس یوسفی',
        date: '23:23 1400/09/09',
        code:'1234567890',
        quote:'',
    },
]
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const indexOfLastItem = currentPage + itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Counsels.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div id="Modal" className="">
        <div className="bg-white absolute top-4 left-1/2 z-40 -translate-x-1/2 p-6 rounded-lg md:min-w-[70%] w-72 overflow:ff">
          <div className="flex pb-6 border-b-2">
            <h4 className="font-semibold">درخواست ها</h4>
            <img
              onClick={closeModal}
              src="/assets/icons/ExitModal.svg"
              alt="Modal-Exit"
              className="ms-auto cursor-pointer"
            />
          </div>
          <div className=" bg-white rounded-lg border border-[#E0DEF7] mt-6 overflow-x-auto w-full">
            <div className="flex mt-4 w-full justify-between">
              <h4 className="mr-4 font-semibold w-full my-auto">مشاورین</h4>
              <div className="md:ml-8 md:mr-0 mr-8 w-full justify-end flex relative">
                <input
                  type="text"
                  className="outline-none border rounded-lg py-3 px-4 md:w-11/12 min-w-[10px] border-[#E0DEF7]"
                  placeholder="جستجو کنید"
                />
                <img
                  src="/assets/icons/Magnet.svg"
                  alt="Magnet"
                  className="absolute top-3 left-2 md:block hidden"
                />
              </div>
            </div>
            <RequestsTable closeModal={closeModal} Counsels={Counsels} currentItems={currentItems} />
            <div
              className={`flex-col justify-start items-center my-56 w-full ${
                Counsels.length > 0 ? "hidden" : "flex"
              }`}
            >
              <img src="/assets/icons/EmptyCounsel.svg" alt="Empty-Counsel" />
              <h4 className="w-64 text-center mt-4 font-semibold">
                لیست مشاورین خالی است لیست درخواست ها را بررسی کنید
              </h4>
            </div>
          </div>
          <Pagination
            totalItems={Counsels.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
        <div className="backdrop-blur-sm bg-gray-500 bg-opacity-80 fixed inset-0 z-30"></div>
      </div>
    </div>
  );
};

export default RequestsModal;

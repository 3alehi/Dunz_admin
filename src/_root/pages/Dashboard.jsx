import React, { useEffect, useState } from 'react'
import Pagination from '../../components/shared/Pagination';
import CounselTable from '../../components/shared/tables/CounselTable';
import RequestsModal from '../../components/shared/modals/RequestsModal';
import NewTicketModal from '../../components/shared/modals/NewTicketModal';

const Dashboard = () => {
  const [requestModal, setRequestModal] = useState(false)

  const openModal = () => {
    setRequestModal(true)
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    document.body.style.overflow = 'hidden';
    
  }
  const closeModal = () => {
    setRequestModal(false)
    document.body.style.overflow = 'auto';
  }
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
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const indexOfLastItem = currentPage + itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Counsels.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
          <h4 className="font-bold mr-[6px]">مدیریت مشاورین</h4>
        </div>
        <div className="md:flex items-center ml-6 mt-6 ms-auto">
          <h4 className="IranYekan-extrabold md:ml-5  text-[#1BA781] md:mr-0 mr-6">
            26 درخواست برای شما وجود دارد
          </h4>
          <button
            onClick={openModal}
            className="bg-[#27397D] text-white py-[14px] px-9 rounded-lg md:mr-0 mr-6 md:mt-0 mt-6 hover:opacity-85"
          >
            مشاهده درخواست ها
          </button>
          {requestModal ? <RequestsModal openModal={openModal} closeModal={closeModal} /> : null}
            
        </div>
      </div>
      <div id="body" className="body mt-12 h-screen w-[95%] mx-auto">
        <div>
          <div className="w-full md:overflow-x-auto overflow-y-hidden h-full bg-white rounded-xl border border-[E0DEF7]">
            <div className="flex mt-8">
              <h4 className="mr-4 IranYekan-extrabold md:w-full w-10">لیست مشاورین</h4>
              <div className="md:ml-8 md:mr-0 mr-20 w-full justify-end flex relative">
                <input
                  type="text"
                  className="outline-none border rounded-lg py-3 px-4 md:w-3/5 min-w-10px border-[#E0DEF7]"
                  placeholder="جستجو کنید"
                />
                <img
                  src="/assets/icons/Magnet.svg"
                  alt="Magnet"
                  className="absolute top-3 left-2 md:block hidden"
                />
              </div>
            </div>
            <CounselTable currentItems={currentItems} Counsels={Counsels} />
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
      </div>
    </div>
  );
}

export default Dashboard;

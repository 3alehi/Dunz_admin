import React, { useState } from 'react'
import Toastify from '../../Toast/Toastify';
import DragAndDrop from '../DragAndDrop';

const NewTicketModal = () => {
    const [activeModal, setActiveModal] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const handleOpenModal = () => {   
    setActiveModal(true);
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    document.body.style.overflow = 'hidden';
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
  const handleCloseModal = () => {
    setActiveModal(false);
    document.body.style.overflow = 'auto';
  }
  const CloseToast = () => {
    setOpenToast(false);
  }
  const handleSubmit = () => {
    handleCloseModal();
    handleToastTimeout();
  }
  return (
    <div>
      <button
        onClick={() => handleOpenModal()}
        className="bg-[#27397D] text-white py-[14px] min-w-[200px] rounded-lg md:mr-0 mr-6 md:mt-0 mt-6 hover:opacity-85"
      >
        ثبت تیکت جدید
      </button>
      {activeModal && (
        <div>
          <div className="bg-white absolute top-10 left-1/2 z-40 -translate-x-1/2 p-6 rounded-lg md:min-w-[35%] w-72">
            <div className="flex pb-6 border-b-2">
              <h4 className="font-semibold">ایجاد تیکت جدید</h4>
              <img
                onClick={() => handleCloseModal()}
                src="/assets/icons/ExitModal.svg"
                alt="Modal-Exit"
                className="ms-auto cursor-pointer"
              />
            </div>
            <div className="mt-6">
              <div>
                <h2 className="text-sm">عنوان تیکت را بنویسید</h2>
                <input className="bg-[#F7F7FA] outline-none border border-[#E0DEF7] rounded-lg w-full mt-2 h-10 px-3 py-1.5" />
              </div>
              <div className="mt-5">
                <h2 className="text-sm">عنوان تیکت را بنویسید</h2>
                <textarea className="bg-[#F7F7FA] outline-none border border-[#E0DEF7] rounded-lg w-full mt-2 h-[100px] px-3 py-1.5" />
              </div>
              <div className="mt-5">
                <h2 className="font-bold">
                  تصاویر ملک را بارگذاری کنید
                </h2>
                <div className='mt-[14px]'>
                  <DragAndDrop />
                </div>
              </div>
              <button
                onClick={() => handleSubmit()}
                className="bg-[#26397F] w-full hover:opacity-85 rounded-lg text-white py-3 mt-10 text-sm"
              >
                ثبت
              </button>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-gray-500 bg-opacity-80 fixed inset-0 z-30"></div>
        </div>
      )}
      {openToast ? (
        <Toastify
          message="تیکت جدید با موفقیت ثبت شد"
          CloseToast={CloseToast}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default NewTicketModal

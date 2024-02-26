import React, { useCallback, useState } from 'react'
import Toastify from '../../Toast/Toastify';

const AcceptModal = () => {
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
      <h4 onClick={() => handleOpenModal()} className="text-[#CB9044] cursor-pointer hover:opacity-75">
        تعیین سهمیه
      </h4>
      {activeModal && (
        <div>
          <div className="bg-white absolute top-10 left-1/2 z-40 -translate-x-1/2 p-6 rounded-lg md:min-w-[35%] w-72">
            <div className="flex pb-6 border-b-2">
              <h4 className="font-semibold">تعیین سهمیه برای نرگس یوسفی</h4>
              <img
                onClick={() => handleCloseModal()}
                src="/assets/icons/ExitModal.svg"
                alt="Modal-Exit"
                className="ms-auto cursor-pointer"
              />
            </div>
            <div className="flex mt-6">
              <img src="/assets/icons/Checked.svg" alt="Checked" />
              <h4 className="text-xs my-auto mr-1">
                این سهمیه مبلغ تعیین شده برای مشاور جهت ثبت آگهی میباشد
              </h4>
            </div>
            <div className="mt-6">
              <h2 className="text-sm">مبلغ مورد نظر را به تومان وارد کنید</h2>
              <input className="bg-[#F7F7FA] outline-none border border-[#E0DEF7] rounded-lg w-full mt-2 h-10 px-3 py-1.5" />
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
      {openToast ? <Toastify message="نرگس یوسفی با موفقیت تعیین سهمیه شد" CloseToast={CloseToast}/> : <></>}
    </div>
  );
}

export default AcceptModal

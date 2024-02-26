import React, { useState } from 'react';
import Toastify from '../../Toast/Toastify';

const DeclineModal = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [openToast, setOpenToast] = useState(false);

      const handleOpenModal = () => {
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
        setActiveModal(true);
        document.body.style.overflow = 'hidden';
      }
      const handleCloseModal = () => {
        setActiveModal(false);
        document.body.style.overflow = 'auto';
      }
      const CloseToast = () => {
        setOpenToast(false);
      }
      const handleToastTimeout = () => {
        setOpenToast(true);
        setActiveModal(false);
        const timeoutId = setTimeout(() => {
          setOpenToast(false);
        }, 6000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }
    
  return (
    <div>
      <button onClick={() => handleOpenModal()} className="hover:opacity-70 border border-[#26397F] rounded-xl py-2 px-2 ml-2">
        رد درخواست
      </button>
      {activeModal && (
        <div>
          <div className="bg-white absolute top-10 left-1/2 z-40 -translate-x-1/2 p-6 rounded-lg md:min-w-[516px] w-72">
            <div className="flex pb-6 border-b-2">
              <h4 className="font-semibold">علت رد کردن مشاوره</h4>
              <img
                onClick={() => handleCloseModal()}
                src="/assets/icons/ExitModal.svg"
                alt="Modal-Exit"
                className="ms-auto cursor-pointer"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-sm">علت رد کردن مشاور را بنویسید</h2>
              <textarea className="bg-[#F7F7FA] outline-none border border-[#E0DEF7] rounded-lg w-full mt-2 h-[100px] px-4 py-2" />
              <button
                onClick={() => handleToastTimeout()}
                className="bg-[#26397F] w-full rounded-lg text-white py-3 mt-10 text-sm"
              >
                ثبت تعرفه
              </button>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-gray-500 bg-opacity-80 fixed inset-0 z-30"></div>
        </div>
      )}
      {openToast ? (
        <Toastify message="درخواست با موفقیت رد شد" CloseToast={CloseToast} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default DeclineModal

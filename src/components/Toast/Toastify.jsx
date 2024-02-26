import React from 'react'

const Toastify = ({CloseToast,message}) => {

  return (
    <div className="fixed w-[437px] h-fit z-50 inset-0 Box-Shadow bg-white top-8 right-0">
      <div className="flex">
        <div className="min-h-full w-14 bg-[#E9F7F3] flex">
          <img
            src="/assets/icons/Success.svg"
            alt="success"
            className="w-7 h-7 m-auto"
          />
        </div>
        <div className="mt-3 mb-8 w-full px-4">
          <div className='flex justify-between'>
            <h1 className="font-extrabold">موفق</h1>
            <img src='/assets/icons/X.svg' className='cursor-pointer' onClick={CloseToast}/>
          </div>
          <h4 className="mt-[10px] text-sm">{message}</h4>
        </div>
      </div>
      <div className="animtedTime h-[6px] absolute right-12 bottom-0"></div>
    </div>
  );
}

export default Toastify

import React from 'react'

const Alert = ({message,type,handleCloseModal,submit}) => {

  return (
    <div>
      <div className="fixed bg-white left-1/2 -translate-x-1/2 min-w-[500px] z-40 top-1/4 flex flex-col items-center rounded-2xl">
        {type === "warning" ? (
          <div className="bg-[#F9D3DB] rounded-full border-2 border-white p-4 -mt-7 AlertShadow">
            <img src="/assets/icons/Warning.svg" alt="Warning" className="" />
          </div>
        ) : (
          <div className="bg-[#F9D3DB] rounded-full border-2 border-white p-4 -mt-7 AlertShadow">
            <img src="/assets/icons/Change.svg" alt="Change" className="" />
          </div>
        )}
        <h4 className='mt-8 font-semibold'>{message}</h4>
        <div className='flex w-full justify-evenly mb-8 mt-10'>
            <button onClick={handleCloseModal} className='bg-[#26397F] rounded-lg w-2/5 text-white py-3'>{submit}</button>
            <button onClick={handleCloseModal} className='border border-[#26397F] rounded-lg w-2/5 py-3'>انصراف</button>
        </div>
      </div>
      <div className="fixed inset-0 backdrop-blur-sm bg-gray-500 bg-opacity-80 z-30"></div>
    </div>
  );
}

export default Alert

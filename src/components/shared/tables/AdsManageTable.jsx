import React, { useState } from 'react'
import Alert from '../Alert';

const AdsManageTable = ({Counsels,currentItems}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertChange, setShowAlertChange] = useState(false);

  const handleOpenModal = () => {
    setShowAlert(true);
    document.body.style.overflow = 'hidden';
  }
  const handleCloseModal = () => {
    setShowAlert(false);
    document.body.style.overflow = 'auto';
  }
  const handleOpenModalChange = () => {
    setShowAlertChange(true)
    document.body.style.overflow = 'hidden';
  }
  const handleCloseModalChange = () => {
    setShowAlertChange(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <table className="w-full mt-4 h-full">
      <tr className="h-16 mr-2 pr-4 w-full">
        <th className="md:w-[2%] min-w-4"></th>
        <th className="font-normal text-[#626A78] text-right -translate-x-4 md:w-[40%] min-w-72">
          عنوان آگهی
        </th>
        <th className="font-normal text-[#626A78] text-right -translate-x-4 md:w-[20%] min-w-44">
          نام و نام خانوادگی مشاور
        </th>
        <th className="font-normal text-[#626A78] text-right -translate-x-4 md:w-[18%] min-w-44">
          تاریخ ارسال درخواست
        </th>
        <th className="md:w-[23%] min-w-36"></th>
      </tr>
      {Counsels.length > 0 ? (
        currentItems.map((item, ind) => (
          <tr className="even:bg-[#F4F5F8] h-14" key={ind}>
            <td className="pr-7">
              <label>
                <input
                  id="checkbox-1"
                  class="w-5 h-5 rounded-full"
                  type="checkbox"
                />
              </label>
            </td>
            <td className="pr-7">{item.text}</td>
            <td className="pr-7">{item.name}</td>
            <td className="pr-7">{item.date}</td>
            <td className="pr-7 flex h-full items-center justify-evenly ml-4">
              <button
                onClick={() => handleOpenModalChange()}
                className="text-sm text-white rounded-xl bg-[#26397F] px-3 min-w-36 h-3/4"
              >
                مشاهده جزییات
              </button>

              <div
                onClick={() => handleOpenModal()}
                className="w-[30px] h-[30px] bg-[#EAECF3] hover:bg-gray-400 flex justify-center items-center rounded-lg  cursor-pointer mr-4"
              >
                <img src="/assets/icons/Trash.svg" alt="trash" />
              </div>
            </td>
          </tr>
        ))
      ) : (
        <></>
      )}
      {showAlert && (
        <Alert
          handleCloseModal={handleCloseModal}
          submit="حذف"
          message="آیا از حذف آگهی “ محل قرارگیری عنوان آگهی” مطمئنید؟"
          type="warning"
        />
      )}
      {showAlertChange && (
        <Alert
          handleCloseModal={handleCloseModalChange}
          submit="ادامه"
          message="با تغییر منطقه امکان دیدن آگهی های منطقه قبلی را ندارید"
          type="Change"
        />
      )}
    </table>
  );
}

export default AdsManageTable

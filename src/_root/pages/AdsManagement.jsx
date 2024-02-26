import React, { useState } from "react";
import Pagination from "../../components/shared/Pagination";
import AdsManageTable from "../../components/shared/tables/AdsManageTable";

const AdsManagement = () => {
  const [showInfo, setShowInfo] = useState(false);
  const Counsels = [
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      name: "نرگس یوسفی",
      date: "1400/09/09  23:23",
    },
  ];

  const handleInfoModal = () => {
    setShowInfo(true);
    const timeoutId = setTimeout(() => {
      setShowInfo(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage + itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Counsels.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex w-full flex-col">
      <div id="header" className="md:flex w-full">
        <div className="flex items-center mr-6 mt-6">
          <img
            src="/assets/icons/Category.svg"
            alt="Category"
            className="w-6 h-6"
          />
          <h4 className="font-semibold mr-[6px]">مدیریت آگهی ها</h4>
        </div>
      </div>
      <div id="body" className="mt-12 h-screen w-[95%] mx-auto">
        <div>
          <div className="w-full md:overflow-x-auto overflow-y-hidden h-full bg-white rounded-xl border border-[E0DEF7]">
            <div className="flex mt-8 relative">
              <h4 className="mr-4 font-semibold w-full">لیست آگهی ها</h4>
              <button
                className="bg-[#CB9044] rounded-xl flex text-white min-w-48 justify-center py-3 ml-6"
                onClick={() => handleInfoModal()}
              >
                <img
                  src="/assets/icons/Upgrade.svg"
                  alt="Upgrade"
                  className="ml-2"
                />
                <h4>ارتقای گروهی</h4>
              </button>
              {showInfo ? (
                <div
                  id="info"
                  className="bg-[#3D3C3C] absolute left-7 top-16 w-[182px] flex rounded-lg text-white flex-col"
                >
                  <img
                    src="/assets/icons/Triangle.svg"
                    className="rounded absolute w-4 h-4 left-1/2 -top-3 -translate-x-1/2"
                    alt="Triangle"
                  />
                  <h4 className=" IranYekan-Light mt-4 text-sm w-11/12 mx-auto text-center">
                    برای استفاده از آپشن باید چند آگهی را انتخاب نمایید
                  </h4>
                  <button className="mt-4 mb-6 border-b w-fit mx-auto">
                    ارتقای گروهی چیست؟
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
            <AdsManageTable currentItems={currentItems} Counsels={Counsels} />
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
};

export default AdsManagement;

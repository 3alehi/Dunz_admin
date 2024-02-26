import React, { useState } from 'react'
import Pagination from '../../components/shared/Pagination'
import TicketsTable from '../../components/shared/tables/TicketsTable'
import NewTicketModal from '../../components/shared/modals/NewTicketModal'

const Tickets = () => {
  
        const Counsels = [
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 2,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 3,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 1,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 2,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 2,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 1,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 3,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 1,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 1,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 1,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 1,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 1,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 2,
            },
            {
                num: '123456',
                date: '23:23 1400/09/09',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                statue: 1,
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
          <h4 className="font-bold mr-[6px]">تیکت ها</h4>
        </div>
        <div className="md:flex items-center ml-6 mt-6 ms-auto">
          <NewTicketModal/>
        </div>
      </div>
      <div id="body" className="body mt-12 h-screen w-[95%] mx-auto">
        <div>
          <div className="w-full md:overflow-x-auto overflow-y-hidden h-full bg-white rounded-xl border border-[E0DEF7]">
            <TicketsTable currentItems={currentItems} Counsels={Counsels} />
            <div
              className={`flex-col justify-start items-center my-56 w-full ${
                Counsels.length > 0 ? "hidden" : "flex"
              }`}
            >
              <img src="/assets/icons/EmptyTicket.svg" alt="Empty-Ticket" />
              <h4 className="w-64 text-center mt-4 font-semibold">
              هنوز هیچ تیکتی ثبت نکرده اید
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

export default Tickets

import React from 'react'

const Pagination = ({totalItems,itemsPerPage,onPageChange ,currentPage}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);
  return (
    <div>
      <div className={`${totalItems > 0 ? "flex" : "hidden"} w-full justify-center items-center mt-4`}>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="mr-2 px-3 py-1"
        >
          <img src={`${currentPage === 1 ? '/assets/icons/RightArrow.svg' : '/assets/icons/ARightArrow.svg'}`} alt='RightArrow'/>
        </button>
        {pageNumbers.map((page) => (
          <button
            className={`h-8 w-8 mr-2 rounded-md border-[#78909C] text-lg border ${
              currentPage === page
                ? "text-white bg-[#26397F]"
                : " text-[#78909C]"
            }`}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="mr-2 px-3 py-1 "
        >
          <img src={`${currentPage === totalPages ? '/assets/icons/LeftArrow.svg' : '/assets/icons/ALeftArrow.svg'}`} alt='LeftArrow'/>
        </button>
      </div>
    </div>
  );
}

export default Pagination

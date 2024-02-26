
import React from 'react'
import { DatePicker } from 'zaman';

const Filters = () => {
  return (
    <div className="md:flex md:flex-row flex-col md:mt-0 mt-8 md:mr-0 mr-8">
      <div className="ml-5 ">
        <h4>نوع تراکنش</h4>
        <select className="mt-2 text-[#434C5D] bg-[#F7F7FA] border rounded-lg py-2 w-[200px] px-4 border-[#E0DEF7]">
          <option hidden>انتخاب کنید</option>
        </select>
      </div>
      <div className="ml-5 ">
        <h4>از تاریخ</h4>
        <DatePicker onChange={(e) => console.log(e.value)} inputClass="mt-2 px-3 py-1.5 bg-[#F7F7FA] w-[200px] h-10 rounded-lg border border-[#E0DEF7]"/>
      </div>
      <div className="ml-[30px]">
        <h4>تا تاریخ</h4>
        <DatePicker onChange={(e) => console.log(e.value)} inputClass="px-3 py-1.5 mt-2 bg-[#F7F7FA] w-[200px] h-10 rounded-lg border border-[#E0DEF7]"/>
      </div>
      <div className="mt-8">
        <button className="bg-[#26397F] rounded-xl text-white h-10 px-[14px] ml-[22px]">
          جستجو
        </button>
      </div>
    </div>
  );
}

export default Filters

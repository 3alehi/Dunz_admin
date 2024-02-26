import React, { useState } from 'react'
import SideMenuOptions from './SideMenuOptions';

const SideMenu = () => {
  
  const [hamburgerMenu , setHamburgerMenu] = useState(false);
  return (
    <div id='sideMenu' className="md:w-1/6 w-2/3 md:static sticky z-10 top-0 bottom-0 md:h-full md:min-h-[970px]">
      <div onClick={() => setHamburgerMenu(true)} className={`pt-4 pr-4 md:hidden fixed left-0 right-0 top-0 bg-white h-fit z-50 ${hamburgerMenu ? " hidden" : ""}`}>
        <img src="/assets/icons/Hamburger.svg" alt="Hamburger" className='w-8 h-8'/>
      </div>
      <div className={`w-full ${hamburgerMenu ? "md:static absolute" : "md:block static hidden"}`}>
        <SideMenuOptions activeMenu={setHamburgerMenu}/>
      </div>
    </div>
  );
}

export default SideMenu

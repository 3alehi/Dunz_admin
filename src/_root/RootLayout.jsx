import React from 'react'
import SideMenu from '../components/shared/SideMenu'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='md:flex h-full relative w-full'>
      <SideMenu />
      <section className='md:bg-[#F7F8FA] md:w-5/6 w-full md:min-h-screen'>
        <Outlet />
      </section>
    </div>
  );
}

export default RootLayout

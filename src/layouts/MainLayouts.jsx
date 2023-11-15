import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const MainLayouts = () => {
  return (
    <div >
      <div className='w-full'>
        <Navbar />
      </div>
      <div className=' max-w-6xl mx-auto overflow-hidden' >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
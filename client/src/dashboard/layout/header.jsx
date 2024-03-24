import React from 'react';

function Header() {
  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
      <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-white'>
        <input className='px-3 py-2 rounded-md outline-0 border-gray-400 focus:border-green-500 h-10 border' type='text' placeholder='Search' />
        <div className='flex items-center'>
          <div className='flex flex-col justify-center items-end'>
            <span>Md.Ibrahim</span>
            <span>Admin</span>
          </div>
          <img src='http://localhost:5173/admin.jpg' className='rounded-full w-10 h-10 ml-2'/>
        </div>
      </div>
    </div>
  );
}

export default Header;

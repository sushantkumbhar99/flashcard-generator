import React from 'react';
import Logo from './logo.png'
const Header = () => {


  return (
    <div className=' max-w-screen-xl shadow-lg  text-left mx-auto'>
      <div className='flex items-center font-medium text-3xl py-4'>
                <img className='h-10 my-auto ml-4' src={Logo} alt="AlmaBetter" />
                <span className='dark:text-white'>maBetter</span>
            </div>
     </div>
  );
}

export default Header;

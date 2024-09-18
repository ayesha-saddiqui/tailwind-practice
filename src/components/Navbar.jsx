import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

export const Navbar = () => {
  let [open, setOppen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-gray-400 py-4 md:px-10 px-7 lg:justify-center lg:gap-80'>
        <div className='cursor-pointer transition ease-in-out hover:scale-110 duration-1000 '>
          <h2 className='text-3xl  text-white hover:text-blue-700 font-bold '>
            <span className='text-blue-700 hover:text-white'>awaL</span>{' '}
            soLutioN
          </h2>
        </div>
        <nav>
          <div
            onClick={() => setOppen(!open)}
            className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden '
          >
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center bg-white lg:bg-gray-400  md:bg-gray-400 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
          duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'}`}
          >
            <li className='md:ml-4  text-lg md:my-0 my-7  text-blue-700 hover:text-white duration-500 '>
              <NavLink to='/'> HOME</NavLink>
            </li>
            <li className='md:ml-4 text-lg md:my-0 my-7 text-blue-700 hover:text-white duration-500 '>
              <NavLink to='/services'>SERVICES</NavLink>
            </li>
            <li className='md:ml-4 text-lg md:my-0 my-7 text-blue-700 hover:text-white duration-500 '>
              <NavLink to='/about'>ABOUT</NavLink>
            </li>
            <li className='md:ml-4 text-lg md:my-0 my-7 text-blue-700 hover:text-white duration-500 '>
              <NavLink to='/team'>TEAM</NavLink>
            </li>
            <li className='md:ml-4 text-lg md:my-0 my-7 text-blue-700 hover:text-white duration-500 '>
              <NavLink to='/contact'>CONTACT</NavLink>
            </li>
            <Button />
          </ul>
        </nav>
      </div>
    </div>
  );
};

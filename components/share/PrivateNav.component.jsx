import OutsideClickHandler from "react-outside-click-handler";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
const PrivateNavbar = (props) => {
  const [showDrop, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!showDrop);
  };
  return (
    <>
      {/*Header Section Starts Here*/}
      <header className='bg-blue-700  h-16'>
        <div className='flex items-center py-2'>
          <div className='text-white cursor-pointer mr-1 ml-2   md:hidden block '>
            <FaIcons.FaBars fontSize='1.5rem' />
          </div>
          <a className=' mx-2  inline-flex cursor-pointer'>
            <img
              src='/images/logo.png'
              alt=''
              className='h-12 rounded border '
            />
            {/* <span className='text-white p-2 mr-2 no-underline hidden md:block lg:block'>
              Github
            </span> */}
          </a>

          <div className='p-1 flex flex-row ml-auto'>
            <a className='text-white p-3 mr-2 no-underline hidden md:block lg:block'>
              Github
            </a>
            <OutsideClickHandler
              onOutsideClick={() => {
                setDropdown(false);
              }}
            >
              <img
                src='/images/avatar.png'
                alt=''
                onClick={toggleDropdown}
                className='h-10 rounded-full border mr-4'
              />
              <div
                className={`${
                  !showDrop ? "hidden" : ""
                } origin-top-right  absolute right-0 sm:mr-4  mt-1 sm:w-40 w-full rounded-md shadow-lg`}
              >
                <div
                  className='py-1 rounded-md bg-white shadow-xs'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100'
                    role='menuitem'
                  >
                    Your Profile
                  </a>

                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Settings
                  </a>

                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </header>
      {/*/Header*/}
    </>
  );
};

export default PrivateNavbar;

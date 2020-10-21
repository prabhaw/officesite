import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu.component";
import NavItem from "./Navmenu.component";
const PublicNavbar = (props) => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div
        className={` bg-white,   ${
          props.scroll ? "shadow-md" : "md:py-3 "
        } overflow-hidden`}
      >
        <div className='max-w-screen-xl mx-auto'>
          <div className=' z-10  bg-white   lg:w-full  '>
            <div className={" md:py-4 py-3  px-4 sm:px-6 lg:px-8"}>
              <nav className=' flex items-center justify-between sm:h-10 '>
                <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                  <div className='flex items-center justify-between w-full md:w-auto'>
                    <Link href='/'>
                      <a aria-label='Home'>
                        <img
                          className='h-8 w-auto sm:h-10'
                          src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                          alt='Logo'
                        />
                      </a>
                    </Link>
                    <div className='-mr-2 flex items-center md:hidden'>
                      <button
                        type='button'
                        className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                        id='main-menu'
                        aria-label='Main menu'
                        aria-haspopup='true'
                        onClick={() => {
                          setMobile(true);
                        }}
                      >
                        <svg
                          className='h-6 w-6'
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <path strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <NavItem />
              </nav>
            </div>
          </div>
          {/* ---------------mobile nav----------------------- */}
          <MobileMenu
            mobile={mobile}
            openClose={() => {
              setMobile(false);
            }}
          />
          {/*----------------- mobile nav---------------------------- */}
        </div>
      </div>
    </>
  );
};

export default PublicNavbar;

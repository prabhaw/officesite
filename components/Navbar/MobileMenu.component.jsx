import Link from "next/link";
import { useState } from "react";
const MobileMenu = (props) => {
  const [service, setService] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <>
      <div
        className={`${
          props.mobile ? "block z-20" : "hidden"
        } absolute  top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className='rounded-lg shadow-md'>
          <div
            className='rounded-lg bg-white shadow-xs overflow-hidden'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='main-menu'
          >
            <div className='px-5 pt-4 flex items-center justify-between'>
              <Link href='/'>
                <a>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                    alt=''
                  />
                </a>
              </Link>
              <div className='-mr-2'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                  aria-label='Close menu'
                  onClick={() => {
                    props.openClose();
                  }}
                >
                  <svg
                    className='h-6 w-6'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='px-2 pt-2 pb-6'>
              <Link href='/'>
                <a
                  onClick={() => {
                    props.openClose();
                  }}
                  className='block px-3 py-2 uppercase rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                  role='menuitem'
                >
                  Home
                </a>
              </Link>
              <Link href='/portfolios'>
                <a
                  onClick={() => {
                    props.openClose();
                  }}
                  className='mt-1 block px-3 uppercase py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none  focus:bg-gray-50 transition duration-150 ease-in-out'
                  role='menuitem'
                >
                  Clientele
                </a>
              </Link>
              <a
                className={`${
                  service ? "text-secondery" : "text-gray-700"
                } mt-1 block px-3 py-2 uppercase rounded-md text-base font-medium  hover:text-secondery hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out`}
                role='menuitem'
                onClick={() => {
                  setService(!service);
                }}
              >
                Service
              </a>
              <div
                className={`px-2 w-full sm:px-0 ${
                  service ? "block" : "hidden"
                }`}
              >
                <div className='rounded-lg shadow-lg'>
                  <div className='rounded-lg shadow-xs overflow-hidden'>
                    <div className='z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                      <Link href='/services/web-services'>
                        <a
                          onClick={() => {
                            props.openClose();
                          }}
                          className='-m-3 px-2 py-1  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'
                        >
                          <p className='text-base uppercase leading-6 font-sm text-gray-700'>
                            Web Services
                          </p>
                        </a>
                      </Link>
                      <Link href='/services/digital-marketing'>
                        <a
                          onClick={() => {
                            props.openClose();
                          }}
                          className='-m-3 px-2 py-1  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'
                        >
                          <p className='text-base uppercase leading-6 font-sm text-gray-700'>
                            Digital Marketing
                          </p>
                        </a>
                      </Link>
                      <Link href='/services/brand-identity'>
                        <a
                          onClick={() => {
                            props.openClose();
                          }}
                          className='-m-3 px-2 py-1  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'
                        >
                          <p className='text-base uppercase leading-6 font-sm text-gray-700'>
                            Brand Identity
                          </p>
                        </a>
                      </Link>
                      <Link href='/services/creative-content'>
                        <a
                          onClick={() => {
                            props.openClose();
                          }}
                          className='-m-3 px-2 py-1  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'
                        >
                          <p className='text-base uppercase leading-6 font-sm text-gray-700'>
                            Creative Content
                          </p>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className='mt-1  block uppercase px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                role='menuitem'
                onClick={() => {
                  setCompany(!company);
                }}
              >
                Company
              </a>
              <div
                className={`px-2 w-full sm:px-0 ${
                  company ? "block" : "hidden"
                }`}
              >
                <div className='rounded-lg shadow-lg'>
                  <div className='rounded-lg shadow-xs overflow-hidden'>
                    <div className='z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                      <Link href='/company/who-are-we'>
                        <a
                          onClick={() => {
                            props.openClose();
                          }}
                          className='-m-3 px-2 py-1  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'
                        >
                          <p className='text-base uppercase leading-6 font-sm text-gray-900'>
                            Who are we?
                          </p>
                        </a>
                      </Link>
                      {/* <Link href='/company/why-us'>  */}
                      <a
                        onClick={() => {
                          props.openClose();
                        }}
                        className='-m-3 px-2 py-1  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'
                      >
                        <p className='text-base uppercase leading-6 font-sm text-gray-900'>
                          Why us?
                        </p>
                      </a>
                      {/* </Link> */}
                      {/* <Link href='/company/our-developers'> */}
                         <a
                        onClick={() => {
                          props.openClose();
                        }}
                        className='-m-3 px-2 py-1  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'
                      >
                        <p className='text-base uppercase leading-6 font-sm text-gray-900'>
                         Meet our Developers
                        </p>
                      </a>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <a
                onClick={() => {
                  props.openClose();
                }}
                className='mt-1 mb-4 block uppercase px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                role='menuitem'
              >
                Blog
              </a>
              <button
                onClick={() => {
                  props.openClose();
                }}
                className='w-full outline-none focus:outline-none   font-medium text-gray-100 py-3 px-4 rounded-full bg-main transition duration-150 ease-in-out'
                role='menuitem'
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

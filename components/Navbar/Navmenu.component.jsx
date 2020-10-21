import Link from "next/link";
const NavItem = (props) => {
  return (
    <>
      <div className='z-10 hidden md:block ml-auto  md:pr-4'>
        <Link href='/'>
          <a className='font-medium cursor-pointer  uppercase text-gray-500 hover:text-main transition duration-150 ease-in-out'>
            Home
          </a>
        </Link>
        <Link href='/portfolios'>
          <a className='ml-8 font-medium cursor-pointer  uppercase text-gray-500 hover:text-main transition duration-150 ease-in-out'>
            Clientele
          </a>
        </Link>
        <div className='dropdown-solution inline-block'>
          <button
            type='button'
            className='uppercase text-gray-500 ml-8 cursor-pointer  hover:text-main  group inline-flex items-center space-x-2 text-base leading-6 font-medium  focus:outline-none  transition ease-in-out duration-150'
          >
            <span>Services</span>

            <svg
              className=' h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <div className='absolute  solution-dropdown   transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
            <div className='rounded-lg shadow-lg'>
              <div className='rounded-lg shadow-xs overflow-hidden'>
                <div className='z-20 relative grid gap-2 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                  <Link href='/services/web-services'>
                    <a className='-m-3 p-3  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'>
                      <div className='space-y-1'>
                        <p className='text-base leading-6 font-medium text-gray-900'>
                          Web Services
                        </p>
                        <p className='text-sm leading-5 text-gray-500'>
                          Design, SEO, Domain & Server
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href='/services/digital-marketing'>
                    <a className='-m-3 p-3  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'>
                      <div className='space-y-1'>
                        <p className='text-base leading-6 font-medium text-gray-900'>
                          Digital Marketing
                        </p>
                        <p className='text-sm leading-5 text-gray-500'>
                          Search/Youtube Ads Facebook/Insta Ads
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href='/services/brand-identity'>
                    <a className='-m-3 p-3  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'>
                      <div className='space-y-1'>
                        <p className='text-base leading-6 font-medium text-gray-900'>
                          Brand Identtity
                        </p>
                        <p className='text-sm leading-5 text-gray-500'>
                          Logo, Graphics & Illustrations
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href='/services/creative-content'>
                    <a className='-m-3 p-3  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'>
                      <div className='space-y-1'>
                        <p className='text-base leading-6 font-medium text-gray-900'>
                          Creative Content
                        </p>
                        <p className='text-sm leading-5 text-gray-500'>
                          Copy/Content/Video/Photo
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='company-selection  inline-block'>
          <button
            type='button'
            className='uppercase text-gray-500 ml-8 cursor-pointer hover:text-main   group inline-flex items-center space-x-2 text-base leading-6 font-medium  focus:outline-none  transition ease-in-out duration-150'
          >
            <span>Company</span>

            <svg
              className=' h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <div className='absolute company-dropdown hidden  transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
            <div className='rounded-lg shadow-lg'>
              <div className='rounded-lg shadow-xs overflow-hidden'>
                <div className='z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                  <Link href='/company/who-are-we'>
                    <a className='-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'>
                      <div className='space-y-1'>
                        <p className='text-base leading-6 font-medium text-gray-900'>
                          Who are we?
                        </p>
                        <p className='text-sm leading-5 text-gray-500'>
                          Learn About Our Company
                        </p>
                      </div>
                    </a>
                  </Link>
                   <a className='-m-3 p-3  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'>
                    <div className='space-y-1'>
                      <p className='text-base leading-6 font-medium text-gray-900'>
                        Why us?
                      </p>
                      <p className='text-sm leading-5 text-gray-500'>
                        Why we are useful to you
                      </p>
                    </div>
                  </a> 
                  <Link href='/company/our-developers'>
                    <a className='-m-3 p-3  flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'>
                      <div className='space-y-1'>
                        <p className='text-base leading-6 font-medium text-gray-900'>
                          Our Developers
                        </p>
                        <p className='text-sm leading-5 text-gray-500'>
                          Get In touch with our developers
                        </p>
                      </div>
                    </a>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Link href='/aboutus'>
          <a className='ml-8 font-medium uppercase cursor-pointer  text-gray-500 hover:text-main transition duration-150 ease-in-out'>
            About Us
          </a>
        </Link>
        <a
          href='#'
          className='ml-8 font-medium uppercase cursor-pointer  text-gray-500 hover:text-main transition duration-150 ease-in-out'
        >
          Blog
        </a>

        <a
          href='#'
          className='ml-8 font-medium cursor-pointer  uppercase text-gray-100 py-3 px-4 rounded-full bg-main transition duration-150 ease-in-out'
        >
          Get In Touch
        </a>
      </div>
    </>
  );
};

export default NavItem;

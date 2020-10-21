const HompageLanding = (props) => {
  return (
    <>
      <div className='mx-auto max-w-screen-xl px-4  sm:px-6  md:px-8 '>
        <div className='flex flex-wrap  h-auto '>
          <div className='md:w-2/5 w-full lg:pt-24 mb-8 md:mb-0 md:pt-10 text-left'>
            <div className='lg:my-3'>
              <h1 className='text-4xl text-secondery font-bold'>
                Freelencer Tec
              </h1>
              <h1 className='text-4xl text-secondery font-bold'>
                For Programming
              </h1>
            </div>
            <div className=' mb-8 mt-3 lg:mt-0 break-words'>
              <p className='text-gray-600 text-lg'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <a className='py-3 px-4 hover:bg-secondery bg-main outline-none focus:outline-none cursor-pointer text-white rounded-full '>
              Solve Your Problem
            </a>
          </div>

          <div className='md:w-3/5  hidden md:block  '>
            <img
              src='/images/home.png'
              className='w-full -mt-24 lg:pt-6 pt-12'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HompageLanding;

import { BsArrowRight } from "react-icons/bs";
const HomService = (props) => {
  return (
    <>
      <div className='bg-home-bg2 py-8'>
        <div className='mx-auto max-w-screen-xl px-4  sm:px-6  md:px-8 '>
          <h1 className='text-center  text-3xl text-secondery  font-bold'>
            We Offers
          </h1>
          <div className='flex justify-center mt-3'>
            <div className='border-b-2 border-main w-56 align-center'></div>
          </div>
          <div className='grid grid-cols-12  gap-6 mt-5 '>
            {/* ------------------------------ */}
            <div className='zoom md:col-span-3 col-span-12 sm:col-span-6  text-secondery '>
              <div className='flex  justify-center mt-3'>
                <div className=' align-center'>
                  <img
                    src='/images/java.png'
                    className=' bg-gray-100 rounded-full p-5'
                  />
                  <h5 className='text-lg text-center py-3 font-bold'>
                    JAVA Developer
                  </h5>
                </div>
              </div>
            </div>
            {/* =--------------------- */}
            <div className='zoom md:col-span-3 col-span-12 sm:col-span-6  text-secondery '>
              <div className='flex  justify-center mt-3'>
                <div className=' align-center'>
                  <img
                    src='/images/js.png'
                    className=' bg-gray-100 rounded-full p-5'
                  />
                  <h5 className='text-lg text-center py-3 font-bold'>
                    JavaScript
                  </h5>
                </div>
              </div>
            </div>
            {/* -------------------------- */}
            <div className='zoom md:col-span-3 col-span-12 sm:col-span-6  text-secondery '>
              <div className='flex  justify-center mt-3'>
                <div className=' align-center'>
                  <img
                    src='/images/nodejs.png'
                    className=' bg-gray-100 rounded-full p-5'
                  />
                  <h5 className='text-lg text-center py-3 font-bold'>Nodejs</h5>
                </div>
              </div>
            </div>
            {/* ------------------- */}
            <div className='zoom md:col-span-3 col-span-12 sm:col-span-6  text-secondery '>
              <div className='flex  justify-center mt-3'>
                <div className=' align-center'>
                  <img
                    src='/images/react.png'
                    className=' bg-gray-100 rounded-full p-5'
                  />
                  <h5 className='text-lg text-center py-3 font-bold'>React</h5>
                </div>
              </div>
            </div>
            {/* ------------------------ */}
            <div className='zoom md:col-span-3 col-span-12 sm:col-span-6  text-secondery '>
              <div className='flex  justify-center mt-3'>
                <div className=' align-center'>
                  <img
                    src='/images/nextjs.png'
                    className=' bg-gray-100 rounded-full p-5'
                  />
                  <h5 className='text-lg text-center py-3 font-bold'>Nextjs</h5>
                </div>
              </div>
            </div>
            {/* ------------------------------- */}
            <div className='zoom md:col-span-3 col-span-12 sm:col-span-6  text-secondery '>
              <div className='flex  justify-center mt-3'>
                <div className=' align-center'>
                  <img
                    src='/images/mongodb.png'
                    className=' bg-gray-100 rounded-full p-5'
                  />
                  <h5 className='text-lg text-center py-3 font-bold'>
                    MongoDB
                  </h5>
                </div>
              </div>
            </div>
            {/* -------------------------- */}
            <div className='zoom md:col-span-3 col-span-12 sm:col-span-6  text-secondery '>
              <div className='flex  justify-center mt-3'>
                <div className=' align-center'>
                  <img
                    src='/images/laravel.png'
                    className=' bg-gray-100 rounded-full p-5'
                  />
                  <h5 className='text-lg text-center py-3 font-bold'>
                    Laravel
                  </h5>
                </div>
              </div>
            </div>
            {/* =========================== */}
            <div className='zoom md:col-span-3 col-span-12 sm:col-span-6  text-secondery '>
              <div className='flex  justify-center mt-3'>
                <div className=' align-center'>
                  <img
                    src='/images/expressjs.png'
                    className=' bg-gray-100 rounded-full p-5'
                  />
                  <h5 className='text-lg text-center py-3 font-bold'>
                    Express js
                  </h5>
                </div>
              </div>
            </div>

            {/* ================================ */}
          </div>
          {/* --------------------- */}
          <div className='flex justify-center mt-5'>
            <button className=' flex rounded-full zoom bg-main py-3 px-8 hover:bg-secondery outline-none focus:outline-none align-center text-white'>
              More <BsArrowRight fontSize='20px' />
            </button>
          </div>
          {/* ----------------------- */}
        </div>
      </div>
      <style jsx>{`
        .zoom {
          transition: transform 700ms;
        }
        .zoom:hover {
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default HomService;

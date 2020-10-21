import HompageLanding from "./HomepageLanding.component";

const HomepageUtilities = (props) => {
  return (
    <div className='bg-gray-100 pt-5 pb-12'>
      <div className='mx-auto max-w-screen-xl px-4  sm:px-6  md:px-8 '>
        <h1 className='text-center  text-3xl text-secondery  font-bold'>
          Smart Solution for Smart Business
        </h1>
        <div className='flex justify-center mt-3'>
          <div className='border-b-2 border-main w-64 align-center'></div>
        </div>

        {/* <div class='grid md:grid-cols-12 grid-cols-4 md:gap-4 my-5'>
          <div class='md:col-start-2 col-span-10 text-center'> */}
        <h5 className=' text-lg text-gray-700 py-8 text-justify'>
          Freelancer Tec provide services related to the Software and Internet
          technology. It is driven by skilled and dedicated young minds with
          years of industry experience in Nepal and abroad. Freelancer Tec is
          committed to provide all the services of the information and
          technology under one roof. To satisfy the day to day necessity based
          on information and technology, FlTec has been motivated to prepare
          present and future useful programs. The use of the latest and
          high-tech technology has enabled this organization to provide
          productive and quality product.
        </h5>
        {/* </div>
        </div> */}
        <h1 className='text-center  text-3xl text-secondery  font-bold'>
          Why Freelancer Tec?
        </h1>
        <div className='flex justify-center mt-3 mb-6'>
          <div className='border-b-2 border-main w-64 align-center'></div>
        </div>

        <div className='grid grid-cols-12 gap-4'>
          <div className='md:col-span-3 col-span-12 sm:col-span-6 shadow-lg  rounded '>
            <div className='flex  justify-center mt-3'>
              <div className=' align-center'>
                <img src='/images/bag.png' />
                <h5 className='text-lg text-center text-secondery py-3 font-bold'>
                  Professional services
                </h5>
              </div>
            </div>
          </div>
          <div className='md:col-span-3 col-span-12 sm:col-span-6 shadow-lg rounded '>
            <div className='flex  justify-center mt-3'>
              <div className=' align-center  '>
                <img src='/images/service.png' />
                <h5 className='text-lg text-center text-secondery py-3 font-bold'>
                  Reliable Support
                </h5>
              </div>
            </div>
          </div>
          <div className='md:col-span-3 col-span-12 sm:col-span-6 shadow-lg rounded '>
            <div className='flex  justify-center mt-3'>
              <div className=' align-center  '>
                <img src='/images/contract.png' />
                <h5 className='text-lg text-center text-secondery py-3 font-bold'>
                  Solid Contract
                </h5>
              </div>
            </div>
          </div>
          <div className='md:col-span-3 col-span-12 sm:col-span-6 shadow-lg rounded '>
            <div className='flex  justify-center mt-3'>
              <div className=' align-center  '>
                <img src='/images/service.png' />
                <h5 className='text-lg text-center text-secondery py-3 font-bold'>
                  Solid Contract
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageUtilities;

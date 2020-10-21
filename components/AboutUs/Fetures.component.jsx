const Fetures = (props) => {
  return (
    <>
      <div className='grid grid-cols-4 gap-5'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
          <div className=' md:p-8 my-4 md:col-span-2 col-span-4 ' key={i}>
            <div className='flex justify-center '>
              <img
                className=''
                src='/images/mylogo.png'
                className='w-24 h-24'
              />
            </div>
            <h6 className='text-center mt-6 text-secondery  text-2xl'>
              Strategy
            </h6>
            <p className='text-gray-600 text-sm my-2 text-justify'>
              No matter the project or campaign, we believe that strategy drives
              results. That’s probably why we value our time researching our
              clients, their offerings, and the competitive landscape. This
              scrutiny leads to well-defined content architecture, targeted
              design direction, and leading edge functionality
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fetures;

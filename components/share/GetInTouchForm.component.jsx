const GetInTouchForm = (props) => {
  return (
    <>
      <form className='text-gray-600'>
        <div className='my-3'>
          <input
            type='text'
            placeholder='Name'
            className={`rounded outline-none w-full  bg-gray-300  py-2 px-4`}
          />
          {/* <label className='text-red-700'>Error occours</label> */}
        </div>
        <div className='my-3'>
          <input
            type='text'
            placeholder='Email Address'
            className={`rounded outline-none w-full  bg-gray-300  py-2 px-4`}
          />
          {/* <label className='text-red-700'>Error occours</label> */}
        </div>
        <div className='my-3'>
          <input
            type='text'
            placeholder='Contact Number'
            className={`rounded outline-none w-full  bg-gray-300  py-2 px-4`}
          />
          {/* <label className='text-red-700'>Error occours</label> */}
        </div>
        <div className='my-3'>
          <textarea
            rows='5'
            placeholder='Your text here'
            className={`rounded outline-none w-full  bg-gray-300  py-2 px-4`}
          />
          {/* <label className='text-red-700'>Error occours</label> */}
        </div>
        <div className='my-3 flex'>
          <button className='border focus:outline-none  rounded w-full py-2 border-main bg-main text-white '>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default GetInTouchForm;

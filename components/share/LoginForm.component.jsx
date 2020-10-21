import { TextInput } from "./../utilities/TextInput";
const LoginForm = (props) => {
  return (
    <>
      {/* <div className=' bg-gray-300 h-screen '>
        <div className='container flex content-center flex-wrap mx-auto h-screen '>
        <div className='w-full my-5 shadow-lg h-auto grid  grid-cols-1 bg-white md:grid-cols-7 rounded  gap-0'>
            <div className='col-span-4 bg-login-bg rounded-l bg-center'>
             
            </div>
<div className='col-span-3 rounded-r flex justify-center' >
  <div className='py-16 w-9/12 '>
      <TextInput/>
      
      </div> 
      </div>
    
    
    </div>            
</div> 
    </div> */}

      <div className='h-screen bg-gray-300'>
        <div className='flex items-center justify-center h-full'>
          <div className='flex max-w-3xl sm:w-7/12 w-full'>
            <div className='md:w-1/2 hidden md:flex rounded-r'>
              <img
                src='/images/loginbackground.jpg'
                alt=''
                className='w-full h-full rounded-l object-cover'
              />
            </div>
            <div className='bg-white w-full md:w-1/2 p-8 md:rounded-r rounded '>
              <h1 className='text-gray-700 text-3xl text-center mb-4'>
                SIGN IN
              </h1>
              <form className='text-gray-600'>
                <div className='my-3'>
                  <TextInput placeholder='Username' error='hello' />
                </div>
                <div className='my-3'>
                  <TextInput placeholder='Password' type='password' />
                </div>
                <div className='my-3 flex justify-end '>
                  <a className='text-blue-500 cursor-pointer'>
                    Forgot password ?
                  </a>
                </div>
                <div className='my-6 flex'>
                  <button className='border focus:outline-none  rounded w-full py-2 border-blue-700 bg-blue-600 text-white ml-2'>
                    SIGN IN
                  </button>
                </div>
                <div className='my-3 text-center text-xs text-gray-500'>
                  &copy;2020 Prabhaw. All rights reserved.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

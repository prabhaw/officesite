import * as FaIcon from "react-icons/fa";

const DeveloperCard = (props) => {
  return (
    <div className='flex  justify-center mt-3'>
      <div className=' align-center'>
        <div className='flex justify-center '>
          <img
            src='/images/expressjs.png'
            className='  rounded-full h-32 w-32'
          />
        </div>
        <h5 className='text-base text-center pt-3 font-bold'>Prabhaw Soti</h5>
        <h5 className='text-base text-center py-1 text-gray-600'>Developer</h5>
        <h5 className='text-sm text-center pt-3 font-bold'>Skill:</h5>
        <h5 className='text-sm text-center py-2 px-4 font-bold text-main'>
          Nodejs, React, Express, MongoDB, Nodejs, React, Express, MongoDB
        </h5>
        <div className='my-2 flex justify-center items-center'>
          <span className=' mr-2 transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-120 text-blue-700'>
            <FaIcon.FaFacebookF fontSize='18px' />
          </span>
          <span className='mr-2 transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-120 text-blue-500'>
            <FaIcon.FaTwitter fontSize='18px' />
          </span>
          <span className='mr-2 transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-120 text-secondery'>
            <FaIcon.FaGithub fontSize='18px' />
          </span>
          <span className='transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-120 text-blue-800'>
            <FaIcon.FaLinkedin fontSize='18px' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;

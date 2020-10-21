import { AiFillEye } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
const PortfoliosCard = (props) => {
  return (
    <>
      <div className=' shadow rounded-lg cursor-pointer lg:col-span-4 col-span-12 sm:col-span-6  text-gray-600 '>
        <div className='port-container '>
          <img
            className='card-image-home-blog rounded-t-lg sm:h-auto w-full'
            src='/images/blog.png'
          />
          <div className='overlay rounded-t-lg top-0 bottom-0 left-0 right-0 absolute h-full w-full bg-main opacity-0  '>
            <a className=' text-white border mr-12 border-white hover:border-secondery hover:bg-white hover:text-secondery cursor-pointer  p-2 rounded-full absolute btn1 text-center'>
              <BiLink fontSize='18px' />
            </a>
            <a className=' text-white border border-white hover:border-secondery hover:bg-white hover:text-secondery cursor-pointer  p-2 rounded-full absolute btn2 text-center'>
              <AiFillEye fontSize='18px' />
            </a>
          </div>
        </div>
        <h5 className='  text-center  text-base my-2 truncate mx-4 '>
          This id my first post This id my first post This id my first post
        </h5>
      </div>
      <style global jsx>{`
        .card-image-home-blog {
          max-height: 225px;
          min-height: 225px;
          height: 225px;
          display: block;
          width: 100%;
        }
        .shop-item {
          margin: 0 5px;
        }
        .btn1 {
          top: 50%;
          left: 42%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .btn2 {
          top: 50%;
          left: 58%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .overlay {
          min-height: 0;
          min-height: 0;
          transition: opacity 0.15s ease-out;
        }
        .port-container:hover .overlay {
          max-height: 225px;
          min-height: 225px;
          opacity: 0.8;
          transition: opacity 0.25s ease-in;
        }
        .port-container {
          position: relative;
        }
      `}</style>
    </>
  );
};

export default PortfoliosCard;

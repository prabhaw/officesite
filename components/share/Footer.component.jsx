import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaMobileAlt,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import GetInTouchForm from "./GetInTouchForm.component";

const Footer = (props) => {
  return (
    <>
      <div className='bg-main py-6'>
        <div className='mx-auto max-w-screen-xl px-4 md:flex justify-between sm:px-6  md:px-8 '>
          <h4 className=' md:text-left text-center text-lg text-white'>
            Get Connected with us on social network
          </h4>
          <div className='text-center md:text-right mt-3 md:mt-0 flex justify-center'>
            <div className=' cursor-pointer text-white mr-3 zoom'>
              <FaFacebookSquare fontSize='24px' />
            </div>
            <div className='cursor-pointer text-white mr-3 zoom '>
              <FaTwitterSquare fontSize='24px' />
            </div>
            <div className='cursor-pointer text-white mr-3 zoom'>
              <FaYoutube fontSize='24px' />
            </div>
            <div className='cursor-pointer text-white mr-3 zoom'>
              <FaInstagram fontSize='24px' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-secondery py-6'>
        <div className='mx-auto max-w-screen-xl px-4  sm:px-6  md:px-8 '>
          <div className='grid grid-cols-7  md:gap-12 gap-4'>
            <div className='col-span-7  md:col-span-2'>
              <h1 className='text-left  text-lg text-white uppercase  font-bold'>
                Compeny Word
              </h1>
              <div className='mt-1'>
                <div className='border-b-2 border-main w-32 align-center'></div>
              </div>
              <div className='text-white text-justify py-5 '>
                Begin the company description section with a paragraph that
                captures all of the vital information about your company.
                Imagine you are giving an elevator pitch about your company and
                want to express the key characteristics in just a few sentences.
                Use the same thought process for your introductory paragraph.
              </div>
            </div>
            <div className='col-span-7 w-full md:col-span-3'>
              <h1 className='text-left  text-lg text-white uppercase  font-bold'>
                Get in Touch
              </h1>
              <div className='mt-1'>
                <div className='border-b-2 border-main w-32 align-center'></div>
              </div>
              <GetInTouchForm />
            </div>
            <div className='col-span-7  md:col-span-2 '>
              <h1 className='text-left  text-lg text-white uppercase  font-bold'>
                Contact Us:
              </h1>
              <div className='mt-1'>
                <div className='border-b-2 border-main w-32 align-center'></div>
              </div>
              <div className='md:text-left text-center mt-3 text-white'>
                <h6 className='font-bold text-sm mt-2 flex'>
                  <AiOutlineMail fontSize='20px' />
                  &nbsp; Email: mail.prabhaw@gmail.com
                </h6>
                <h6 className='font-bold text-sm mt-2 flex'>
                  <FaMobileAlt fontSize='20px' /> &nbsp; Mobile: +977-9845697677
                </h6>
              </div>
              <h1 className='text-left mt-5 text-lg text-white uppercase  font-bold'>
                Head Office
              </h1>
              <div className='mt-1'>
                <div className='border-b-2 border-main w-32 align-center'></div>
              </div>
              <h5 className='mt-4 text-white text-sm'>
                Bharatpur-13,Chitwan, Bagmati,nepal
              </h5>
            </div>
          </div>
        </div>
        <div className=' mt-5 text-center text-sm text-gray-500'>
          &copy;2020 Prabhaw. All rights reserved.
        </div>
      </div>
      <style jsx>{`
        .zoom {
          transition: transform 700ms;
        }
        .zoom:hover {
          transform: scale(1.5);
        }
      `}</style>
    </>
  );
};

export default Footer;

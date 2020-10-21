import Carousel from "react-multi-carousel";
import { FaQuoteLeft } from "react-icons/fa";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 960 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 960, min: 0 },
    items: 1,
  },
};
const Happyclient = (props) => {
  const card = [1, 2, 3, 4].map((item, i) => (
    <div className='md:p-3 pt-4' key={i}>
      <div className='bg-white md:flex rounded-lg py-6 pl-6 pr-8  '>
        <img
          className='h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto md:mx-0 md:mr-6'
          src='/images/expressjs.png'
        />
        <div className='text-center md:mt-3 md:text-left'>
          <h2 className='text-3xl text-gray-800 font-bold'>Prabhaw soit </h2>
          <div className='my-5 flex'>
            <span className='text-gray-600 -mt-2 text-2xl'>
              <FaQuoteLeft />
            </span>
            &nbsp; &nbsp;
            <div>
              <span className='text-gray-500 text-lg text-justify'>
                Let's take most of the money we would've spent on paid
                advertising and paid marketing and instead of spending it on
                that, invest it in the customer experience/customer service and
                then let our customers do the marketing for us through word of
                mouth.
              </span>
              <h6 className='text-main mt-4 text-sm '>Singer/Youtuber</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className='bg-gray-100 py-8'>
        <div className='mx-auto max-w-screen-xl px-4  sm:px-6  md:px-8 '>
          <h1 className='text-center  text-3xl text-secondery  font-bold'>
            Happy Customer
          </h1>
          <div className='flex justify-center mt-3'>
            <div className='border-b-2 border-main w-56 align-center'></div>
          </div>
          <Carousel
            responsive={responsive}
            // partialVisible={true}
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            //   className=''
            //   dotListClass=''
            draggable
            focusOnSelect={false}
            infinite={true}
            //   itemClass='shop-item'
            keyBoardControl
            minimumTouchDrag={50}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            //   sliderClass=''
            slidesToSlide={1}
            swipeable
            ssr={true}
          >
            {card}
          </Carousel>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Happyclient;

import Carousel from "react-multi-carousel";
import * as IoIcon from "react-icons/io";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 4,
    // partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
    // partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 750 },
    items: 2,
    // partialVisibilityGutter: 15,
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
    // partialVisibilityGutter: 10,
  },
};
const HomeBlog = (props) => {
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
    <div
      key={i}
      className='text-gray-700 mx-1 cursor-pointer hover:text-main my-5'
    >
      <img
        className='card-image-home-blog rounded-lg sm:h-auto w-full'
        src='/images/blog.png'
      />
      <h5 className='text-center text-sm my-2 truncate mx-4 '>
        This id my first post This id my first post This id my first post
      </h5>
    </div>
  ));

  const CustomRight = ({ onClick }) => (
    <button
      className='z-10 top-50% p-1 right-0 rounded-full text-white outline-none focus:outline-none bg-main absolute'
      onClick={onClick}
    >
      <IoIcon.IoIosArrowForward />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button
      onClick={onClick}
      className='z-10 absolute mr-8 p-1 rounded-full text-white top-50% outline-none focus:outline-none left-0 mb-2 bg-main'
    >
      <IoIcon.IoIosArrowBack />
    </button>
  );

  return (
    <>
      <div className='bg-white py-8'>
        <div className='mx-auto max-w-screen-xl px-4  sm:px-6  md:px-8 '>
          <h1 className='  text-3xl text-secondery  font-bold'>
            FreelancerTec Blog
          </h1>

          <div className='border-b-2  relative border-main w-56 align-center'></div>

          <Carousel
            responsive={responsive}
            // partialVisible={true}
            additionalTransfrom={0}
            arrows
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            className=''
            //   dotListClass=''
            draggable
            focusOnSelect={false}
            infinite={true}
            // itemClass='shop-item'
            keyBoardControl
            minimumTouchDrag={50}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            //   sliderClass=''
            slidesToSlide={1}
            swipeable
            ssr={true}
            customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}
          >
            {card}
          </Carousel>
        </div>
      </div>
      <style global jsx>{`
        .card-image-home-blog {
          max-height: 250px;
          min-height: 250px;
          height: 250px;
        }
        .shop-item {
          margin: 0 5px;
        }
      `}</style>
    </>
  );
};

export default HomeBlog;

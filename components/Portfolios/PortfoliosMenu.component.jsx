const PortfoliosMenu = (props) => {
  return (
    <>
      <div className=' sm:flex justify-center text-center mb-5'>
        <h6 className='text-gray-600 cursor-pointer hover:text-secondery text-lg mr-8 md:mr-12'>
          All
        </h6>
        <h6 className='text-gray-600 cursor-pointer hover:text-secondery text-lg mr-8 md:mr-12'>
          Web
        </h6>
        <h6 className='text-gray-600 cursor-pointer hover:text-secondery text-lg mr-8 md:mr-12'>
          UI/UX Design
        </h6>
        <h6 className='text-gray-600 cursor-pointer hover:text-secondery text-lg mr-8 md:mr-12'>
          Brand Identity
        </h6>
        <h6 className='text-gray-600 cursor-pointer hover:text-secondery text-lg mr-8 md:mr-12'>
          Logos
        </h6>
        <h6 className='text-gray-600 cursor-pointer hover:text-secondery text-lg mr-8 md:mr-12'>
          Mobile Application
        </h6>
      </div>
    </>
  );
};

export default PortfoliosMenu;

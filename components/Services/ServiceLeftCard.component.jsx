const ServiceLeftCard = (props) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-4 '>
        <div className='col-span-2 order-2 sm:order-1 sm:my-16 text-center sm:text-left sm:col-span-1 '>
          <h3 className='text-main text-3xl font-sans'>
            Website packages that best suit your Business.
          </h3>
          <div className='text-gray-600 font-sans '>
            We build a brand experience, not just a website. With creativity and
            experience to solve any problems, we're here to make your web
            presence look great and keep your business' needs fulfilled.
            Responsive and mobile friendly designs. Secure and reliable servers
            Easy to use Content Management System(CMS). Social API integrated &
            Search engine optimization(SEO).
          </div>
        </div>
        <div className='col-span-2 sm:col-span-1 sm:order-2 order-1   '>
          <div className='flex justify-center '>
            <img
              src='/images/web-design-services.png'
              className='sm:px-8'
              alt='Web service'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLeftCard;

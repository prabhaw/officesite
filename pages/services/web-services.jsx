import PublicLayout from "./../../Layout/PublicLayout.layout";
import ServicePage from "./../../components/Services/ServicePage.component";
const WebServices = (props) => {
  return (
    <>
      <PublicLayout>
        <div className=' py-5'>
          <div className='mx-auto max-w-screen-xl px-4  sm:px-6  md:px-8 '>
            <div className='mb-5'>
              <h1 className='text-left  text-3xl text-secondery  font-bold'>
                Web Services
              </h1>
              <p className='text-left text-sm text-gray-600 '>
                Design, SEO, Domain & Server
              </p>
            </div>
            <ServicePage />
          </div>
        </div>
      </PublicLayout>
    </>
  );
};

export default WebServices;

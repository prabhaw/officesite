import Fetures from "../../components/AboutUs/Fetures.component";
import MyCompanyWord from "../../components/AboutUs/MyCompanyWord.component";
import PublicLayout from "../../Layout/PublicLayout.layout";

const WhoWeAre = (props) => {
  return (
    <PublicLayout>
      <div className=' py-5'>
        <div className='mx-auto max-w-screen-xl px-4  sm:px-6  md:px-8 '>
          <div className='mb-5'>
            <h1 className='text-left  text-3xl text-secondery  font-bold'>
              About Us
            </h1>

            <div className='border-b-2  relative border-main w-24 align-left'></div>
          </div>

          <MyCompanyWord />
          <Fetures />
        </div>
      </div>
    </PublicLayout>
  );
};

export default WhoWeAre;

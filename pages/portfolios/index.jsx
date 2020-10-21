import PortfoliosMenu from "../../components/Portfolios/PortfoliosMenu.component";
import PublicLayout from "../../Layout/PublicLayout.layout";
import PortfoliosContainer from "./../../components/Portfolios/PortfoliosContainer.component";

const Portfolios = (props) => {
  return (
    <>
      <PublicLayout>
        <div className=' py-5'>
          <div className='mx-auto max-w-screen-xl px-4  sm:px-6  md:px-8 '>
            <h1 className='text-left  text-3xl text-secondery mb-5 font-bold'>
              Portfolio
            </h1>
            <PortfoliosMenu />
            <PortfoliosContainer />
          </div>
        </div>
      </PublicLayout>
    </>
  );
};

export default Portfolios;

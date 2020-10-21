import PortfoliosCard from "./PortfoliosCard.component";

const Portfolios = (props) => {
  return (
    <>
      <div className='mt-12 md:bg-gray-100 md:rounded-lg md:p-8'>
        <div className='grid grid-cols-12  gap-6 mt-5 '>
          <PortfoliosCard />
          <PortfoliosCard /> <PortfoliosCard /> <PortfoliosCard />{" "}
          <PortfoliosCard /> <PortfoliosCard /> <PortfoliosCard />{" "}
          <PortfoliosCard /> <PortfoliosCard /> <PortfoliosCard />{" "}
          <PortfoliosCard />
        </div>
      </div>
    </>
  );
};

export default Portfolios;

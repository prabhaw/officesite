import ServiceLeftCard from "./ServiceLeftCard.component";
import ServiceRightCard from "./ServiceRightCard.component";

const ServicePage = (props) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
        if (i % 2 === 0) {
          return (
            <div key={i} className='my-6'>
              <ServiceRightCard />
            </div>
          );
        } else {
          return (
            <div key={i} className='my-6'>
              <ServiceLeftCard />
            </div>
          );
        }
      })}
    </>
  );
};

export default ServicePage;

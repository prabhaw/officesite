import DeveloperCard from "./DeveloperCard.component";

const OurDevelopers = (props) => {
  return (
    <>
      <div className='grid grid-cols-12 gap-5'>
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
             <div key={i} className='md:col-span-3 col-span-12 sm:col-span-6 rounded-lg shadow-lg py-3 bg-gray-100 text-secondery '>
          <DeveloperCard /></div>
        ))}
      </div>
    </>
  );
};

export default OurDevelopers;

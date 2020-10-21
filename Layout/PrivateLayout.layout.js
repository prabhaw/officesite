import PrivateNavbar from "../components/share/PrivateNav.component";
import SideNav from "../components/share/Sidenav.component";

const PrivateLayout = (props) => {
  return (
    <>
      <div className='bg-gray-300  h-auto text-gray-600 flex flex-col'>
        <div className='private-nav sticky top-0'>
          <PrivateNavbar />
        </div>
        <div className='sidebar'>
          <SideNav />
        </div>
        <div className='container-pare md:ml-64'>{props.children}</div>
      </div>
    </>
  );
};

export default PrivateLayout;

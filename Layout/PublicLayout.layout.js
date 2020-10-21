import PublicNavbar from "../components/Navbar/PublicNavbar.component";
import { useState, useEffect } from "react";
import Footer from "../components/share/Footer.component";

const PublicLayout = (props) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 100) {
        setScroll(true);
      }
      if (window.scrollY <= 99) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div className=''>
        <div
          className={scroll ? "fixed w-full z-30 top-0 bg-white" : "bg-white"}
        >
          <PublicNavbar scroll={scroll} />
        </div>
        <div style={{ minHeight: "70vh" }}>{props.children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PublicLayout;

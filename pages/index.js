import Happyclient from "../components/Home/Happyclient.component";
import HomeBlog from "../components/Home/HomeBlog.component";
import HompageLanding from "../components/Home/HomepageLanding.component";
import HomepageUtilities from "../components/Home/HomepageUtilities.component";
import HomService from "../components/Home/HomeService.component";
import OurTeam from "../components/Home/OurTeam.component";
import PublicLayout from "../Layout/PublicLayout.layout";

const Home = (props) => {
  return (
    <>
      <PublicLayout>
        <HompageLanding />
        <HomepageUtilities />
        <HomService />
        <Happyclient />
        <OurTeam />
        <HomeBlog />
      </PublicLayout>
    </>
  );
};

export default Home;

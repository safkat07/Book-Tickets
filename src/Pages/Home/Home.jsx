import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FeatureArtist from "../FeatureArtist/FeatureArtist";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/amazon.jpg";
import img2 from "../../assets/unesco.png";
import img3 from "../../assets/worldbank.png";
import img4 from "../../assets/laliga.jpg";
import Footer from "../Footer/Footer";
import AllCard from "../AllCard/AllCard";
import { Toaster } from "react-hot-toast";
import SecondExtraSection from "../secondExtraSection/secondExtraection";
import ToTheTop from "../../Components/ToTheTop/ToTheTop";
import Button from '@mui/material/Button';

const Home = () => {
  AOS.init();
  const mainColor = {
    backgroundColor: "#001829",
    color: "#ba9e76",
  };
  const data = useLoaderData();
  console.log(data);
  return (
    <div className=" mx-auto">
      <div>
        <Toaster />
      </div>
      <Banner></Banner>
      <AllCard></AllCard>

      <div data-aos="fade-down" data-aos-anchor-placement="center-bottom">
        <FeatureArtist></FeatureArtist>
      </div>

      <div>
        <h2 className="text-5xl mt-16 font-bold text-center ">
          Our Top Four Selling Albums
        </h2>
        <SecondExtraSection></SecondExtraSection>
      </div>

      {/* <OurPartners></OurPartners> */}

      <ToTheTop></ToTheTop>
      {/* <Button variant="contained">Hello world</Button> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;

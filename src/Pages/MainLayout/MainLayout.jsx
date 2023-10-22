import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import Navbar from "../../Provider/Navbar";

const MainLayout = () => {
    const bgColor = {
        backgroundColor: "#001829",
        color: "#ba9e76",
      };
      const textColor = {
        color: "#ba9e76",
      }
    return (
        // <div style={bgColor} className="min-h-screen">
        //     <Navbar></Navbar>
        //     <Outlet></Outlet>
        // </div>
        <div className="  mx-auto" style={bgColor}>
            <div className="">
            {/* <Navbar></Navbar> */}
            <Navbar></Navbar>
            </div>
            <div  style={bgColor}>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;
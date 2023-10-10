import { useContext } from "react";
import bannerPhoto from "../../assets/polygon-scatter-haikei.png";
import { FaMusic } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Banner = () => {
  const { user, loading } = useContext(AuthContext);
  const mainColor = {
    color: "#ba9e76",
  };
  //   const bg = {
  //     backgroundColor: "#001829",
  //     color: "#ba9e76",
  //   }

  return (
    <div
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${bannerPhoto})`,
      }}
      className="hero min-h-[100vh]"
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div style={mainColor} className=" text-center text-neutral-content">
        <div className="max-w-lg">
          {user ? (
            <>
              <h1 className="mb-5 text-5xl font-bold">
                Hello, {user.displayName}
              </h1>
              <h1 className="mb-5 text-5xl font-bold">
                Welcome to Petrucci Ticket Booking House
              </h1>
            </>
          ) : (
            <>
              <h1 className="mb-5 text-5xl font-bold">
                Welcome to Petrucci Ticket Booking House
              </h1>
            </>
          )}
          <p className="mb-5"></p>
          <Link to="/featureArtistDetails">
            <button
              style={mainColor}
              className="btn btn-ghost bg-transparent hover:btn-neutral
           bottom-3  hover:text-black "
            >
              <FaMusic></FaMusic>Upcoming Events....
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

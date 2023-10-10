import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/listen (2).png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // window.addEventListener("scroll", () => {
  //   const navbar = document.getElementById("stickyNavbar");
  //   if (window.scrollY > 50) {
  //     navbar.classList.add("backdrop-blur-lg");
  //   } else {
  //     navbar.classList.remove("backdrop-blur-lg");
  //   }
  // });

  const bgColor = {
    backgroundColor: "#001829",
  };

  const handleSingout = () => {
    logOut().then(() => {
      swal("Logout Successful");
      navigate("/");
    });
  };

  const btnBG = {
    color: "#ba9e76",
  };
  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div
      className="
     navbar sticky  z-50 
      rounded-lg top-0 w-full py-4"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <Link to="/" className="btn  btn-ghost">
          <img className="lg:block hidden" src={logo} alt="" />
          <p className="text-2xl lg:block hidden  font-mono">Petrucci Music</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <div>
        {
          user && <>
          <p className="lg:text-xl w-full text-sm  font-serif font-semibold lg:mr-5 mr-3">{user.displayName}</p>
          
          </>
        }
        </div>
        {user && user.photoURL ?  
          <>
            <img
              className="rounded-full  w-10 h-10"
              src={user.photoURL}
              alt=""
            />
          </>
          :
          <></>
        }
        {user ? (
          <>
            <Link
              onClick={handleSingout}
              to="/"
              className="btn btn-ghost hover:bg-gray-500 hover:text-white    "
              style={btnBG}
            >
              Sign-Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-ghost hover:bg-gray-500 hover:text-white    "
              style={btnBG}
            >
              Sign-in
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const handleShowPassword = () => {
    console.log("show password");
    setShowPassword(!showPassword);
  };
  const mainColor = {
    backgroundColor: "#001829",
    color: "#ba9e76",
  };
  const textColor = {
    color: "#ba9e76",
  };

  const bgColor = {
    backgroundColor: "#001829",
  };

  const handlelRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const displayName = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (password.length < 6) {
      toast.error("Password too short");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|/]/.test(password)) {
      toast.error("Password must contain special characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password dosen't have any upper case");
      return;
    }

    //create new user now

    createNewUser(email, password)
      // .then((result) => {
      //   console.log(result);
      //   toast.success("Account Created Successfully");
      //   navigate("/");
      //   e.target.reset();
      // })

      // .catch((err) => {
      //   toast.error(err.message);
      // });

      .then((userCredential) => {
      
        const user = userCredential.user;

        
        updateProfile(user, {
          displayName: displayName,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Account Created Successfully");

            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error("Error creating user: ", error);
      });
  };

  return (
    <div style={mainColor} className="hero  min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">REGISTER HERE!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handlelRegister}
            style={mainColor}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span style={textColor} className="label-text">
                  Name
                </span>
              </label>
              <input
                style={textColor}
                type="text"
                name="name"
                placeholder="your name"
                className="input input-bordered"
                required
              />
            </div>
            <div  className="form-control">
                <label className="label">
                  <span style={textColor} className="label-text">Photo Url</span>
                </label>
                <input style={textColor} 
                type="url" 
                name="photo"  
                placeholder="your photo url"  
                className="input input-bordered" required />
              </div>
            <div className="form-control">
              <label className="label">
                <span style={textColor} className="label-text">
                  Email
                </span>
              </label>
              <input
                style={textColor}
                type="email"
                name="email"
                placeholder="example@example.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span style={textColor} className="label-text">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "password" : "text"}
                placeholder="your password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  style={textColor}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button style={mainColor} className="btn p-2 m-2">
                Register
              </button>
            </div>
          </form>
          <p style={bgColor} className="text-center">
            Already have an Account?{" "}
            <Link className="text-blue-600" to="/login">
              Login Here!!
            </Link>
          </p>
          <SocialLogin></SocialLogin>
          {showPassword ? (
            <>
              <button
                onClick={handleShowPassword}
                className="absolute text-xl mt-[360px] ml-72"
              >
                <BiShowAlt></BiShowAlt>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleShowPassword}
                className="absolute text-xl mt-[360px] ml-72"
              >
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              </button>
            </>
          )}
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default Register;

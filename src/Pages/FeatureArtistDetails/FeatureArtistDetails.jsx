import { useState } from "react";
import img1 from "../../assets/sp2.jpg";
import img2 from "../../assets/sp3.jpg";
import img3 from "../../assets/sp4.jpg";
import img4 from "../../assets/sp5.jpg";
import swal from 'sweetalert';
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureArtistDetails = () => {
  AOS.init();
  const mainColor = {
    color: "#ba9e76",
  };
  // var element = document.getElementById("myElement");
  const [countdownValue, setCountdownValue] = useState({
    days: 15,
    hours: 10,
    min: 24,
    sec: 34,
  });
  const handleDaysChange = () => {
    setCountdownValue({ ...countdownValue, days: 20 });
  };
  const handleSwal = () =>{
    swal("CONGRATULATION", "Enjoy Your Show!", "success");
  }

  return (
    <div className=" min-h-screen">
      {/* <div className="grid mt-12 grid-cols-1   gap-2">
        <img data-aos="fade-right" src={img1} alt="" />
        <img data-aos="fade-left" src={img2} alt="" />
        <img data-aos="flip-left" src={img3} alt="" />
        <img data-aos="flip-right" src={img4} alt="" />
      </div> */}
      {/* <div>
        <iframe
          className="mx-auto  rounded-xl"
          src="https://open.spotify.com/embed/album/533nPNo9dWvD3qg01PlxFw?utm_source=generator"
          width="580"
          height="480"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div> */}
      {/* gallery section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div data-aos="fade-right" className="text-left text-neutral-content">
          <div className="max-w-md">
            <h1 style={mainColor} className="mb-5 text-5xl font-bold">
              Upcoming Shows
            </h1>
            <p style={mainColor} className="mb-5">
              Prepare to embark on a sonic journey like no other! Immerse
              yourself in the world of progressive metal as virtuoso musicians
              push the boundaries of musical expression. Our upcoming prog metal.
              
            </p>
            {/* count down */}
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": countdownValue.days }}>
                    {countdownValue.days}
                  </span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": countdownValue.hours }}>
                    {countdownValue.hours}
                  </span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": countdownValue.min }}>
                    {countdownValue.min}
                  </span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": countdownValue.sec }}>
                    {countdownValue.sec}
                  </span>
                </span>
                sec
              </div>
            </div>
            <div>
              <button onClick={handleSwal} className="btn mx-auto mt-5 px-32 hover:btn-warning btn-success">
                Book Ticket
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FeatureArtistDetails;

import swal from "sweetalert";

const ShowExtraSection = ({ album }) => {
  const { name, image, price, albumName, short_description } = album;
  const mainColor = {
    backgroundColor: "#001829",
    color: "#ba9e76",
  };
  const handleSwal = () => {
    swal("CONGRATULATION", "Thank You for Buying!", "success");
  };
  return (
    <div>
      <div data-aos="flip-left" className="my-20">
        <div className="">
          <img className="w-[500px] my-5 mx-auto h-[500px" src={image} alt="" />
        </div>
        <div className="lg:text-left text-center">
          <p className="text-2xl font-semibold font-serif">Artist: {name}</p>
          <p className="text-2xl font-semibold font-mono">Album: {albumName}</p>
          <p className="text-2xl font-semibold font-mono">Price: {price}</p>
          <p className="text-2xl font-semibold font-mono">
            About Album: {short_description}
          </p>
          <button
            onClick={handleSwal}
            className="btn text-left mt-2 px-20 btn-success font-mono hover:btn-warning"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowExtraSection;

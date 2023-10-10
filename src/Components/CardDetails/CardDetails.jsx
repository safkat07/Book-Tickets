import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
import { AiFillBell } from "react-icons/ai";
import Footer from "../../Pages/Footer/Footer";
import { Toaster } from "react-hot-toast";


const CardDetails = () => {
  
  // const {newData, setNewData} = useState({})
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  console.log(data);

  const findData = data?.find((singleData) => singleData.id == id);
  console.log("SINGLE DATA", findData);
  const { name, image, long_description, price, short_description } = findData;
  const handleSwal = () =>{
    swal("CONGRATULATION", "Enjoy Your Show!", "success");
  }

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div  className=" max-w-[1400px] grid mr-2 lg:grid-cols-2 justify-between space-x-10 min-h-screen   mx-auto">
      <div data-aos="fade-right"  className="">
        <img className="w-[1000px]" src={image} alt="" />
      </div>
      <div  className="">
        <p className="text-5xl font-serif font-semibold">{name}</p> <br />
        <p>{long_description}</p>
        
        <p className="mt-10 font-mono font-semibold text-3xl">Best Price: {price}</p>
        <button  onClick={handleSwal} className="btn text-center mx-auto mt-5 border-none text-3xl  hover:btn-warning btn-success"> <AiFillBell className="text-3xl">
          </AiFillBell>Book Now</button>
      </div>
      {/* <Link to='/'><button className="btn">Go Home...</button></Link> */}
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default CardDetails;

import img1 from '../../assets/amazon.jpg'
import img2 from '../../assets/unesco.png'
import img3 from '../../assets/worldbank.png'
import img4 from '../../assets/laliga.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';



const OurPartners = () => {
    AOS.init()
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="center-top">
            <div className="text-center max-w-5xl mx-auto mt-24 mb-20"> 
            <h2 className="text-5xl font-mono font-semibold mb-10">Our Beloved Partners</h2>
            <div className='flex flex-col lg:flex-row justify-between gap-5'>
                <div data-aos="fade-right" className='flex lg:flex-col flex-row'>
                <img className='w-32 h-32' src={img1} alt="" />
                <p className='text-xl mt-2   font-serif'>Amazon</p>
                </div>
                
                <div data-aos="flip-left">
                <img className='w-32 h-32' src={img2} alt="" />
                <p className='text-xl mt-2 font-serif'>Unesco</p>
                </div>
               <div data-aos="flip-right">
               <img className='w-32 h-32' src={img3} alt="" />
               <p className='text-xl mt-2 font-serif'>World Bank</p>
               </div>
                <div data-aos="fade-left">
                <img className='w-32 h-32' src={img4} alt="" />
                <p className='text-xl mt-2 font-serif'>La-Liga</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OurPartners;
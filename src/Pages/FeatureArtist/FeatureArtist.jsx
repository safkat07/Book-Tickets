import spImg from '../../assets/SELFPORTRAIT.jpg'
import {  BsMusicNoteList } from 'react-icons/bs';
import {  BsTicketDetailedFill, BsFillInfoSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';  

import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureArtist = () => {
    AOS.init()
    const mainColor = {
        
        backgroundColor: "#001829",
        color: "#ba9e76",
      };
      const textColor = {
        color: "#ba9e76",
      }
    return (
        <div data-aos="fade-down" style={mainColor} className="max-w-7xl mx-auto mt-10"> 
            <div className="text-center">
            <h2 className="text-3xl font-bold lg:text-5xl text-center">Our Featured Artist</h2>
            <h2 className="lg:text-left text-center text-xl mt-10 font-serif font-bold">This is <span className="font-serif text-3xl lg:text-5xl ">SELF PORTRAIT</span> </h2>
            </div>
            <div className='mt-10 flex flex-col'>
                <div className=''>
                <img className='' src={spImg} alt="" />
                </div>
                <div  data-aos="fade-down">
                    <h2 className='text-xl mb-10 md:text-3xl flex-wrap mt-9 text-center font-semibold font-mono'>Self Portrait is a Bangladeshi Progressive Metal Band. Formed in 2006. Their first album "Tomra Ebong Prithibi" came out in 2010. Their second album "Odhikar" came in 2018. Which was a great album and had a huge impect in bangladeshi Metal listenars.</h2>
                </div>
                <div  style={textColor} className='flex text-center flex-col lg:flex-row text-xs lg:text-xl gap-2 lg:gap-10 justify-center'>
                    <div><Link to='/featureArtistDetails'>
                    <button className='btn border-white btn-ghost'> <BsTicketDetailedFill className='text-xl'></BsTicketDetailedFill>Book Shows</button>
                    </Link></div>
                    <div><Link to='/featureArtistDetails'>
                    <button className='btn border-white btn-ghost'><BsFillInfoSquareFill className='text-xl'></BsFillInfoSquareFill >Know More</button></Link></div>
                    <div> <Link to='/featureArtistDetails'>
                    <button className="btn border-white btn-ghost"> <BsMusicNoteList className='text-xl'></BsMusicNoteList>Listen Them</button></Link></div>
                    
                </div>
                
                
            </div>

            
        </div>
    );
};

export default FeatureArtist;
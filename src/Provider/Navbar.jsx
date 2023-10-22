
import React, { useState, useEffect } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion'
// import Image from '../assets/lufy.jpg'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [searching, setSearching] = useState(false);
    const [drawerToggle, setDrawerToggle] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth',
        });
    };


    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="">
            <nav
                className={`z-20 shadow-xl fixed h-16 px-8 md:px-0 top-0 w-full transition-transform duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'
                    } bg-brandDark py-14 flex items-center justify-center`}
            >
                <AnimatePresence>
                    {
                        searching &&
                        <motion.div
                            initial={{ y: -100 }}
                            animate={{ y: 0 }}
                            exit={{ y: -100 }}
                            transition={{ duration: 0.4 }}
                            className="bg-brandDark flex justify-between px-12 items-center z-30 h-28 w-full absolute shadow-sm">
                            <div className='flex  w-full lg:w-1/2 items-center justify-start'>
                                <button className='flex items-center justify-center  w-12 bg-brandDark text-white'><FiSearch /></button>
                                <input className='w-full outline-none border-none py-2 px-6 text-slate-200 bg-transparent' placeholder='search' />
                            </div>
                            <button onClick={() => setSearching(false)} className='flex items-center justify-center  w-12 bg-brandDark'><AiFillCloseSquare className='text-3xl text-brandSecondary' /></button>

                        </motion.div>
                    }
                </AnimatePresence>
                <div className="w-full md:w-[90%] ml-auto flex justify-between items-center">
                    <div>
                        {/* <Link href={'/'}><Image className='hidden lg:block' src={'/images/logo_main.svg'} width="220" height="50" alt="logo" /></Link>
                        <Link href={'/'}><Image className='block lg:hidden' src={'/images/logo_main.svg'} width="150" height="50" alt="logo" /></Link> */}
                    </div>
                    <div className="hidden lg:flex lg:space-x-4 xl:space-x-8 text-white">
                        <Link href="/about" className="text-sm xl:text-lg border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-28 flex items-center justify-center">About</Link>
                        <Link href="/services" className="text-sm xl:text-lg border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-28 flex items-center justify-center">Solutions</Link>
                        <Link href="/products" className="text-sm xl:text-lg border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-28 flex items-center justify-center">Products</Link>
                        <Link href="/news" className="text-sm xl:text-lg border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-28 flex items-center justify-center">News</Link>
                        <Link href="/career" className="text-sm xl:text-lg border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-28 flex items-center justify-center">Career</Link>
                        <Link href="/contact" className="text-sm xl:text-lg border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-28 flex items-center justify-center">Contact</Link>

                    </div>
                    <div className="hidden lg:flex items-center justify-center">
                        <button onClick={() => setSearching(true)} className='h-24 text-white flex items-center justify-center px-6 bg-brandDark hover:text-brandSecondary transition duration-300'><FiSearch /></button>
                        <button className='h-28 lg:px-4 xl:px-12 w-full bg-brandPrimary text-white text-lg font-semibold'>Get a Quote</button>
                    </div>
                    {/* Add a responsive menu button for small devices */}
                    <div className="lg:hidden flex md:pr-16">
                        <button onClick={() => setSearching(true)} className='h-24 flex items-center justify-center  w-12 bg-brandDark text-white'><FiSearch /></button>
                        <button onClick={() => setDrawerToggle(!drawerToggle)} className="">
                            <HiMenuAlt1 className='text-3xl text-white' />
                        </button>

                    </div>
                </div>

            </nav>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed z-50 bottom-28 right-16  text-white py-2 px-4  cursor-pointer"
                >
                    <BsFillArrowUpSquareFill className='text-6xl transition duration-300 text-brandSecondary hover:text-brandPrimary' />
                </button>
            )}
            <div>
                {
                    drawerToggle && <div onClick={() => setDrawerToggle(false)} className="w-full fixed z-50 h-[100vh] bg-[rgba(0,0,0,0.4)]"></div>
                }
                <AnimatePresence>
                    {
                        drawerToggle &&
                        <motion.div
                            initial={{ opacity: 0, x: -200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -200 }}
                            transition={{ duration: 0.5 }}
                            className="h-[100vh] lg:hidden fixed w-2/3 z-50 bg-white shadow-xl"
                        >
                            <div className="px-6 py-12">
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <Link href={'/'}><Image className='block lg:hidden' src={'/images/logo_main.svg'} width="150" height="50" alt="logo" /></Link>
                                    </div>
                                    <AnimatePresence>
                                        <motion.div onClick={() => setDrawerToggle(false)}
                                            initial={{ rotate: 180, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                        >
                                            <AiFillCloseSquare className='text-slate-600 text-3xl' />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <div className="flex flex-col space-y-1 mt-12">
                                    <Link href="/about" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">About Echo</Link>
                                    <Link href="/services" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">One Stop Solutions</Link>
                                    <Link href="/products" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Products</Link>
                                    <Link href="/news" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">News</Link>
                                    <Link href="/career" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Career</Link>
                                    <Link href="/contact" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Contact</Link>

                                </div>

                            </div>

                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Navbar

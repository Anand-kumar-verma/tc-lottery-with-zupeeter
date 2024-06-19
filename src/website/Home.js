import React, { useEffect, useState } from 'react'
import l from "../assets/images/1 (3).png"
import slide1 from "../assets/images/2.png"
import Header from './Header';
import About from './About';
import Feature from './Feature';
import Speaker from './Speaker';
import Footer from './Footer';

function Home() {
  const Carousel = ({ images, autoplayInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, autoplayInterval);

      return () => clearInterval(intervalId);
    }, [currentIndex]);
    return (
      <div className="carousel relative " >
        <div className='absolute  z-50 h-full w-full bg-black opacity-65 flex justify-center  items-center'>
        <p className='flex gap-2 flex-col justify-center  text-center lg:text-[25px]'>
        <p className='!text-yellow-600 font-bold lg:text-[20px] text-center'>January 20 ,2024</p>
        <p className='!text-white font-bold lg:text-[45px] text-center'> Online Cash Games </p>
        <p className='!text-white font-bold lg:text-[45px] text-center'> on Zupeeter Game </p>
        <p className='!text-white font-bold lg:text-center'> 50 game Coming Soon  12 Game Live  5 Game In Pipe Line</p>
        <button className='bg-orange-500 text-white items-center hover:bg-white mx-20 hover:text-orange-500 w-28 rounded-xl  text-sm p-2'>Play Now </button>
        </p>
        </div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide w-[1400px] lg:h-[550px] h-[300px] -mt-12"
        />

      </div>
    );
  };
  const images = [
    l, slide1, l
  ];
  return (

    <>
      <Header />
      <div className="content-container">
        <Carousel images={images} />
      </div>
      <About/>
      <Feature/>
      <Speaker/>
      <Footer/>
      </>

  )
}

export default Home





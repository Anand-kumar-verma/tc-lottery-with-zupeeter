import React ,{ useEffect, useState }from 'react'
import l from "../assets/images/1 (3).png"

function Home() {
  const Carousel = ({ images , autoplayInterval = 3000 }) => {
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
      <div className="carousel " >
    
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide w-[1400px] h-[500px]"
      />
     
    </div>
    );
  };
  const images = [
   l,l,l
  ];
  return (
   <div>
  
     <div className="content-container">
      <Carousel images={images} />
    </div>
   </div>
  )
}

export default Home



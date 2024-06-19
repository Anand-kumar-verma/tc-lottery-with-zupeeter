
import React from 'react';
import ab from "../assets/images/about-img.png"

const About = () => {
  return (
    <section className=" bg-gray-100 px-5 py-10">
  
        <div className="flex flex-wrap items-center justify-between px-4">
          <div className=" lg:w-6/12 md:w-full sm:w-full">
            <span className="text-purple-500 font-bold text-xl !py-2">GAME EVENT</span>
                <h2 className="lg:text-4xl font-bold text-gray-800 !py-2">SKILL-BASED GAMES ON ZUPEETER MONEY GAME APP</h2>
              <ul className=" mt-4">
                <li className="mb-2 text-gray-600">2Cr+ Downloads</li>
                <li className="mb-2 text-gray-600">₹10 Cr+ Daily cash winnings</li>
                <li className="mb-2 text-gray-600">SKILL-BASED GAMES</li>
                <li className="mb-2 text-gray-600">Withdraw Money UPI</li>
              </ul>
              <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mt-4">
            <a href='https://zupeeter.com/register'>Play Now</a>    
               </div>
          </div>
          <div className=" lg:w-6/12 md:w-full sm:w-full mt-8 lg:mt-0">
            <img src={ab} alt="" />
            </div>
        </div>
    
    </section>
  );
};

export default About;

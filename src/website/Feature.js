import React from 'react';
import one from "../assets/images/5.webp"
import two from "../assets/images/2.webp"
import three from "../assets/images/3.webp"
import eight from "../assets/images/8.webp"
import six from "../assets/images/6.webp"
import four from "../assets/images/4.webp"

const Feature = () => {
    return (
        <section className=" bg-gray-100 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5  lg:mx-5 px-4">  
                   <div className='flex flex-col justify-start p-2'>
                     <p className="text-purple-800 text-lg">Games</p>
                   <h2 className="text-4xl  font-bold">Our Games</h2></div>
                    {gamesData.map((game, index) => (
                        <div key={index} className="flex justify-start gap-2 bg-white shadow-2xl p-2 rounded-xl" >
                            
                            <img className="w-28" src={game.image} alt={game.alt} />
                          <div className="flex flex-col gap-5 justify-center">
                                <h4 className="text-xl font-bold">{game.title}</h4>
                                <p className="text-gray-400">{game.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
           
        </section>
    );
};

export default Feature;

// Sample data for games
const gamesData = [
    {
        image: one,
        alt: 'games',
        title: 'Ludo Supreme',
        description: 'Play Ludo Real cash games'
    },
    {
        image: two,
        alt: 'games',
        title: 'Ludo Ninja',
        description: 'Play Ludo Real money games'
    },
    {
        image: three,
        alt: 'games',
        title: 'Ludo Turbo',
        description: 'Play Ludo real cash earning games'
    },
    {
        image: eight,
        alt: 'games',
        title: 'CricketBaaz',
        description: 'Play Ludo real Zupeeter Game Cricketbaaz'
    },
    {
        image: one,
        alt: 'games',
        title: 'Trump Cards Mania',
        description: 'Play Trump cards, Win real Cash'
    },
    {
        image: six,
        alt: 'games',
        title: 'Ludo Supreme League',
        description: 'Play real money earning Ludo tournaments'
    },
    {
        image: four,
        alt: 'games',
        title: 'Snakes & Ladders Plus',
        description: 'Play Snakes & Ladders Plus, Win real Cash'
    }
];

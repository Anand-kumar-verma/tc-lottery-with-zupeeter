import React from 'react';
import widrawl from "../assets/images/money-withdrawal.png"
import sec from "../assets/images/cyber-security.png"
import cas from "../assets/images/cashback.png"
import hr from "../assets/images/24-hours.png"
import bd from "../assets/images/badge.png"
import dk from "../assets/images/help-desk.png"


const data = [
    { id: 1, image: widrawl },
    { id: 2, image: sec},
    { id: 3, image: cas },
    { id: 4, image: hr },
    { id: 5, image: bd },
    { id: 6, image: dk}
];

const Speaker = () => {
    return (
        <section className="bg-purple-900 py-10 lg:py-20">
            <p className="text-white text-center text-lg lg:text-xl py-5">
                Why play money winning games on Zupeeter Game?</p>
            <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
                {data.map(item => (
                    <div key={item.id} className="rounded-full bg-purple-900 border-4 border-white p-3 lg:p-4 h-20 lg:h-28 w-20 lg:w-28">
                        <img src={item.image} alt='' className="h-full w-full object-cover rounded-full" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Speaker;

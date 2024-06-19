import React from 'react';
import gw1 from '../assets/images/gw-1.jpg';
import gw2 from '../assets/images/gw-2.jpg';
import gw3 from '../assets/images/gw-3.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <div className="bg-blue-700 text-white">
        <div className=" mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col
         gap-10 lg:flex-row lg:justify-center lg:gap-20">
               <div className="text-center lg:text-left">
                    <p className="text-lg lg:text-xl font-medium leading-relaxed">
                        We have very good strength in innovative <br/>
                        technology and tools with over 35 years of <br/>
                        experience. We make long-term investments goal <br/> in 
                        global companies in different sectors, mainly in<br/> Europe and other countries.

                    </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <p className="text-lg lg:text-xl font-bold mb-2">Useful Links</p>
                    <div className="flex lg:flex-col sm:flex-row gap-2">
                        <p>Home</p>
                        <p>Sign in</p>
                        <p>Log In</p>
                        <p>Download</p>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <p className="text-lg lg:text-xl font-bold mb-2">Instagram Gallery</p>
                    <div className="grid grid-cols-2 gap-2">
                        <img src={gw1} alt='' className='h-14 w-16' />
                        <img src={gw2} alt='' className='h-14 w-16' />
                        <img src={gw3} alt='' className='h-14 w-16' />
                        <img src={gw2} alt='' className='h-14 w-16' />
                    </div>
                </div>
               <div className="flex flex-col items-center lg:items-start">
                    <p className="text-lg lg:text-xl font-bold mb-2">Contact Us</p>
                    <p className="py-2">support@Zupeetergame.info</p>
                    <div className="flex justify-center lg:justify-start gap-2">
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <LanguageIcon />
                        <YouTubeIcon />
                        <PinterestIcon />
                    </div>
                </div>
            </div>
              <div className="bg-purple-900 text-center py-5 text-white font-bold">
                <p>© Copyright 2024 All Rights Reserved by Zupeeter Games</p>
            </div>
        </div>
    );
}

export default Footer;

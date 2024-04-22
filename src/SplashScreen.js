import React from "react";
import splash_screen from "./assets/images/splash_screen.PNG";
import Loder from "./shared/Loder";
const SplashScreen = () => {
  return (
    <div>
      <img src={splash_screen} className="!h-screen" />
    </div>
  );
};

export default SplashScreen;

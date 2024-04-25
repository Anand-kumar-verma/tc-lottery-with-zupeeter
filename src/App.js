import "./assets/style/main.css";
import Dashboard from "./pages/home/Dashboard";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./component/layout/Layout";
import SplashScreen from "./SplashScreen";
import Activity from './pages/activity/Activity';
import Wingo from './pages/wingo/Wingo';
import Contactus from './pages/Contact/Contactus';
import ServiceCollection from './pages/Contact/component/ServiceCollection';
import SupportPage from './pages/Contact/component/SupportPage';
import ComingSoon from './pages/comingsoon/ComingSoon';
import Withdraval from './pages/wallet/Withdraval';
import Deposite from './pages/wallet/Deposite';


function App() {
  const [isOpenSplash, setIsOpenSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpenSplash(false);
    }, 1000);
  }, []);
  
  if (isOpenSplash)
    return (
      <Layout header={false} footer={false}>
        <SplashScreen />
      </Layout>
    );
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path='/activity' element={<Activity />}></Route>
      <Route path='/wingo' element={<Wingo />}></Route>
      <Route path='/CustomerService' element={<Contactus />}></Route>
      <Route path='/ServiceCollections' element={<ServiceCollection />}></Route>
      <Route path='/supportPage' element={<SupportPage />}></Route>
      <Route path='/comingsoon' element={<ComingSoon />}></Route>
      <Route path='/withdraw' element={<Withdraval />}></Route>
      <Route path='/deposit' element={<Deposite />}></Route>
    </Routes>
  );
}

export default App;

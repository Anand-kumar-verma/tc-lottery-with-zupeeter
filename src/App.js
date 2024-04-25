import "./assets/style/main.css";
import Dashboard from "./pages/home/Dashboard";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./component/layout/Layout";
import SplashScreen from "./SplashScreen";
import Activity from './pages/activity/Activity';
import Wingo from './pages/wingo/Wingo';

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
    </Routes>
  );
}

export default App;

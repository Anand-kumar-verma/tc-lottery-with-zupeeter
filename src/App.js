import { Box } from "@mui/material";
import "./assets/style/main.css";
import Dashboard from "./pages/home/Dashboard";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./component/layout/Layout";
import SplashScreen from "./SplashScreen";

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
    </Routes>
  );
}

export default App;

import CryptoJS from "crypto-js";
import { useState } from "react";
import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import BeforeLogin from "./BeforeLogin";
import SplashScreen from "./SplashScreen";
import "./assets/style/main.css";
import LayoutAviator from "./pages/AviatorGame/Layout";
import PlayGame from "./pages/AviatorGame/PlayGame";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/home/Dashboard";
import Test from "./pages/test";
import { routes } from "./route";
import { TeamsubFunction } from "./services/apiCallings";
import Home from "./website/Home";
function App() {

  const isAuthenticatedd =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null; // Check if the user is authenticated
  const [isOpenSplash, setIsOpenSplash] = useState(true);
  const isAuthenticated = localStorage.getItem("user_id");



  useQuery(["team_count"], () => TeamsubFunction(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsOpenSplash(false);
  //   }, 1000);
  // }, []);

  // if (isOpenSplash)
  //   return (
  //     <Layout header={false} footer={false}>
  //       <SplashScreen />
  //     </Layout>
  //   );

  return (
    <Routes>
      <Route path="/playgame" element={<LayoutAviator component={<PlayGame />} />}></Route> 
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/before-login" element={<BeforeLogin />}></Route>
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      <Route path="dashboard" element={<Dashboard />} />
      {isAuthenticated ? (
        routes?.map((route, index) => {
          return (
            <Route key={index} path={route?.path} element={route?.element} />
          );
        })
      ) : (
        <Route path="/" element={<Home />}></Route>
      )}

      <Route path="/splash" element={<SplashScreen />}></Route>
    </Routes>
  );
}

export default App;

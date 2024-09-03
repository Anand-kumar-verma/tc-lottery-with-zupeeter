import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import BeforeLogin from "./BeforeLogin";
import SplashScreen from "./SplashScreen";
import "./assets/style/main.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/home/Dashboard";
import Test from "./pages/test";
import { routes } from "./route";
import { TeamsubFunction } from "./services/apiCallings";
import LayoutAviator from "./GamePage/Layout";
import PlayGame from "./GamePage/PlayGame";
import { deCryptData } from "./shared/secret";
function App() {
  const isAuthenticated = deCryptData(localStorage.getItem("user_id"));
  useQuery(["team_count"], () => isAuthenticated && TeamsubFunction(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/before-login" element={<BeforeLogin />}></Route>
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/playgame"
        element={<LayoutAviator component={<PlayGame />} />}
      />

      {isAuthenticated ? (
        routes?.map((route, index) => {
          return (
            <Route key={index} path={route?.path} element={route?.element} />
          );
        })
      ) : (
        <Route path="/" element={<Login />}></Route>
      )}

      <Route path="/splash" element={<SplashScreen />}></Route>
    </Routes>
  );
}

export default App;

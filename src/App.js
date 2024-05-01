import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import "./assets/style/main.css";
import Layout from "./component/layout/Layout";
import Contactus from "./pages/Contact/Contactus";
import ServiceCollection from "./pages/Contact/component/ServiceCollection";
import SupportPage from "./pages/Contact/component/SupportPage";
import Activity from "./pages/activity/Activity";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import Dashboard from "./pages/home/Dashboard";
import MainPageOFIncome from "./pages/income/MainPageOFIncome";
import RegistrationBonus from "./pages/income/incomeSubSection/RegistrationBonus";
import TRX from "./pages/trx/TRX";
import TronScanPage from "./pages/trx/component/TronScanPage";
import Deposite from "./pages/wallet/Deposite";
import Withdraval from "./pages/wallet/Withdraval";
import Wingo from "./pages/wingo/Wingo";
import ReferralBonus from "./pages/income/incomeSubSection/ReferralBonus";
import TeamBettingBonus from "./pages/income/incomeSubSection/TeamBettingBonus";
import TeamSalaryBonus from "./pages/income/incomeSubSection/TeamSalaryBonus";
import RoyalityBonus from "./pages/income/incomeSubSection/RoyalityBonus";
import LevelBonus from "./pages/income/incomeSubSection/LevelBonus";
import ICOLevelBonus from "./pages/income/incomeSubSection/ICOLevelBonus";
import BettingBonus from "./pages/income/incomeSubSection/BettingBonus";
import AllLevelOfTeam from "./pages/myteam/AllLevelOfTeam";
import Tables from "./pages/myteam/Tables";
import Account from "./pages/account/Account";
import BankDetails from "./pages/bank/BankDetails";
import Banks from "./pages/bank/Banks";
import UPIDetails from "./pages/upi/UPIDetails";
import ICOToken from "./pages/ioctoken/ICOToken";

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
      <Route path="/account" element={<Account />}></Route>
      <Route path="/activity" element={<Activity />}></Route>
      <Route path="/wingo" element={<Wingo />}></Route>
      <Route path="/trx" element={<TRX />}></Route>
      <Route path="/CustomerService" element={<Contactus />}></Route>
      <Route path="/ServiceCollections" element={<ServiceCollection />}></Route>
      <Route path="/supportPage" element={<SupportPage />}></Route>
      <Route path="/comingsoon" element={<ComingSoon />}></Route>
      <Route path="/withdraw" element={<Withdraval />}></Route>
      <Route path="/deposit" element={<Deposite />}></Route>
      <Route path="/trx/tron-scan" element={<TronScanPage />}></Route>
      <Route path="/bank" element={<BankDetails />}></Route>
      <Route path="/banks-details" element={<Banks />}></Route>
      <Route path="/banks-upi" element={<UPIDetails />}></Route>
      <Route path="/ico-token" element={<ICOToken />}></Route>
      {/* // INCOME */}
      <Route
        path="/account/income-main/registration-bonus"
        element={<RegistrationBonus />}
      ></Route>
      <Route path="/account/income-main" element={<MainPageOFIncome />}></Route>
      <Route
        path="/account/income-main/referral-bonus"
        element={<ReferralBonus />}
      ></Route>
      <Route
        path="/account/income-main/team-betting-bonus"
        element={<TeamBettingBonus />}
      ></Route>
      <Route
        path="/account/income-main/team-salary-bonus"
        element={<TeamSalaryBonus />}
      ></Route>
      <Route
        path="/account/income-main/royality-bonus"
        element={<RoyalityBonus />}
      ></Route>
      <Route
        path="/account/income-main/level-bonus"
        element={<LevelBonus />}
      ></Route>
      <Route
        path="/account/income-main/ico-level-bonus"
        element={<ICOLevelBonus />}
      ></Route>
      <Route
        path="/account/income-main/betting-bonus"
        element={<BettingBonus />}
      ></Route>
      <Route
        path="/account/income-main/my-team"
        element={<AllLevelOfTeam />}
      ></Route>
      <Route
        path="/account/income-main/my-team/levels"
        element={<Tables />}
      ></Route>
    </Routes>
  );
}

export default App;

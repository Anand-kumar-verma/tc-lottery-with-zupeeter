import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/style/main.css";
import Contactus from "./pages/Contact/Contactus";
import ServiceCollection from "./pages/Contact/component/ServiceCollection";
import SupportPage from "./pages/Contact/component/SupportPage";
import Account from "./pages/account/Account";
import Activity from "./pages/activity/Activity";
import RiskDisclosureAgreement from "./pages/auth/Component/RiskDisclosureAgreement";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BankDetails from "./pages/bank/BankDetails";
import Banks from "./pages/bank/Banks";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import FundMain from "./pages/fund/FundMain";
import FundReport from "./pages/fund/FundReport";
import FundTransfer from "./pages/fund/FundTransfer";
import Dashboard from "./pages/home/Dashboard";
import MainPageOFIncome from "./pages/income/MainPageOFIncome";
import BettingBonus from "./pages/income/incomeSubSection/BettingBonus";
import ICOLevelBonus from "./pages/income/incomeSubSection/ICOLevelBonus";
import LevelBonus from "./pages/income/incomeSubSection/LevelBonus";
import ReferralBonus from "./pages/income/incomeSubSection/ReferralBonus";
import RegistrationBonus from "./pages/income/incomeSubSection/RegistrationBonus";
import RoyalityBonus from "./pages/income/incomeSubSection/RoyalityBonus";
import TeamBettingBonus from "./pages/income/incomeSubSection/TeamBettingBonus";
import TeamSalaryBonus from "./pages/income/incomeSubSection/TeamSalaryBonus";
import ICOToken from "./pages/ioctoken/ICOToken";
import AllLevelOfTeam from "./pages/myteam/AllLevelOfTeam";
import Tables from "./pages/myteam/Tables";
import AccountPassword from "./pages/password/AccountPassword";
import ChangePassword from "./pages/password/ChangePassword";
import TransactionPassword from "./pages/password/TransactionPassword";
import Promotion from "./pages/promotion/Promotion";
import ViewSalaryIncome from "./pages/salaryIncome/ViewSalaryIncome";
import Test from "./pages/test";
import TRX from "./pages/trx/TRX";
import TronScanPage from "./pages/trx/component/TronScanPage";
import UPIDetails from "./pages/upi/UPIDetails";
import UPIDepositToken from "./pages/upiDepositToken/UPIDepositToken";
import AddBankAccount from "./pages/wallet/Component/AddBankAccount";
import Bankaccount from "./pages/wallet/Component/Bankaccount";
import Deposite from "./pages/wallet/Component/Deposite";
import Depositehistory from "./pages/wallet/Component/Depositehistory";
import Withdraval from "./pages/wallet/Component/Withdraval";
import Withdrawlhistory from "./pages/wallet/Component/Withdrawlhistory";
import Wallet from "./pages/wallet/Wallet";
import Wingo from "./pages/wingo/Wingo";
import ZupeeterTokenReport from "./pages/zupeeterToken/ZupeeterTokenReport";

function App() {
  const [isOpenSplash, setIsOpenSplash] = useState(true);

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
      <Route path="/" element={<Login />}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/RiskDisclosureAgreement" element={<RiskDisclosureAgreement />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path='/withdrawlhistory' element={<Withdrawlhistory />}></Route>
      <Route path='/depositehistory' element={<Depositehistory />}></Route>
      <Route path='/promotion' element={<Promotion />}></Route>
      <Route path='/wallet' element={<Wallet />}></Route>
      <Route path='/bankcard' element={<Bankaccount />}></Route>
      <Route path='/addbankaccount' element={<AddBankAccount />}></Route>
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
      <Route path="/fund-main" element={<FundMain />}></Route>
      <Route path="/fund-report" element={<FundReport />}></Route>
      <Route path="/fund-transfer" element={<FundTransfer />}></Route>
      <Route path="/view-salary-income" element={<ViewSalaryIncome />}></Route>
      <Route path="/upi-deposit-token" element={<UPIDepositToken />}></Route>
      <Route path="/zupeeter-token" element={<ZupeeterTokenReport />}></Route>
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
      <Route
        path="/password"
        element={<ChangePassword />}
      ></Route>
      <Route
        path="/password/account"
        element={<AccountPassword />}
      ></Route>
      <Route
        path="/password/transction"
        element={<TransactionPassword />}
      ></Route>
    </Routes>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/layout/Layout";

const Account = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="!flex flex-col">
        <span
          className="!text-blue-500 cursor-pointer"
          onClick={() => navigate("/account/income-main/my-team")}
        >
          My Team
        </span>
        <span
          className="!text-blue-500 cursor-pointer"
          onClick={() => navigate("/account/income-main")}
        >
          INCOME
        </span>
        <span
          className="!text-blue-500 cursor-pointer"
          onClick={() => navigate("/bank")}
        >
          Bank
        </span>
        <span
          className="!text-blue-500 cursor-pointer"
          onClick={() => navigate("/ico-token")}
        >
          TCO TOken
        </span>
      </div>
    </Layout>
  );
};

export default Account;

// export const domain = "https://demo2.ferryinfotech.in/";
// export const domain = "https://aviator-backend-pyup.onrender.com/";
export const domain = "https://trx-timer-zupeeter.onrender.com/";

export const rupees = "₹";
export const zubgback = "#F48901";

// export const baseUrl = "min.righttime.fun";
// export const baseUrl = "https://webs.ferryinfotech.in";
export const baseUrl = "https://admin.zupeeter.com";
export const front_end_domain = "https://zupeeter.com";
export const usdt_base_url = "https://zupeegame.info"
export const download_app_url = "https://zupeeter.com/ZUPEETER.pdf"


export const endpoint = {
  newlogin: `${baseUrl}/api/newlogin`,
  register_candidate_mobile: `${baseUrl}/api/register_candidate`,
  register_candidate_email: `${baseUrl}/api/register_candidate_new`,
  game_history: `${baseUrl}/api/color_result`,
  bet_placed: `${baseUrl}/api/betnew_color`,
  my_history: `${baseUrl}/api/one_min_myhistory`,
  get_balance: `${baseUrl}/api/get_balance`,
  total_withdrawal_bet: `${baseUrl}/api/total_withdrawal_bet`,
  my_team_level: `${baseUrl}/api/my_team`,
  my_team_level_report_indevidual: `${baseUrl}/api/member_report`,
  bank: `${baseUrl}/api/bank`,
  update_bank_details: `${baseUrl}/api/update_bank_details_new`,
  update_upi_details: `${baseUrl}/api/update_upi_details`,
  fund_transfer_history: `${baseUrl}/api/view_fund_transfer`,
  get_user_intro_name: `${baseUrl}/api/get_intro_name`,
  insert_fund_transfer: `${baseUrl}/api/insert_fund_transfer`,
  view_salary_income: `${baseUrl}/api/view_salary_income`,
  get_token_price: `${baseUrl}/api/token_price`,
  get_token_price_in_dooler: `${baseUrl}/api/get_price_ico`,
  update_password: `${baseUrl}/api/update_password`,
  pin_password: `${baseUrl}/api/update_pin_password`,
  view_ico_purchaseing: `${baseUrl}/api/view_ico_purchaseing`,
  insert_ico_purchase: `${baseUrl}/api/insert_ico_purchase`,
  view_withdrwal_new_inr: `${baseUrl}/api/view_withdrwal_new_inr`,
  win_list_top: `${baseUrl}/api/win_list_top`,
  wallet_deposit_history: `${baseUrl}/api/wallet_deposit`,
  wallet_deposit: `${baseUrl}/api/wallet_deposit_insert`,
  wallet_withdrawl: `${baseUrl}/api/insert_withdrawal_request_inr_new`,
  withdrawl_status: `${baseUrl}/api/status`,
  // payment
  payin_response: `${baseUrl}/api/payin_response`,
  payin_response_akash: `${baseUrl}/api/payin_response_new`,
  payin_response_ico_token_akash: `${baseUrl}/api/payin_response_upi_token`,
  
  indian_insert_deposite: `${baseUrl}/api/indian_insert_deposite`,
  // trx apis
  trx_game_history: `${baseUrl}/api/trx_result`, //////// done in node js
  trx_bet_placed: `${baseUrl}/api/Trx_bet`, //////////// done in node js
  trx_my_history: `${baseUrl}/api/trx_one_min_myhistory`, /// done  in node js
  registration_bonus: `${baseUrl}/api/view_direct_referral_income`,  
  view_bank_details: `${baseUrl}/api/view_bank_details_new`,
  view_upi_details: `${baseUrl}/api/view_upi_details`,
  token_launch: `${baseUrl}/api/token_launch`,
  info_promotion:`${baseUrl}/api/get_info`,
  team_info:`${baseUrl}/api/team_count`,
  team_report:`${baseUrl}/api/TeamReport`,
  profile_function:`${baseUrl}/api/profile`,
  team_data:`${baseUrl}/api/get_all`,
  view_paying_api: `${baseUrl}/api/view_paying_api`,
  update_profile_pic: `${baseUrl}/api/update_profile_pic`,
  win_list_last: `${baseUrl}/api/win_list_last`,

  payin_status:`${baseUrl}/api/payin_api`,
  swnl_pay_in_api:`${baseUrl}/api/insert_fund_request_vapayout`,
  trx_bet_placed_node:` http://192.168.18.183:9000/bid-placed-node`,

  node_api:{
    my_history: `${domain}/api/v1/my-history-by-user-id`,
    login_with_node:`${domain}/api/v1/createuser`,
    main_wallet:`${domain}/main-wallet-to-aviator`,
    aviator_main:`${domain}/aviator-to-main-wallet`,
  },

  //  avaitorapi
  userwallet: `${baseUrl}/api/userwallet`,
  // top11winner: `https://game-zone-sql.onrender.com/api/v1/topw11winningInformation`,
  top11winner: `${baseUrl}/api/winning-list`,
  openbannerUrl: `${baseUrl}/popup`,
  profiledata: `${baseUrl}/api/profileapi`,
  applybet: `${baseUrl}/api/bet`,
  game_history: `${baseUrl}/api/colour_result`,
  my_history: `${baseUrl}/api/getbet`,
  my_history_all: `${baseUrl}/api/getbet-game-results`,
  check_result: `${baseUrl}/api/checkresult`,
  color_winning: `${baseUrl}/api/colour_winning`,
  cash_deposit: `${baseUrl}/api/deposit`,
  payment_url: "https://vpayout.com/Upi_controller/insert_fund_request_online",
  withdraw_payment: `${baseUrl}/api/payout-request`,
  get_name_by_referral_code: `${baseUrl}/api/get-user-reffral-name`,
  payment_request: `${baseUrl}/api/deposit-request`,
  registration_bonus: `${baseUrl}/api/welcom-bonus`,
  deposit_history: `${baseUrl}/api/deposit-history`,
  withdrawl_history: `${baseUrl}/api/withdrawl-history`,
  deposit_bonus: `${baseUrl}/api/deposit-bonus`,
  referral_bonus: `${baseUrl}/api/refral-bonus`,
  daily_self_bet_income: `${baseUrl}/api/daily-self-bet-income`,
  daily_wallet_income: `${baseUrl}/api/daily-wallet-income`,
  daily_salary_income: `${baseUrl}/api/daily-salay-income`,
  team_reward_bonus: `${baseUrl}/api/team-reward-bonus`,
  team_trading_bonus: `${baseUrl}/api/team-trading-bonus`,
  add_bank_details: `${baseUrl}/api/bank-add`,
  get_bank_list: `${baseUrl}/api/user-bank-details`,
  promotion_data: `https://game-zone-sql-0lr4.onrender.com/api/v1/promotiondata`,
  all_withdrawl_user_list: `${baseUrl}/api/widthrol-user-list`,
  recharge_call_bakc: `${baseUrl}/api/deposits-user-request`,
  cricket_get_url_id_pass: `${baseUrl}/api/cricket-details`,
  
  // aviator api's
  aviator_login: `${baseUrl}/api/aviator/login`,
  get_data_by_user_id: `${baseUrl}/api/userProfile`,
  aviator_result: `${baseUrl}/api/aviator/result_cron`,
  total_bet_history: `${baseUrl}/api/aviator/total-bet-histroy`,
  bet_history: `${baseUrl}/api/aviator/bet_histroy`,
  result: `${baseUrl}/api/aviator/result`,
  wallet_data: `${baseUrl}/api/aviator/userwallet`,
  bet_now: `${baseUrl}/api/aviator/bet_now`,
  cash_out: `${baseUrl}/api/aviator/cash_out`,
};

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import { Box, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ageantline from '../../assets/images/ageantline.png';
import cardbg from '../../assets/images/cardbg.png';
import comitiondetails from '../../assets/images/commissiondetails.png';
import copyinvitationcode from '../../assets/images/copyinvitationcode.png';
import invitationrules from '../../assets/images/invitationrules.png';
import newsubordinatedata from '../../assets/images/newsubordinatedata.png';
import promotiondata from '../../assets/images/promotiondata.png';
import rebateratio from '../../assets/images/rebateratio.png';
import subcordinatedata from '../../assets/images/subcordinatedata.png';
import Layout from "../../component/layout/Layout";
import { Promotionfunction, TeamsubFunction} from "../../services/apiCallings";
import theme from "../../utils/theme";
import { useQuery } from "react-query";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";


function Promotion() {
  const { data } = useQuery(["get_info"], () => Promotionfunction(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });

  const prim = data?.data?.earning || [];
  
  const { isLoading,data:count } = useQuery(["team_count"], () => TeamsubFunction(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
  const Counting = count?.data?.earning || [];
  
  

  return (
    <Layout header={false}>
      <Container >
      <CustomCircularProgress isLoading={isLoading} />
        <Box sx={style.header}>
          <Typography variant="body1" color="initial">
          </Typography>
          <Typography variant="body1" color="initial" className="!text-white">
            Agency
          </Typography>
          <Box component={NavLink} to="/promotion/Subordinate/">

          </Box>
        </Box>
        <Box sx={style.commitionboxOuter}>
          <Box sx={{ width: '92%', margin: 'auto', background: theme.palette.primary.main, mt: 2, borderRadius: '10px', pb: 3, }}>
            <Box sx={style.commitionbox}>
              <Typography variant="body1" color="initial" className="!text-white">
                0
              </Typography>
              <Typography variant="body1" color="initial" className="!text-white">
                Yesterday's total commission
              </Typography>
              <Typography variant="body1" color="initial" className="!text-white">
                Upgrade the level to increase turnover
              </Typography>
            </Box>
          </Box>
          <Box sx={style.subcordinateBox}>
            <Stack direction="row" sx={{ width: "92%", background: theme.palette.primary.main, margin: 'auto' }}>
              <Box sx={style.subordinatesleft}>
                <EmojiPeopleOutlinedIcon />
                <Typography variant="body1" color="initial">
                  {" "}
                  Direct subordinates
                </Typography>
              </Box>
              <Box sx={style.subordinatesRight}>
                <Groups2OutlinedIcon />
                <Typography variant="body1" color="initial">
                  Team subordinates
                </Typography>
              </Box>
            </Stack>
            <Box sx={style.boxStyles}>
              <Box sx={style.innerBoxStyles}>

                <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                    {prim?.direct}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                    Direct

                  </Typography>
                </Box>


                <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                    {prim?.number_of_register}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                    {" "}
                    Number of register
                  </Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                    {prim?.total_amt}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >

                    Total Amount
                  </Typography>
                </Box>

              </Box>

              <Box sx={style.innerBoxStylestwo}>
              <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                   {Counting?.direct}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                    {" "}
                    Direct
                  </Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                   {Counting?.number_of_register}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                    {" "}
                    Number of Registers
                  </Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                   {Counting?.total_amt}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-white"
                  >
                    {" "}
                    Total Amount
                  </Typography>
                </Box>

              </Box>
            </Box>
            <Box sx={style.invitebtn}>
              <NavLink >
                <Typography sx={{}}>INVITATION LINK</Typography>
              </NavLink>
            </Box>
          </Box>
          <Box sx={style.invitebutton} className="invitebutton">
            <Box sx={style.invitbox}>
              <Stack direction="row">
                <Box component='img' src={copyinvitationcode}></Box>
                <Typography variant="body1" color="initial">
                  Copy invitation code
                </Typography>
              </Stack>
              <Stack direction="row">
                <Typography variant="body1" color="initial">
                  547264301726
                </Typography>
                <ArrowForwardIosOutlinedIcon />
              </Stack>
            </Box>
            <NavLink to="/promotion/TeamReport">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component='img' src={subcordinatedata}></Box>
                  <Typography variant="body1" color="initial">
                    Subordinate data
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to="/promotion/Teamdata">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component='img' src={subcordinatedata}></Box>
                  <Typography variant="body1" color="initial">
                   Team data
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to="/promotion/MyCommission">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component='img' src={comitiondetails}></Box>
                  <Typography variant="body1" color="initial">
                    Commission detail
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to="/promotion/Subordinates">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component="img" src={newsubordinatedata}></Box>
                  <Typography variant="body1" color="initial">
                    New subordinates
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to="/promotion/PromotionRule">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component='img' src={invitationrules}></Box>
                  <Typography variant="body1" color="initial">
                    Invitation rules
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to="/promotion/Server/">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component='img' src={ageantline}></Box>
                  <Typography variant="body1" color="initial">
                    Agent line customer service
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to="/promotion/Rebate/">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component="img" src={rebateratio}></Box>
                  <Typography variant="body1" color="initial">
                    Rebate ratio
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <Box sx={style.promotionBoxOuter}>
              <Box sx={style.promotionBox}>
                <Stack direction="row">
                  <Box component='img' src={promotiondata}></Box>
                  {/* <Box component="img" src={data}></Box> */}
                  <Typography variant="body1" color="initial">
                    promotion data
                  </Typography>
                </Stack>
              </Box>
              <Stack direction="row">
                <Box>
                  <Typography variant="body1" color="initial">
                    0
                  </Typography>
                  <Typography   className="!text-gray-300">
                    This Week
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" color="initial">
                    8241.78
                  </Typography>
                  <Typography variant="body1" color="initial">
                    Total Commission
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row">
                <Box>
                  <Typography variant="body1" color="initial">
                    0
                  </Typography>
                  <Typography variant="body1" color="initial">
                    Direct subordinate
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" color="initial">
                    3
                  </Typography>
                  <Typography variant="body1" color="initial">
                    Total number of <br />
                    subordinates in the team
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Box sx={style.promotionBoxOutertwo}></Box>
          </Box>
        </Box>

      </Container>
    </Layout>
  );
}

export default Promotion;

const style = {
  header: {
    padding: 1,
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
  },
  commitionboxOuter: {
    width: "100%",
    height: "20vh",
    background: '#F7F8FF',
    "&>img": { width: "100%", height: "100%" },
  },
  commitionbox: {

    margin: "auto",
    width: "70%",
    textAlign: "center",
    py: 2,
    backgroundImage: `url(${cardbg})`,
    "&>p:nth-child(1)": { fontSize: "25px", fontWeight: "500" },
    "&>p:nth-child(2)": {
      fontSize: "13px",
      fontWeight: "400",
      padding: "5px 0px",
      background: '#ffa43f',
      borderRadius: "20px",
    },
    "&>p:nth-child(3)": {
      fontSize: "13px",
      fontWeight: "400",
      marginTop: "5px",
    },
  },
  subordinatesleft: {
    width: "50%",
    textAlign: "center",
    py: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: '#F6F6F6',
    borderTopLeftRadius: "10px",
    borderRight: "2px solid #fefefe",
    "&>svg": { color: theme.palette.primary.main, fontSize: "25px", marginRight: "10px" },
    "&>p": { color: "gray", fontSize: "14px", fontWeight: "500" },


  },
  subordinatesRight: {
    width: "50%",
    textAlign: "center",
    py: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: '#F6F6F6',
    borderTopRightRadius: "10px",
    "&>svg": { color: theme.palette.primary.main, fontSize: "25px", marginRight: "10px" },
    "&>p": { color: "gray", fontSize: "14px", fontWeight: "500" },

  },
  boxStyles: {
    background: '#ffffff',
    padding: "15px",
    display: "flex",
    borderRadius: " 0px 0px 10px 10px",
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    width: "92%",
    margin: 'auto;'
  },
  innerBoxStyles: {
    width: "50%",
    borderRight: "1px solid black",
    borderBottomLeftRadius: "10px",
    padding: "0px 0px",
  },
  innerBoxStylestwo: { width: "50%", padding: "0px 0px" },
  subcordinatelist: {
    textAlign: "center",
    "&>p": { color: "black !important", fontSize: "13px" },
    mb: 1,
  },
  subcordinateBox: {
    width: "100%",

    background: '#F7F8FF',
    mt: -2,

  },
  invitebutton: {
    width: "100%",
    background: '#F7F8FF',
  },
  invitebtn: {
    mt: "20px",
    pb: 2,
    "&>a>p": {
      width: "80%",
      marginLeft: "10%",
      borderRadius: "20px",
      textAlign: "center",
      padding: "10px",
      background: 'orange',
      color: "white",
      fontSize: "17px",
      fontWeight: 600,
    },
  },
  invitbox: {
    width: "92%",
    background: '#ffffff',
    padding: "10px",
    mb: "20px",
    borderRadius: "10px",
    marginLeft: "2.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&>div>img": { width: "30px", marginRight: "10px" },
    "&>div>p": { fontSize: "14px", color: "black !important", fontWeight: '600' },
    "&>div": { alignItems: "center" },
    "&>div:nth-child(2)>p": { marginRight: "20px", color: "gray !important" },
    "&>div:nth-child(2)>svg": {
      fontSize: "14px",
      marginRight: "10px",
      color: "gray !important",
    },
  },
  promotionBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&>div:nth-child(1)": { alignItems: "center" },
    "&>div:nth-child(1)>img": { width: "35px", marginRight: "10px" },
    "&>div:nth-child(1)>p": {
      fontSize: "17px",
      fontWeight: 500,
      color: "black !important",
    },
  },
  promotionBoxOuter: {
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    width: "92%",
    background: '#ffffff',
    padding: "10px",
    mt: "20px",
    borderRadius: "5px",
    marginLeft: "2.5%",
    paddingBottom: "15px",
    "&>div:nth-child(2)>div:nth-child(1)": {
      my: "10px",
      borderRight: "1px solid gray",
      width: "50%",
      textAlign: "center",
    },
    "&>div:nth-child(2)>div:nth-child(2)": {
      my: "10px",
      width: "50%",
      textAlign: "center",
    },
    "&>div:nth-child(2)>div>p:nth-child(1)": { color: "black !important" },
    "&>div:nth-child(2)>div>p:nth-child(2)": {
      fontSize: "13px",
      fontWeight: 500,
      color: "grey !important",
    },
    "&>div:nth-child(3)>div:nth-child(1)": {
      my: "10px",
      borderRight: "1px solid gray",
      width: "50%",
      textAlign: "center",
    },
    "&>div:nth-child(3)>div:nth-child(2)": {
      my: "10px",
      width: "50%",
      textAlign: "center",
    },
    "&>div:nth-child(3)>div>p:nth-child(1)": { color: "black !important" },
    "&>div:nth-child(3)>div>p:nth-child(2)": {
      fontSize: "13px",
      fontWeight: 500,
      color: "grey !important",
    },
  },
  promotionBoxOutertwo: {
    width: "90%",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "5%",
    paddingBottom: "70px",
  },
};

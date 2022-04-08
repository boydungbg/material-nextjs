import { Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, Theme } from "@mui/system";
import type { NextPage } from "next";
import { relative } from "node:path/win32";
import CardComponent from "../components/card.components";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 200,
    marginBottom: 200,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  "view-block": {
    width: "100%",
    maxWidth: 1170,
    height: "auto",
    margin: "34px 0 40px 0",
  },
  "list-tour-container": {
    width: "100%",
    height: "auto",
  },
  "list-tours": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    columnGap: 30,
  },
  reviewIconStar: {
    width: 30,
    height: 30,
    backgroundImage: "url(/images/star.svg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  customerReivew: {
    width: "100%",
    display: "flex"
  },
  customerReviewLeft: {
    width: "50%",
  },
  subtitleCustomerReview: {
    display: "flex",
    justifyContent: "start",
    alignContent: "center",
    marginBottom: 25,
    "& div": {
      marginRight: 10,
    },
  },
  ratingCustomer: {
    display: "flex",
    justifyContent: "start",
    alignContent: "center",
    flexDirection: "column"
  },
  rate: {
    width: "100%",
    paddingBottom: 15,
    display: "flex",
    justifyContent: "space-between"
  },
  ratePoint: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 134,
  },
  pointOutline: {
    width: 120,
    height: "5px",
    border: "1px solid #1A2B49",
    borderRadius: 20,
    marginRight: 13,
  },
  point: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1A2B49",
  },
  customerReviewRight: {
    width: "50%",
    display: "flex",
    flexDirection: "column"
  },
  customerComment: {
    width: "100%",
    height: 150,
    display: "flex",
    padding: "25px 27px 27px 29px",
    backgroundColor: "#F3F9FF",
    marginBottom: 15,
    borderRadius: 20
  },
  customerInfo: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "30%",
  },
  customerAvater: {
    marginBottom: 16,
  },
  contentComment: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  [theme.breakpoints.down('desktop')]: {
    "view-block": {
      width: "100%",
      maxWidth: 900,
      height: "auto",
      padding: "50px 0"
    },
    "list-tours": {
      columnGap: 15,
    },
  },
  [theme.breakpoints.down('tablet')]: {
    "view-block": {
      width: "100%",
      maxWidth: "100%",
      height: "auto",
      margin: "0",
    },
    "list-tour-container": {
      overflowX: "scroll",
      "&::-webkit-scrollbar": {
        display: "none"
      }
    },
    "list-tours": {
      padding: "0 20px 30px 20px",
      width: "100vw",
    },
  },
  [theme.breakpoints.down('mobile')]: {
    "view-block": {
      width: "100%",
      maxWidth: "100%",
      height: "auto",
      padding: "0",
      marginBottom: "50px"
    },
    "list-tours": {
      padding: "0 20px 20px 20px",
      width: "100vw",
      columnGap: 10,
      marginRight: "20px"
    },
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.root}`}>
      <Box className={`${classes["view-block"]}`}>
        <Typography
          component="h4"
          marginBottom="24px"
          fontWeight={600}
          fontSize={30}
          lineHeight={"36.5px"}
          fontFamily="Montserrat"
        >
          Tuyến đi nổi bật
        </Typography>
        <Box className={`${classes["list-tour-container"]}`}>
          <Box className={`${classes["list-tours"]}`}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </Box>
        </Box>
      </Box>
      <Box className={`${classes["view-block"]}`}>
        <Box className={`${classes.customerReivew}`}>
          <Box className={`${classes.customerReviewLeft}`}>
            <Typography
              component="h4"
              marginBottom="18px"
              fontWeight={600}
              fontSize={30}
              lineHeight={"36.5px"}
              fontFamily="Montserrat"
            >
              Khách hàng nhận xét
            </Typography>
            <Box className={`${classes.subtitleCustomerReview}`}>
              <Box className={`${classes.reviewIconStar}`}></Box>
              <Box>
                <Typography
                  component="h5"
                  fontWeight={700}
                  fontSize={24}
                  lineHeight={"32.5px"}
                  fontFamily="Nunito"
                >
                  5.0
                </Typography>
              </Box>
              <Typography
                fontWeight={400}
                fontSize={18}
                lineHeight={"24.5px"}
                color="#1A2B49"
                fontFamily="Nunito"
                component="span"
              >
                (73 nhận xét)
              </Typography>
            </Box>
            <Box className={`${classes.ratingCustomer}`}>
              <Box className={`${classes.rate}`}>
                <Typography
                  fontWeight={400}
                  fontSize={18}
                  lineHeight={"24.5px"}
                  color="#1A2B49"
                  fontFamily="Nunito"
                >
                  Sạch sẽ
                </Typography>
                <Box className={`${classes.ratePoint}`}>
                  <Box className={`${classes.pointOutline}`}>
                    <Box className={`${classes.point}`}>
                    </Box>
                  </Box>
                  <Typography
                    fontWeight={400}
                    fontSize={18}
                    lineHeight={"24.5px"}
                    color="#1A2B49"
                    fontFamily="Nunito"
                  >
                    5.0
                  </Typography>
                </Box>
              </Box>
              <Box className={`${classes.rate}`}>
                <Typography
                  fontWeight={400}
                  fontSize={18}
                  lineHeight={"24.5px"}
                  color="#1A2B49"
                  fontFamily="Nunito"
                >
                  Sạch sẽ
                </Typography>
                <Box className={`${classes.ratePoint}`}>
                  <Box className={`${classes.pointOutline}`}>
                    <Box className={`${classes.point}`}>
                    </Box>
                  </Box>
                  <Typography
                    fontWeight={400}
                    fontSize={18}
                    lineHeight={"24.5px"}
                    color="#1A2B49"
                    fontFamily="Nunito"
                  >
                    5.0
                  </Typography>
                </Box>
              </Box>
              <Box className={`${classes.rate}`}>
                <Typography
                  fontWeight={400}
                  fontSize={18}
                  lineHeight={"24.5px"}
                  color="#1A2B49"
                  fontFamily="Nunito"
                >
                  Sạch sẽ
                </Typography>
                <Box className={`${classes.ratePoint}`}>
                  <Box className={`${classes.pointOutline}`}>
                    <Box className={`${classes.point}`}>
                    </Box>
                  </Box>
                  <Typography
                    fontWeight={400}
                    fontSize={18}
                    lineHeight={"24.5px"}
                    color="#1A2B49"
                    fontFamily="Nunito"
                  >
                    5.0
                  </Typography>
                </Box>
              </Box>
              <Box className={`${classes.rate}`}>
                <Typography
                  fontWeight={400}
                  fontSize={18}
                  lineHeight={"24.5px"}
                  color="#1A2B49"
                  fontFamily="Nunito"
                >
                  Sạch sẽ
                </Typography>
                <Box className={`${classes.ratePoint}`}>
                  <Box className={`${classes.pointOutline}`}>
                    <Box className={`${classes.point}`}>
                    </Box>
                  </Box>
                  <Typography
                    fontWeight={400}
                    fontSize={18}
                    lineHeight={"24.5px"}
                    color="#1A2B49"
                    fontFamily="Nunito"
                  >
                    5.0
                  </Typography>
                </Box>
              </Box>
              <Box className={`${classes.rate}`}>
                <Typography
                  fontWeight={400}
                  fontSize={18}
                  lineHeight={"24.5px"}
                  color="#1A2B49"
                  fontFamily="Nunito"
                >
                  Sạch sẽ
                </Typography>
                <Box className={`${classes.ratePoint}`}>
                  <Box className={`${classes.pointOutline}`}>
                    <Box className={`${classes.point}`}>
                    </Box>
                  </Box>
                  <Typography
                    fontWeight={400}
                    fontSize={18}
                    lineHeight={"24.5px"}
                    color="#1A2B49"
                    fontFamily="Nunito"
                  >
                    5.0
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={`${classes.customerReviewRight}`}>
            <Box className={`${classes.customerComment}`}>
              <Box className={`${classes.customerInfo}`}>
                <Box className={`${classes.customerAvater}`}>
                  <Avatar alt="Phạm Ngọc Trinh" src="/images/n.png">
                  </Avatar>
                </Box>
                <Typography
                  fontWeight={700}
                  fontSize={16}
                  lineHeight={"21.5px"}
                  color="#222222"
                  fontFamily="Nunito"
                >
                  Phạm Ngọc Trinh
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={14}
                  lineHeight={"19.5px"}
                  color="#222222"
                  fontFamily="Nunito"
                >
                  Thg8 2020
                </Typography>
              </Box>
              <Box className={`${classes.contentComment}`}>
                <Box width="19px" height="15px" mb="10px">
                  <img src="/images/comment.svg" alt="An SVG of an eye" />
                </Box>
                <Typography
                  paddingRight="20px"
                  fontWeight={400}
                  fontSize={16}
                  lineHeight={"21.5px"}
                  color="#1A2B49"
                  fontFamily="Nunito"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.                </Typography>
              </Box>
            </Box>
            <Box className={`${classes.customerComment}`}>
              <Box className={`${classes.customerInfo}`}>
                <Box className={`${classes.customerAvater}`}>
                  <Avatar alt="Phạm Ngọc Trinh" src="/images/n.png">
                  </Avatar>
                </Box>
                <Typography
                  fontWeight={700}
                  fontSize={16}
                  lineHeight={"21.5px"}
                  color="#222222"
                  fontFamily="Nunito"
                >
                  Phạm Ngọc Trinh
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={14}
                  lineHeight={"19.5px"}
                  color="#222222"
                  fontFamily="Nunito"
                >
                  Thg8 2020
                </Typography>
              </Box>
              <Box className={`${classes.contentComment}`}>
                <Box width="19px" height="15px" mb="10px">
                  <img src="/images/comment.svg" alt="An SVG of an eye" />
                </Box>
                <Typography
                  paddingRight="20px"
                  fontWeight={400}
                  fontSize={16}
                  lineHeight={"21.5px"}
                  color="#1A2B49"
                  fontFamily="Nunito"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.                </Typography>
              </Box>
            </Box>
            <Box className={`${classes.customerComment}`}>
              <Box className={`${classes.customerInfo}`}>
                <Box className={`${classes.customerAvater}`}>
                  <Avatar alt="Phạm Ngọc Trinh" src="/images/n.png">
                  </Avatar>
                </Box>
                <Typography
                  fontWeight={700}
                  fontSize={16}
                  lineHeight={"21.5px"}
                  color="#222222"
                  fontFamily="Nunito"
                >
                  Phạm Ngọc Trinh
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={14}
                  lineHeight={"19.5px"}
                  color="#222222"
                  fontFamily="Nunito"
                >
                  Thg8 2020
                </Typography>
              </Box>
              <Box className={`${classes.contentComment}`}>
                <Box width="19px" height="15px" mb="10px">
                  <img src="/images/comment.svg" alt="An SVG of an eye" />
                </Box>
                <Typography
                  paddingRight="20px"
                  fontWeight={400}
                  fontSize={16}
                  lineHeight={"21.5px"}
                  color="#1A2B49"
                  fontFamily="Nunito"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export default Home;

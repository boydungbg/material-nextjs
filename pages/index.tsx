import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import CardComponent from "../components/card.components";

const useStyles = makeStyles({
  root: {
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
    padding: "34px 0 40px 0",
  },
  "list-tour": {
    display: "flex",
    flexDirection: "row",
  },
  reviewIconStar: {
    width: 30,
    height: 30,
    backgroundImage: "url(/images/star.svg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  subtitleCustomerReview: {
    display: "flex",
    justifyContent: "start",
    alignContent: "center",
    "& div": {
      marginRight: 10,
    },
  },
  ratingCustomer: {
    display: "flex",
    justifyContent: "start",
    alignContent: "center",
  },
});

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.root}`}>
      <Box className={`${classes["view-block"]}`}>
        <Typography
          variant="h4"
          marginBottom="24px"
          fontWeight={600}
          fontSize={30}
          lineHeight={"36.5px"}
        >
          Tuyến đi nổi bật
        </Typography>
        <Box className={`${classes["list-tour"]}`}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Box>
      </Box>
      <Box className={`${classes["view-block"]}`}>
        <Typography
          variant="h4"
          marginBottom="18px"
          fontWeight={600}
          fontSize={30}
          lineHeight={"36.5px"}
        >
          Khách hàng nhận xét
        </Typography>
        <Box className={`${classes.subtitleCustomerReview}`}>
          <Box className={`${classes.reviewIconStar}`}></Box>
          <Box>
            <Typography
              variant="h5"
              fontWeight={700}
              fontSize={24}
              lineHeight={"32.5px"}
            >
              5.0
            </Typography>
          </Box>
          <Typography
            fontWeight={400}
            fontSize={18}
            lineHeight={"24.5px"}
            color="#1A2B49"
          >
            (73 nhận xét)
          </Typography>
        </Box>
        <Box className={`${classes.ratingCustomer}`}>
          <Box></Box>
          <Box>
            <Typography
              fontWeight={400}
              fontSize={18}
              lineHeight={"24.5px"}
              color="#1A2B49"
            >
              (73 nhận xét)
            </Typography>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

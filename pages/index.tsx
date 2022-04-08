import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import CustomerReivewComponent from "../components/customer_review.component";
import ToursComponent from "../components/tours.component";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 200,
    marginBottom: 200,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
}));
const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.root}`}>
      <ToursComponent />
      <CustomerReivewComponent />
    </Box>
  );
};

export default Home;

import { Box } from "@mui/system";
import type { NextPage } from "next";
import CustomerReivewComponent from "../components/customer_review.component";
import ToursComponent from "../components/tours.component";
import useStyles from "./index.styles";

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

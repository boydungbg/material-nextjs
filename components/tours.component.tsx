import { Box, Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import CardComponent from "./card.components";
import data from "../data.json";
import { Tour } from "../types/tour";

const useStyles = makeStyles((theme: Theme) => ({
  "view-block": {
    width: "100%",
    maxWidth: 1170,
    height: "auto",
  },

  "title-section": {
    fontWeight: 600,
    lineHeight: "36.5px",
    fontSize: 30,
    fontFamily: "Montserrat",
  },

  title_section_tour: {
    marginBottom: "24px",
  },

  title_section_customer_review: {
    marginBottom: "18px",
  },

  tour_section: {
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

  // For Destop < 1300
  [theme.breakpoints.down("desktop")]: {
    "view-block": {
      maxWidth: 900,
    },
    "list-tours": {
      columnGap: 15,
    },
  },

  // For Destop < 900
  [theme.breakpoints.down("tablet")]: {
    "title-section": {
      fontWeight: 600,
      lineHeight: "24.5px",
      fontSize: 20,
      fontFamily: "Montserrat",
    },
    "view-block": {
      maxWidth: "100%",
    },
    tour_section: {
      padding: 0,
      margin: 0,
    },
    "list-tour-container": {
      width: "100%",
      height: "280px",
      overflow: "hidden",
      position: "relative",
    },
    "list-tours": {
      columnGap: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      overflowX: "scroll",
      bottom: -15,
      position: "absolute",
      scrollBehavior: "smooth",
    },
    title_section_tour: {
      marginBottom: "24px",
      marginLeft: "20px",
    },
  },

  // For Destop < 600
  [theme.breakpoints.down("mobile")]: {
    "list-tours": {
      columnGap: 10,
    },
  },
}));

const ToursComponent: FC = (props) => {
  const classes = useStyles();
  return (
    <Box className={`${classes["view-block"]}  ${classes.tour_section}`}>
      <Typography
        className={`${classes["title-section"]} ${classes.title_section_tour}`}
      >
        Tuyến đi nổi bật
      </Typography>
      <Box className={`${classes["list-tour-container"]}`}>
        <Box className={`${classes["list-tours"]}`}>
          {data.tours.map((tour: Tour) => {
            return <CardComponent tour={tour} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ToursComponent;

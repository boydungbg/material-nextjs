import { Box, Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { FC } from "react";
import { Tour } from "../types/tour";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    minWidth: 270,
    height: 275,
    borderRadius: 5,
    position: "relative",
    boxShadow: "0px 2px 4px 1px #E5E5E5",
    border: "1px solid #E5E5E5",
    overflow: "hidden",
  },
  imageCard: {
    display: "block",
  },
  imageCar: {
    width: 166,
    height: 68,
    position: "absolute",
    top: 108,
  },
  contentCard: {
    marginTop: 36,
    width: "100%",
  },
  actionCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 24,
    borderRadius: 5,
    border: "1px solid #1A2B49",
    backgroundColor: "transparent",
    margin: "0 5px 0 5px",
  },
  textButton: {
    fontWeight: 600,
    fontSize: 12,
    lineHeight: "14.5px",
    color: "#1A2B49",
    fontFamily: "Montserrat",
  },
  [theme.breakpoints.down("desktop")]: {
    root: {
      minWidth: 210,
    },
  },
  [theme.breakpoints.down("tablet")]: {
    root: {
      minWidth: 250,
    },
  },
  [theme.breakpoints.down("tablet")]: {
    root: {
      minWidth: 200,
    },
    contentCard: {
      paddingLeft: 17,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    actionCard: {
      width: "100%",
      display: "flex",
      padding: "0 17px",
      alignItems: "center",
      justifyContent: "space-between",
    },
    button: {
      margin: "0",
    },
  },
}));

type Props = {
  tour: Tour;
};

const CardComponent: FC<Props> = ({ tour }) => {
  const classes = useStyles();
  return (
    <Box className={`${classes.root}`}>
      <Image
        className={`${classes.imageCard}`}
        src={`${tour.image ?? "/images/image_1.png"}`}
        alt=""
        loading="lazy"
        layout="fixed"
        width="270px"
        height="150px"
      />
      <Box className={`${classes.imageCar}`}>
        <Image
          className={`${classes.imageCard}`}
          src="/images/car.png"
          alt=""
          loading="lazy"
          layout="fixed"
          width="166px"
          height="68px"
        />
      </Box>
      <Box className={`${classes.imageCar}`}></Box>
      <Box className={`${classes.contentCard}`}>
        <Typography
          fontWeight={700}
          fontSize={16}
          height="24px"
          lineHeight={"21.8x"}
          component="h5"
          align="center"
          fontFamily={"Nunito"}
        >
          {tour.ariPort.toUpperCase()}
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={12}
          height="24px"
          align="center"
          lineHeight={"16.5px"}
          fontFamily={"Nunito"}
        >
          {tour.city.toUpperCase()}
        </Typography>
      </Box>
      <Box className={`${classes.actionCard}`}>
        <Button className={`${classes.button}`}>
          <Typography className={`${classes.textButton}`}>Tiễn</Typography>
        </Button>
        <Button className={`${classes.button}`}>
          <Typography className={`${classes.textButton}`}>Đón</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CardComponent;

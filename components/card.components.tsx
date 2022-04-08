import { Box, Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    width: 270,
    height: 275,
    borderRadius: 5,
    position: "relative",
    boxShadow: "0px 2px 4px 1px #E5E5E5",
    border: "1px solid #E5E5E5",
  },
  imageCard: {
    height: 150,
    width: "100%",
    backgroundImage: "url(/images/image_1.png)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
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
  [theme.breakpoints.down('mobile')]: {
    root: {
      width: 200,
    }
  },
}));

const CardComponent: FC = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.root}`}>
      <Box className={`${classes.imageCard}`}></Box>
      <Box className={`${classes.imageCar}`}>
        <img src="/images/car.png" alt="" />
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
        >
          Nội Bài
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={12}
          height="24px"
          align="center"
          lineHeight={"16.5px"}
        >
          Hà Nội
        </Typography>
      </Box>
      <Box className={`${classes.actionCard}`}>
        <button className={`${classes.button}`}>
          <Typography
            fontWeight={600}
            fontSize={12}
            align="center"
            lineHeight={"14.5px"}
          >
            Tiễn
          </Typography>
        </button>
        <button className={`${classes.button}`}>
          <Typography
            fontWeight={600}
            fontSize={12}
            align="center"
            lineHeight={"14.5px"}
          >
            Đón
          </Typography>
        </button>
      </Box>
    </Box>
  );
};

export default CardComponent;

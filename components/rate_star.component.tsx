import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  rate_container: {
    width: "100%",
    paddingBottom: 15,
    display: "flex",
    justifyContent: "space-between",
  },
  rate_title: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: "24.5px",
    color: "#1A2B49",
    fontFamily: "Nunito",
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
  point_bg: ({ point }: Props) => ({
    width: `${(point / 5) * 100}%`,
    height: "100%",
    backgroundColor: "#1A2B49",
  }),
}));

type Props = {
  title: string;
  point: number;
};

const RateStarComponent: FC<Props> = ({ point, title }) => {
  const classes = useStyles({ point, title });
  return (
    <Box className={`${classes.rate_container}`}>
      <Typography className={`${classes.rate_title}`}>{title}</Typography>
      <Box className={`${classes.ratePoint}`}>
        <Box className={`${classes.pointOutline}`}>
          <Box className={`${classes.point_bg}`}></Box>
        </Box>
        <Typography className={`${classes.rate_title}`}>
          {point.toFixed(1)}
        </Typography>
      </Box>
    </Box>
  );
};

export default RateStarComponent;

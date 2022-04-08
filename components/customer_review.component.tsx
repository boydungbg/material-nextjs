import { Box, Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import CustomerCommentComponent from "./customer_comment.compent";
import RateStarComponent from "./rate_star.component";
import data from "../data.json";
import { Comment } from "../types/comment";
import { rate } from "../types/rate";

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

  customer_review_section: {
    margin: "63px 0 53px 0",
  },

  title_section_customer_review_mobile: {
    display: "none",
    marginBottom: "18px",
    marginLeft: "20px",
  },

  customer_review_container: {
    width: "100%",
    display: "flex",
  },
  customer_block_left: {
    width: "50%",
  },

  is_desktop_disable: {
    display: "none",
  },

  button_view_all_review: {
    marginTop: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 45,
    borderRadius: 25,
    border: "1px solid #1A2B49",
    backgroundColor: "transparent",
  },
  text_button_view_all_review: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "19.5px",
    color: "#1A2B49",
    fontFamily: "Montserrat",
  },

  customer_block_right: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },

  container_button_view_all: {
    padding: "0 20px",
  },
  customer_rate: {
    display: "flex",
    justifyContent: "start",
    alignContent: "center",
    flexDirection: "column",
  },
  icon_start: {
    width: 30,
    height: 30,
  },
  rate_point_container: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginBottom: 25,
    "& div, img": {
      marginRight: 10,
    },
  },
  title_section_customer_review: {
    marginBottom: "18px",
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
  // For tablet < 900
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
      bottom: -20,
      position: "absolute",
    },
    title_section_tour: {
      marginBottom: "24px",
      marginLeft: "20px",
    },
    customer_block_left: {
      display: "none",
    },
    title_section_customer_review_mobile: {
      display: "block",
    },
    customer_info: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "18px",
    },
    customer_block_right: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "230px",
      overflow: "hidden",
      position: "relative",
    },
    list_comment: {
      columnGap: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      overflowX: "scroll",
      bottom: -20,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      scrollBehavior: "smooth",
    },
    is_desktop_disable: {
      display: "block",
    },
    button_view_all_review: {
      marginTop: 38,
      width: "100%",
      height: 40,
      borderRadius: 20,
    },
    text_button_view_all_review: {
      fontSize: 14,
      lineHeight: "17.5px",
    },
  },
  // For tablet < 600
  [theme.breakpoints.down("mobile")]: {
    "list-tours": {
      columnGap: 10,
    },
  },
}));

const CustomerReivewComponent: FC = () => {
  let customerRate: rate = data.customer_review;
  const classes = useStyles();
  return (
    <Box
      className={`${classes["view-block"]} ${classes.customer_review_section}`}
    >
      <Typography
        className={`${classes["title-section"]} ${classes.title_section_customer_review_mobile}`}
      >
        Khách hàng nhận xét
      </Typography>
      <Box className={`${classes.customer_review_container}`}>
        <Box className={`${classes.customer_block_left}`}>
          <Typography
            className={`${classes["title-section"]} ${classes.title_section_customer_review}`}
          >
            Khách hàng nhận xét
          </Typography>
          <Box className={`${classes.rate_point_container}`}>
            <img src="/images/star.svg" className={`${classes.icon_start}`} />
            <Typography
              component="div"
              fontWeight={700}
              fontSize={24}
              lineHeight={"32.5px"}
              fontFamily="Nunito"
            >
              {customerRate.total_point.toFixed(1)}
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={18}
              lineHeight={"24.5px"}
              color="#1A2B49"
              fontFamily="Nunito"
              component="span"
            >
              ({customerRate.count_review} nhận xét)
            </Typography>
          </Box>
          <Box className={`${classes.customer_rate}`}>
            {customerRate.rate_point.map(({ title, point }) => {
              return <RateStarComponent point={point} title={title} />;
            })}
          </Box>
          <Button className={`${classes.button_view_all_review}`}>
            <Typography className={`${classes.text_button_view_all_review}`}>
              Xem tất cả
            </Typography>
          </Button>
        </Box>
        <Box className={`${classes.customer_block_right}`}>
          <Box className={`${classes.list_comment}`}>
            {data.customer_review.customer_comments.map((comment: Comment) => {
              return <CustomerCommentComponent comment={comment} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box
        className={`${classes.is_desktop_disable} ${classes.container_button_view_all}`}
      >
        <Button className={`${classes.button_view_all_review}`}>
          <Typography className={`${classes.text_button_view_all_review}`}>
            Xem tất cả
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerReivewComponent;

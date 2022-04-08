import { Avatar, Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import { Comment } from "../types/comment";

const useStyles = makeStyles((theme: Theme) => ({
  customer_comment_rate: {
    width: "100%",
    display: "flex",
    padding: "25px 27px 27px 29px",
    backgroundColor: "#F3F9FF",
    marginBottom: 15,
    borderRadius: 20,
  },
  customer_container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "30%",
  },
  customer_avatar: {
    marginBottom: 16,
  },
  text_comment: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "& p": {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "21.5px",
      color: "#1A2B49",
      fontFamily: "Nunito",
      paddingRight: "20px",
      display: "-webkit-box",
      "-webkit-line-clamp": 4,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },

  // For Destop < 900
  [theme.breakpoints.down("tablet")]: {
    customer_comment_rate: {
      minWidth: 270,
      height: 220,
      padding: 25,
      flexDirection: "column",
    },
    customer_container: {
      flexDirection: "row",
      width: "100%",
    },
    customer_info: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "18px",
    },
    text_comment: {
      width: "100%",
      "& p": {
        padding: 0,
      },
    },
  },
  // For Destop < 600
  [theme.breakpoints.down("mobile")]: {},
}));

type Props = {
  comment: Comment;
};

const CustomerCommentComponent: FC<Props> = ({ comment }) => {
  const classes = useStyles();
  return (
    <Box className={`${classes.customer_comment_rate}`}>
      <Box className={`${classes.customer_container}`}>
        <Box className={`${classes.customer_avatar}`}>
          <Avatar alt="Phạm Ngọc Trinh" src="/images/n.png"></Avatar>
        </Box>
        <Box className={`${classes.customer_info}`}>
          <Typography
            fontWeight={700}
            fontSize={16}
            lineHeight={"21.5px"}
            color="#222222"
            fontFamily="Nunito"
          >
            {comment.nameCustomer}
          </Typography>
          {comment.created_at != null ? (
            <Typography
              fontWeight={400}
              fontSize={14}
              lineHeight={"19.5px"}
              color="#222222"
              fontFamily="Nunito"
            >
              {new Intl.DateTimeFormat("en", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(comment.created_at))}
            </Typography>
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Box className={`${classes.text_comment}`}>
        <Box width="19px" height="15px" mb="10px">
          <img src="/images/comment.svg" alt="An SVG of an eye" />
        </Box>
        <Typography component="p">{comment.content}</Typography>
      </Box>
    </Box>
  );
};

export default CustomerCommentComponent;

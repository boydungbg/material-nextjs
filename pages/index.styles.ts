import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

export default useStyles;

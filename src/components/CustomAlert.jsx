import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function CustomAlert(props) {
  const classes = useStyles();

  let errDisplay = "none";

  if (props.errMessage) errDisplay = "block";

  return (
    <Box className={classes.root} display={errDisplay}>
      <Alert severity="error">{props.errMessage}</Alert>
    </Box>
  );
}

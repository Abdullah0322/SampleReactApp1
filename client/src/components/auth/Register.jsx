
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../../services/UserService";

import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";


import Avatar from "@material-ui/core/Avatar";

import CssBaseline from "@material-ui/core/CssBaseline";


import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";


import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  return (
     
    <Grid container component="main" className={classes.root}>
      
     
      <CssBaseline />
      
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Register
          </Typography>
          <ToastContainer />
          <TextField
          label="Name"
          fullWidth
          variant="outlined"
                  required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}/>{" "}
          <br />
        <TextField
          label="email"
          fullWidth
          variant="outlined"
                  required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          label="password"
          type="password"
          variant="outlined"
                  required
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          variant="contained"
 
          className={classes.submit}
          onClick={(e) => {
            userService
              .register(name, email, password)
              .then((data) => {
                console.log(data);
                props.history.push("/login");
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Register
        </Button>
        <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Have an Account?
                </Link>
              </Grid>
            </Grid>
        </div>
      </Grid>
    </Grid>
    
  );
};

export default Register;

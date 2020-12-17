import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import userService from "../services/UserService";
import { Dropdown } from "bootstrap";
import Alert from '@material-ui/lab/Alert';
import { ToastContainer, toast } from "react-toastify";


const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
  },
}));

const TopMenu = () => {
  function onclick(text){


    alert(text)
  }
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
      
     
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </Typography>

        <Typography variant="h6">
        
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>


          </Typography>
        

           
          
          
      
           {userService.isAdmin() ? (
          <>
            <Typography variant="h6">
            <Link to="/users" className={classes.link}>
                Users
              </Link>
            </Typography>
            
          
          </>
        ) : (
          <Button
            
            
            
          >
           
          </Button>
        )}
          {userService.issuperAdmin() ? (
          <>
            <Typography variant="h6">
            <Link to="/users" className={classes.link}>
               Users
              </Link>
            </Typography>
            
          
          </>
        ) : (
          <Button
            
            
            
          >
           
          </Button>
        )}
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </Typography>
          
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;

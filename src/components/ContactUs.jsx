import React from "react";
  

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
const ContactUs = () => {
  
   


const useStyles = makeStyles((theme) => ({
icon: {
  marginRight: theme.spacing(2),
},
heroContent: {
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
},
heroButtons: {
  marginTop: theme.spacing(4),
},
cardGrid: {
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
},
card: {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
},
cardMedia: {
  paddingTop: '56.25%', // 16:9
},
cardContent: {
  flexGrow: 1,
},
footer: {
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6),
},
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const classes = useStyles();

return (
  <React.Fragment>
    <CssBaseline />
    
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            ABOUT US
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
        Details
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Name: Abdullah
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
       Email: abdullahnaveed71.am@gmail.com
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
       Phone Number: +923224272740
      </Typography>
     
         
         
        </Container>
      </div>
     
    </main>
    {/* Footer */}
    <footer className={classes.footer}>
   
    </footer>
    {/* End footer */}
  </React.Fragment>
);
};

export default ContactUs;

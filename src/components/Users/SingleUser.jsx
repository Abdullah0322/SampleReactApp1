import React from 'react'
import { Grid, Button } from "@material-ui/core";
import userService from "../../services/UserService";
import { withRouter } from "react-router";
import Admin from "../auth/Admin"
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const SingleUser=(props) =>{
  const classes = useStyles();
    const {user,onDelete,history}=props
    return (
      <Grid item xs={4}>
      <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {user.email}
          </Typography>
        </CardContent>
        </CardActionArea>
      
    </Card>

    {userService.issuperAdmin() && (
          <>
          <CardActions>
          <Button size="small" color="primary"
           onClick={(e) => {
            console.log("navigate to update");
            history.push("/users/update/" + user._id);
          }}
           >
          Edit
        </Button>
        <Button size="small" color="primary"
           onClick={(e) => {
            userService
                  .deleteUser(user._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              
          }}
           >
        Delete
        </Button>
           
           
          

          </CardActions>



          </>
        )}
    
    </Grid>
         
         
        
         
      
            
    );
}
export default withRouter(SingleUser);
import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";

import { makeStyles } from '@material-ui/core/styles';
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
const SingleProduct = (props) => {
  const classes = useStyles();
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {product.price}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      
    </Card>
      
      
        {userService.isAdmin() && (
          <>
           <CardActions>
           <Button size="small" color="primary"
           onClick={(e) => {
            console.log("navigate to update");
            history.push("/products/update/" + product._id);
          }}
           >
          Edit
        </Button>
        <Button size="small" color="primary"
        onClick={(e) => {
          productService
            .deleteProduct(product._id)
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
};

export default withRouter(SingleProduct);

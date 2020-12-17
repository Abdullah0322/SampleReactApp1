import React from 'react'
import userService from "../../services/UserService";
import SingleUser from './SingleUser'
import Admin from '../auth/Admin';
import { Grid, Button } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});




const Users=(props)=> {
    const [users,setUsers]= React.useState([]);
    
    const classes = useStyles();
    const page = props.match.params.page ? props.match.params.page : 1;
    const [total, setTotal] = React.useState(0);
    const [perPage, setPerPage] = React.useState(10);

    const getData = () => {
        userService
          .getUsers()
          .then((data) => {
            setUsers(data.users);
            setTotal(data.total)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      // getData();
      React.useEffect(getData,[page, perPage]);
      
    return (
     
        
       <div>

         <h2>List of All Users</h2>
         <Grid container spacing={3}>
          {userService.isAdmin()|| userService.issuperAdmin() ? (
          <>
         {users.map((user,index)=>(
          
          <SingleUser key={index} user={user}/>
                    ))}
           
           
           
             
          
            </>
             ) 
             
             : (
              <Button
                
                
                
              >
               
              </Button>
            )}
   </Grid>
         
   </div>

          
          
      
      
       
       
    )
}

export default Users

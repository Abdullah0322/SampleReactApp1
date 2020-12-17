import React from 'react'
import userService from '../../services/UserService';
import { Grid, TextField, Button } from "@material-ui/core";
import Admin from "../auth/Admin"
const UpdateUser= (props) => {

const [name,setName]=React.useState("");
const [email,setEmail]=React.useState("");
const id = props.match.params.id;
React.useEffect(() => {
userService.getSingleUser(id).then((data) => {
      setName(data.name);
      setEmail(data.email);
    });
  }, []);
    return (
     
       <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update User</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="email"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService
                .updateUser(id, { name, email })
                .then((data) => {
                  console.log(data);
                  props.history.push("/users");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
        
     
        
    )
}

export default UpdateUser

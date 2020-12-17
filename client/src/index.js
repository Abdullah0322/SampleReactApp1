import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from "./components/TopMenu";
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Landingpage from './components/LandingPage';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Products from "./components/products/Products";
import Users from "./components/Users/Users";
import NewProduct from "./components/products/NewProduct";
import ContactUs from "./components/ContactUs";
import UpdateProduct from "./components/products/UpdateProduct";
import UpdateUser from "./components/Users/UpdateUser";
ReactDOM.render(
  <BrowserRouter>
  <div>
  <TopMenu/>
  



  
  <Switch>
<Route path='/' exact render={props=><Landingpage{...props}/>}/>
<Route path='/login' exact render={props=><Login{...props}/>}/>
<Route path='/register' exact render={props=><Register{...props}/>}/>
<Route path='/products' exact render={props=><Products{...props}/>}/>
<Route path='/users' exact render={props=><Users{...props}/>}/>

<Route path="/products/update/:id" component={UpdateProduct} />
<Route path='/contact-us' exact render={props=><ContactUs {...props}/>}/>
<Route path='/users/update/:id' component={UpdateUser}/>



  <Route path="/products/new" component={NewProduct} />

  </Switch>
  </div>
  </BrowserRouter>,

  document.getElementById('root')
);



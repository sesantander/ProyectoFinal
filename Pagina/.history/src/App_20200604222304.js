import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.css";
// import "assets/css/now-ui-kit.min.css";
// import "assets/css/now-ui-kit.css.map";
import "assets/demo/demo.css";

import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbars/ExamplesNavbar"
import ProductsList from "./components/productsList.component";
import EditProduct from "./components/editProduct.component";

import AddProduct from "./components/addProduct.component";
import CreateUser from "./components/createUser.component";

import Login from "./components/login.component";
import AuthenticatorComponent from './components/Authenticator.component';

function App() {
  return (
    <Router>
    <div >
    <Route path="/edit/:id" component={EditProduct} /> 
    <Route path="/" exact component={ProductsList} />
    <Route path="/create" component={AddProduct} />
    <Route 
    path="/create"  
    render={(props) => 
        <div>
            <AuthenticatorComponent />
            <AddProduct />
        </div> 
    } 
/>
    <Route path="/user" component={CreateUser} />
    <Route path="/login" component={Login} /> 
    </div>
  </Router>
  );
}

export default App;

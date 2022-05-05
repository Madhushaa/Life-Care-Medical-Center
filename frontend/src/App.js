import React,{ Component } from 'react';
import {BrowserRouter, BrowserRouter as Router,Route} from "react-router-dom";
import './Home.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./components/Home";

//Appointments







//Lab Tests







//Payment
import paymentView_h from "./components/paymentView_h";
import paymentAdd_h from "./components/paymetAdd_h";
import payment_h from "./components/payment_h";
import ExamplePayment from "./components/paymentReport";
import updatePayment from "./components/updatePayment";
import './payment_h.css'


//Staff








export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Header/>
      <div className="container">

        <br></br>
        <br></br> 
        <br></br>
        
    <Route path="/home" exact component={Home}></Route> 
        














      {/* Payment Routes */}
        <Route path="/viewpayment" exact component ={paymentView_h}></Route>
        <Route path="/payadd" exact component ={paymentAdd_h}></Route>
        <Route path="/payment" exact component ={payment_h}></Route>
        <Route path="/payUpdate/:id" exact component={updatePayment}></Route>
        <Route path="/paymentreport" exact component ={ExamplePayment}></Route>

      
      
      
      
      
      
      
      </div>

      <Footer/>
      </BrowserRouter>
    )

  }
  
}

  
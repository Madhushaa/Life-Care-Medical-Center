import React,{ Component } from 'react';
import {BrowserRouter, BrowserRouter as Router,Route} from "react-router-dom";
import './Home.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./components/Home";

//Appointments






//Lab Tests







//Payment








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
        
         
      </div>

      <Footer/>
      </BrowserRouter>
    )

  }
  
}

  
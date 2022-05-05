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
import AddStaff from "./components/AddStaff_t"
import ViewStaff from "./components/ViewStaff_t"
import StaffDash from "./components/StaffDashboard_t"
import Update from './components/UpdateStaff_t'
import StaffReport from './components/StaffReport_t'
import './staff_t.css';


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






















        {/*Staff*/}
        <Route path="/add" exactc component={AddStaff}/>
        <Route path="/view" exact component={ViewStaff}/>
        <Route path="/staffdash" exactc component={StaffDash}/>
        <Route path="/update/:id" exact component={Update}/>
        <Route path="/report" exactc component={StaffReport}/>
          
      </div>

      <Footer/>
      </BrowserRouter>
    )

  }
  
}

  
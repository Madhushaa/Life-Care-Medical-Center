import React,{ Component } from 'react';
import {BrowserRouter, BrowserRouter as Router,Route} from "react-router-dom";
import './Home.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./components/Home";

//Appointments
import ViewAppointments from './components/ViewAppointments';
import Appointments from './components/Appointments';
import AddAppointments from './components/AddAppointments';
import ComponentToPrint, { Example } from './components/AppointmentsReport';
import UpdateAppointments from './components/UpdateAppointments'
import './appointment.css'

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

        {/* Appointments */}
        <Route path = "/viewAppointments" exactc component={ViewAppointments}></Route>  
        <Route path = "/Appointments" exactc component={Appointments}></Route>
        <Route path = "/addAppointments" exactc component={AddAppointments}></Route> 
        <Route path= "/updateAppointments/:id" exact component={UpdateAppointments}></Route>
        <Route path="/appointmentReport" exact component={Example }/>
        





















      </div>

      <Footer/>
      </BrowserRouter>
    )

  }
  
}



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
import AddLab_c from './components/AddLab_c';
import ViewLabs_c from './components/ViewLabs_c';
import EditLab_c from './components/EditLab_c';
import labDashboard from './components/LabDashboard';
import LabReport_c from './components/LabReport_c';
import './lab_c.css';

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
           {/*lab test */}
      <Route path="/labs" exact component={ViewLabs_c}/>
      <Route path="/save" exact component={AddLab_c}/>
      <Route path="/editLab/:id" exact component={EditLab_c}/>
      <Route path="/labDashboard" exact component={labDashboard}/>
      <Route path="/PrintLabReport" exact component={LabReport_c}/>














      </div>

      <Footer/>
      </BrowserRouter>
    )

  }
  
}



import React,{ Component } from 'react';
import {BrowserRouter, BrowserRouter as Router,Route} from "react-router-dom";
import './Home.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./components/Home";

//Appointments







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

  
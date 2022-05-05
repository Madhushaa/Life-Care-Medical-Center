import React, { Component } from "react";
import { Link,useParams } from 'react-router-dom';
import '../Home.css'

class Appointments extends Component {

  render() {
    return ( 
        <div className="container">
        
            <h2 className="text-center">Appointments Management</h2>
            <br></br>
            <br></br>

            <div className="row">

                <div className="col" style={{marginLeft:'20px'}}  >
                    <Link to="/addAppointments" className="">                
                        <img src="/images_m/add.jpg" width="270" height="240" alt="Add New Appointments" />
                        <button className="btn btn-info" style={{marginLeft:0 ,marginRight:'0',marginTop:10,width:'289px'}}><h4 > Add New Appointments  </h4></button>
                    </Link>
                </div>

                <div className="col" style={{marginLeft:'88px'}}>
                    <Link to="/viewAppointments" className="">   
                        <img src="/images_m/view.JPG" width="230" height="240" alt="View Appointments" />
                        <button className="btn btn-info" style={{marginLeft:1,marginTop:10}}><h4 > View Appointments  </h4></button>
                    </Link>
                </div>
                
                <div className="col" style={{marginLeft:'100px'}}>
                    <Link to="/appointmentReport" className="schedule">
                        <img src="/images_m/report.jpg" width="240" height="240" alt=""/>

                        <button className="btn btn-info" style={{marginLeft:10 ,marginTop:10}}><h4> Generate Reports  </h4></button>
                    </Link>
                </div>
            
            </div>
            <br></br> 
            <br></br> 
            <br></br>
        </div>  
    );
  }
}

export default Appointments;
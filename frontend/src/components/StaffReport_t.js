import React from 'react';
import ReactToPrint,{PrintContextConsumer} from 'react-to-print';
import axios from 'axios';
import { Link } from "react-router-dom";


export class StaffReport extends React.PureComponent {
    constructor(props) {

        super(props);

        this.state = {
            staff: []
        }
    }


componentDidMount(){
    axios.get("http://localhost:8070/staff/view")
            .then(Response => {
                this.setState({ staff: Response.data })
              


            }).catch(function (err) {
                console.log(err);
            })
        }

    
        render() {
            console.log("ViewBody");
            return (
    
    
    
                <div className="container"style={{ marginTop: 20,marginLeft:88}}>
    
                   
                    <h2 align="center"><b>Staff Report</b></h2>
                    
                    {/*Count all raws of staff memmber table */}
                    <h5 align="left"><b>Total number of Staff Members:{this.state.staff.length}</b></h5>
                    
                   
                   <hr style={{ width:1120}}></hr>
                    <table className="table table-striped" id="stable" style={{ marginTop: 20,marginLeft:3}}>
                    
                        <thead>
                            <tr class='table-primary'>
                                <th scope="col">First Name</th>
                                <th scope="col"> Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">NIC Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Role</th>
                                <th scope="col">Specialization</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.staff.map(staffmem => (
                                
                               
    
                                <tr>
                                    <td scope="row">{staffmem.firstName}</td>
                                    <td scope="row"><div>{staffmem.lasttName}</div></td>
                                    <td scope="row"><div>{staffmem.address}</div></td>
                                    <td scope="row"><div>{staffmem.contactNumber}</div></td>
                                    <td scope="row"><div>{staffmem.nicNumber}</div></td>
                                    <td scope="row"><div>{staffmem.email}</div></td>
                                    <td scope="row"><div style={{ width:100}}>{staffmem.dateOfBirth}</div></td>
                                    <td scope="row"><div>{staffmem.gender}</div></td>
                                    <td scope="row"><div>{staffmem.role}</div></td>
                                    <td scope="row"><div>{staffmem.specialization}</div></td>
    
                                    
                                </tr>
    
                            ))}
                        </tbody>
                    </table>
                    <br></br>
                    
                    <br></br>
                </div>
    
            )
    
        }
    }

class Example extends React.PureComponent {
    render() {
        return (
            <div>

            <ReactToPrint content={() => this.componentRef}>
    
              <PrintContextConsumer>
    
                {({ handlePrint }) => (
    
                  <button className="buttond" style={{ marginLeft:1070,marginTop:'20px',marginBottom:'0px'}} onClick={handlePrint}>Download</button>
    
                )}
    
              </PrintContextConsumer>
    
            </ReactToPrint>
    
            <StaffReport ref={el => (this.componentRef = el)} />
    
          </div>
            
        );
        
    }
}
<br></br> 
   

export default Example;
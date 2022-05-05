import { Link,useParams } from 'react-router-dom';


function StaffDash(props){
    const{id} = useParams();
    return(

        <div className='' >

            <br></br><br></br>
            <h2 className="text-center">Staff Management</h2>
            <br></br><br></br><br></br>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4" style={{marginLeft:200}}>"
            <br></br>
            
            <div className=" col "  style={{marginLeft:1}}>
            <Link to="/add" className="addstaff">
                <img src="/images/add staff.png" width="240" height="240" alt="" /><br></br><br></br>
                <button className="btn btn-light" style={{marginLeft:17}}><h6> Add New Staff Member</h6></button>
            </Link>
            </div>

            <div className="col " style={{marginLeft:50}} >
            <Link to="/view" className="viewstaff">
                <img src="/images/view new staff.png" width="240" height="240" alt="" /><br></br><br></br>
                <button className="btn btn-light" style={{marginLeft:70}}><h6>Staff List</h6></button>
            </Link>
            </div>

            <div className="col "  style={{marginLeft:50}}>
            <Link to="/report" className="staffreport">
                <img src="/images/report.png" width="240" height="240" alt="" /><br></br><br></br>
                <button className="btn btn-light" style={{marginLeft:70}}><h6> Staff Report</h6></button>
            </Link>
            </div>

            </div>
            <br></br><br></br><br></br><br></br><br></br>
        </div>
        
    )
}
export default StaffDash;
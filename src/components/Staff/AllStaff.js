import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import StaffService from '../../services/StaffService'
import '../Room/AllRooms.css'
import Header from '../Header'
import Footer from '../Footer'

export default function AllStaff() {

    const [Staff, setStaff] = useState([])
    // for Rest API call 
    useEffect(() => {
        getAllStaffs()
    }, [])
    const getAllStaffs=()=>{
        StaffService.getAllStaffs().then((response)=>{
            setStaff(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    };
    const deleteStaff=(empId)=>{
        StaffService.deleteStaff(empId).then((response)=>{
            console.log(empId);
            getAllStaffs();   
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
        <Header></Header>
            <div style={{ maxWidth: "100%", width: "90%" }} className='container'>
            <br></br><br></br><br></br>
            <h1>Staff List</h1>
            <table className="table table-bordered table-striped" style={{margin:50, float: "center" ,backgroundColor:"white"}}>
        <thead className="thead-dark">
                    <tr>
                        <th>Staff ID</th>
                        <th>Staff Name</th>
                        <th>Staff Salary</th>
                        <th>Staff Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Staff.map(
                            Staff=>
                                <tr key={Staff.empId}>
                                    <td>{Staff.empId}</td>
                                    <td>{Staff.empName}</td>
                                    <td>{Staff.empSalary}</td>
                                    <td>{Staff.email}</td>
                                    <td>
                                        <Button variant='outlined' color='secondary' onClick={()=>deleteStaff(Staff.empId)}>Delete</Button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <Footer></Footer>
        </>
    )
}

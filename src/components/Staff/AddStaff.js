import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import StaffService from '../../services/StaffService'
import { Link, useHistory } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer' 

const useStyles=makeStyles({
    id:{
        width:1000
    },
    name:{
        width:1000
    },
    contact:{
        width:1000
    },
    email:{
        width:1000
    },
    gender:{
        width:1000
    },
    address:{
        width:1000
    }
})
export default function AddStaff() {
    const [empId, setempId] = useState('')                 //It initialize the state by calling useState in the function AddRoom ..guestId-current state , setGuestId-updated state
    const [empName, setempName] = useState('')
    const [empSalary, setempSalary] = useState('')
    const [email, setemail] = useState('')
    const history=useHistory()

    const saveStaff =(e)=>{
    e.preventDefault();

    const staff={empId,empName,empSalary,email}
    StaffService.addStaffs(staff).then((response)=>{
        console.log(response.data)
        history.push('/middle/sroom')
    }).catch(error=>{
        console.log(error)
    }) 
}
    const classes=useStyles()
    return (
        <>
        <Header></Header>
            <div style={{ marginTop: 100, maxWidth: "100%", width: "80%", backgroundColor:"white"}} className='container'>
            <br></br><br></br>
            <h1>Enter Staff Details</h1>
            <TextField variant="outlined" label="Staff ID" placeholder='Enter a Staff Id' className={classes.id}
                value={empId} onChange={(e)=>setempId(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Staff Name" placeholder='Enter the staff name'
                className={classes.name} value={empName} onChange={(e)=>setempName(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Staff Slary" placeholder='Enter the salary of staff'
                className={classes.salary} value={empSalary} onChange={(e)=>setempSalary(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Staff Email" placeholder='Enter the email of staff'
                className={classes.email} value={email} onChange={(e)=>setemail(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <Button variant='contained' onClick={(e)=>saveStaff(e)}>Add Staff</Button>&nbsp;&nbsp;&nbsp;
            <Button variant='outlined'><Link to='/middle/hroom'>Back</Link></Button>
        </div>
        <Footer></Footer>
        </>
    )
}

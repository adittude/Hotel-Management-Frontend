import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import GuestService from '../../services/GuestService'
import { Link, useHistory, useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const useStyles=makeStyles({
    id:{
        width:1000,
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
export default function AddRoom() {
    const [guestId, setGuestId] = useState('')
    const [guestName, setGuestName] = useState('')
    const [guestContact, setGuestContact] = useState('')
    const [guestEmail, setGuestEmail] = useState('')
    const [guestGender, setGuestGender] = useState('')
    const [guestAddress, setGuestAddress] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const addOrUpdateGuest =(e)=>{
    e.preventDefault();

    const guest={guestId,guestName,guestContact,guestEmail,guestGender,guestAddress}
    if(guestId){
        GuestService.updateGuest(guestId, guest).then((response) => {
            history('/middle/groom/getAllGuest')
        }).catch(error => {
            console.log(error)
        })
    }
    else{
        GuestService.addGuest(guest).then((response) =>{

            console.log(response.data)

            history('/middle/groom/getAllGuest');

        }).catch(error => {
            console.log(error)
        })
    }
    
}
    const classes=useStyles()
    return (
        <>
        <Header></Header>
        
            <div style={{ marginTop: 100, maxWidth: "100%", width: "80%", backgroundColor:"white"}} className='container'>
            <br></br><br></br>
            <h1>Enter Guest Details</h1>
            <TextField variant="outlined" label="Guest ID" placeholder='Enter a Guest Id' className={classes.id}
                value={guestId} onChange={(e)=>setGuestId(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Name" placeholder='Enter the guest name'
                className={classes.name} value={guestName} onChange={(e)=>setGuestName(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Contact" placeholder='Enter the contact of guest'
                className={classes.contact} value={guestContact} onChange={(e)=>setGuestContact(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Email" placeholder='Enter the email of guest'
                className={classes.email} value={guestEmail} onChange={(e)=>setGuestEmail(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Gender" placeholder='Enter the gender of guest'
                className={classes.gender} value={guestGender} onChange={(e)=>setGuestGender(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Address" placeholder='Enter the address of guest'
                className={classes.address} value={guestAddress} onChange={(e)=>setGuestAddress(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <Button variant='contained' onClick={(e)=>addOrUpdateGuest(e)}>
                Add Guest
            </Button>&nbsp;&nbsp;&nbsp;
            <Button variant='contained'>
                <Link to='/middle/resroom/addReservation'>Add Reservation</Link>
            </Button>
                <Button variant='outlined'><Link to='/middle/hroom' >Back</Link></Button>
        </div>
        <Footer></Footer>
        </>
    )
}

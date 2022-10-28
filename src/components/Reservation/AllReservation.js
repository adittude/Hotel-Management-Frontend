import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import ReservationService from '../../services/ReservationService'
import '../Room/AllRooms.css'
import Header from '../Header'
import Footer from '../Footer'

export default function AllReservations() {

    const [reservation, setReservation] = useState([])
    // for Rest API call 
    useEffect(() => {
        getAllReservations()
    }, [])
    const getAllReservations=()=>{
        ReservationService.getAllReservations().then((response)=>{
            setReservation(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    };
    const deleteReservation=(reservationId)=>{
        ReservationService.deleteReservation(reservationId).then((response)=>{
            console.log(reservationId);
            getAllReservations();
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
        <Header></Header>
            <div style={{ maxWidth: "100%", width: "90%" }} className='container'>
            <br></br><br></br><br></br>
            <h1>Reservation List</h1>
            <table className="table table-bordered table-striped" style={{margin:50, float: "center" ,backgroundColor:"white"}}>
        <thead className="thead-dark">
                    <tr>
                        <th>Reservation ID</th>
                        <th>Room ID</th>
                        {/* <th>Guest ID</th> */}
                        <th>CheckIn Date</th>
                        <th>CheckOut Date</th>
                        <th>Number of Guest</th>
                        <th>Total Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        reservation.map(
                            reservationDetails=>
                                <tr key={reservationDetails.reservationId}>
                                    <td>{reservationDetails.reservationId}</td>
                                    <td>{reservationDetails.roomId}</td>
                                    {/* <td>{reservationDetails.guestId}</td> */}
                                    <td>{reservationDetails.checkin}</td>
                                    <td>{reservationDetails.checkout}</td>
                                    <td>{reservationDetails.numOfGuests}</td>
                                    <td>{reservationDetails.finalPrice}</td>
                                    {/* <td>
                                        <Button variant='outlined' color='secondary' 
                                        onClick={()=>deleteReservation(reservationDetails.reservationId)}>
                                        Delete</Button>
                                    </td> */}
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
import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import RoomService from '../../services/RoomService'
import '../Room/AllRooms.css'
import Header from '../Header'
import Footer from '../Footer'
import axios from "axios"
import { toast } from "react-toastify"
import httpClient from '../../http-common'

export default function AllRooms() {

    const [room, setRoom] = useState([])
    // for Rest API call 
    useEffect(() => {
        getAllRooms()
    }, [])
    const getAllRooms=()=>{
        httpClient.get("http://localhost:8086/rooms/findAllRoom").then(
            (response)=>{
                //success
                console.log(response.data);
                toast.success("Room is loaded");
                setRoom(response.data);


            },
            (error)=>{
                //error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };
    const deleteRoom=(roomId)=>{
        RoomService.deleteRoom(roomId).then((response)=>{
            console.log(roomId);
            getAllRooms();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
        <Header></Header>
            <div style={{ maxWidth: "100%", width: "80%" }} className='container'>
            <br></br><br></br><br></br>
            <h1>Rooms List</h1>
            <table className="table table-bordered table-striped" style={{margin:50, float: "center" ,backgroundColor:"white"}}>
            <thead className="thead-dark">
                    <tr>
                        <th>Room Number</th>
                        <th>Room Type</th>
                        <th>Room Rent</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        room.map(
                            roomDetails=>
                                <tr key={roomDetails.roomId}>
                                    <td>{roomDetails.roomId}</td>
                                    <td>{roomDetails.roomType}</td>
                                    <td>{roomDetails.roomCharges}</td>
                                    {/* <td>{roomDetails.roomAvailable}</td> */}
                                    {/* <td>{String(roomDetails.roomAvl)}</td> */}
                                    {/* <td>
                                        <Button variant='outlined' color='secondary' onClick={()=>deleteRoom(roomDetails.roomId)}>Delete</Button>
                                    </td> */}
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

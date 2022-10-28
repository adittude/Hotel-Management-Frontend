import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import GuestService from '../../services/GuestService'
import baseURL from '../../api/bootapi'
import '../Room/AllRooms.css'
import axios from "axios"
import { toast } from "react-toastify"
import Header from '../Header'
import Footer from '../Footer'
import httpClient from '../../http-common'
import { Link, useHistory } from 'react-router-dom'


const AllGuests=()=>{
    
    const [guest, setGuest] = useState([])
    // for Rest API call 
    useEffect(() => {
        document.title="AllGuests";
        getAllGuests()
    }, [])

    const getAllGuests=()=>{
        httpClient.get("http://localhost:8089/Guest/getAllGuest").then(
            (response)=>{
                //success
                console.log(response.data);
                toast.success("Guest is loaded");
                setGuest(response.data);


            },
            (error)=>{
                //error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    //calling loading drugs function
    useEffect(()=>{
        getAllGuests();
    },[]);

    const deleteGuest=(guestId)=>{
        GuestService.deleteGuest(guestId).then((response)=>{
            console.log(guestId);
            getAllGuests();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
       

        <table className="table table-bordered table-striped" style={{margin:50, float: "center" ,backgroundColor:"white"}}>
        <thead className="thead-dark">
        
                
                    <tr>
                        <th>Guest ID</th>
                        <th>Guest Name</th>
                        <th>Guest Contact</th>
                        <th>Guest Email</th>
                        <th>Guest Gender</th>
                        <th>Guest Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="table-text">
                    {  guest.map(
                            guest=>
                                <tr key={guest.guestId}>
                                    <td>{guest.guestId}</td>
                                    <td>{guest.guestName}</td>
                                    <td>{guest.guestContact}</td>
                                    <td>{guest.guestEmail}</td>
                                    <td>{guest.guestGender}</td>
                                    <td>{guest.guestAddress}</td>
                                     <td> 
                                        <Link className="btn btn-info" to={'/middle/groom/addGuest/${guest.guestId}'}>Update</Link>
                                        <Button variant='outlined' color='secondary' onClick={()=>deleteGuest(guest.guestId)}>Delete</Button>
                                    </td> 
                                </tr>)
}

                </tbody>
            </table>
       </>
       
    );
};
export default AllGuests;
import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import InventoryService from '../../services/InventoryService'
import '../Room/AllRooms.css'
import Header from '../Header'
import Footer from '../Footer'
import axios from "axios"
import { toast } from "react-toastify"
import httpClient from '../../http-common'

export default function AllInventory() {

    const [inventory, setInventory] = useState([])
    // for Rest API call 
    useEffect(() => {
        getAllInventorys()
    }, [])
    const getAllInventorys=()=>{
        httpClient.get("http://localhost:8087/Inventory/getAllInv").then(
            (response)=>{
                //success
                console.log(response.data);
                toast.success("Inventory is loaded");
                setInventory(response.data);


            },
            (error)=>{
                //error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };
    const deleteInventory=(inventoryId)=>{
        InventoryService.deleteInventory(inventoryId).then((response)=>{
            console.log(inventoryId);
            getAllInventorys();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
        <Header></Header>
            <div style={{ maxWidth: "100%", width: "90%" }} className='container'>
            <br></br><br></br><br></br>
            <h1>Inventory List</h1>
            <table className="table table-bordered table-striped" style={{margin:50, float: "center" ,backgroundColor:"white"}}>
            <thead className="thead-dark">
                    <tr>
                        <th>Inventory ID</th>
                        <th>Inventory Name</th>
                        <th>Inventory Stock</th>
                        <th>Inventory Type</th>
                        <th>Works</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventory.map(
                            inventoryDetails=>
                                <tr key={inventoryDetails.inventoryId}>
                                    <td>{inventoryDetails.inventoryId}</td>
                                    <td>{inventoryDetails.inventoryName}</td>
                                    <td>{inventoryDetails.inventoryStock}</td>
                                    <td>{inventoryDetails.inventoryType}</td>
                                    
                                    <td>
                                        <Button variant='outlined' color='secondary' onClick={()=>deleteInventory(inventoryDetails.inventoryId)}>Delete</Button>
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

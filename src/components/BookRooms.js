// import React from 'react'
// import room1 from '../Images/SIngle.png';
// import room2 from '../Images/double.png';
// import room3 from '../Images/Queen-Room.jpg';
// import room4 from '../Images/King.png';
// import room5 from '../Images/suite.png';
// import room6 from '../Images/serviced-apartment.jpg';
// import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { AppBar, Box } from '@material-ui/core';
// import { Toolbar } from '@material-ui/core';
// const useStyles = makeStyles({
//     title:{
//         flexGrow:1
//     },
//     appBarBtn:{
//         float:'right'
//     }
// })
// const BookRooms = () => {
//     const classes=useStyles()
//     return (
//         <>
//         <div className="our_room_container">
//             <div className="our_room_heading">
//                 <h1 >Book Our Rooms</h1>
//             </div>
//             <div className="room_row">
//                 <div className="col-xl-4 col-lg-6 col-md-6">
//                     <div className="room mb-50">
//                         <div className="room_image">
//                             <img src={room1} alt="room1"></img>
//                         </div>
//                         <div className="room_caption">
//                             <h2>Single Room</h2>
//                             <p>Rs. 499/Night</p>
//                             {/* <Button color="inherit" className={classes.appBarBtn}><Link className={classes.appBarLink} style={{color:"white",textDecoration:"none"}} to='/middle'>Book Now</Link></Button> */}
//                         </div>
//                     </div>
//                 </div>
//                     <div className="col-xl-4 col-lg-6 col-md-6">
//                     <div className="room mb-50">
//                         <div className="room_image">
//                             <img src={room2}  alt="room2"></img>
//                         </div>
//                         <div className="room_caption">
//                             <h2>Double Room</h2>
//                             <p>Rs. 699/Night</p>
//                         </div>
//                     </div>
//                 </div>
//                     <div className="col-xl-4 col-lg-6 col-md-6">
//                     <div className="room mb-50">
//                         <div className="room_image">
//                             <img src={room3}  alt="room3"></img>
//                         </div>
//                         <div className="room_caption">
//                             <h2>Queen Room</h2>
//                             <p>Rs. 999/Night</p>
//                         </div>
//                     </div>
//                 </div>
//                     <div className="col-xl-4 col-lg-6 col-md-6">
//                     <div className="room mb-50">
//                         <div className="room_image">
//                             <img src={room4}  alt="room4"></img>
//                         </div>
//                         <div className="room_caption">
//                             <h2>King Room</h2>
//                             <p>Rs. 1099/Night</p>
//                         </div>
//                     </div>
//                 </div>
//                  <div className="col-xl-4 col-lg-6 col-md-6">
//                     <div className="room mb-50">
//                         <div className="room_image">
//                             <img src={room5} alt="room5"></img>
//                         </div>
//                         <div className="room_caption">
//                             <h2>5 Star Suite</h2>
//                             <p>Rs. 1999/Night</p>
//                         </div>
//                     </div>
//                 </div>
//                      <div className="col-xl-4 col-lg-6 col-md-6">
//                     <div className="room mb-50">
//                         <div className="room_image">
//                             <img src={room6} alt="room6"></img>
//                         </div>
//                         <div className="room_caption">
//                             <h2>Serviced Apartment</h2>
//                             <p>Rs. 15000/Month</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default BookRooms
import React from "react";
// import Cart from "./component/Cart";
import Cart from "../components/Cart/Cart";

const BookRooms = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default BookRooms;
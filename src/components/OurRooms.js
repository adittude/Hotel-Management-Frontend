import React from 'react'
import room1 from '../components/Images/Single.jpg';
import room2 from '../components/Images/Double.jpg';
import room3 from '../components/Images/Queen.jpg';
import room4 from '../components/Images/King.jpg';
import room5 from '../components/Images/Suite.jpg';
import room6 from '../components/Images/Apartment.jpg';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AppBar, Box } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
const useStyles = makeStyles({
    title:{
        flexGrow:1
    },
    appBarBtn:{
        float:'right'
    }
})
const OurRooms = () => {
    const classes=useStyles()
    return (
        <>
        <div className="our_room_container">
            <div className="our_room_heading">
                <h1 >Rooms</h1>
            </div>
            <div className="room_row">
                <div className="col-xl-4 col-lg- col-md-6">
                    <div className="room mb-50">
                        <div className="room_image">
                            <img src={room1} alt="room1"></img>
                        </div>
                        <div className="room_caption">
                            <h2><Link className={classes.appBarLink} to='/landing'>Single Room</Link></h2>
                            <p>Rs. 499/Night</p>
                            {/* <Button color="inherit" className={classes.appBarBtn}><Link className={classes.appBarLink} style={{color:"white",textDecoration:"none"}} to='/middle'>Book Now</Link></Button> */}
                        </div>
                    </div>
                </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="room mb-50">
                        <div className="room_image">
                            <img src={room2}  alt="room2"></img>
                        </div>
                        <div className="room_caption">
                            <h2><Link className={classes.appBarLink} to='/landing'>Double Room</Link></h2>
                            <p>Rs. 699/Night</p>
                        </div>
                    </div>
                </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="room mb-50">
                        <div className="room_image">
                            <img src={room3}  alt="room3"></img>
                        </div>
                        <div className="room_caption">
                            <h2><Link className={classes.appBarLink} to='/landing'>Queen Room</Link></h2>
                            <p>Rs. 999/Night</p>
                        </div>
                    </div>
                </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="room mb-50">
                        <div className="room_image">
                            <img src={room4}  alt="room4"></img>
                        </div>
                        <div className="room_caption">
                            <h2><Link className={classes.appBarLink} to='/landing'>King Room</Link></h2>
                            <p>Rs. 1099/Night</p>
                        </div>
                    </div>
                </div>
                 <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="room mb-50">
                        <div className="room_image">
                            <img src={room5} alt="room5"></img>
                        </div>
                        <div className="room_caption">
                            <h2><Link className={classes.appBarLink} to='/landing'>5 Star Suite</Link></h2>
                            <p>Rs. 1999/Night</p>
                        </div>
                    </div>
                </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="room mb-50">
                        <div className="room_image">
                            <img src={room6} alt="room6"></img>
                        </div>
                        <div className="room_caption">
                            <h2><Link className={classes.appBarLink} to='/landing'>Serviced Apartment</Link></h2>
                            <p>Rs. 15000/Month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default OurRooms

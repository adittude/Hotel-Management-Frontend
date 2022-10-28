// import React from 'react'

// import { AppBar, Box } from '@material-ui/core';
// import { Toolbar } from '@material-ui/core';
// import { Typography } from '@material-ui/core';
// import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import "./Header.css";

// const useStyles = makeStyles({
//     title:{
//         flexGrow:1
//     },
//     appBarBtn:{
//         float:'right'
//     }
// })


// export default function Header() {

//     const classes=useStyles()
//     return (
//         <AppBar position="fixed" style={{marginBottom:200}}>
            
//             <Toolbar>
                
//             <Button color="inherit" className={classes.appBarBtn}><Link className={classes.appBarLink} style={{color:"white",textDecoration:"none"}} to='/'>Hotel Management System</Link></Button>

                
//                 <Link to='/landing' style={{ color: "white", textDecoration: "none",margin:10 }}>Menu</Link>
//                 <Link to='/about' style={{ color: "white", textDecoration: "none",margin:10 }}>About</Link>
//                 <Link to='/contact' style={{ color: "white", textDecoration: "none",margin:10 }}>Contact</Link>
//                 <Link to='/profile' style={{ color: "white", textDecoration: "none",margin:10 }}>Profile</Link>
//                 <Link to='/' style={{ color: "white", textDecoration: "none",margin:10, float:"right" }}>Logout</Link>
                
//             </Toolbar>
//         </AppBar>
//     )
// }

import React from 'react'
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Header.css";
import { logout } from "../slices/auth";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import EventBus from "../common/EventBus";
const useStyles = makeStyles({
  title:{
      flexGrow:1
  },
  appBarBtn:{
      float:'right'
  }
})
export default function Header() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
  
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    const logOut = useCallback(() => {
      dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
      if (currentUser) {
        setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      } else {
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
      }
  
      EventBus.on("logout", () => {
        logOut();
      });
  
      return () => {
        EventBus.remove("logout");
      };
    }, [currentUser, logOut]);
    
  const classes=useStyles()
    return (
    //   <Router>
        
            
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/"className="nav-link">
              Hotel Management System
            </Link>
            </li>
            
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className='nav-link'>
                  About
                  </Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className='nav-link'>Contact</Link>
                </li>
              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}
  
              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}
  
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>
  
            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
  
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
          </div>
    // </Router>
  );
};

  


import React from 'react';
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import { Toolbar } from '@material-ui/core';

import { Button } from '@material-ui/core';
import "./Header.css";
import { logout } from "../slices/auth";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import EventBus from "../common/EventBus";
export default function Welcome() {
const useStyles = makeStyles((theme) =>({
    root:{
        margin:theme.spacing(1),
        width:theme.spacing(100),
        height:theme.spacing(25),
        paddingLeft:theme.spacing(30),
        paddingTop:theme.spacing(20)
    },
    boxBorder:{
        border:`3px solid ${blue[200]}`
    }
}))
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
        <>
            <Header></Header>
        
        <div style={{maxWidth:"100%",width:"50%",marginTop:100, backgroundColor:"white"}} className='container'>
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
                  <Link to={"/middle2"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>
               
           
            <Footer></Footer>
        </>
    )
}

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
import { Redirect } from 'react-router-dom';
const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
const [showAdminBoard, setShowAdminBoard] = useState(false);
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

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
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

  return (
    <div style={{ marginTop: 100, maxWidth: "100%", width: "80%", backgroundColor:"white"}} className='container'>
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      {/* <Link to="/welcome">
                    <button className="primary-button">Click Here</button>
                </Link> */}
                {showModeratorBoard && (
                
                  <Link to={"/mod"} >
                  <button className="primary-button"> Moderator Board</button>
                  </Link>
                
              )}
  
              {showAdminBoard && (
                
                  <Link to={"/middle"} >
                  <button className="primary-button">Admin Board</button>
                  </Link>
                
              )}
  
              {currentUser && (
                
                  <Link to={"/middle2"}>
                  <button className="primary-button"> User</button>
                  </Link>
                
              )}
            
    </div>
  );
};

export default Profile;

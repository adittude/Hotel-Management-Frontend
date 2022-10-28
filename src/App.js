import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import MiddleLayout from './components/MiddleLayout';
import MiddleLayout2 from './components/MiddleLayout2';
import welcome from './components/welcome';
import HomeRoom from './components/Room/HomeRoom';
import AddRoom from './components/Room/AddRoom';
import AllRooms from './components/Room/AllRooms';
import SearchAvlRoom from './components/Room/SearchAvlRoom';
import BookRooms from "./components/BookRooms";
import HomeGuest from './components/Guest/HomeGuest';
import AddGuest from './components/Guest/AddGuest';
import AllGuest from './components/Guest/AllGuests'
import HomeReservation from './components/Reservation/HomeReservation';
import AddReservation from './components/Reservation/AddReservation';
import AllReservations from './components/Reservation/AllReservation';
import HomeInventory from './components/Inventory/HomeInventory';
import AddInventory from './components/Inventory/AddInventory'
import AllInventory from './components/Inventory/AllInventory'
import HomeStaff from './components/Staff/HomeStaff';
import AddStaff from './components/Staff/AddStaff'
import AllStaff from './components/Staff/AllStaff'
import Contact from './components/Contact';
import About from './components/About';
// import LoginPage from './components/Login'
// import RegisterPage from './components/Register'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import Landing from './components/LandingPage';

import { logout } from "./slices/auth";

import EventBus from "./common/EventBus";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path='/forget-password' exact component={ForgetPasswordPage}/>
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
          <Route path='/landing' exact component={Landing} />
          <Route path='/middle' exact component={MiddleLayout}/>
          <Route path='/middle2' exact component={MiddleLayout2}/>
          <Route path='/welcome' exact component={welcome}/>
          <Route path='/middle/hroom' exact component={HomeRoom}/>
          <Route path='/middle/hroom/addRoom' exact component={AddRoom}/>
          <Route path='/middle/hroom/getAllRoom' exact component={AllRooms}/>
          <Route path='/middle/hroom/getAvail' exact component={SearchAvlRoom}/>
          <Route path='/middle/groom' exact component={HomeGuest}/>
          <Route path='/middle/groom/addGuest' exact component={AddGuest}/>
          <Route path='/middle/groom/addGuest/:id' exact component={AddGuest}/>
          <Route path='/middle/groom/getAllGuest' exact component={AllGuest}/>
          <Route path='/middle/resroom' exact component={HomeReservation}/>
          <Route path='/middle/bookroom' exact component={BookRooms}/>
          <Route path='/middle/resroom/addReservation' exact component={AddReservation}/>
          <Route path='/middle/resroom/getAllReservation' exact component={AllReservations}/>
          <Route path='/middle/iroom' exact component={HomeInventory}/>
          <Route path='/middle/iroom/addInventory' exact component={AddInventory}/>
          <Route path='/middle/iroom/getAllInventory' exact component={AllInventory}/>
          <Route path='/middle/sroom' exact component={HomeStaff} />
          <Route path='/middle/sroom/addstaff' exact component={AddStaff} />
          <Route path='/middle/sroom/getAllstaff' exact component={AllStaff} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

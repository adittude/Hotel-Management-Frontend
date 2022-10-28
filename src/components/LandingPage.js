import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import BackgroundImage from '../components/Images/bg1.jpg'

export default function LandingPage() {
    return (
            <div style={{margin:50, float: "center" ,backgroundColor:"white"}}>
            <h1 className="main-title text-center" style={{backgroundColor:"black"}}>login / register page</h1>
            <p className="main-para text-center" style={{color: 'black'}}> The Best Hotel at Fair Price</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button">register </button>
                </Link>
            </div>
            </div>
    )
}


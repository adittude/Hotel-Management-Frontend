import React from 'react';
// import './App.css';
// import './index';
import aboutpic from './Images/contact.jpg';
import Header from './Header';
import Footer from './Footer';


const Contact=()=>{
    return (
        <>
        <Header></Header>
        <div className="contact_info" style={{marginTop:100}}>
        <h1 className="contact_heading">Contact Us</h1>
        <div className="about_container1">
            <div className="about_container2">
                       
            <h4>Reservations</h4>
                            <ul>
                                <li>Tel:+971 4 301 7777</li>
                                <li>burjalarab@gmail.com</li>
                            </ul>
                        
                  
                            <h4>Our Location</h4>
                            <ul>
                                <li>UMM - Suqeim, Dubai, United Arab Emirates</li>
                            </ul>
                            </div>
                            <div className="about_container3">
            <img src={aboutpic} alt="about_pic"/>
            </div>
 
                        </div>
        </div>
        <Footer></Footer>
        </>
    )
}
export default Contact;
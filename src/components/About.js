import React from 'react';
import aboutpic from './Images/about.jpg';
import Header from './Header';
import Footer from './Footer';
const About=()=>{
    return (
        <>
        <Header></Header>
        <div className="container_fluid" style={{marginTop:100}}>
            <h1>About Us </h1>
            <div className="about_container1">
            <div className="about_container2">
            <h3> BURJ-AL-ARAB</h3>
            <p>WALK THROUGH THE CORRIDORS OF THE LUXURY HOTELS AND HERITAGE.</p>
            <p>We are pleased to welcome all our guests to Hotel BURJ-AL-ARAB - a dedicated hotel that opens
             up a treasure trove of all the wonderful Facilities and extremely well behaved staff service.</p>
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
export default About;
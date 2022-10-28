import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <footer>
        <div className="footer_area">
            <div className="footer_row">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-30">
                            <div className="footer_logo">
                                 <NavLink className="footer_logo" to="/"><span> <span className="foot_logo">BURJ-AL-ARAB</span></span></NavLink>
                            </div>
                            <div className="footer_social">
                                <li><NavLink to="#"><i class="display-flex-center zmdi zmdi-facebook"></i></NavLink></li>
                                <li><NavLink to="#"><i class="display-flex-center zmdi zmdi-twitter"></i></NavLink></li>
                                <li><NavLink to="#"><i class="display-flex-center zmdi zmdi-google"></i></NavLink></li>
                            </div>
                            <div className="footer_para">
                                <p>Copyright ©|All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5">
                        <div className="single-footer-caption mb-30">
                        <div className="footer_title">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><NavLink to="/">About Burj - Al - Arab</NavLink></li>
                                <li><NavLink to="/">Our Best Rooms</NavLink></li>
                                <li><NavLink to="">Our Photo Gallery</NavLink></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <div className="single-footer-caption mb-30">
                        <div className="footer_title">
                            <h4>Reservations</h4>
                            <ul>
                                <li>Tel:+971 4 301 7777</li>
                                <li>burjalarab@gmail.com</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4  col-sm-5">
                        <div className="single-footer-caption mb-30">
                            <div className="footer_title">
                            <h4>Our Location</h4>
                            <ul>
                                <li>UMM - Suqeim, Dubai, United Arab Emirates</li>
                            </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
        </>
    );
};

export default Footer;

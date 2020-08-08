import React from 'react';

import {SideBar} from "../../commons/index";
import '../../assets/css/main.css'
import '../../assets/css/sb-admin-2.css'
import '../../assets/css/contact.css'

import {MDBContainer} from "mdbreact";

const Reports = () => {
    return (
        <>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">고객 지원</h2><br/>
                        </div>
                        <MDBContainer className="mt-5 text-center">
                                <div className="wrap-contact100">
                                    <form className="contact100-form validate-form">
                                        <span className="contact100-form-title">
                                            Contact Us
                                        </span>

                                        <div className="wrap-input100 validate-input"
                                             data-validate="Please enter your name">
                                            <input className="input100" type="text" name="name" placeholder="Full Name" required/>
                                                <span className="focus-input100"></span>
                                        </div>

                                        <div className="wrap-input100 validate-input"
                                             data-validate="Please enter email: e@a.x">
                                            <input className="input100" type="text" name="email" placeholder="Email"/>
                                                <span className="focus-input100"></span>
                                        </div>

                                        <div className="wrap-input100 validate-input"
                                             data-validate="Please enter your message">
                                            <textarea className="input100" name="message"
                                                      placeholder="Your Message"></textarea>
                                            <span className="focus-input100"></span>
                                        </div>

                                        <div className="container-contact100-form-btn">
                                            <button className="contact100-form-btn">
                                                Send Email
                                            </button>
                                        </div>
                                    </form>

                                    <div className="contact100-more">
                                        Contact our  IZZI call center: <span className="contact100-more-highlight">02-BIT-1004</span>
                                    </div>
                                </div>
                            <div id="dropDownSelect1"></div>
                        </MDBContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reports;
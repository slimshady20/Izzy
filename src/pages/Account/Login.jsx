import React from "react";

import {Link} from "react-router-dom";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBModalFooter} from "mdbreact";

const Login = () => {
    return (
        <div style={{padding:'6rem', margin:'0 auto', maxWidth:800}}>
            <section>
                <div  className="container">
                    <div className="row">
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody className="mx-4">
                                    <div className="text-center">
                                        <h3 className="dark-grey-text mb-5">
                                            <strong>Login</strong>
                                        </h3>
                                    </div>
                                    <MDBInput
                                        label="Your ID"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your password"
                                        group
                                        type="password"
                                        validate
                                        containerClass="mb-0"
                                    />
                                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                                        Forgot
                                        <a href="#!" className="blue-text ml-1">

                                            Password?
                                        </a>
                                    </p>
                                    <div className="text-center mb-3">
                                        <Link to="/mypage"><MDBBtn
                                            type="button"
                                            gradient="blue"
                                            rounded
                                            className="btn-block z-depth-1a"
                                        >
                                            Login
                                        </MDBBtn></Link>
                                    </div>
                                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                                        or Login with:
                                    </p>
                                    <div className="row my-3 d-flex justify-content-center">
                                        <MDBBtn
                                            type="button"
                                            color="white"
                                            rounded
                                            className="mr-md-3 z-depth-1a"
                                        >
                                            <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                                        </MDBBtn>
                                        <MDBBtn
                                            type="button"
                                            color="white"
                                            rounded
                                            className="mr-md-3 z-depth-1a"
                                        >
                                            <MDBIcon fab icon="twitter" className="blue-text" />
                                        </MDBBtn>
                                        <MDBBtn
                                            type="button"
                                            color="white"
                                            rounded
                                            className="z-depth-1a"
                                        >
                                            <MDBIcon fab icon="google-plus-g" className="blue-text" />
                                        </MDBBtn>
                                    </div>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Not a member?
                                        <Link to ="/signup"className="blue-text ml-1">

                                            Sign Up
                                        </Link>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Login;
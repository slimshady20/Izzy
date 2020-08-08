import React from 'react';

import {SideBar} from "../../commons/index";
import user from '../../assets/img/user.png'
import truck from '../../assets/img/truck.png'
import calculator from '../../assets/img/calculator.png'
import calendar from '../../assets/img/calendar.png'
import phone from '../../assets/img/phone.png'
import contactUs from '../../assets/img/contact-us.png'
import visit from '../../assets/img/visit.png'

import '../../assets/css/main.css'
import '../../assets/css/sb-admin-2.css'
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";

const Contacts = () => {
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
                            <MDBRow>
                                <MDBCol>
                                    <MDBJumbotron>
                                        <MDBCardBody>
                                            <MDBCardTitle className="h2">
                                                고객님들의 행복을 지원합니다.
                                            </MDBCardTitle>
                                            <p className="blue-text my-4 font-weight-bold">
                                                자주 찾는 질문
                                            </p>
                                            <MDBCardText>
                                                1. 어플 이용 방법이 궁금해요.
                                            </MDBCardText>
                                            <MDBCardText>
                                                2. 이사 견적은 어떻게 확인하나요.
                                            </MDBCardText>
                                            <MDBCardText>
                                                3. 사다리, 에어컨 비용 등은 별도의 비용이 추가되나요.
                                            </MDBCardText>
                                            <MDBCardText>
                                                4. 견적서를 받은 후에 이사는 어떻게 진행되나요.
                                            </MDBCardText>
                                            <p className="blue-text my-4 font-weight-bold">
                                                자주 찾는 서비스
                                            </p>
                                            <Link to="/"><Navbar.Brand>
                                                <img
                                                    alt=""
                                                    src = {user}
                                                    width="75"
                                                    height="75"
                                                />
                                            </Navbar.Brand></Link>
                                            <Link to="/"><Navbar.Brand>
                                                <img
                                                    alt=""
                                                    src = {truck}
                                                    width="75"
                                                    height="75"
                                                />
                                            </Navbar.Brand></Link>
                                            <Link to="/"><Navbar.Brand>
                                                <img
                                                    alt=""
                                                    src = {calculator}
                                                    width="75"
                                                    height="75"
                                                />
                                            </Navbar.Brand></Link>
                                            <Link to="/"><Navbar.Brand>
                                                <img
                                                    alt=""
                                                    src = {calendar}
                                                    width="75"
                                                    height="75"
                                                />
                                            </Navbar.Brand></Link>
                                            <p className="blue-text my-4 font-weight-bold">
                                                문의하기
                                            </p>
                                            <Link to="/"><Navbar.Brand>
                                                <img
                                                    alt=""
                                                    src = {phone}
                                                    width="75"
                                                    height="75"
                                                />
                                            </Navbar.Brand></Link>
                                            <Link to="/reports"><Navbar.Brand>
                                                <img
                                                    alt=""
                                                    src = {contactUs}
                                                    width="75"
                                                    height="75"
                                                />
                                            </Navbar.Brand></Link>
                                            <Link to="/"><Navbar.Brand>
                                                <img
                                                    alt=""
                                                    src = {visit}
                                                    width="75"
                                                    height="75"
                                                />
                                            </Navbar.Brand></Link>
                                        </MDBCardBody>
                                    </MDBJumbotron>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;
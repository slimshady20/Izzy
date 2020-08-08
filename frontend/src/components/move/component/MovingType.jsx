import React, {useState} from 'react';
import {Button, Modal, Nav, Navbar} from 'react-bootstrap'
import {MDBBtn, MDBCol, MDBView, MDBMask, MDBContainer, MDBRow} from "mdbreact";
import './MovingType.css'
import {ThemeProvider} from "styled-components";
import {DatePicker, theme} from "react-trip-date";
import {Link} from "react-router-dom";
import {
    MovingBusan, MovingChungbuk, MovingChungnam,
    MovingDaegu,
    MovingDaejeon, MovingGangwon,
    MovingGwangju, MovingGyeongbuk,
    MovingGyeonggi, MovingGyeongnam,
    MovingIncheon, MovingJeju, MovingJeonbuk, MovingJeonnam, MovingSejong,
    MovingSeoul, MovingUlsan
} from "./movingPoint/movingLocal";
import Test from "../../modalTest/Test";
import ModalTest from "../../modalTest/ModalTest";


const MovingType = () => {
    const [showw, setShow] = useState(false);
    const [modalPage, setModalPage] = useState(1);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlePage = e => {
        e.preventDefault();
        if (modalPage === 6) {
            setModalPage(1);
        } else {
            setModalPage(modalPage + 1);
        }
    }



    return (
        <>
            <MDBContainer>
                <ModalTest modalPage={modalPage} show={showw} handleClose={handleClose} handlePage={handlePage} />
                <MDBRow>
                    <MDBCol md="3">
                        <MDBView hover zoom onClick={handleShow}>
                            <img
                                src="https://image.flaticon.com/icons/svg/2024/2024825.svg"
                                className="img-fluid"
                                alt=""
                            /><h2>이사종류</h2>
                            <MDBMask className="flex-center">
                                <h1 className="white-text">이사종류</h1>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="3">
                        <MDBView hover zoom>
                            <img
                                src="https://image.flaticon.com/icons/svg/2738/2738372.svg"
                                className="img-fluid"
                                alt=""
                            /> <h2>이사날짜</h2>
                            <MDBMask className="flex-center">
                                <h1 className="white-text">이사날짜</h1>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="3">
                        <MDBView hover zoom>
                            <img
                                src="https://image.flaticon.com/icons/svg/754/754852.svg"
                                className="img-fluid"
                                alt=""
                            /><h2>출발지</h2>
                            <MDBMask className="flex-center">
                                <h1 className="white-text">출발지</h1>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="3">
                        <MDBView hover zoom>
                            <img
                                src="https://image.flaticon.com/icons/svg/1513/1513983.svg"
                                className="img-fluid"
                                alt=""
                            /><h2>도착지</h2>
                            <MDBMask className="flex-center">
                                <h1 className="blue-grey-text">도착지</h1>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBBtn color="amber" onClick={handlePage}>
                무료 견적 신청하기
            </MDBBtn><br/>

            {/*이사종류를 눌렀을때*/}


        </>
    );
}


export default MovingType;
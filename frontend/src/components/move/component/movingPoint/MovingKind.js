import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import {MDBCol, MDBMask, MDBRow, MDBView} from "mdbreact";

const MovingKind = ({modalPage, show, handleClose, handlePage }) => {
    const handleShow = () => setShow(true);
    const [showw, setShow] = useState(false);


    return (
        <div>
            <div >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        이사종류
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body onClick={handlePage}>
                    <MDBRow>
                        <MDBCol md="5">
                            <MDBView hover>
                                <img
                                    src="https://image.flaticon.com/icons/svg/888/888448.svg"
                                    className="img-fluid"
                                    alt=""

                                /><h3>보관이사</h3><p>국내 최대 규모의 보관창고운영<br/>안전하고 깔끔한 보관서비스</p>
                                <MDBMask className="flex-center" overlay="red-strong">
                                    <p className="white-text">보관이사</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="5">
                            <MDBView hover>
                                <img
                                    src="https://image.flaticon.com/icons/svg/1625/1625514.svg"
                                    className="img-fluid"
                                    alt=""
                                /><h3>사무실이사</h3><p>회사,공장,병원,관공서,학교,학원 등의 이사</p>
                                <MDBMask className="flex-center" overlay="red-strong">
                                    <p className="white-text">사무실이사</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="5">
                            <MDBView hover>
                                <img
                                    src="https://image.flaticon.com/icons/svg/3023/3023392.svg"
                                    className="img-fluid"
                                    alt=""
                                /><h3>집이사</h3><p>이삿짐이 1톤 이상의 짐</p>
                                <MDBMask className="flex-center" overlay="red-strong">
                                    <p className="white-text">집이사</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="5">
                            <MDBView hover>
                                <img
                                    src="https://image.flaticon.com/icons/svg/948/948615.svg"
                                    className="img-fluid"
                                    alt=""
                                /><h3>소형이사</h3><p>이삿짐이 1톤 이하의 짐</p>
                                <MDBMask className="flex-center" overlay="red-strong">
                                    <p className="white-text">소형이사</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                </Modal.Body>
            </div>
        </div>
    );
};

export default MovingKind;
import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBCol,MDBView,MDBMask,MDBContainer,MDBRow} from "mdbreact";
import './MovingType.css'

const MovingType = () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }

    return (
        <>
            <MDBContainer>
                <MDBRow>
            <MDBCol md="3">
                <MDBView hover zoom onClick={onClickShow}>
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

            <MDBBtn color="amber"onClick={onClickShow}>
                무료 견적 신청하기
            </MDBBtn><br/>

            <Modal
                size={"lg"}
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        이사종류
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <MDBRow>
                    <MDBCol md="5">
                        <MDBView hover>
                            <a href={"/movingDate"}>
                            <img
                                src="https://image.flaticon.com/icons/svg/888/888448.svg"
                                className="img-fluid"
                                alt=""

                            /><h3>보관이사</h3><p>국내 최대 규모의 보관창고운영<br/>안전하고 깔끔한 보관서비스</p>
                            <MDBMask className="flex-center" overlay="red-strong">
                                <p className="white-text">보관이사</p>
                            </MDBMask>
                            </a>
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
            </Modal>

        </>
    );
}


export default MovingType;
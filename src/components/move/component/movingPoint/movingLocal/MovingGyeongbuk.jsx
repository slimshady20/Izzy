import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingGyeongbuk= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                경북
            </MDBBtn>
            <Modal
                size={"lg"}
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        경북
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                       <MDBBtn onClick="str_zipcode_gubun('경북경산시')">경산시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북경주시')">경주시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북고령군')">고령군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북구미시')">구미시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북군위군')">군위군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북김천시')">김천시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북문경시')">문경시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북봉화군')">봉화군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북상주시')">상주시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북성주군')">성주군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북안동시')">안동시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북영덕군')">영덕군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북영양군')">영양군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북영주시')">영주시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북영천시')">영천시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북예천군')">예천군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북울릉군')">울릉군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북울진군')">울진군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북의성군')">의성군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북청도군')">청도군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북청송군')">청송군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북칠곡군')">칠곡군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북포항시 남구')">포항시 남구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경북포항시 북구')">포항시 북구</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingGyeongbuk;
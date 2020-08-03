import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingIncheon= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                인천
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
                        인천
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                        <MDBBtn onClick="str_zipcode_gubun('인천강화군')">강화군</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('인천계양구')">계양구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('인천남동구')">남동구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('인천동구')">동구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('인천미추홀구(남구)')">미추홀구(남구)</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('인천부평구')">부평구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('인천서구')">서구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('인천연수구')">연수구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('인천옹진군')">옹진군</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('인천중구')">중구</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingIncheon;
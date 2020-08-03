import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingDaegu= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                대구
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
                        대구
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                        <MDBBtn onClick="str_zipcode_gubun('대구남구')">남구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대구달서구')">달서구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대구달성군')">달성군</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대구동구')">동구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대구북구')">북구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대구서구')">서구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대구수성구')">수성구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대구중구')">중구</MDBBtn>
                    </a>

                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingDaegu;
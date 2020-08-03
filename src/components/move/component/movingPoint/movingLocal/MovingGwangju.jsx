import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingGwangju= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                광주
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
                        광주
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                        <MDBBtn onClick="str_zipcode_gubun('광주광산구')">광산구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('광주남구')">남구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('광주동구')">동구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('광주북구')">북구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('광주서구')">서구</MDBBtn>
                    </a>

                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingGwangju;
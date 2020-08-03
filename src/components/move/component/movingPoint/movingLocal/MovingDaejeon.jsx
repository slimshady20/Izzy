import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingDaejeon= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                대전
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
                        대전
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                        <MDBBtn onClick="str_zipcode_gubun('대전대덕구')">대덕구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대전동구')">동구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대전서구')">서구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대전유성구')">유성구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('대전중구')">중구</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingDaejeon;
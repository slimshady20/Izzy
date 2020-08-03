import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";
import {Link} from "react-router-dom";

import MovingFloor from "../MovingFloor";


const MovingUlsan= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber" onClick={onClickShow}>
               울산
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
                      울산
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <Link to={'/moving/floor'} component={MovingFloor} onClick="str_zipcode_gubun('울산남구')">남구</Link>
                        <MDBBtn onClick="str_zipcode_gubun('울산동구')">동구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('울산북구')">북구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('울산울주군')">울주군</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('울산중구')">중구</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingUlsan;
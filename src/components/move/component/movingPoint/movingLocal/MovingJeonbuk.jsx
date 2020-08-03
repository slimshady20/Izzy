import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingJeonbuk= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                전북
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
                        전북
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                       <MDBBtn onClick="str_zipcode_gubun('전북고창군')">고창군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북군산시')">군산시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북김제시')">김제시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북남원시')">남원시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북무주군')">무주군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북부안군')">부안군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북순창군')">순창군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북완주군')">완주군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북익산시')">익산시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북임실군')">임실군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북장수군')">장수군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북전주시 덕진구')">전주시 덕진구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북전주시 완산구')">전주시 완산구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북정읍시')">정읍시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전북진안군')">진안군</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingJeonbuk;
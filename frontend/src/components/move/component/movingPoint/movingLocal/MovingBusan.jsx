import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingBusan= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                부산
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
                        부산
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <MDBBtn onClick="str_zipcode_gubun('부산강서구')">강서구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산금정구')">금정구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산기장군')">기장군</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산남구')">남구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산동구')">동구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산동래구')">동래구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산부산진구')">부산진구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산북구')">북구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산사상구')">사상구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산사하구')">사하구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산서구')">서구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산수영구')">수영구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산연제구')">연제구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산영도구')">영도구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산중구')">중구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('부산해운대구')">해운대구</MDBBtn>
                    </a>

                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingBusan;
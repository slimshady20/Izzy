import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingChungbuk= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                충북
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
                     충북
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                       <MDBBtn onClick="str_zipcode_gubun('충북괴산군')">괴산군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북단양군')">단양군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북보은군')">보은군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북영동군')">영동군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북옥천군')">옥천군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북음성군')">음성군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북제천시')">제천시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북증평군')">증평군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북진천군')">진천군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북청주시 상당구')">청주시 상당구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북청주시 서원구')">청주시 서원구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북청주시 청원구')">청주시 청원구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북청주시 흥덕구')">청주시 흥덕구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충북충주시')">충주시</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingChungbuk;
import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingGangwon= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                강원
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
                        강원
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                       <MDBBtn onClick="str_zipcode_gubun('강원강릉시')">강릉시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원고성군')">고성군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원동해시')">동해시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원삼척시')">삼척시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원속초시')">속초시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원양구군')">양구군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원양양군')">양양군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원영월군')">영월군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원원주시')">원주시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원인제군')">인제군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원정선군')">정선군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원철원군')">철원군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원춘천시')">춘천시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원태백시')">태백시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원평창군')">평창군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원홍천군')">홍천군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원화천군')">화천군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('강원횡성군')">횡성군</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingGangwon;
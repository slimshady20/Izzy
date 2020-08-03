import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingGyeongnam= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                경남
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
                        경남
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                       <MDBBtn onClick="str_zipcode_gubun('경남거제시')">거제시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남거창군')">거창군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남고성군')">고성군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남김해시')">김해시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남남해군')">남해군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남밀양시')">밀양시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남사천시')">사천시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남산청군')">산청군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남양산시')">양산시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남의령군')">의령군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남진주시')">진주시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남창녕군')">창녕군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남창원시 마산합포구')">창원시 마산합포구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남창원시 마산회원구')">창원시 마산회원구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남창원시 성산구')">창원시 성산구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남창원시 의창구')">창원시 의창구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남창원시 진해구')">창원시 진해구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남통영시')">통영시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남하동군')">하동군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남함안군')">함안군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남함양군')">함양군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('경남합천군')">합천군</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingGyeongnam;
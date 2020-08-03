import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingFloor= () => {
    const [show, setShow] = useState(true);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn outline color="light-blue"onClick={onClickShow}>
                층선택
            </MDBBtn>
            <Modal
                onClick={onClickShow}
                size={"lg"}
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        층 선택
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <MDBBtn onClick="str_zipcode_info3('반지하')">반지하</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('지하1층')">지하1층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('1층')">1층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('2층')">2층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('3층')">3층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('4층')">4층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('5층')">5층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('6층')">6층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('7층')">7층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('8층')">8층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('9층')">9층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('10층')">10층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('11층')">11층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('12층')">12층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('13층')">13층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('14층')">14층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('15층')">15층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('16층')">16층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('17층')">17층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('18층')">18층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('19층')">19층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('20층')">20층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('21층')">21층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('22층')">22층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('23층')">23층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('24층')">24층</MDBBtn>
                        <MDBBtn onClick="str_zipcode_info3('25층이상')">25층 이상</MDBBtn>

                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingFloor;
import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingJeonnam= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                전남
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
                        전남
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                       <MDBBtn onClick="str_zipcode_gubun('전남강진군')">강진군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남고흥군')">고흥군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남곡성군')">곡성군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남광양시')">광양시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남구례군')">구례군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남나주시')">나주시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남담양군')">담양군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남목포시')">목포시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남무안군')">무안군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남보성군')">보성군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남순천시')">순천시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남신안군')">신안군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남여수시')">여수시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남영광군')">영광군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남영암군')">영암군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남완도군')">완도군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남장성군')">장성군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남장흥군')">장흥군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남진도군')">진도군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남함평군')">함평군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남해남군')">해남군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('전남화순군')">화순군</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingJeonnam;
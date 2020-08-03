import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingChungnam= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber"onClick={onClickShow}>
                충남
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
                      충남
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                       <MDBBtn onClick="str_zipcode_gubun('충남계룡시')">계룡시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남공주시')">공주시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남금산군')">금산군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남논산시')">논산시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남당진시')">당진시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남보령시')">보령시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남부여군')">부여군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남서산시')">서산시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남서천군')">서천군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남아산시')">아산시</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남예산군')">예산군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남천안시 동남구')">천안시 동남구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남천안시 서북구')">천안시 서북구</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남청양군')">청양군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남태안군')">태안군</MDBBtn>
                       <MDBBtn onClick="str_zipcode_gubun('충남홍성군')">홍성군</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingChungnam;
import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingGyeonggi= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="amber" onClick={onClickShow}>
                경기
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
                        경기
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <script language="javascript" type="text/javascript" src="../db_class/string.js"></script>
                        <MDBBtn onClick="str_zipcode_gubun('경기가평군')">가평군</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기고양시 덕양구')">고양시 덕양구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기고양시 일산동구')">고양시 일산동구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기고양시 일산서구')">고양시 일산서구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기과천시')">과천시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기광명시')">광명시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기광주시')">광주시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기구리시')">구리시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기군포시')">군포시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기김포시')">김포시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기남양주시')">남양주시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기동두천시')">동두천시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기부천시 소사구')">부천시 소사구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기부천시 오정구')">부천시 오정구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기부천시 원미구')">부천시 원미구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기성남시 분당구')">성남시 분당구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기성남시 수정구')">성남시 수정구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기성남시 중원구')">성남시 중원구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기수원시 권선구')">수원시 권선구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기수원시 영통구')">수원시 영통구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기수원시 장안구')">수원시 장안구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기수원시 팔달구')">수원시 팔달구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기시흥시')">시흥시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기안산시 단원구')">안산시 단원구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기안산시 상록구')">안산시 상록구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기안성시')">안성시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기안양시 동안구')">안양시 동안구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기안양시 만안구')">안양시 만안구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기양주시')">양주시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기양평군')">양평군</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기여주시')">여주시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기연천군')">연천군</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기오산시')">오산시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기용인시 기흥구')">용인시 기흥구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기용인시 수지구')">용인시 수지구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기용인시 처인구')">용인시 처인구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기의왕시')">의왕시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기의정부시')">의정부시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기이천시')">이천시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기파주시')">파주시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기평택시')">평택시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기포천시')">포천시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기하남시')">하남시</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('경기화성시')">화성시</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingGyeonggi;
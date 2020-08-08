import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";
import { Route, BrowserRouter, Switch,Link } from 'react-router-dom'
import MovingFloor from "../MovingFloor";

const MovingSeoul= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    const [addr,setAddr]=useState('')
    const onClickBtn=e=>{
        setAddr(e.target.value)
        onClickShow()
    }

    return (
        <>
            <MDBBtn color="amber" onClick={onClickShow}>
                서울
            </MDBBtn>
            <Modal className={"modal"}
                size={"lg"}
                show={show}
                   onHide={setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        서울
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >

                        <Switch>
                     <a className="list">
                         <MDBBtn component={MovingFloor} onClick={()=>setShow(false)}> 강남구</MDBBtn>
                        <MDBBtn onClick={()=>setShow(false)}>강동구</MDBBtn>
                        <MDBBtn onClick={()=>setShow(false)}>강북구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울강서구')">강서구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울관악구')">관악구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울광진구')">광진구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울구로구')">구로구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울금천구')">금천구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울노원구')">노원구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울도봉구')">도봉구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울동대문구')">동대문구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울동작구')">동작구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울마포구')">마포구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울서대문구')">서대문구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울서초구')">서초구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울성동구')">성동구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울성북구')">성북구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울송파구')">송파구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울양천구')">양천구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울영등포구')">영등포구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울용산구')">용산구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울은평구')">은평구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울종로구')">종로구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울중구')">중구</MDBBtn>
                        <MDBBtn onClick="str_zipcode_gubun('서울중랑구')">중랑구</MDBBtn>
                    </a>
                        </Switch>

                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingSeoul;
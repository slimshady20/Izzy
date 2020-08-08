import React, {useState} from 'react';
import DaumPostcode from 'react-daum-postcode';
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Postcode = ({onSelectedAddr}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
            onSelectedAddr(fullAddress)
            setShow(false)
            console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    }

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            주소 검색하기
        </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>주소 검색</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <DaumPostcode onComplete={handleComplete}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        저장하기
                    </Button>
                </Modal.Footer>
            </Modal>


            </>

    );
}
export default Postcode;
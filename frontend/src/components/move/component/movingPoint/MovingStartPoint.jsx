import React, { useState} from 'react';
import {Modal,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {MovingBusan,MovingSeoul,MovingUlsan,MovingGyeonggi,MovingChungbuk,MovingChungnam,
MovingDaegu,MovingDaejeon,MovingGangwon,MovingGwangju,MovingGyeongbuk,
MovingGyeongnam,MovingIncheon,MovingJeju,MovingJeonbuk,MovingJeonnam,MovingSejong} from './movingLocal'


const MovingStartPoint= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Link to='/movingseoul' component={MovingSeoul} onClick={show}>서울</Link>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    );
}


export default MovingStartPoint;
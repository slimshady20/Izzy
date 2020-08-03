import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";
import {BrowserRouter, Switch,Link } from 'react-router-dom'
import {MovingBusan,MovingSeoul,MovingUlsan,MovingGyeonggi,MovingChungbuk,MovingChungnam,
    MovingDaegu,MovingDaejeon,MovingGangwon,MovingGwangju,MovingGyeongbuk,
    MovingGyeongnam,MovingIncheon,MovingJeju,MovingJeonbuk,MovingJeonnam,MovingSejong} from './movingLocal'

const MovingEndPoint= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn outline color="deep-orange"onClick={onClickShow}>
                도착지
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
                        도착지역
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BrowserRouter>
                        <Switch>
                            <a className="list">

                                <Link to='/moving/seoul' component={MovingSeoul}>서울</Link>
                                <Link to={"/moving/gyeonggi"} component={MovingGyeonggi}>경기</Link>
                                <Link to={"/moving/incheon"} component={MovingIncheon}>인천</Link>
                                <Link to={"/moving/daejeon"} component={MovingDaejeon}>대전</Link>
                                <Link to={"/moving/gwangju"} component={MovingGwangju}>광주</Link>
                                <Link to={"/moving/daegu"} component={MovingDaegu}>대구</Link>
                                <Link to={"/moving/busan"} component={MovingBusan}>부산</Link>
                                <Link to={"/moving/ulsan"} component={MovingUlsan}>울산</Link>
                                <Link to={"/moving/chungbuk"} component={MovingChungbuk}>충북</Link>
                                <Link to={"/moving/chungnam"} component={MovingChungnam}>충남</Link>
                                <Link to={"/moving/jeonbuk"} component={MovingJeonbuk}>전북</Link>
                                <Link to={"/moving/jeonnam"} component={MovingJeonnam}>전남</Link>
                                <Link to={"/moving/gyeongbuk"} component={MovingGyeongbuk}>경북</Link>
                                <Link to={"/moving/gyeongnam"} component={MovingGyeongnam}>경남</Link>
                                <Link to={"/moving/gangwon"} component={MovingGangwon}>강원</Link>
                                <Link to={"/moving/jeju"} component={MovingJeju}>제주</Link>
                                <Link to={"/moving/sejong"} component={MovingSejong}>세종</Link>

                            </a>
                        </Switch>
                    </BrowserRouter>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingEndPoint;
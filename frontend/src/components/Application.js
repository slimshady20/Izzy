import React,{useState,useRef}from 'react';
import {Link} from 'react-router-dom'
import {SideBar} from "../commons";
import app from '../assets/img/app.png'
import {OverlayTrigger, Tooltip, Button, Modal} from 'react-bootstrap'
import '../assets/css/sb-admin-2.css'
import {MDBCol, MDBMask, MDBView} from "mdbreact";
import QRcode from "../assets/img/QRcode.png";

const Application = () => {
    const onClickShow=e=>{
        e.preventDefault()
        setShow(!show)
    }
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">Appication</h2><br/>
                        </div>
                    </div>
                    <div ref={target} onClick={() => setShow(!show)}>
                    <h3>이제 어플리케이션으로도 만나보세요!</h3>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">눌러주세요!</Tooltip>}>
                          <span className="d-inline-block">
                            <Button disabled style={{ pointerEvents: 'none' }}  onClick={onClickShow}>
                              <img src={app}
                                   width="350"
                                   height="350"
                              />
                              <Modal show={show} size={"sm"}
                                     onClick={onClickShow}
                                     onHide={()=>false}>
                        <img src={QRcode}/>
                    </Modal>
                            </Button>
                          </span>
                        </OverlayTrigger>

                </div>
                </div>
                {/* /#page-wrapper */}
            </div>
        </>
    );
};

export default Application;
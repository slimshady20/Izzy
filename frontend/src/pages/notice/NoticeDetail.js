import React from 'react';

import {SideBar} from "../../commons/index";
import corona from '../../assets/img/corona.png'

import '../../assets/css/sb-admin-2.css'

const Event = () => {
    return (
        <>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">자세히 보기</h2><br/>
                                <img
                                alt=""
                                src = {corona}
                                width={"100%"}
                                className="d-inline-block align-top"
                                    />
                        </div>
                    </div>

                </div>
                {/* /#page-wrapper */}
            </div>
        </>
    );
};

export default Event;
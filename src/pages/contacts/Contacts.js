import React from 'react';

import {SideBar} from "../../commons/index";
import logo from '../../assets/img/logo3.png'

import '../../assets/css/sb-admin-2.css'

const Contacts = () => {
    return (
        <>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">고객 지원</h2><br/>
                            <img
                                alt=""
                                src = {logo}
                                width="75"
                                height="75"
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

export default Contacts;
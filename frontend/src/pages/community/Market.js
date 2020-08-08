import React from 'react';

import {SideBar} from "../../commons/index";

import '../../assets/css/sb-admin-2.css'
import {Link} from "react-router-dom";
import {MDBBtn} from "mdbreact";

const Market = () => {
    return (
        <>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">중고 거래</h2><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                {/*<div className="panel-heading">
                                        <h3>후기</h3>
                                    </div>*/}
                                {/* /.panel-heading */}
                                <div className="panel-body">
                                    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Editor</th>
                                            <th>Date</th>
                                            <th>View</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="odd gradeX">
                                            <td><Link to={"/info"}>원형 식탁 판매합니다!</Link></td>
                                            <td>문강태</td>
                                            <td>2020/08/02</td>
                                            <td className="center">4</td>
                                        </tr>
                                        <tr className="even gradeC">
                                            <td>행거 구매합니다!</td>
                                            <td>고문영</td>
                                            <td>2020/08/01</td>
                                            <td className="center">5</td>
                                        </tr>
                                        <tr className="odd gradeA">
                                            <td><Link to={"info"}>접이식 의자 구매합니다.</Link></td>
                                            <td>문상태</td>
                                            <td>2020/08/01</td>
                                            <td className="center">5</td>
                                        </tr>
                                        <tr className="even gradeA">
                                            <td>장농 판매합니다.</td>
                                            <td>박규영</td>
                                            <td>2020/07/31</td>
                                            <td className="center">6</td>
                                        </tr>
                                        <tr className="odd gradeA">
                                            <td>컴퓨터 책상 판매합니다!</td>
                                            <td>강기둥</td>
                                            <td>2020/07/30</td>
                                            <td className="center">7</td>
                                        </tr>
                                        <tr className="even gradeA">
                                            <td>선풍기 구매합니다!</td>
                                            <td>2020/07/27</td>
                                            <td>장규리</td>
                                            <td className="center">6</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <Link to="/write"><MDBBtn className="btn blue-gradient">글쓰기</MDBBtn></Link>
                                </div>
                                {/* /.panel-body */}
                            </div>
                            {/* /.panel */}
                        </div>
                        {/* /.col-lg-12 */}
                    </div>
                </div>
                {/* /#page-wrapper */}
            </div>
        </>
    );
};

export default Market;
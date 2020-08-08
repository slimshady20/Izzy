import React from 'react';

import {SideBar} from "../../commons/index";

import '../../assets/css/sb-admin-2.css'
import {Link} from "react-router-dom";
import {MDBBtn} from "mdbreact";

const VideoCommunity = () => {
    return (
        <>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">내 방 의뢰</h2><br/>
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
                                            <td><Link to={"/info"}>견적 신청합니다.</Link></td>
                                            <td>김강문</td>
                                            <td>2020/08/02</td>
                                            <td className="center">4</td>
                                        </tr>
                                        <tr className="even gradeC">
                                            <td>저 이사하려는데요...</td>
                                            <td>고문영</td>
                                            <td>2020/08/01</td>
                                            <td className="center">5</td>
                                        </tr>
                                        <tr className="odd gradeA">
                                            <td><Link to={"info"}>견적올립니다.</Link></td>
                                            <td>박문식</td>
                                            <td>2020/08/01</td>
                                            <td className="center">5</td>
                                        </tr>
                                        <tr className="even gradeA">
                                            <td>원룸인데요</td>
                                            <td>김수미</td>
                                            <td>2020/07/31</td>
                                            <td className="center">6</td>
                                        </tr>
                                        <tr className="odd gradeA">
                                            <td>10일내로  이사 가능한가요?</td>
                                            <td>사자후</td>
                                            <td>2020/07/30</td>
                                            <td className="center">7</td>
                                        </tr>
                                        <tr className="even gradeA">
                                            <td>짐이 별로 없는데,,,</td>
                                            <td>2020/07/27</td>
                                            <td>장규리</td>
                                            <td className="center">6</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <Link to="/estimate"><MDBBtn className="btn blue-gradient">글쓰기</MDBBtn></Link>
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

export default VideoCommunity;
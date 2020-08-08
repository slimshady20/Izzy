import React from 'react';

import {SideBar} from "../../commons/index";

import '../../assets/css/sb-admin-2.css'
import {MDBBtn} from "mdbreact";
import {Link} from "react-router-dom";

const Review = () => {
    return (
        <>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">후기</h2><br/>
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
                                            <td>한달만에 남기는 이사 후기 입니다.</td>
                                            <td>송영달</td>
                                            <td>2020/07/31</td>
                                            <td className="center">4</td>
                                        </tr>
                                        <tr className="even gradeC">
                                            <td>사당 후기 올려요!!</td>
                                            <td>차화연</td>
                                            <td>2020/07/30</td>
                                            <td className="center">5</td>
                                        </tr>
                                        <tr className="odd gradeA">
                                            <td>인천 후기입니다.</td>
                                            <td>김보연</td>
                                            <td>2020/07/30</td>
                                            <td className="center">5</td>
                                        </tr>
                                        <tr className="even gradeA">
                                            <td>인천서구점 후기남깁니다~♡</td>
                                            <td>강초연</td>
                                            <td>2020/07/29</td>
                                            <td className="center">6</td>
                                        </tr>
                                        <tr className="odd gradeA">
                                            <td>감사한 이사후기!</td>
                                            <td>송나희</td>
                                            <td>2020/07/28</td>
                                            <td className="center">7</td>
                                        </tr>
                                        <tr className="even gradeA">
                                            <td>꼼꼼한 이사 청소 했어요! 감사합니다!</td>
                                            <td>윤규진</td>
                                            <td>2020/07/24</td>
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

export default Review;
import React from 'react';

import '../../assets/css/sb-admin-2.css'

const Admin = () => {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas">
                <ul className="nav">
                    <li className="nav-item nav-category"><h1>관리자 페이지</h1></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">사용자 관리</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">주문 관리</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/charts">
                            <span className="menu-title">통 계</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">일정 관리</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">환경 설정</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">사용자 관리</h2><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Reg_Date</th>
                                            <th>state</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="odd gradeX">
                                            <td>kaulk</td>
                                            <td>김가을</td>
                                            <td>2018/02/01</td>
                                            <td>온라인</td>
                                        </tr>
                                        <tr className="even gradeC">
                                            <td>somunh</td>
                                            <td>소문혁</td>
                                            <td>2020/04/05</td>
                                            <td>오프라인</td>
                                        </tr>
                                        <tr className="even gradeC">
                                            <td>byuuun</td>
                                            <td>변장원</td>
                                            <td>2018/01/01</td>
                                            <td>오프라인</td>
                                        </tr>
                                        <tr className="even gradeC">
                                            <td>seoded</td>
                                            <td>서동석</td>
                                            <td>2020/08/01</td>
                                            <td>오프라인</td>
                                        </tr>
                                        <tr className="even gradeC">
                                            <td>yongt</td>
                                            <td>김용태</td>
                                            <td>2019/09/01</td>
                                            <td>오프라인</td>
                                        </tr>
                                        <tr className="even gradeC">
                                            <td>gwadok</td>
                                            <td>주광옥</td>
                                            <td>2019/12/11</td>
                                            <td>온라인</td>
                                        </tr>
                                        </tbody>
                                    </table>
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

export default Admin;
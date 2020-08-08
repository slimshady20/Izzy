import React from 'react';
import {Link} from 'react-router-dom'
import {SideBar} from "../../commons";

import '../../assets/css/sb-admin-2.css'

const Market = () => {
    return (
        <>
            <SideBar/>
                    <div id="wrapper">
                    <div id="page-wrapper">
                    <div className="row">
                    <div className="col-lg-12"><br/>
                    <h2 className="page-header">공지 사항</h2><br/>
                </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="panel panel-default">

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
                       <td><Link to="/noticedetail">
                            코로나 예방 수칙</Link></td>
                            <td>정혜원 매니저</td>
                            <td>2020/08/03</td>
                      <td className="center">4</td>
                    </tr>
                    <tr className="even gradeC">
                    <td>고객 이사 1000건 달성</td>
                    <td>양정욱 매니저</td>
                <td>2020/06/18</td>
                <td className="center">5</td>
                    </tr>
                    <tr className="odd gradeA">
                    <td>설 연휴 안내</td>
                    <td>이호섭 매니저</td>
                    <td>2020/01/10</td>
                <td className="center">5</td>
                    </tr>
                    <tr className="even gradeA">
                        <td>한 해를 보내며</td>
                        <td>이호섭 매니저</td>
                        <td>2019/12/31</td>
                        <td className="center">6</td>
                    </tr>
                    <tr className="odd gradeA">
                        <td>추석 연휴 안내</td>
                        <td>양정욱 매니저</td>
                        <td>2019/10/01</td>
                        <td className="center">7</td>
                    </tr>
                    <tr className="even gradeA">
                       <td>고객 이사 500건 이벤트</td>
                       <td>정혜원 매니저</td>
                       <td>20/08/08</td>
                       <td className="center">6</td>
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

export default Market;
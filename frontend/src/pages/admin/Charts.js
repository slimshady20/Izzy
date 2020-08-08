import React from 'react';
import {Bar} from 'react-chartjs-2';

import '../../assets/css/sb-admin-2.css'

const Charts = () => {
    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May', 'June','July',"August"],
        datasets: [
            {
                label: '방문',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56, 40, 44, 12]
            }
        ]
    }

    return (
        <>
            <nav className="sidebar sidebar-offcanvas">
                <ul className="nav">
                    <li className="nav-item nav-category"><h1>Dashboard</h1></li>
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
                        <a className="nav-link" href="#">
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
                            <h2 className="page-header">통계</h2><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div>
                                    <Bar
                                        data={state}
                                        options={{
                                            title:{
                                                display:true,
                                                text:'방문자 통계 현황',
                                                fontSize:20
                                            },
                                            legend:{
                                                display:true,
                                                position:'right'
                                            }
                                        }}
                                    />
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

export default Charts;
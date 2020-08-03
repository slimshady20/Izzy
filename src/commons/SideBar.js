import React from 'react';
import '../assets/css/main.css'
import logo from "../assets/img/logo3.png";
import {Navbar} from "react-bootstrap";

const SideBar = () => {
    return (
        <>
        <nav className="sidebar sidebar-offcanvas">
            <ul className="nav">
                <li className="nav-item nav-category"><h1>게시판</h1></li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">전체 글 보기</span>
                    </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                        <span className="menu-title">두번째</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">세번째</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">네번째</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">다섯째</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">여섯째</span>
                    </a>
                </li>
            </ul>
        </nav>
        </>
    );
};

export default SideBar;
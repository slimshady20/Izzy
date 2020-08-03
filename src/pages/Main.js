import React from 'react';
import '../assets/css/main.css'
import ReactPlayer from "react-player";

const Main = () => {

    return (
        <div>
            <main className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">이사 견적,</div>
                        <div className="intro-lead-in">내 방에서 알아보세요!</div>
                        <br/><br/>
                        <div className="intro-heading text-uppercase">방문 없이 견적짜는</div><br/><br/>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="../components/Estimate.js">이사하러 가기
                        </a>
                    </div>
                </div>
            </main>
            <div className="video-bg">
            <ReactPlayer
                className="video"
                url = 'https://www.youtube.com/watch?v=fKBYdv4s20k'
                width = '900px'
                height = '650px'
                playing controls/>
            </div>
        </div>
    );
};

export default Main;
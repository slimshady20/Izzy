import React from 'react';
import '../assets/css/main.css'
import ReactPlayer from "react-player";
import img from '../assets/img/img.gif'
import {CardDeck,Card} from 'react-bootstrap'
import {Weather} from './index'
import {MDBBtn} from 'mdbreact'
import {Link} from 'react-router-dom'
const Main = () => {

    return (
        <>
            <main className="masthead">
                <div className="intro-text">
                    <div className="intro-lead-in">이사 견적,</div>
                    <div className="intro-lead-in">내 방에서 알아보세요!</div>
                </div>

                <Weather/>
            </main>
            <div className="video-bg">
                <ReactPlayer
                    className="video"
                    url = 'https://www.youtube.com/watch?v=fKBYdv4s20k'
                    width = '900px'
                    height = '650px'
                    playing controls/>
            </div>
            <main className="masthead">
                <div className="intro-text">
                    <div className="intro-heading text-uppercase">방문 없이 견적짜는</div><br/>
                    <MDBBtn color="amber" className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" ><Link to={"/type"}>이사하러 가기</Link>
                    </MDBBtn>
                </div>
            </main>
            <main className="masthead">
                <div className="intro-text">
                    <div className="intro-heading text-uppercase">후기 및 사례</div>
                </div>
                <CardDeck className="mainCard" >
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>정혜원 님</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </main>
        </>
    );
};

export default Main;
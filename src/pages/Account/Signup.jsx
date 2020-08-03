import React, {useState} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBModalFooter} from "mdbreact";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {Postcode} from '../Account'

const Signup = () => {
    const[userId,setUserId]=useState("")
    const[password,setPassword]=useState("")
    const[name,setName]= useState("")
    const[addr,setAddr]=useState("")
    const[email,setEmail]=useState("")


    return (
        <div  style={{padding:'6rem', margin:'0 auto', maxWidth:800, maxHeight: 1000}}>
            <section>
                <div className="container" style={{maxHeight: 1000}}>
                    <div className="row">
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody className="mx-4">
                                    <div className="text-center">
                                        <h3 className="dark-grey-text mb-5">
                                            <strong>회원가입</strong>
                                        </h3>
                                    </div>
                                    <MDBInput
                                        label="아이디를 입력해주세요."
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={userId}
                                        onChange={e=>setUserId(e.target.value)}
                                    />
                                    <MDBInput
                                        label="비밀번호를 입력해주세요."
                                        group
                                        type="password"
                                        validate
                                        containerClass="mb-0"
                                        value={password}
                                        onChange={e=>setPassword(e.target.value)}
                                    />
                                    <MDBInput
                                        label="이름을 입력해주세요."
                                        group
                                        type="text"
                                        validate
                                        containerClass="mb-0"
                                        value={name}
                                        onChange={e=>setName(e.target.value)}
                                    />
                                    <MDBInput
                                        label="주소를 입력해주세요."
                                        group
                                        type="text"
                                        validate
                                        containerClass="mb-0"
                                        value={addr}
                                        onChange={e=>setAddr(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <Postcode onSelectedAddr={setAddr} />
                                    </div>
                                    <MDBInput
                                        label="이메일 주소를 입력해주세요"
                                        group
                                        type="text"
                                        validate
                                        containerClass="mb-0"
                                        value={email}
                                        onChange={e=>setEmail(e.target.value)}

                                    />

                                    <div className="text-center mb-3">
                                        <MDBBtn
                                            type="button"
                                            gradient="blue"
                                            rounded
                                            className="btn-block z-depth-1a"
                                        >
                                            회원가입 하기
                                        </MDBBtn>
                                    </div>
                                    <div className="row my-3 d-flex justify-content-center">
                                    </div>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Not a member?
                                        <Link to ="/signup"className="blue-text ml-1">

                                            Sign Up
                                        </Link>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;
import React, {useState} from "react";
import {Card} from 'react-bootstrap'
import {MDBCardBody} from "mdbreact";
import {Link} from 'react-router-dom'
import {SideBar} from "../../commons";

const mypageTypes = {REQUEST: "mypage/REQUEST"}
const mypageRequest = action => ({type: mypageTypes.REQUEST, payload: action.payload})
export const mypageReducer = (state = {}, action) => {
    switch (action.type) {
        case mypageTypes.REQUEST:
            return {...state, payload: action.payload}
        default:
            return state
    }
}

const MyInfo = ({history}) => {
    const [name, setName] = useState("김수미")
    const [userId, setUserId] = useState("id")
    const [userPw, setUserPw] = useState("password")
    const [address, setAddress] = useState("인천광역시 연수구 옥련동")

    const [ssn, setSsn] = useState("900000-0000000")
    const [phone, setPhone] = useState("010-0000-0000")
    const [email, setEmail] = useState("default")

    return(
    <>

        <Card border="primary" style={{width: '80rem'}}>
            <Card.Header><h1>개인 정보 수정</h1></Card.Header>
            <Card.Body>

                <form id="signupform" style={{textAlign: "right"}}>
                    <div className="row form-group">
                        <label className="col-sm-2">이름</label>
                        <span style={{paddingLeft: 15}}>{name}</span>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2">아이디</label>
                        <span style={{paddingLeft: 15}}>{userId}</span>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">비밀번호</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" defaultValue={userPw}
                                   onChange={e => setUserPw(e.target.value)}/></div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">주소</label>
                        <div className="col-sm-8">
                            <input className="form-control" defaultValue={address}
                                   onChange={e => setAddress(e.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-outline-primary user-width100">변경
                        </button>
                    </div>
                    <div className="row form-group">

                        <span style={{margin: -8}}></span>
                        <label className="col-sm-2 col-form-label">이메일</label>
                        <div className="col-sm-4">
                            <input className="form-control" defaultValue={email}/>
                        </div>

                        <label className="col-sm-1 col-form-label">@</label>
                        <span style={{margin: 8}}></span>
                        <select className="col-sm-3 form-control">
                            <option value="1">hanmail.net</option>
                            <option value="2">naver.com</option>
                            <option value="3">gmail.com</option>
                        </select>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">주민번호</label>
                        <div className="col-sm-8">
                            <input className="form-control" defaultValue={ssn} onChange={e => setSsn(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">휴대폰번호입력</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" defaultValue={phone}
                                   onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">프로필</label>
                        <div className="col-sm-8">
                            <input type="file" className="form-control-file"/>
                            <small className="form-text text-muted font_Nanum_Gothic" style={{textAlign: "left"}}>
                                프로필 사진을 첨부하여 주십시오
                            </small>
                        </div>
                    </div>
                    <Link to={"/"}>
                        <div className="text-center">
                            <button type="button" className="btn mr-3 btn-primary user-width100">
                                변경하기
                            </button>
                            <button type="button" className="btn btn-outline-primary user-width90"
                                    onClick={() => history.goBack()}>
                                취소
                            </button>

                        </div>
                    </Link>
                </form>
            </Card.Body>
        </Card>
    </>
    )
};
export default MyInfo
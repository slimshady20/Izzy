import React, {useState} from 'react';

import {MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBInput,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact'
import { Upload, message, Button } from 'antd';
import QRcode from '../assets/img/QRcode.png'
import {Modal} from "react-bootstrap";
import {SideBar} from "../commons";
const PrivateOptions=[
    {value:0,label:"Private"},
    {value:1,label:"Public"},
]
const CategoryOptions=[
    {value:0,label:"안방"},
    {value:1,label:"작은 방"},
    {value:2,label:"기타 방"},
    {value:3,label:"거실"},
    {value:4,label:"부엌"},
    {value:5,label:"화장실"},
]
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const VideoUploadPage = () => {
    const [videoTitle,setVideoTitle]=useState("")
    const [description,setDescription]=useState("")
    const [privates,setPrivates]=useState(0)
    const [category,setCategory]=useState("영상")
    const [show,setShow]=useState(false)
    const onClickShow=e=>{
        e.preventDefault()
        setShow(!show)
    }
    const onChangeTitle=e=>{
        setVideoTitle(e.currentTarget.value)
    }
    const onChangeDescription=e=>{
        setDescription(e.currentTarget.value)
    }
    const onChangePrivates=e=>{
        setPrivates(e.currentTarget.value)
    }
    const onChangeCategory=e=>{
        setCategory(e.currentTarget.value)
    }
    return (
        <>
            <SideBar/>
        <div style={{maxWidth:'700px',margin:'2rem auto'}}>
            <div style={{textAlign:'center',marginButton:'2rem'}}>
                <h1>2단계 .비디오 올리기</h1>
            </div>
            <div>
                <MDBCol>
                    <MDBCard style={{ width: "100%" ,height:"100px"}}>
                        <MDBCardBody>
                            <Upload {...props}>
                                <Button type={"file"}>
                                    Click to Upload
                                </Button>
                            </Upload>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </div>
            <div onSubmit>
                <br/>
                <br/>
                <MDBInput label={"제목"}  onChange={onChangeTitle} value={videoTitle} placeholder={"   원룸입니다."}/>
                <br/>
                <br/>
                <MDBInput label={"방설명"} onChange={onChangeDescription} value={description} placeholder={"   집안에 짐이 많고..."}/>
                <MDBDropdown>
                    <MDBDropdownToggle nav caret color="success">
                        공개여부
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="success">
                        <MDBDropdownItem>비공개</MDBDropdownItem>
                        <MDBDropdownItem>공개</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                    <MDBDropdownToggle nav caret color="success">
                        방구분
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="success">
                        <MDBDropdownItem>안방</MDBDropdownItem>
                        <MDBDropdownItem>거실</MDBDropdownItem>
                        <MDBDropdownItem>작은방</MDBDropdownItem>
                        <MDBDropdownItem>화장실</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
              {/*  <label>공개여부</label>
                <select onChange={onChangePrivates}>
                    {PrivateOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>*/}

             {/*   <a>방 구분</a>
                <select onChange={onChangeCategory}>
                    {CategoryOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>*/}
                <br/>
                <br/>
                <Button  onClick={onClickShow}>
                    어플다운받기
                    <Modal show={show} size={"sm"}
                    onClick={onClickShow}
                    onHide={()=>false}>
                        <img src={QRcode}/>
                    </Modal>
                </Button>
                <MDBBtn type={"primary"} onClick href={"/videotest"}>
                    submit
                </MDBBtn>
            </div>
        </div>
            </>
    );
};

export default VideoUploadPage;
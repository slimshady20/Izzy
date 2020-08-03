import React, {useState} from 'react';
import Dropzone from "react-dropzone";
import {MDBBtn, MDBIcon, MDBTypography} from 'mdbreact'


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

const VideoUploadPage = () => {
    const [videoTitle,setVideoTitle]=useState("")
    const [description,setDescription]=useState("")
    const [privates,setPrivates]=useState(0)
    const [category,setCategory]=useState("영상")
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
        <div style={{maxWidth:'700px',margin:'2rem auto'}}>
            <div style={{textAlign:'center',marginButton:'2rem'}}>
                <MDBTypography>
                    업로드 비디오
                </MDBTypography>
            </div>
            <div onSubmit>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    {/*드랍존*/}
                    <input type="file" className="form-control-file"/>
                 {/*   <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()}  size={"100px"} />
                                    <MDBIcon icon={"folder-plus"} size={"10x"}/>
                                </div>
                            </section>
                        )}
                    </Dropzone>*/}
                    {/*썸네일존*/}
                    <div>
                        <img src alt/>
                    </div>
                </div>
                <br/>
                <br/>
                <label>타이틀</label>
                <input onChange={onChangeTitle} value={videoTitle}/>
                <br/>
                <br/>
                <textarea onChange={onChangeDescription} value={description}/>
                <br/>
                <br/>
                <p>공개여부</p>
                <select onChange={onChangePrivates}>
                    {PrivateOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <a>방 구분</a>
                <select onChange={onChangeCategory}>
                    {CategoryOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <MDBBtn type={"primary"} onClick>
                    submit
                </MDBBtn>
            </div>
        </div>
    );
};

export default VideoUploadPage;
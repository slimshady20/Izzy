import React from 'react';
import {SideBar} from '../commons/index'
import '../assets/css/sb-admin-2.css'

const Write = () => {
    return (
            <>
                    <SideBar/>
                    <div id="wrapper">
                        <div id="page-wrapper">
                            <div className="row">
                                <div className="col-lg-12"><br/>
                                    <h2 className="page-header">커뮤니티</h2><br/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="panel panel-default">
                                        {/*<div className="panel-heading">
                                        <h3>후기</h3>
                                    </div>*/}
                                        {/* /.panel-heading */}
                                        <form method = "post">
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">제목</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" name="title" placeholder="제목을 작성해주세요." />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">작성자</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" name="crea_id" placeholder="이름을 적어주세요." />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">내용</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" name="contents" rows={10} defaultValue={""} />
                                            </div>
                                            <button type="submit" className="btn btn-info">등록하기</button>
                                            <button type="button" className="btn btn-secondary">목록으로</button>
                                        </form>
                                        </div>
                                        {/* /.panel-body */}
                                    </div>
                                    {/* /.panel */}
                                </div>
                                {/* /.col-lg-12 */}
                            </div>
                        </div>
                        {/* /#page-wrapper */}
        </>
    );
};

export default Write;
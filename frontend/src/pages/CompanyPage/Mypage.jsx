import React from 'react';
import {Link} from "react-router-dom";

const Mypage = () => {
    return (
        <div style={{padding:"4rem"}}>
            <section className="page-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">IZZI 업체의 My Page</h2>
                            <h3 className="section-heading">
                                사업장 IZZI 님께서는 최근 매출 100원입니다.<br/> 36개월동안 매출 금액( 100,000원) </h3><br/><br/><br/>
                        </div>
                    </div>
                    <div className="row text-center">

                        <div className="col-md-7">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
                            <Link to="/order"> <h2 className="service-heading">이사 접수</h2></Link>
                            <h2>4건</h2>
                        </div>
                        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
                            <Link to="/statistics"><h2 className="service-heading">통계</h2></Link>
                            <p className="text-muted">Lit</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Mypage
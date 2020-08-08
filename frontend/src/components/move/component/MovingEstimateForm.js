import React,{useState} from 'react';
import {Card,Form,Button,Col,FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {SideBar} from "../../../commons";

function MovingEstimateForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
        <div>

            <Card border="success" style={{ width: '110rem' }}>

                <Card.Header> <Card.Title>1단계. 이사견적 신청서</Card.Title></Card.Header>
                <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>신청인 성함</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="name"
                    />
                    <Form.Control.Feedback type="invalid">
                       입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>신청인 연락처</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Phone Number"
                    />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>


                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>출발지 정보</Form.Label>
                    <Form.Control type="text" placeholder="인천 연수구" required />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>상세주소</Form.Label>
                    <Form.Control type="text" placeholder="상세주소" required />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>도착지 정보</Form.Label>
                    <Form.Control type="text" placeholder="서울 영등포" required />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>상세주소</Form.Label>
                    <Form.Control type="text" placeholder="상세주소" required />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
            <Form>
                <Card border="light" style={{ width: '70rem' }}>
                <Card.Header><Card.Title>이사일은 정하셨나요?</Card.Title></Card.Header>
                {['movingDate'].map((type) => (
                    <div key={`custom-${type}`} className="mb-3">
                        <Form.Check
                            custom
                            type={type}
                            id={`custom-${type}`}
                            label={`아니요,아직 안정했어요`}
                        />

                            <Form.Check
                                custom
                                type={type}
                                id={`custom-${type}`}
                                label={`네 정했습니다.`}
                            />
                            <FormControl type={"date"}placeholder="Phone Number" aria-label="네정했습니다" />

                    </div>
                ))}
                </Card>
                <Card border="light" style={{ width: '70rem' }}>
                    <Card.Header><Card.Title>이사 유형</Card.Title></Card.Header>
                    <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                        <Form.Control as="select" size="lg" custom>
                            <option>우리집이사</option>
                            <option>사무실이사</option>
                            <option>보관이사</option>

                        </Form.Control>
                    </Form.Group>
                </Card>


            </Form>
            <div className="mb-3">
            </div>
            <Form.Group>
                <Form.Check
                    required
                    label="개인정보 제공에 동의합니다."
                    feedback="You must agree before submitting."
                />
            </Form.Group>
            <Link to={"/video"}>  <Button type="submit">Submit form</Button></Link>
        </Form>
                </Card.Body>
            </Card>
        </div>
            </>
    );
}

export default MovingEstimateForm;
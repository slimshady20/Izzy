import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBInput,
	MDBModalFooter,
} from 'mdbreact';
import {Link} from 'react-router-dom';
const FindId = () => {
	const [userId, setUserId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [show, setShow] = useState(false);
	const [joinDate, setJoinDate] = useState('');

	const handleClose = () => setShow(false);
	const handleCheck = e => {
		e.preventDefault();
		handleClose();
	};
	const handleFindId = e => {
		e.preventDefault();
		axios
			.get(`http://localhost:8080/users/findId?name=${name}&email=${email}`)
			.then(response => {
				setUserId(response.data.userId);
				setJoinDate(response.data.joinDate);
				console.log(response);
				setShow(!show);
			})
			.catch(error => {
				alert('아이디나 이메일을 다시 입력해주세요');
				throw error;
			});
	};
	return (
		<div style={{padding: '6rem', margin: '0 auto', maxWidth: 800}}>
			<section>
				<div className='container'>
					<div className='row'>
						<MDBCol>
							<MDBCard>
								<MDBCardBody className='mx-4'>
									<div className='text-center'>
										<h3 className='dark-grey-text mb-5'>
											<strong>회원 정보에 등록된 이름,이메일로 찾기</strong>
										</h3>
									</div>
									<MDBInput
										label='이름을 입력해주세요'
										group
										type='text'
										validate
										error='wrong'
										success='right'
										value={name}
										onChange={e => setName(e.target.value)}
									/>
									<MDBInput
										label='이메일을 입력해주세요'
										group
										type='email'
										validate
										containerClass='mb-0'
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
									<div className='text-center mb-3'>
										<Link to='/mypage'>
											<MDBBtn
												type='submit'
												onClick={handleFindId}
												gradient='blue'
												rounded
												className='btn-block z-depth-1a'
											>
												아이디 찾기
											</MDBBtn>
										</Link>
									</div>
								</MDBCardBody>
								<MDBModalFooter className='mx-5 pt-3 mb-1'>
									<p className='font-small grey-text d-flex justify-content-end'>
										비밀번호를 잊으셨나요?
										<Link to='/findPassword' className='blue-text ml-1'>
											비밀번호로 찾기
										</Link>
									</p>
								</MDBModalFooter>
							</MDBCard>
						</MDBCol>
					</div>
				</div>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>아이디 찾기 결과</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<div>
								<p>아이디</p>
								<p>{userId}</p>
								<p>가입일</p>
								<p>{joinDate}</p>
							</div>
							<button
								className='btn btn-primary btn-block mb-2 mt-2'
								onClick={handleCheck}
							>
								확인
							</button>
						</div>
					</Modal.Body>
				</Modal>
			</section>
		</div>
	);
};

export default FindId;

/*<div>
					<p>이름</p>
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div>
					<p className='inline-block-label'>이메일</p>
					<input
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<button
					className='btn btn-primary btn-block'
					type='submit'
					onClick={handleFindId}
				>
					확인
				</button>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>아이디 찾기 결과</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div>
							<p>아이디</p>
							<p>{userId}</p>
							<p>가입일</p>
							<p>{joinDate}</p>
						</div>
						<button
							className='btn btn-primary btn-block mb-2 mt-2'
							onClick={handleCheck}
						>
							확인
						</button>
					</div>
				</Modal.Body>
			</Modal>*/

import React, {useState} from 'react';
import {useHistory} from 'react-router';
import axios from 'axios';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBInput} from 'mdbreact';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
const FindPassword = () => {
	const [name, setName] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [id, setId] = useState('');
	const [userId, setUserId] = useState('');
	const [email, setEmail] = useState('');
	const [show, setShow] = useState('');
	const history = useHistory();

	const handleClose = () => {
		setShow(false);
	};
	const handleResetPassword = e => {
		e.preventDefault();
		axios
			.get(
				`http://localhost:8080/users/findPassword?userId=${userId}&name=${name}&email=${email}`,
			)
			.then(response => {
				setId(response.data.id);
				console.log(response.data.id);
				setShow(true);
			})
			.catch(error => {
				throw error;
			});
	};

	const handleSaveNewPassword = e => {
		e.preventDefault();
		if (newPassword === confirmNewPassword) {
			axios
				.patch(`http://localhost:8080/users/${id}`, {password: newPassword})
				.then(() => {
					alert('비밀번호가 재설정되었습니다. 다시 로그인 해주세요');
					history.push('/login');
				})
				.catch(error => {
					throw error;
				});
		} else {
			alert('비밀번호가 일치하지 않습니다.');
			setNewPassword('');
		}
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
											<strong>비밀번호 찾기</strong>
										</h3>
									</div>
									<MDBInput
										label='아이디를 입력해주세요'
										group
										type='text'
										validate
										error='wrong'
										success='right'
										value={userId}
										onChange={e => setUserId(e.target.value)}
									/>
									<MDBInput
										label='이름을 입력해주세요'
										group
										type='text'
										validate
										containerClass='mb-0'
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
									<p className='font-small blue-text d-flex justify-content-end pb-3'>
										<Link to='/findId'>
											<a href='#!' className='blue-text ml-1'>
												아이디 찾기
											</a>
										</Link>
									</p>
									<div className='text-center mb-3'>
										<MDBBtn
											type='button'
											gradient='blue'
											rounded
											className='btn-block z-depth-1a'
											onClick={handleResetPassword}
										>
											확인
										</MDBBtn>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</div>
				</div>
			</section>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>비밀번호 재설정하기</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div>
							<p className='change-password-modal-p'>새 비밀번호</p>
							<input
								type='password'
								value={newPassword}
								onChange={e => setNewPassword(e.target.value)}
							/>
						</div>
						<div>
							<p className='change-password-modal-p'>새 비밀번호 확인</p>
							<input
								type='password'
								value={confirmNewPassword}
								onChange={e => setConfirmNewPassword(e.target.value)}
							/>
						</div>
						<button
							className='btn btn-primary btn-block mb-2 mt-2'
							onClick={handleSaveNewPassword}
						>
							비밀번호 재설정
						</button>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default FindPassword;

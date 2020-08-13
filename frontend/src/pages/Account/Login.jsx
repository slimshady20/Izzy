import React, {useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBInput,
	MDBModalFooter,
} from 'mdbreact';
import axios from 'axios';
const Login = () => {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const handleSubmit = e => {
		e.preventDefault();
		const userJson = {
			userId: userId,
			password: password,
		};
		axios
			.post(`http://localhost:8080/users/login/`, userJson)
			.then(response => {
				console.log(response);
				alert('로그인하였습니다.');
				sessionStorage.setItem('userData', JSON.stringify(response.data));
				if (response.status === 200) history.push('/');
				window.location.reload();
			})
			.catch(error => {
				alert('아이디 혹은 비밀번호가 틀렸습니다.');
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
											<strong>Login</strong>
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
										label='비밀번호를 입력해주세요'
										group
										type='password'
										validate
										containerClass='mb-0'
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
									<p className='font-small blue-text d-flex justify-content-end pb-3'>
										Forgot
										<a href='#!' className='blue-text ml-1'>
											Password?
										</a>
									</p>
									<div className='text-center mb-3'>
										<MDBBtn
											type='button'
											gradient='blue'
											rounded
											className='btn-block z-depth-1a'
											onClick={handleSubmit}
										>
											Login
										</MDBBtn>
									</div>
									<span>
										<Link to='/findId'>아이디 찾기</Link>
										<br />
										<Link to='/findPassword'>비밀번호 찾기</Link>
									</span>
								</MDBCardBody>
								<MDBModalFooter className='mx-5 pt-3 mb-1'>
									<p className='font-small grey-text d-flex justify-content-end'>
										회원이 아니세요?
										<Link to='/signup' className='blue-text ml-1'>
											회원가입하기
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
export default Login;

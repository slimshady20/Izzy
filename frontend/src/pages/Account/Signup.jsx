import React, {useState} from 'react';
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBInput,
	MDBModalFooter,
} from 'mdbreact';
import {Link} from 'react-router-dom';
import {Postcode} from './';
import axios from 'axios';

const Signup = () => {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [addr, setAddr] = useState('');
	const [optionalAddr, setOptionalAddr] = useState('');
	const [email, setEmail] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [gender, setGender] = useState('');

	const handleIdCheck = e => {
		e.preventDefault();
		axios
			.get(`http://localhost:8080/users/checkId/${userId}`)
			.then(response => {
				alert('이미 존재하는 아이디입니다.');
				setUserId('');
			})
			.catch(error => {
				alert('생성 가능한 아이디입니다.');
			});
	};

	const handleSubmit = e => {
		e.preventDefault();
		alert('회원가입 버튼 클릭');
		const userJson = {
			userId: userId,
			password: password,
			birthDate: birthDate,
			gender: gender,
			phoneNumber: phoneNumber,
			name: name,
			address: addr,
			optionalAddr: optionalAddr,
			email: email,
		};

		axios
			.post(`http://localhost:8080/users/signUp`, userJson)
			.then(response => {
				alert('성공');
			})
			.catch(error => {
				alert('실패');
				throw error;
			});
	};
	return (
		<form
			style={{
				padding: '6rem',
				margin: '0 auto',
				maxWidth: 800,
				maxHeight: 1000,
			}}
		>
			<section>
				<div className='container' style={{maxHeight: 1000}}>
					<div className='row'>
						<MDBCol>
							<MDBCard>
								<MDBCardBody className='mx-4'>
									<div className='text-center'>
										<h3 className='dark-grey-text mb-5'>
											<strong>회원가입</strong>
										</h3>
									</div>
									<MDBInput
										label='아이디를 입력해주세요.'
										group
										type='text'
										validate
										value={userId}
										onChange={e => setUserId(e.target.value)}
									/>
									<div>
										<MDBBtn
											type='submit'
											onClick={handleIdCheck}
											color='primary'
										>
											아이디 중복 체크
										</MDBBtn>
									</div>
									<MDBInput
										label='비밀번호를 입력해주세요.'
										group
										type='password'
										validate
										containerClass='mb-0'
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
									<MDBInput
										label='이름을 입력해주세요.'
										group
										type='text'
										validate
										containerClass='mb-0'
										value={name}
										onChange={e => setName(e.target.value)}
									/>
									<MDBInput
										label='생년월일을 입력해주세요.'
										group
										type='date'
										validate
										containerClass='mb-0'
										value={birthDate}
										onChange={e => setBirthDate(e.target.value)}
									/>
									<p>성별</p>
									<div className='input-group'>
										<select
											className='custom-select'
											required
											value={gender}
											onChange={e => setGender(e.target.value)}
										>
											<option value=''>선택</option>
											<option value='F'>여자</option>
											<option value='M'>남자</option>
										</select>
									</div>
									<MDBInput
										label='전화번호를 입력해주세요.'
										group
										type='text'
										validate
										containerClass='mb-0'
										value={phoneNumber}
										onChange={e => setPhoneNumber(e.target.value)}
									/>
									<MDBInput
										label='이메일 주소를 입력해주세요.'
										group
										type='email'
										validate
										containerClass='mb-0'
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
									<MDBInput
										label='주소를 입력해주세요.'
										group
										type='text'
										validate
										containerClass='mb-0'
										value={addr}
										onChange={e => setAddr(e.target.value)}
									/>
									<div className='input-group-append'>
										<Postcode onSelectedAddr={setAddr} />
									</div>
									<MDBInput
										label='상세 주소를 입력해주세요'
										group
										type='text'
										validate
										containerClass='mb-0'
										value={optionalAddr}
										onChange={e => setOptionalAddr(e.target.value)}
									/>

									<div className='text-center mb-3'>
										<MDBBtn
											type='submit'
											gradient='blue'
											rounded
											className='btn-block z-depth-1a'
											onClick={handleSubmit}
										>
											회원가입 하기
										</MDBBtn>
									</div>

									<div className='row my-3 d-flex justify-content-center'></div>
								</MDBCardBody>
								<MDBModalFooter className='mx-5 pt-3 mb-1'>
									<p className='font-small grey-text d-flex justify-content-end'>
										이미 회원이세요?
										<Link to='/login' className='blue-text ml-1'>
											로그인 하기
										</Link>
									</p>
								</MDBModalFooter>
							</MDBCard>
						</MDBCol>
					</div>
				</div>
			</section>
		</form>
	);
};

export default Signup;

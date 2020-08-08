import React from 'react';

import {Link} from 'react-router-dom';
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBInput,
	MDBModalFooter,
} from 'mdbreact';

const Login = () => {
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
										label='Your ID'
										group
										type='text'
										validate
										error='wrong'
										success='right'
									/>
									<MDBInput
										label='Your password'
										group
										type='password'
										validate
										containerClass='mb-0'
									/>
									<p className='font-small blue-text d-flex justify-content-end pb-3'>
										Forgot
										<a href='#!' className='blue-text ml-1'>
											Password?
										</a>
									</p>
									<div className='text-center mb-3'>
										<Link to='/mypage'>
											<MDBBtn
												type='button'
												gradient='blue'
												rounded
												className='btn-block z-depth-1a'
											>
												Login
											</MDBBtn>
										</Link>
									</div>
								</MDBCardBody>
								<MDBModalFooter className='mx-5 pt-3 mb-1'>
									<p className='font-small grey-text d-flex justify-content-end'>
										회원이 아니세요?
										<Link
											to='/signup'
											className='blue-text ml-1'
										>
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

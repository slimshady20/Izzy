import React from 'react';

const Footer = () => {
    return (
		<>
			<footer className='footer'>
				<div className='container-fluid clearfix'>
					<span>
						Copyright © IZZI 2020 <a href='#' target='_blank'></a>.
						All rights reserved.
					</span>
					<span className='float-none float-sm-right d-block mt-1 mt-sm-0 text-center'>
						<a href='/admin'>.</a>
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
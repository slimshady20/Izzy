import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../assets/css/main.css';

import {
	Main,
	Contacts,
	Write,
	Review,
	Market,
	Community,
	Notice,
	NoticeDetail,
	Admin,
	Charts,
	Application,
	Reports,
} from './index';
import MovingDate from '../components/move/component/MovingDate';
import {Navigator, Footer} from '../commons/index';
import {VideoUploadPage} from '../components';
import MovingType from '../components/move/component/MovingType';
import {MovingEstimateForm} from '../components/move/component';
import {MovingStartPoint} from '../components/move/component/movingPoint/index';
import {CustomerInfo, Mypage, Order, Statistics} from './CompanyPage';
import {Signup, Login, FindId, FindPassword} from './account';
import ModalTest from '../components/modalTest/ModalTest';
import VideoTest from '../components/videoUpload/VideoTest';
import Weather from '../components/weather/Weather';
import CustomerInfoMarket from './community/CustomerInfoMarket';
import VideoCommunity from '../components/videoUpload/VideoCommunity';
import MyInfo from './myPage/MyInfo';

const Home = () => {
	return (
		<>
			<Navigator />
			<Switch>
				<Route exact path={'/'}>
					<Main />
				</Route>
				<Route path={'/notice'} component={Notice} />
				<Route path={'/noticedetail'} component={NoticeDetail} />
				<Route path={'/community'} component={Community} />
				<Route path={'/review'} component={Review} />
				<Route path={'/market'} component={Market} />
				<Route path={'/contacts'} component={Contacts} />
				<Route path={'/admin'} component={Admin} />
				<Route path={'/charts'} component={Charts} />
				<Route path={'/write'} component={Write} />
				<Route path={'/video'} component={VideoUploadPage} />
				<Route path={'/type'} component={MovingType} />
				<Route path={'/estimate'} component={MovingEstimateForm} />
				<Route path={'/movingDate'} component={MovingDate} />
				<Route path={'/startPoint'} component={MovingStartPoint} />
				<Route path='/login' component={Login} />
				<Route path='/findId' component={FindId} />
				<Route path='/findPassword' component={FindPassword} />
				<Route path='/signup' component={Signup} />
				<Route path='/mypage' component={Mypage} />
				<Route path='/order' component={Order} />
				<Route path='/statistics' component={Statistics} />
				<Route path='/customerinfo' component={CustomerInfo} />
				<Route path={'/notice'} component={Notice} />
				<Route path={'/community'} component={Community} />
				<Route path={'/contacts'} component={Contacts} />
				<Route path={'/test'} component={ModalTest} />
				<Route path={'/videotest'} component={VideoTest} />
				<Route path={'/wh'} component={Weather} />
				<Route path={'/application'} component={Application} />
				<Route path={'/reports'} component={Reports} />
				<Route path={'/info'} component={CustomerInfoMarket} />
				<Route path={'/videocommunity'} component={VideoCommunity} />
				<Route path={'/myinfo'} component={MyInfo} />
			</Switch>
			<Footer />
		</>
	);
};

export default Home;

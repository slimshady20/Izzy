import React from 'react';
import {MDBDataTableV5} from 'mdbreact';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function SelectSearchTopReverse() {
	const fetchData = e => {
		e.preventDefault();
		axios.get(``)
	};
	const [datatable, setDatatable] = React.useState({
		columns: [
			{
				label: '이름',
				field: 'name',
				width: 150,
				attributes: {
					'aria-controls': 'DataTable',
					'aria-label': 'Name',
				},
			},
			{
				label: '거주지',
				field: 'position',
				width: 270,
			},
			{
				label: '희망이사지역',
				field: 'movingTo',
				sort: 'asc',
				width: 100,
			},
			{
				label: '이사 종류',
				field: 'office',
				width: 200,
			},
			{
				label: '평수',
				field: 'age',
				sort: 'asc',
				width: 100,
			},

			{
				label: '접수 날짜',
				field: 'date',
				sort: 'disabled',
				width: 150,
			},
			{
				label: 'Salary',
				field: 'salary',
				sort: 'disabled',
				width: 100,
			},
		],
		rows: [
			{
				name: <Link to='/customerinfo'>홍두깨</Link>,
				position: <Link to='/customerinfo'> '서울특별시 서대문구 연희동'</Link>,
				office: '우리집 이사',
				movingTo: <Link to='/customerinfo'>'경기도 고양시 덕양구 화정동'</Link>,
				age: '35',
				date: '2011/04/25',
				salary: '$320',
			},
			{
				name: 'Garrett Winters',
				position: 'Accountant',
				office: 'Tokyo',
				age: '63',
				date: '2011/07/25',
				salary: '$170',
			},
			{
				name: 'Ashton Cox',
				position: 'Junior Technical Author',
				office: 'San Francisco',
				age: '66',
				date: '2009/01/12',
				salary: '$86',
			},
		],
	});

	return (
		<div style={{padding: '1rem', margin: '0 auto', maxWidth: 1200}}>
			<h1 className='text-center' style={{padding: '1rem'}}>
				이사 접수{' '}
			</h1>

			<MDBDataTableV5
				// bordered 테두리
				hover
				entriesOptions={[5, 20, 25]}
				entries={10}
				pagesAmount={4}
				data={datatable}
				pagingTop
				searchTop
				searchBottom={false}
				barReverse
				style={{padding: '1rem', margin: '0 auto', maxWidth: 1200}}
			/>
		</div>
	);
}

import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar} from 'recharts';


const Statistics = () => {
    const data = [
        {
            name: '1월', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: '2월 ', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: '3월 ', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: '4월', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: '5월', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: '6월', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: '7월', uv: 3490, pv: 4300, amt: 2100,
        },
    ];
    const LineData = [
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ];
    return (

        <div  >

            <div style={{padding:'1rem', margin:'0 auto', maxWidth:800, maxHeight: 1000}}>
            <h1 className="text-center">월별 매출액</h1>
            <LineChart width={830} height={450} data={data}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            <div >
                <h1 className="text-center">주간 매출액</h1>
                <BarChart
                    width={800}
                    height={500}
                    data={LineData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
           </div>

        </div>

    );

};
export default Statistics;
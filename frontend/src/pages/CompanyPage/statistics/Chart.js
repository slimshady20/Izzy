import React, {useEffect, useState} from 'react';

const Chart = () => {
    const [chartData,setChartData]= useState({})
    const chart =() =>{
        setChartData({
            labels:['1월','2월','3월','4월','5월',],
            datasets:[
                {
                    label:'Local1',
                    data: [65,60,80,90,40],
                    backgroundColor: 'rgba(120,29,29,0,3)'
                },
                {
                    label:'Local2',
                    data: [65,60,80,90,40],
                    backgroundColor: 'rgba(120,29,29,0,3)'
                }
            ]
        })
    }
    useEffect(()=>{
        chart()
    },[])
    return (
        <div>
            <h1>chart.js</h1>

        </div>
    );
};

export default Chart;
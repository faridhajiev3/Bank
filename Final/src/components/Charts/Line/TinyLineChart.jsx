import React from 'react'
import "./tinyLineChart.css"
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'




function TinyLineChart() {
    const data = {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', "Jan"],
        datasets: [
            {
                label: 'Satışlar',
                data: [100, 500, 200, 790, 350, 600, 640],
                fill: true,
                borderColor: "#1814F3",
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Aylar',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Satışlar',
                },
            },
        },
    };
    return (
        <div className='endGrafik'>
            <Line data={data} options={options} />
        </div>
    )
}

export default TinyLineChart
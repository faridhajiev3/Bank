import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


function Revenue() {
    const data2 = {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
            {
                label: 'Satışlar',
                data: [10, 39, 20, 61, 26, 75, 40],
                borderColor: "#16DBCC",
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };
    const options2 = {
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
                beginAtZero: true,
            },
        },
        animation: {
            duration: 2000, // Animasyon süresi (ms cinsinden)
            easing: 'easeInOutBounce', // Animasyonun türü
        },
    };
    return (
        <div className='art'>
            <Line data={data2} options={options2} />
        </div>
    )
}

export default Revenue
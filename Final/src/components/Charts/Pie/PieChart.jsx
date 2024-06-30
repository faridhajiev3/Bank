import React from 'react'
import "./pieChart.css"
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Statistics() {
    const data = {
        labels: ['Stock A', 'Stock B', 'Stock C', 'Stock D'],
        datasets: [
            {
                label: 'Stock Distribution',
                data: [25, 35, 20, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
                spacing: 5, // Dilimler arasında boşluk ekleme
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Stock Distribution',
            },
        },
    };
    return (
        <div className='pie'>
            <Pie data={data} options={options}/>
        </div>
    )
}

export default Statistics
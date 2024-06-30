import React from 'react'
import "./emptyBar.css"
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function EmptyBar() {
    const data = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        datasets: [
            {
                label: 'Satışlar',
                data: [70, 50, 60, 30, 80, 50], // Sadece son bar dolu olacak şekilde ayarlandı
                backgroundColor: [
                    "#EDF0F7",
                    "#EDF0F7",
                    "#EDF0F7",
                    "#EDF0F7",
                    '#16DBCC', 
                    "#EDF0F7",
                ],
                borderColor: [
                    "#EDF0F7",
                    "#EDF0F7",
                    "#EDF0F7",
                    "#EDF0F7",
                    '#16DBCC',
                    "#EDF0F7",
                ],
                borderWidth: 1,
                borderRadius: 10, 
                borderSkipped: false,
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
                beginAtZero: true,
            },
        },
    };
    return (
        <div className='empt_y'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default EmptyBar
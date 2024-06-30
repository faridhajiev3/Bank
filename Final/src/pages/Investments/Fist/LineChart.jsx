import React from 'react'

import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // chart.js 3 ve sonrası için gerekli
function LineChart() {
    const data = {
        labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        datasets: [
            {
                label: 'Satışlar',
                data: [0, 49, 29, 81, 56, 75, 40],
                // fill: true, // Gölge eklemek için true yapıldı
                // backgroundColor: 'rgba(75, 192, 192, 0.2)', // Gölgenin rengi
                borderColor: '#FCAA0B', // Çizginin rengi
                tension: 0, // Düz çizgi için buraya dikkat
                pointRadius: 5, // Noktaların boyutu
                pointBackgroundColor: '#FCAA0B', // Noktaların rengi
                pointHoverRadius: 10, // Hover sırasında noktaların boyutu
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
        animation: {
            duration: 2000, // Animasyon süresi (ms cinsinden)
            easing: 'easeInOutBounce', // Animasyonun türü
        },
    };
    return (
        <div className='art'>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
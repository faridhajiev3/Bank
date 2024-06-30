import React from 'react'
import "./simpleBarChart.css"
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);



function SimpleBarChart({back}) {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales 2023',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: "#1814F3",
                // borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                borderRadius: 20, // Çubuklara border-radius ekleme
                borderSkipped: false, // Border-radius'un tüm köşelere uygulanması için
            },
            {
                label: 'Sales 2024',
                data: [75, 69, 90, 91, 66, 65],
                backgroundColor: "#16DBCC",
                // borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                borderRadius: 20, // Çubuklara border-radius ekleme
                borderSkipped: false, // Border-radius'un tüm köşelere uygulanması için
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
                text: 'Sales Data',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0, // Y ekseni minimum değerini belirleme
                max: 120, // Y ekseni maksimum değerini belirleme
                ticks: {
                    callback: function (value) {
                        return value + 20; // Çubukları daha yukarı kaldırmak için her bir değeri artırma
                    },
                },
            },
            x: {
                categoryPercentage: 0.5, // Kategoriler (aylar) arasındaki boşluk oranını ayarlama
                barPercentage: 0.5, // Çubuk genişliğini ayarlama
                offset: true, // Her kategori arasında boşluk bırakma
            },
        },
    };
    return (
        <Bar data={data} options={options} />
    )
}

export default SimpleBarChart
import React from 'react'
import { Doughnut } from 'react-chartjs-2';


const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
        {
            label: 'My Dataset',
            data: [300, 50, 100, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    cutout: '50%', // Donut chart için içi boşluk
};
function Doughnutt() {
    return (
        <div className='doughnut'>
            <Doughnut data={data} options={options}/>
        </div>
    )
}

export default Doughnutt
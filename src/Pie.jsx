import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    animation: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
    },
    
}

const sizemonth = [10, 20, 40, 10, 20];
const namesmonth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']


const data = {
    labels: namesmonth,
    datasets: [
        {
            data: sizemonth,
            backgroundColor: [
                '#c7d890',
                '#3b7fc4',
                '#e8a29b',
                '#b2a4c1',
                '#fbe1a1',
            ]
        },
    ]
}

export default function PieChart() {
    return <Pie data={data} options={options} />
}
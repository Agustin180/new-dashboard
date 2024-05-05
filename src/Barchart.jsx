import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    animation: true,
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {

        x: {
            grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false
            }
        }
    },
    barThickness: 25,
    borderRadius: 5
}

const numbercasos = [10, 30, 50, 30, 60, 70, 50, 25, 10, 40, 70];
const namesgroup = ['Felipe', 'Gustavo', 'Alex', 'German', 'Francisco', 'Leandro', 'Martin', 'Tomas', 'Pablo', 'Nolan', 'Mark']


const data = {
    labels: namesgroup,
    datasets: [
        {
            data: numbercasos,
            backgroundColor: '#005C5C',
        },
    ]
}

export default function LinesChart() {
    return <Bar data={data} options={options} />
}
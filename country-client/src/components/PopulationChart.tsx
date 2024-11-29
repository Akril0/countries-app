'use client';

import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import {PopulationCount} from "@/types/types";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface PopulationChartProps {
    populationData: PopulationCount[];
}

const PopulationChart = ({populationData}: PopulationChartProps) => {

    const chartData = {
        labels: populationData.map((data) => data.year),
        datasets: [
            {
                label: 'Population',
                data: populationData.map((data) => data.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Population Over Time',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Population',
                },
            },
        },
    };

    return (
        <div className="mb-6">
            <Line data={chartData} options={options}/>
        </div>
    );
};

export default PopulationChart;

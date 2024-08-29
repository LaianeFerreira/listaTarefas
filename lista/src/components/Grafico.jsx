import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Grafico = ({ items }) => {
    const tarefasCompletas = items.filter(item => item.completo).length;
    const tarefasIncompletas = items.length - tarefasCompletas;

    const data = {
        labels: ['Completas', 'Incompletas'],
        datasets: [
            {
                label: 'Proporção de tarefas',
                data: [tarefasCompletas, tarefasIncompletas],
                backgroundColor: ['#4CAF50', '#FFC107'],
                borderColor: ['#FFFFFF', '#FFFFFF'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="graficoTarefas">
            <h2 className="graficoTitulo">Gráfico</h2>
            <Pie data={data} />
        </div>
    );
};

export default Grafico;

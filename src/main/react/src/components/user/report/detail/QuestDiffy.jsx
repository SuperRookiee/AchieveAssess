import styled from 'styled-components';
import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { Table } from '../../../../assets/style/Report.style';
import axios from 'axios';
const URL = import.meta.env.VITE_BASE_URL;

const ChartContainer = styled.canvas`
  margin: 1rem auto;
  width: 500px !important;
  height: 250px !important;
  margin-top: 100px;
`;

const createRadarChart = (chartRef, labels, averageCorrectRates, myCorrectRates) => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
        labels,
        datasets: [
            {
                label: '전체 평균',
                data: averageCorrectRates,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                pointRadius: 5,
            },
            {
                label: '내 성취율',
                data: myCorrectRates,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                pointRadius: 5,
            },
        ],
    };

    const options = {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 12,
            },
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
            },
        },
    };

    const newChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
    });

    return newChart;
};

const getLabel = (difficulty) => {
    switch (difficulty) {
        case '1':
            return "최하";
        case '2':
            return "하";
        case '3':
            return "중";
        case '4':
            return "상";
        case '5':
            return "최상";
        default:
            return "";
    }
}

const QuestDiffy = ({ currentExamInfo, detailAllErratum, detailOneErratum }) => {
    const [difficulty, setDifficulty] = useState([]);
    const [averageCorrectRates, setAverageCorrectRates] = useState([]);
    const [myCorrectRates, setMyCorrectRates] = useState([]);
    const chartRef = useRef(null);
    const [chart, setChart] = useState(null);

    const calculateAverage = (detailErratum, difficulty) => {
        const subAbil = detailErratum.filter(item => item.difficulty === difficulty);
        const subAbilCnt = subAbil.length;
        const subAbilCorrectCnt = subAbil.filter(item => item.correctResult === "O").length;
        return subAbilCnt ? Math.floor((subAbilCorrectCnt / subAbilCnt) * 100) : 0;
    };
    
    useEffect(() => {
        if (currentExamInfo.length > 0) {
            axios.post(`${URL}/user/report/getDifficulty`, {
                examId: currentExamInfo[0].examId,
            }).then((response) => {
                setDifficulty(response.data);
            }).catch((error) =>
                console.log('failed get AllDetailErratum', error)
            )
        }
    }, [currentExamInfo]);

    useEffect(() => {
        let averageRates = [];
        let myRates = [];
        difficulty.forEach(item => {
            averageRates.push(calculateAverage(detailAllErratum, item.difficulty));
            myRates.push(calculateAverage(detailOneErratum, item.difficulty));
        });
        setAverageCorrectRates(averageRates);
        setMyCorrectRates(myRates);
    }, [difficulty, detailAllErratum, detailOneErratum]);

    useEffect(() => {
        if (chartRef.current && difficulty.length > 0) {
            if (chart) chart.destroy();
            const labels = difficulty.map(item => getLabel(item.difficulty));
            const newChart = createRadarChart(chartRef, labels, averageCorrectRates, myCorrectRates);
            setChart(newChart);
        }
    }, [difficulty, averageCorrectRates, myCorrectRates]);

    return (
        <div>
            <Table className="border-collapse w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th scope="col">난이도</th>
                        {difficulty.map((item, index) => {
                            return <th scope="col" key={index}>{getLabel(item.difficulty)}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>전체 평균</td>
                        {averageCorrectRates.map((average, index) => (
                            <td key={index}>{average}</td>
                        ))}
                    </tr>
                    <tr className='text-[#4b78ca]'>
                        <td>내 성취율</td>
                        {myCorrectRates.map((rate, index) => (
                            <td key={index}>{rate}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
            <ChartContainer ref={chartRef} />
        </div>
    )
}

export default QuestDiffy;

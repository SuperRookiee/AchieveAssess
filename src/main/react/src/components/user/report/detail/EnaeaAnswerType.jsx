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

const createRadarChart = (chartRef, answerType, averageCorrectRates, myCorrectRates) => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
        labels: answerType.map(item => item.answerType),
        datasets: [
            {
                label: '전체 평균',
                data: averageCorrectRates,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                pointRadius: 4,
            },
            {
                label: '내 성취율',
                data: myCorrectRates,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                pointRadius: 4,
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

const EnaeaAnswerType = ({ currentExamInfo, detailAllErratum, detailOneErratum }) => {
    const [answerType, setAnswerType] = useState([]);
    const [averageCorrectRates, setAverageCorrectRates] = useState([]);
    const [myCorrectRates, setMyCorrectRates] = useState([]);
    const chartRef = useRef(null);
    const [chart, setChart] = useState(null);

    const calculateAverage = (detailErratum, answerType) => {
        const subAbil = detailErratum.filter(item => item.answerType === answerType);
        const subAbilCnt = subAbil.length;
        const subAbilCorrectCnt = subAbil.filter(item => item.correctResult === "O").length;
        return subAbilCnt ? Math.floor((subAbilCorrectCnt / subAbilCnt) * 100) : 0;
    };

    useEffect(() => {
        if (currentExamInfo.length > 0) {
            axios.post(`${URL}/user/report/getAnswerType`, {
                examId: currentExamInfo[0].examId,
            }).then((response) => {
                setAnswerType(response.data);
            }).catch((error) =>
                console.log('failed get AllDetailErratum', error)
            )
        }
    }, [currentExamInfo]);

    useEffect(() => {
        let averageRates = [];
        let myRates = [];
        answerType.forEach(item => {
            averageRates.push(calculateAverage(detailAllErratum, item.answerType));
            myRates.push(calculateAverage(detailOneErratum, item.answerType));
        });
        setAverageCorrectRates(averageRates);
        setMyCorrectRates(myRates);
    }, [answerType, detailAllErratum, detailOneErratum]);

    useEffect(() => {
        if (chartRef.current && answerType.length > 0) {
            if (chart) chart.destroy();
            const newChart = createRadarChart(chartRef, answerType, averageCorrectRates, myCorrectRates);
            setChart(newChart);
        }
    }, [answerType, averageCorrectRates, myCorrectRates]);

    return (
        <div>
            <Table className="border-collapse w-full">
            <thead>
                    <tr className="bg-gray-100">
                        <th scope="col">응답 유형</th>
                        {answerType.map((item, index) => (
                            <th scope="col" key={index}>{item.answerType}</th>
                        ))}
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

export default EnaeaAnswerType;
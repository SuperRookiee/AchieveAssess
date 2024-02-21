import styled from 'styled-components';
import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { Table } from '../../../../assets/style/Report.style';
import axios from 'axios';
const URL = import.meta.env.VITE_BASE_URL;

const ChartContainer = styled.canvas`
  margin: 1rem auto;
  width: 500px !important;
  height: 500px !important;
  margin-top: 100px;
`;

const createRadarChart = (chartRef, subjectAbil, averageCorrectRates, myCorrectRates) => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
        labels: subjectAbil.map(item => item.subjectAbility),
        datasets: [
            {
                label: '전체 평균',
                data: averageCorrectRates,
                backgroundColor: 'transparent',
                borderColor: 'rgba(194, 214, 154, 1)',
                borderWidth: 1,
            },
            {
                label: '내 성취율',
                data: myCorrectRates,
                backgroundColor: 'transparent',
                borderColor: 'rgba(83, 141, 213, 1)',
                borderWidth: 1
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
                min: 0,
                max: 100,
                stepSize: 50,
            },
        },
    };

    const newChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options,
    });

    return newChart;
};

const SubjectAbil = ({ currentExamInfo, detailAllErratum, detailOneErratum }) => {
    const [subjectAbil, setSubjectAbil] = useState([]);
    const [averageCorrectRates, setAverageCorrectRates] = useState([]);
    const [myCorrectRates, setMyCorrectRates] = useState([]);
    const chartRef = useRef(null);
    const [chart, setChart] = useState(null);

    const calculateAverage = (detailErratum, subjectAbility) => {
        const subAbil = detailErratum.filter(item => item.subjectAbility === subjectAbility);
        const subAbilCnt = subAbil.length;
        const subAbilCorrectCnt = subAbil.filter(item => item.correctResult === "O").length;
        return subAbilCnt ? Math.floor((subAbilCorrectCnt / subAbilCnt) * 100) : 0;
    };

    useEffect(() => {
        if (currentExamInfo.length > 0) {
            axios.post(`${URL}/user/report/getSubjectAbil`, {
                examId: currentExamInfo[0].examId,
            }).then((response) => {
                setSubjectAbil(response.data);
            }).catch((error) =>
                console.log('failed get AllDetailErratum', error)
            )
        }
    }, [currentExamInfo]);

    useEffect(() => {
        let averageRates = [];
        let myRates = [];
        subjectAbil.forEach(item => {
            averageRates.push(calculateAverage(detailAllErratum, item.subjectAbility));
            myRates.push(calculateAverage(detailOneErratum, item.subjectAbility));
        });
        setAverageCorrectRates(averageRates);
        setMyCorrectRates(myRates);
    }, [subjectAbil, detailAllErratum, detailOneErratum]);

    useEffect(() => {
        if (chartRef.current && subjectAbil.length > 0) {
            if (chart) chart.destroy();
            const newChart = createRadarChart(chartRef, subjectAbil, averageCorrectRates, myCorrectRates);
            setChart(newChart);
        }
    }, [subjectAbil, averageCorrectRates, myCorrectRates]);

    return (
        <div>
            <Table className="border-collapse w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th scope="col"></th>
                        {subjectAbil.map((item, index) => (
                            <th scope="col" key={index}>{item.subjectAbility}</th>
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

export default SubjectAbil;

import React from 'react';
import styled from 'styled-components';
import { Table } from '../../../../assets/style/Report.style';

const BarHeadContainer = styled.div`
    position: relative;
    left: 16.5px;
    width: 100%;
    padding-top: 30px;
`;

const BarContainer = styled.div`
    position: relative;
    left: 16.5px;
    width: 100%;
`;

const Bar = styled.span`
    display: flex;
    width: 100%;
    padding-top: 50px;
`;

const User = styled.div`
    position: absolute;
    font-size: 20px;
    font-weight: 700;
    color: #6c9deb;
    cursor: pointer;
    left: -50px;
    white-space: pre;
    margin-left: ${props => props.achieveRate}%;
`;

const UserCursor = styled.i`
    padding-left: 40px;
    width: 35px;
    font-size: 25px;
    display: block;
    font-weight: 900;
`;

const Level1Div = styled.div`
    width: 19%;
    background: #f2f2f2;
    border-radius: 25px 0 0 25px;
`;

const Level2Div = styled.div`
    width: 32%;
    background: #ddd;
`;

const Level3Div = styled.div`
    width: 29%;
    background: #d1d1d1;
`;

const Level4Div = styled.div`
    width: 20%; 
    background: #c0c0c0;
    border-radius: 0 25px 25px 0;
`;

const LevelEm = styled.em`
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    padding: 18px 0;
`;

const LevelP = styled.p`
    font-size: 16px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 25px;
`;
const ResultSummary = ({ detailOneErratum }) => {
    const questTotal = detailOneErratum.length; //평가 문항 수
    const correctResult = detailOneErratum.filter(item => item.correctResult === 'O'); //정답 문항 수 구하기
    const count = correctResult.length; //정답 문항 수
    const achieveRate = Math.floor((count / questTotal) * 100); //종합 성취율
    let achieveLevel = 0; //성취수준

    if (achieveRate >= 0 && achieveRate < 20) {
        achieveLevel = 1;
    } else if (achieveRate >= 20 && achieveRate < 50) {
        achieveLevel = 2;
    } else if (achieveRate >= 50 && achieveRate < 80) {
        achieveLevel = 3;
    } else if (achieveRate >= 80 && achieveRate <= 100) {
        achieveLevel = 4;
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th scope="col">평가 문항 수</th>
                        <th scope="col">정답 문항 수</th>
                        <th scope="col">종합 성취율</th>
                        <th scope="col">성취수준</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{questTotal}</td>
                        <td>{count}</td>
                        <td>{achieveRate}%</td>
                        <td>{achieveLevel}수준</td>
                    </tr>
                </tbody>
            </Table>
            <BarHeadContainer>
                <User achieveRate={achieveRate}>
                    내 성취수준
                    <UserCursor className="fa-solid fa-caret-down" />
                </User>
            </BarHeadContainer>
            <BarContainer>
                <Bar>
                    <Level1Div>
                        <LevelEm>1수준</LevelEm>
                        <LevelP>기초학력 미달</LevelP>
                    </Level1Div>

                    <Level2Div>
                        <LevelEm>2수준</LevelEm>
                        <LevelP>기초학력</LevelP>
                    </Level2Div>

                    <Level3Div>
                        <LevelEm>3수준</LevelEm>
                        <LevelP>보통학력</LevelP>
                    </Level3Div>

                    <Level4Div>
                        <LevelEm>4수준</LevelEm>
                        <LevelP>우수학력</LevelP>
                    </Level4Div>
                </Bar>
            </BarContainer>
        </ >
    );
};

export default ResultSummary;
import { styled } from "styled-components";
import { Table } from "../../../../assets/style/Report.style";

const MarkV = styled.i`
  color: green;
  font-size: 25px;
  font-weight: 400;
`;

const MarkX = styled.i`
  color: red;
  font-size: 25px;
  font-weight: 400;
`;

const QuestErratum = ({ detailAllErratum, detailOneErratum }) => {
    console.log(detailAllErratum)
    console.log(detailOneErratum)
    return (
        <div>
            <Table id="detail_QuestErratum" className="w-full">
                <thead className="h-20">
                    <tr>
                        <th>번호</th>
                        <th>교과 영역</th>
                        <th>교과 역량</th>
                        <th>정답</th>
                        <th>본인 응답</th>
                        <th>채점 결과</th>
                        <th>시험응시자 평균 정답률</th>
                    </tr>
                </thead>
                <tbody>
                    {detailOneErratum && detailOneErratum.map((detailOneErratum, idx) => (
                        <tr key={idx}>
                            <td>{detailOneErratum.questionOrderName}</td>
                            <td>{detailOneErratum.contentArea}</td>
                            <td>{detailOneErratum.subjectAbility}</td>
                            <td>{detailOneErratum.correctAnswer}</td>
                            <td>{detailOneErratum.answer}</td>
                            <td><MarkX className={`fa-regular fa-circle-${detailOneErratum.correctResult === "O" ? 'check !text-green-500' : 'xmark !text-red-500'} text-2xl`} /></td>
                            <td>{detailOneErratum.averageCorrectRate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default QuestErratum;
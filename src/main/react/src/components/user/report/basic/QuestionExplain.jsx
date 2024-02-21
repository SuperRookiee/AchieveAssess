import { useEffect, useState } from "react";
import { Table } from "../../../../assets/style/Report.style";
import ExplainModal from "./ExplainModal";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../atoms/Auth";
import "../../../../assets/css/exam/viewer/question.scss"
const URL = import.meta.env.VITE_BASE_URL;

const QuestionExplain = ({ erratum, currentExamInfo }) => {
    const user = useRecoilValue(userState);
    const [examExplain, setExamExplain] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (currentExamInfo[0]) {
            fetch(`${URL}/exam/explain`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ memberId: user.memberId, examId: currentExamInfo[0].examId })
            }).then(response => {
                return response.json()
            }).then((data) => {
                setExamExplain(data);
            }).catch((error) => {
                console.log('explain error', error);
            })
        }
    }, [currentExamInfo])

    return (
        <>
        <Table id="basic_questionExplain" className="w-full">
            <thead className="h-20">
                <tr>
                    <th>번호</th>
                    <th>채점 결과</th>
                    <th>문제 보기</th>
                </tr>
            </thead>
            <tbody>
                {erratum && erratum.map((question, idx) => (
                    <tr key={idx}>
                        <td>{question.questionOrderName || '?'}</td>
                        <td><i className={`fa-regular fa-circle-${question.correctResult === "O" ? `check !text-green-500`: 'xmark !text-red-500'} text-2xl`}></i></td>
                        <td><button onClick={() => setModal(idx)} className="rounded-lg bg-gray-400 text-white py-2 px-10">문제 보기</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        {modal !== false && <ExplainModal modal={modal} setModal={setModal} erratum={erratum[modal]} examExplain={examExplain[modal]} /> }               
        </>
    )
}
export default QuestionExplain;
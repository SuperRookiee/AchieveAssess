import QuestionExplain from "./basic/QuestionExplain";
import { ScoreArea } from "../../../assets/style/Report.style";
import { memo, useEffect, useState } from "react";
import axios from "axios";
const URL = import.meta.env.VITE_BASE_URL;

const BasicReport = memo(({ memberId, currentExamInfo }) => {
    const [score, setScore] = useState(0);
    const [erratum, setErratum] = useState([]);
    useEffect(() => {
        if (currentExamInfo.length > 0) {
            axios.post(`${URL}/user/report/getBasicErratum`, {
                memberId: memberId,
                examId: currentExamInfo[0].examId,
            }).then((response) => { // score, questionOrderName, explanations, correctResult;
                setErratum(response.data)
                setScore(response.data.reduce((accumulator, item) => accumulator + parseInt(item.score, 10), 0));
            }).catch((error) =>
                console.log('failed get BasicErratum', error)
            )
        }
    }, [currentExamInfo]);

    return (
        <section id="basic_report" className="px-4">
            <ScoreArea>
                <div className="score_txt">
                    <strong className="text-[#6c9deb]">{score}점</strong> / 100점
                </div>
            </ScoreArea>
            <QuestionExplain erratum={erratum} currentExamInfo={currentExamInfo} />
        </section>
    );
});

export default BasicReport;

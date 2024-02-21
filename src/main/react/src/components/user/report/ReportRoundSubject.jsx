import { RoundSubjectArea } from "@assets/style/Report.style";
import Eng_Kor from "../../../utils/translate/Eng_Kor";
import { memo } from "react";

const ReportRoundSubject = memo(({ examInfo, setRound, Subject, setSubject }) => {

    // examInfo 배열에서 subject 값을 기반으로 JSON 형식으로 묶기
    const groupedExamInfo = examInfo.reduce((result, exam) => {
        const subject = exam.subject;

        if (!result[subject]) {
            result[subject] = []; // 해당 과목이 없으면 새로운 JSON 객체 생성
        }

        result[subject].push(exam.round); // 현재 아이템을 해당 subject 그룹에 추가

        return result;
    }, {});

    const subjectHanlder = (e) => {
        setSubject(e.target.value);
        const firstRound = groupedExamInfo[e.target.value] && groupedExamInfo[e.target.value].sort((a, b) => a.localeCompare(b))[0]; // round select의 첫 번째 값으로 setRound 실행
        if (firstRound) {
            setRound(firstRound);
        }
    }

    return (
        <section className="pt-10">
            <RoundSubjectArea>
                <select id="subject_select" className="rounded mx-1" onChange={(e) => setRound(e.target.value)}>
                    {groupedExamInfo[Subject] && groupedExamInfo[Subject].sort((a, b) => a.localeCompare(b)).map((round, index) => (
                        <option value={round} key={index}>{round}</option>
                    ))}
                </select>
                <select id="round_select" className="rounded mx-1" onChange={(e) => subjectHanlder(e)}>
                    {Object.keys(groupedExamInfo).map((subject, index) => (
                        <option value={subject} key={index}>{Eng_Kor(subject)}</option>
                    ))}
                </select>
            </RoundSubjectArea>
        </section>
    )
})

export default ReportRoundSubject;
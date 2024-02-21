import { Link, useNavigate } from "react-router-dom";
import { TblList } from "./TimeTable.style";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms/Auth";
import axios from "axios";
import { useEffect, useState } from "react";
const URL = import.meta.env.VITE_BASE_URL;

const TimeTable = ({ round, setShowTimeTable, setExamInfo }) => {
    const navigate = useNavigate();
    const user = useRecoilValue(userState);

    const validateAccess = (round, gradeLevel, subject, examId, statusCode, memberId, testTime) => {
        navigate(`/user/exam/viewer`, {
            state: { round, gradeLevel, subject, examId , statusCode, memberId, testTime},
        });
    };
    
    const userLevel = user.gradeLevel == '초등' ? 'elem' : user.gradeLevel == '중등' ? 'mid' : 'high';

    const [timeTable, setTimeTable] = useState([]);

    useEffect(() => {
        axios.post(`${URL}/exam/exam-info`, {
            memberId: user.memberId,
            gradeLevel: user.gradeLevel,
            round: parseInt(round.match(/\d+/)[0], 10)
        }).then((response) => {
            setTimeTable(response.data);
        }).catch((error) => console.log('get exam-info error', error))
    }, [round])

    const reStartConfirm = (statusCode) => {
        if(statusCode == '재응시') {
            if(!confirm('기존 응시이력은 삭제됩니다\n 재응시하시겠습니까?'))
                return false;
        }
    }

    return (
        <section>
            <div>
                <TblList>
                    <thead>
                        <tr>
                            <th scope="col">교시</th>
                            <th scope="col">과목</th>
                            <th scope="col">시험시간</th>
                            <th scope="col">문항 수</th>
                            <th scope="col">시험 응시</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timeTable.map((item, index) => (
                            <tr key={index}>
                                <td>{item.testPeriod}교시</td>
                                <td>{item.subject}</td>
                                <td>응시 시각으로부터 {item.testTime}분</td>
                                <td>{item.questionCount}문항</td>
                                <td>        
                                    <button onClick={() => {
                                        if (reStartConfirm(item.statusCode) === false)
                                            return;
                                        setShowTimeTable(true);
                                        item.statusCode !== '응시하기' && validateAccess(parseInt(round.match(/\d+/)[0], 10), userLevel, item.subjectUrl, item.examId, item.statusCode, user.memberId, item.testTime);
                                        setExamInfo({
                                            round: parseInt(round.match(/\d+/)[0], 10), userLevel: userLevel, subjectUrl: item.subjectUrl, examId: item.examId, statusCode: item.statusCode, memberId: user.memberId, testTime: item.testTime
                                        })
                                    }} onContextMenu={(e) => e.preventDefault()}>
                                        <div className={`text-base rounded-3xl w-36 py-3 font-medium text-white ${item.statusCode === '응시하기' ? "bg-blue-400" : item.statusCode === '재응시' ? "bg-yellow-300" : "bg-orange-400"} `}>{item.statusCode}</div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </TblList>

                <div className="text-center mt-10 mb-11">
                    <div className="inline-block text-sm rounded-2xl bg-yellow-300 w-28 py-1 text-white">재응시</div>
                    <p className="inline-block ml-4">시험을 재응시 할 수 있는 상태 </p>
                    <div className="inline-block text-sm rounded-2xl bg-orange-400 w-28 py-1 ml-8 text-white">이어하기</div>
                    <p className="inline-block ml-4">진행 중인 시험을 이어할 수 있는 상태 </p>
                    <br />
                    <div className="inline-block text-sm rounded-2xl bg-blue-400 w-28 py-1 ml-8 text-white">응시하기</div>
                    <p className="inline-block ml-4">시험에 응시할 수 있는 상태</p>
                </div>

                <Link to={`/user/report`} className="relative inline-block text-center left-2/4 -translate-x-1/2 bg-primary-100 rounded-xl text-lg font-bold text-white py-2 px-40">결과 보기</Link>
            </div>
        </section>
    );
}

export default TimeTable;
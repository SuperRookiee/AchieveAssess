import { Navigate, Outlet, useLocation } from "react-router-dom";
import { memo, useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "@components/user/viewer/Header";
import OMR from "@components/user/viewer/OMR";
import { classifyCBT } from "../../components/user/cbt/questions/CBTQuestions";
import { classifyExam } from "../../components/user/exam/questions/ExamQuestions";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/Auth";
import { io } from "socket.io-client";

const URL = import.meta.env.VITE_BASE_URL;
const NODE_URL = import.meta.env.VITE_NODE_URL;

const layout = memo(() => {
    const user = useRecoilValue(userState);
    const state = useLocation().state;
    const swiperRef = useRef(null);
    const [OMRList, setOMRList] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [exam, setExam] = useState("시험");
    const [questions, setQuestions] = useState();
    const [accessor, setAccessor] = useState([]);
    const [leftTime, setLeftTime] = useState();

    const getClassifyExam = async () => {
        await axios.post(`${URL}/exam/get-questions`, {
            statusCode: state.statusCode,
            examId: state.examId,
            memberId: state.memberId,
        }).then((response) => {
            setQuestions(classifyExam(response.data));
            setLeftTime(setSpentTime(response.data));
        });
    }

    const setSpentTime = (questions) => {
        let spentTime = 0;
        questions.map(item => {
            spentTime += item.duration;
        })
        return state.testTime * 60 - spentTime;
    }

    useEffect(() => {
        if (state?.round)
            getClassifyExam();
        else {
            setQuestions(classifyCBT(state));
        }
    }, [state])

    //페이지 접근방식 체크 
    if (!state) {
        alert(`잘못된 페이지 접근방식입니다. 메인화면으로 돌아갑니다.`)
        return <Navigate to="/" />;
    }

    //답안 제출
    const registAnswer = () => {
        try {
            const response = axios.post(`${URL}/exam/submit`, {
                memberId: user.memberId,
                state: state,
                questions: questions
            });
            return response;
        } catch (error) {
            console.error('error', error);
        }
    };

    //Socket
    useEffect(() => {
        const socket = io(`${NODE_URL}`); // NodeJs Server 주소
        const name = user?.memberName || '수험자';
        socket.on('connect', () => {
            socket.emit('join-user', {
                name: name,
                round: state.round,
                subject: state.subject,
                gradeLevel: state.gradeLevel,
                currentNumber: currentNumber + 1,
            });
        });

        socket.on('update-user', (users) => {
            const filteredData = users.filter((user) => user.round === state.round && user.subject === state.subject && state.gradeLevel === state.gradeLevel && user.currentNumber === currentNumber+1);
            setAccessor(filteredData);
        });

        return () => { socket.disconnect() }; // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
    }, [currentNumber]);

    return (
        <div id="question">
            <Header registAnswer={registAnswer} state={state} accessor={accessor} leftTime={leftTime} />
            <div className="flex justify-between">
                <div className="w-[calc(100%-6.5rem)]">
                    <div className="border border-[#bbb] h-11 pl-3 flex items-center">
                        <span className="font-semibold text-xl">{exam}</span>
                        <div className="flex justify-between ml-auto">
                            <div className="swiper-button-prev" />
                            <div className="swiper-button-next" />
                        </div>
                    </div>
                    {questions?.length ?
                        <Outlet
                            context={{
                                setOMRList: setOMRList,
                                setExam: setExam,
                                currentNumber: currentNumber,
                                setCurrentNumber: setCurrentNumber,
                                swiperRef: swiperRef,
                                state: state,
                                questions: questions,
                                setQuestions: setQuestions,
                                registAnswer: registAnswer,
                            }}
                        /> : null
                    }
                </div>
                <OMR OMRList={OMRList} currentNumber={currentNumber} setCurrentNumber={setCurrentNumber} swiper={swiperRef.current} gradeLevel={state.gradeLevel}/>
            </div>
        </div>
    );
})

export default layout;
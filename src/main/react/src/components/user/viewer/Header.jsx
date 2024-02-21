import axios from "axios";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../../atoms/Auth";
const URL = import.meta.env.VITE_BASE_URL;

const Header = memo(({ registAnswer, state, accessor, leftTime }) => {
    const [user, setUser] = useRecoilState(userState);
    const navigate = useNavigate();
    const [testTime, setTestTime] = useState(state.round == undefined ? 3600 : state.testTime * 60); // 60분(초)
    const testTime_MS = `${Math.floor(testTime / 60)}:${(testTime % 60) < 10 ? '0' : ''}${(testTime % 60)}`;
    const [showAccessor, setShowAccessor] = useState(true);
    
    useEffect(() => {
        if (leftTime)
          setTestTime(leftTime);
      }, [leftTime]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (testTime > 0) {
                setTestTime(testTime - 1);
            } else {
                clearInterval(timer);
                alert("시험이 종료되었습니다.");
                registAnswer();
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [testTime]);

    const submitHanlder = () => {
        if (state.round) {
            registAnswer()
                .then(() => {
                    alert('제출이 완료되었습니다.');
                    axios.post(`${URL}/score`, {
                        memberName: user.memberName,
                        memberId: user.memberId,
                        examId: state.examId
                    }).then(response => {
                        setUser((prevUser) => ({ ...prevUser, examYn: 'Y' }));
                        navigate('/user/report');
                    }).catch(error => {
                        console.error('error', error);
                    });
                });
        } else {
            if (confirm("시험 종료하시겠습니까?\nCBT 시험은 레포트가 제공되지 않으며 처음으로 돌아갑니다.")) {
                navigate("/");
            }
        }
    };

    // 페이지 이탈을 처리하는 함수
    const handlePageLeave = (locate) => {
        if (confirm("페이지를 떠나시겠습니까?\n시험은 임시저장이 되며, 응시시간이 지나면 종료됩니다.")) {
            state.round && registAnswer();
            navigate(locate);
        }
    };

    return (
        <header className="bg-third-100 h-16 flex items-center justify-between disableDrag">
            <div className="flex px-3">
                <button onClick={() => handlePageLeave('/')}>
                    <img className="w-[200px] h-[30px]" src="https://exam.chunjae-platform.com/img/logo2.png" />
                </button>
                <div className="ml-2 max-w-xs hidden overflow-hidden md:flex">
                    {showAccessor && accessor.map((user, idx) => (
                        <div key={idx}>
                            {idx < 5 ? (
                                <span className={`border border-white rounded-full text-white h-8 w-8 mx-1 items-center flex justify-center ${idx % 2 === 0 ? 'bg-first-300' : 'bg-second-100'}`}>
                                    {user.name.charAt(0)}
                                </span>
                            ) : (idx === 5 ? (
                                <span> ...</span>
                            ) : null
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex h-full">
                <div className="h-full flex">
                    <button onClick={() => setShowAccessor((e) => !e)} className="mr-[0.2rem] text-white w-16 h-full border border-third-200 bg-third-200 hover:bg-third-100">
                        on/off
                    </button>
                    <button onClick={() => handlePageLeave(-1)} className="mr-[0.2rem] text-white w-16 h-full border border-third-200 bg-third-200 hover:bg-third-100">
                        나가기
                    </button>
                </div>
                <div className="px-2 py-[0.35rem] h-full bg-third-200 flex items-center rounded">
                    <span className="text-white leading-tight whitespace-pre">남은<br />시간</span>
                    <span className="bg-third-100 text-white h-full flex items-center ml-2 px-8 font-semibold text-3xl min-w-fit leading-tight">{testTime_MS}</span>
                </div>
                <div className="h-full p-1">
                    <button onClick={() => submitHanlder()} className="flex items-center bg-[#3a73ba] border border-primary-100 text-white font-semibold h-full px-4 whitespace-pre hover:brightness-105">최종 제출</button>
                </div>
            </div>
        </header>
    );
});

export default Header;
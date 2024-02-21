import { useState } from "react";

const FirstExamElemKor8 = ({ updateQuestions, answer }) => {
    const [inputValue, setInputValue] = useState(answer);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        updateQuestions(8, newValue === "" ? null : newValue);
    };

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">8</span>
                            <span className="txt ">(물음) 대화를 듣고 토론 주제는 무엇인지 빈칸에 들어갈 말을 쓰시오.</span>
                        </div>
                        <div className="img-box w80">
                            <audio controls src="" type="audio/mpeg">
                                브라우저가 audio 태그를 지원하지 않을 때 표시되는 문장
                            </audio>
                        </div>
                        <div className="text-box">
                            토론 주제 : <input className="border border-black px-1" value={inputValue || ""} onChange={handleChange} /> 은 반드시 필요하다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FirstExamElemKor8;


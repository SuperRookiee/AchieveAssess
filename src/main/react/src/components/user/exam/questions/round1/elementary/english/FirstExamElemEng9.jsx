import image_english_img23 from "@assets/image/exam/round1/elementary/english/english_img23.jpg";
import { useState } from "react";

const FirstExamElemEng9 = ({ updateQuestions, answer }) => {
    const [inputValue, setInputValue] = useState(answer);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        updateQuestions(9,  newValue === "" ? null : newValue);
    };

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">9</span>
                            <span className="txt">다음 대화의 밑줄 친 우리말을 영어로 옮길 때, 빈칸
                                에 알맞은 단어를 영어로 쓰시오.</span>
                        </div>
                        <div className="img-box w90">
                            <img src={image_english_img23} />
                        </div>
                        <div className="answer-input-type text-3xl text-center">→&nbsp;
                            <input type="text" className="blank" value={inputValue || ""} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemEng9;
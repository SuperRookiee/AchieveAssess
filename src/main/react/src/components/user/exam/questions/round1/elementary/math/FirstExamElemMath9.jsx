import image_math_img21 from "@assets/image/exam/round1/elementary/math/math_img21.jpg";
import { useState } from "react";

const FirstExamElemMath9 = ({ updateQuestions, answer }) => {
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
                            <span className="txt">█가 될 수 있는 자연수를 모두 쓰시오.</span>
                        </div>
                        <div className="img-box">
                        <img src={image_math_img21} />
                        </div>
                        {/* s 220729 수정 */}
                        <div className="answer-input-type textline">
                            <span className="txt">(</span>
                            <input type="text" placeholder="입력" value={inputValue || ""} onChange={handleChange} />
                            <span className="txt">)</span>
                        </div>
                        {/* e 220729 수정 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemMath9;
import image_math_img15 from "@assets/image/exam/round1/elementary/math/math_img15.jpg";
import { useState } from "react";

const FirstExamElemMath8 = ({ updateQuestions, answer }) => {
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
                        <span className="txt"> 직사각형 모양의 액자가 있습니다. 이 액자의
                            넓이는 몇 ㎠인지 구하시오.</span>
                    </div>
                    <div className="img-box">
                    <img src={image_math_img15} />
                    </div>
                    {/* s 220729 수정 */}
                    <div className="answer-input-type textline">
                        <span className="txt">(</span>
                        <input type="text" placeholder="입력" value={inputValue || ""} onChange={handleChange} />
                            <span className="txt">)</span>
                            <span className="txt">㎠</span>
                    </div>
                    {/* e 220729 수정 */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default FirstExamElemMath8;
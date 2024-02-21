import image_english_img24 from "@assets/image/exam/round1/elementary/english/english_img24.jpg";
import { useEffect, useState } from "react";

const FirstExamElemEng10 = ({ updateQuestions, answer }) => {
    const answers = answer ? answer.split(",") : ["", ""];
    const [inputValue1, setInputValue1] = useState(answers[0]);
    const [inputValue2, setInputValue2] = useState(answers[1]);

    const handleChange1 = (e) => {
        const newValue = e.target.value;
        setInputValue1(newValue);
      };
    
      const handleChange2 = (e) => {
        const newValue = e.target.value;
        setInputValue2(newValue);
      };

      useEffect(() => {
        const values = [inputValue1, inputValue2].filter(Boolean);
        updateQuestions(10, values.length > 0 ? values.join(",") : null);
    }, [inputValue1, inputValue2]);

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">10</span>
                            <span className="txt">다음 대화를 읽고, 빈칸에 알맞은 말을 쓰시오.</span>
                        </div>
                        <div className="img-box">
                            <img src={image_english_img24} />
                        </div>
                        {/* s 220729 수정 */}
                        <div className="answer-input-type ml-44">
                            <span className="txt">(1)</span>
                            <input type="text" className="pl-5" placeholder="입력" value={inputValue1} onChange={handleChange1} />
                            <span className="txt">(숫자로)</span><br /><br />
                            <span className="txt">(2)</span>
                            <input type="text"className="pl-5" placeholder="입력" value={inputValue2} onChange={handleChange2} />
                            <span className="txt">(우리말로)</span>
                        </div>
                        {/* e 220729 수정 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemEng10;
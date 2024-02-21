import image_math_img22 from '@assets/image/exam/round1/elementary/math/math_img22.jpg';
import { useState } from 'react';

const FirstExamElemMath10 = ({ updateQuestions, answer }) => {
    const [inputValue, setInputValue] = useState(answer);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        updateQuestions(10,  newValue === "" ? null : newValue);
    };

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">10</span>
                            <span className="txt">다음은 어느 날 남부 지방의 최저 기온과 최고 기온을 나타낸 것입니다.<br /> 지도에 표시된
                                여섯 지역의 최저 기온의 평균은 몇 ¾인지 구하시오.</span>
                        </div>
                        <div className="img-box">
                            <img src={image_math_img22} alt="이미지22" />
                        </div>
                        {/* s 220729 수정 */}
                        <div className="answer-input-type textline">
                            <span className="txt">(</span>
                            <input type="text" placeholder="입력" value={inputValue || ""} onChange={handleChange} />
                                <span className="txt">)</span>
                                <span className="txt">℃</span>
                        </div>
                        {/* e 220729 수정 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemMath10;
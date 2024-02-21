import image_math_img09 from "@assets/image/exam/round1/elementary/math/math_img09.jpg";
import image_math_img09_1 from "@assets/image/exam/round1/elementary/math/math_img09_1.jpg";
import { useEffect, useState } from "react";

const FirstExamElemMath5 = ({ updateQuestions, answer }) => {
    const answers = answer ? answer.split(",") : ["", ""];
    const [selectedValue1, setSelectedValue1] = useState(answers[0]);
    const [selectedValue2, setSelectedValue2] = useState(answers[1]);
    
    const handleChange1 = (e) => {
      const newValue = e.target.value;
      setSelectedValue1(newValue);
    };
  
    const handleChange2 = (e) => {
      const newValue = e.target.value;
      setSelectedValue2(newValue);
    };
  
    useEffect(() => {
        const values = [selectedValue1, selectedValue2].filter(Boolean);
        updateQuestions(5, values.length > 0 ? values.join(",") : null);
    }, [selectedValue1, selectedValue2]);

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">5</span>
                            <span className="txt">규칙에 따라 입력값을 어림한 수를 써넣으려고 합니다. 알맞은 수를 고르면 어느 것입니까?</span>
                        </div>
                        <div className="img-box">
                            <img src={image_math_img09} />
                        </div>
                        <div className="img-box">
                            <img src={image_math_img09_1} />
                        </div>
                        {/* 220729 수정 */}
                        <div className="select-box wide">
                            <select className="select top-56 left-64" value={selectedValue1} onChange={handleChange1}>
                                <option value="">선택</option>
                                <option value="3500">3500</option>
                                <option value="3560">3560</option>
                                <option value="3570">3570</option>
                                <option value="3600">3600</option>
                                <option value="4000">4000</option>
                            </select>
                            <select className="select top-83 left-64" value={selectedValue2} onChange={handleChange2}>
                                <option value="">선택</option>
                                <option value="3500">3500</option>
                                <option value="3560">3560</option>
                                <option value="3570">3570</option>
                                <option value="3600">3600</option>
                                <option value="4000">4000</option>
                            </select>
                        </div>
                        {/* 220729 수정 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemMath5;
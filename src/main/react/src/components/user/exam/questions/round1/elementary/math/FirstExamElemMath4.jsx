import image_math_img04_1 from "@assets/image/exam/round1/elementary/math/math_img04_1.jpg";
import image_math_img04_2 from "@assets/image/exam/round1/elementary/math/math_img04_2.jpg";
import image_math_img04_3 from "@assets/image/exam/round1/elementary/math/math_img04_3.jpg";
import image_math_img04_4 from "@assets/image/exam/round1/elementary/math/math_img04_4.jpg";
import image_math_img04_5 from "@assets/image/exam/round1/elementary/math/math_img04_5.jpg";
import { useEffect, useRef, useState } from "react";

const FirstExamElemMath4 = ({ updateQuestions, answer }) => {
    const chooseCount = 5; // 선택 가능한 문제 수
    const [select, setSelect] = useState([]);
    const radioRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const pluralSelect = (answer) => {
        setSelect((prevSelect) => {
            if (prevSelect.includes(answer)) {
                return prevSelect.filter(item => item !== answer);
            } 
            else if (prevSelect.length < chooseCount) {
                return [...prevSelect, answer];
            }
            return prevSelect;
        });
    }

    useEffect(() => {
        if (select.length > 0) {
            select.sort();
            updateQuestions(4, select.join());
        }
        else {
            updateQuestions(4, null);
        }
    }, [select]);

    useEffect(() => {
        if (answer !== null) {
          const answers = answer.split(",");
          const selectedValues = answers.filter((value) => parseInt(value, 10) >= 1 && parseInt(value, 10) <= 5);
      
          if (selectedValues.length <= chooseCount) {
            setSelect(selectedValues);
          } else {
            setSelect(selectedValues.slice(0, chooseCount));
          }
      
          selectedValues.forEach((value) => {
            const intValue = parseInt(value, 10);
            if (intValue >= 1 && intValue <= 5) {
              radioRefs[intValue - 1].current.checked = true;
            }
          });
        }
      }, [answer]);

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">4</span>
                            <span className="txt">각기둥을 모두 고르시오.</span>
                        </div>
                        <ul className="answer-input-type checkbox image">
                            <li>
                                <input type="checkbox" id="answer_checkbox01" ref={radioRefs[0]} value="1" onChange={() => pluralSelect("1")} />
                                <label htmlFor="answer_checkbox01">✔</label>
                                <span className="txt"><img src={image_math_img04_1} className="w50" /></span>
                            </li>
                            <li>
                                <input type="checkbox" id="answer_checkbox02" ref={radioRefs[1]} value="2" onChange={() => pluralSelect("2")} />
                                <label htmlFor="answer_checkbox02">✔</label>
                                <span className="txt"><img src={image_math_img04_2} className="w50" /></span>
                            </li>
                            <li>
                                <input type="checkbox" id="answer_checkbox03" ref={radioRefs[2]} value="3" onChange={() => pluralSelect("3")} />
                                <label htmlFor="answer_checkbox03">✔</label>
                                <span className="txt"><img src={image_math_img04_3} className="w50" /></span>
                            </li>
                            <li>
                                <input type="checkbox" id="answer_checkbox04" ref={radioRefs[3]} value="4" onChange={() => pluralSelect("4")} />
                                <label htmlFor="answer_checkbox04">✔</label>
                                <span className="txt"><img src={image_math_img04_4} className="w50" /></span>
                            </li>
                            <li>
                                <input type="checkbox" id="answer_checkbox05" ref={radioRefs[4]} value="5" onChange={() => pluralSelect("5")} />
                                <label htmlFor="answer_checkbox05">✔</label>
                                <span className="txt"><img src={image_math_img04_5} className="w50" /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemMath4;
import image_math_img03 from "@assets/image/exam/round1/elementary/math/math_img03.jpg";
import image_math_img03_1 from "@assets/image/exam/round1/elementary/math/math_img03_1.jpg";
import image_math_img03_2 from "@assets/image/exam/round1/elementary/math/math_img03_2.jpg";
import image_math_img03_3 from "@assets/image/exam/round1/elementary/math/math_img03_3.jpg";
import image_math_img03_4 from "@assets/image/exam/round1/elementary/math/math_img03_4.jpg";
import image_math_img03_5 from "@assets/image/exam/round1/elementary/math/math_img03_5.jpg";
import { useEffect, useRef } from "react";

const FirstExamElemMath3 = ({ updateQuestions, answer }) => {
  const radioRef1 = useRef();
  const radioRef2 = useRef();
  const radioRef3 = useRef();
  const radioRef4 = useRef();
  const radioRef5 = useRef();

  useEffect(() => {
    switch (answer) {
      case "1":
        radioRef1.current.checked = true;
        updateQuestions(3, "1");
        break;
      case "2":
        radioRef2.current.checked = true;
        updateQuestions(3, "2");
        break;
      case "3":
        radioRef3.current.checked = true;
        updateQuestions(3, "3");
        break;
      case "4":
        radioRef4.current.checked = true;
        updateQuestions(3, "4");
        break;
      case "5":
        radioRef5.current.checked = true;
        updateQuestions(3, "5");
        break;
    }
  }, [answer]);
  
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">3</span>
                            <span className="txt">다음 도형과 합동인 도형은 어느 것입니까?</span>
                        </div>
                        <div className="img-box">
                            <img src={image_math_img03} />
                        </div>
                        <ul className="answer-input-type radio image">
                            <li>
                                <input type="radio" name="answerMath3" id="answer_radio06" value="1" onChange={() => updateQuestions(3, "1")} ref={radioRef1} />
                                <label htmlFor="answer_radio06">1</label>
                                <span className="txt">
                                    <img src={image_math_img03_1} className="w50" />
                                </span>
                            </li>
                            <li>
                                <input type="radio" name="answerMath3" id="answer_radio07" value="2" onChange={() => updateQuestions(3, "2")} ref={radioRef2} />
                                <label htmlFor="answer_radio07">2</label>
                                <span className="txt">
                                    <img src={image_math_img03_2} className="w50" />
                                </span>
                            </li>
                            <li>
                                <input type="radio" name="answerMath3" id="answer_radio08" value="3" onChange={() => updateQuestions(3, "3")} ref={radioRef3} />
                                <label htmlFor="answer_radio08">3</label>
                                <span className="txt">
                                    <img src={image_math_img03_3} className="w50" />
                                </span>
                            </li>
                            <li>
                                <input type="radio" name="answerMath3" id="answer_radio09" value="4" onChange={() => updateQuestions(3, "4")} ref={radioRef4} />
                                <label htmlFor="answer_radio09">4</label>
                                <span className="txt">
                                    <img src={image_math_img03_4} className="w50" />
                                </span>
                            </li>
                            <li>
                                <input type="radio" name="answerMath3" id="answer_radio10" value="5" onChange={() => updateQuestions(3, "5")} ref={radioRef5} />
                                <label htmlFor="answer_radio10">5</label>
                                <span className="txt">
                                    <img src={image_math_img03_5} className="w50" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemMath3;
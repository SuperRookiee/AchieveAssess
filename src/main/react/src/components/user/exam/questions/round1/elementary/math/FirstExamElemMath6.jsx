import image_math_img10 from "@assets/image/exam/round1/elementary/math/math_img10.jpg";
import { useEffect, useRef } from "react";

const FirstExamElemMath6 = ({ updateQuestions, answer }) => {
  const radioRef1 = useRef();
  const radioRef2 = useRef();
  const radioRef3 = useRef();
  const radioRef4 = useRef();
  const radioRef5 = useRef();

  useEffect(() => {
    switch (answer) {
      case "1":
        radioRef1.current.checked = true;
        updateQuestions(6, "1");
        break;
      case "2":
        radioRef2.current.checked = true;
        updateQuestions(6, "2");
        break;
      case "3":
        radioRef3.current.checked = true;
        updateQuestions(6, "3");
        break;
      case "4":
        radioRef4.current.checked = true;
        updateQuestions(6, "4");
        break;
      case "5":
        radioRef5.current.checked = true;
        updateQuestions(6, "5");
        break;
    }
  }, [answer]);
  
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">6</span>
                            {/* s 220729 수정 */}
                            <span className="txt">직육면체를 보고 면 ㄱㄴㄷㄹ과 수직이 <em>아닌</em> 면을 고르시오.</span>
                            {/* e 220729 수정 */}
                        </div>
                        <div className="img-box">
                        <img src={image_math_img10} />
                        </div>
                        <ul className="answer-input-type radio">
                            <li>
                                <input type="radio" name="answerMath6" id="answer_radio26" value="1" onChange={() => updateQuestions(6, "1")} ref={radioRef1} />
                                <label htmlFor="answer_radio26">1</label>
                                <span className="txt">면 ㄴㅂㅅㄷ</span>
                            </li>
                            <li>
                                <input type="radio" name="answerMath6" id="answer_radio27" value="2" onChange={() => updateQuestions(6, "2")} ref={radioRef2} />
                                <label htmlFor="answer_radio27">2</label>
                                <span className="txt">면 ㅁㅂㅅㅇ</span>
                            </li>
                            <li>
                                <input type="radio" name="answerMath6" id="answer_radio28" value="3" onChange={() => updateQuestions(6, "3")} ref={radioRef3} />
                                <label htmlFor="answer_radio28">3</label>
                                <span className="txt">면 ㄱㅁㅇㄹ</span>
                            </li>
                            <li>
                                <input type="radio" name="answerMath6" id="answer_radio29" value="4" onChange={() => updateQuestions(6, "4")} ref={radioRef4} />
                                <label htmlFor="answer_radio29">4</label>
                                <span className="txt">면 ㄴㅂㅁㄱ</span>
                            </li>
                            <li>
                                <input type="radio" name="answerMath6" id="answer_radio30" value="5" onChange={() => updateQuestions(6, "5")} ref={radioRef5} />
                                <label htmlFor="answer_radio30">5</label>
                                <span className="txt">면 ㄷㅅㅇㄹ</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemMath6;
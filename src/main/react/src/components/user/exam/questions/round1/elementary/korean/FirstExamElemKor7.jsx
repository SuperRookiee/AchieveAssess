import img from '@assets/image/exam/round1/elementary/korean/korean_img07.jpg'
import { useEffect, useRef } from 'react';

const FirstExamElemKor7 = ({ updateQuestions, answer }) => {
  const radioRef1 = useRef();
  const radioRef2 = useRef();
  const radioRef3 = useRef();
  const radioRef4 = useRef();
  const radioRef5 = useRef();

  useEffect(() => {
    switch (answer) {
      case "1":
        radioRef1.current.checked = true;
        updateQuestions(7, "1");
        break;
      case "2":
        radioRef2.current.checked = true;
        updateQuestions(7, "2");
        break;
      case "3":
        radioRef3.current.checked = true;
        updateQuestions(7, "3");
        break;
      case "4":
        radioRef4.current.checked = true;
        updateQuestions(7, "4");
        break;
      case "5":
        radioRef5.current.checked = true;
        updateQuestions(7, "5");
        break;
    }
  }, [answer]);

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">7</span>
                            <span className="txt">다음 조사 방법과 조사 계획을 세운 내용을 보고 바르게 말한 것은 어느 것입니까?</span>
                        </div>
                        <div className="img-box">
                            <img src={img} alt="" />
                        </div>
                        <ul className="answer-input-type radio">
                            <li>
                                <input type="radio" name="answerKor7" id="answer_radio22_1" value="1" onChange={() => updateQuestions(7, "1")} ref={radioRef1}  />
                                <label htmlFor="answer_radio22_1">1</label>
                                <span className="txt">조사 기간을 정하지 않았다.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerKor7" id="answer_radio22_2" value="2" onChange={() => updateQuestions(7, "2")} ref={radioRef2} />
                                <label htmlFor="answer_radio22_2">2</label>
                                <span className="txt">조사 과정이 분명하지 않다.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerKor7" id="answer_radio22_3" value="3" onChange={() => updateQuestions(7, "3")} ref={radioRef3} />
                                <label htmlFor="answer_radio22_3">3</label>
                                <span className="txt">조사 대상을 정하지 않았다.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerKor7" id="answer_radio22_4" value="4" onChange={() => updateQuestions(7, "4")} ref={radioRef4} />
                                <label htmlFor="answer_radio22_4">4</label>
                                <span className="txt">조사 대상이 주제에 어울리지 않는다.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerKor7" id="answer_radio22_5" value="5" onChange={() => updateQuestions(7, "5")} ref={radioRef5} />
                                <label htmlFor="answer_radio22_5">5</label>
                                <span className="txt">여러 사람을 한꺼번에 조사할 수 있는 조사 방법을 선택하였다.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <canvas className="sketchpad" style="cursor: crosshair;" width="1260" height="1216"></canvas> */}
            </div>
        </div>
    )
}

export default FirstExamElemKor7;
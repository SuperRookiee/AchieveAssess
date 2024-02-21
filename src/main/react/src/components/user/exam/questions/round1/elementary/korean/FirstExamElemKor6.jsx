import img from '@assets/image/exam/round1/elementary/korean/korean_img06.jpg';
import { useEffect, useRef } from 'react';


const FirstExamElemKor6 = ({updateQuestions, answer}) => {
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
              <span className="txt">㉠ ~ ㉤ 중에서 ‘뜬금없는’의 뜻을 짐작할 수 있는 부분은 어디입니까?</span>
            </div>
            <div className="img-box">
              <img src={img} alt="" />
            </div>
            <ul className="answer-input-type radio">
              <li>
                <input type="radio" name="answerKor6" id="answer_radio20_1" value="1" onChange={() => updateQuestions(6, "1")} ref={radioRef1} />
                <label htmlFor="answer_radio20_1">1</label>
                <span className="txt">㉠</span>
              </li>
              <li>
                <input type="radio" name="answerKor6" id="answer_radio20_2" value="2" onChange={() => updateQuestions(6, "2")} ref={radioRef2} />
                <label htmlFor="answer_radio20_2">2</label>
                <span className="txt">㉡</span>
              </li>
              <li>
                <input type="radio" name="answerKor6" id="answer_radio20_3" value="3" onChange={() => updateQuestions(6, "3")} ref={radioRef3} />
                <label htmlFor="answer_radio20_3">3</label>
                <span className="txt">㉢</span>
              </li>
              <li>
                <input type="radio" name="answerKor6" id="answer_radio20_4" value="4" onChange={() => updateQuestions(6, "4")} ref={radioRef4} />
                <label htmlFor="answer_radio20_4">4</label>
                <span className="txt">㉣</span>
              </li>
              <li>
                <input type="radio" name="answerKor6" id="answer_radio20_5" value="5" onChange={() => updateQuestions(6, "5")} ref={radioRef5} />
                <label htmlFor="answer_radio20_5">5</label>
                <span className="txt">㉤</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <canvas className="sketchpad" style="cursor: crosshair;" width="1260" height="1216"></canvas> */}
      </div>
    </div>
  )
}

export default FirstExamElemKor6;
import img1 from '@assets/image/exam/round1/elementary/korean/korean_img05_1.jpg'
import img2 from '@assets/image/exam/round1/elementary/korean/korean_img05_2.jpg'
import img3 from '@assets/image/exam/round1/elementary/korean/korean_img05_3.jpg'
import img4 from '@assets/image/exam/round1/elementary/korean/korean_img05_4.jpg'
import img5 from '@assets/image/exam/round1/elementary/korean/korean_img05_5.jpg'
import { useEffect, useRef } from 'react'

const FirstExamElemKor5 = ({ updateQuestions, answer }) => {
  const radioRef1 = useRef();
  const radioRef2 = useRef();
  const radioRef3 = useRef();
  const radioRef4 = useRef();
  const radioRef5 = useRef();

  useEffect(() => {
    switch (answer) {
      case "1":
        radioRef1.current.checked = true;
        updateQuestions(5, "1");
        break;
      case "2":
        radioRef2.current.checked = true;
        updateQuestions(5, "2");
        break;
      case "3":
        radioRef3.current.checked = true;
        updateQuestions(5, "3");
        break;
      case "4":
        radioRef4.current.checked = true;
        updateQuestions(5, "4");
        break;
      case "5":
        radioRef5.current.checked = true;
        updateQuestions(5, "5");
        break;
    }
  }, [answer]);

  return (
    <div className="swiper-slide">
      <div className="page">
        <div className="inner">
          <div className="question">
            <div className="top">
              <span className="num">5</span>
              <span className="txt">누리 소통망에서 나눈 대화 가운데 예절을 지킨 대화는 어느 것입니까?</span>
            </div>
            <ul className="answer-input-type radio image">
              <li>
                <input type="radio" name="answerKor5" id="answer_radio13_1" value="1" onChange={() => updateQuestions(5, "1")} ref={radioRef1} />
                <label htmlFor="answer_radio13_1">1</label>
                <span className="txt">
                  <img src={img1} alt="" />
                </span>
              </li>
              <li>
                <input type="radio" name="answerKor5" id="answer_radio13_2" value="2" onChange={() => updateQuestions(5, "2")} ref={radioRef2} />
                <label htmlFor="answer_radio13_2">2</label>
                <span className="txt">
                  <img src={img2} alt="" />
                </span>
              </li>
              <li>
                <input type="radio" name="answerKor5" id="answer_radio13_3" value="3" onChange={() => updateQuestions(5, "3")} ref={radioRef3} />
                <label htmlFor="answer_radio13_3">3</label>
                <span className="txt">
                  <img src={img3} alt="" />
                </span>
              </li>
              <li>
                <input type="radio" name="answerKor5" id="answer_radio13_4" value="4" onChange={() => updateQuestions(5, "4")} ref={radioRef4} />
                <label htmlFor="answer_radio13_4">4</label>
                <span className="txt">
                  <img src={img4} alt="" />
                </span>
              </li>
              <li>
                <input type="radio" name="answerKor5" id="answer_radio13_5" value="5" onChange={() => updateQuestions(5, "5")} ref={radioRef5} />
                <label htmlFor="answer_radio13_5">5</label>
                <span className="txt">
                  <img src={img5} alt="" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* <canvas className="sketchpad" style="cursor: crosshair;" width="1260" height="1216"></canvas> */}
      </div>
    </div>
  )
}

export default FirstExamElemKor5;
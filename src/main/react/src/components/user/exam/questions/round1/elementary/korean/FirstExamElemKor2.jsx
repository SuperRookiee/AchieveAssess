import audio  from '@assets/image/exam/round1/elementary/korean/korean_audio_2.mp3'
import { useEffect, useRef } from "react";

const FirstExamElemKor2 = ({ updateQuestions, answer }) => {
  const radioRef1 = useRef();
  const radioRef2 = useRef();
  const radioRef3 = useRef();
  const radioRef4 = useRef();
  const radioRef5 = useRef();

  useEffect(() => {
    switch (answer) {
      case "1":
        radioRef1.current.checked = true;
        updateQuestions(2, "1");
        break;
      case "2":
        radioRef2.current.checked = true;
        updateQuestions(2, "2");
        break;
      case "3":
        radioRef3.current.checked = true;
        updateQuestions(2, "3");
        break;
      case "4":
        radioRef4.current.checked = true;
        updateQuestions(2, "4");
        break;
      case "5":
        radioRef5.current.checked = true;
        updateQuestions(2, "5");
        break;
    }
  }, [answer]);

  return (
    <div className="swiper-slide">
      <div className="page">
        <div className="inner">
          <div className="question">
            <div className="top">
              <span className="num">2</span>
              <span className="txt">(물음) 나성실의 말하기 상황으로 알맞지 <em className="underline">않은</em> 것은 어느 것입니까?</span>
            </div>
            <div className="img-box w80">
              <audio controls src={audio} type="audio/mpeg">
                브라우저가 audio 태그를 지원하지 않을 때 표시되는 문장
              </audio>
            </div>
            <ul className="answer-input-type radio">
              <li>
                <input type="radio" name="answerKor2" id="answer_radio03_1" value="1" onChange={() => updateQuestions(2, "1")} ref={radioRef1} />
                <label htmlFor="answer_radio03_1">1</label>
                <span className="txt">학생들에게 말하고 있다.</span>
              </li>
              <li>
                <input type="radio" name="answerKor2" id="answer_radio03_2" value="2" onChange={() => updateQuestions(2, "2")} ref={radioRef2} />
                <label htmlFor="answer_radio03_2">2</label>
                <span className="txt">비공식적인 말하기 상황이다.</span>
              </li>
              <li>
                <input type="radio" name="answerKor2" id="answer_radio03_3" value="3" onChange={() => updateQuestions(2, "3")} ref={radioRef3} />
                <label htmlFor="answer_radio03_3">3</label>
                <span className="txt">높임 표현을 써서 말하고 있다.</span>
              </li>
              <li>
                <input type="radio" name="answerKor2" id="answer_radio03_4" value="4" onChange={() => updateQuestions(2, "4")} ref={radioRef4} />
                <label htmlFor="answer_radio03_4">4</label>
                <span className="txt">전교 학생회 회장단 선거 후보 연설을 하고 있다.</span>
              </li>
              <li>
                <input type="radio" name="answerKor2" id="answer_radio03_5" value="5" onChange={() => updateQuestions(2, "5")} ref={radioRef5} />
                <label htmlFor="answer_radio03_5">5</label>
                <span className="txt">전교 학생회 회장단 선거 후보자가 되어 공약을 발표하고 있다.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstExamElemKor2;
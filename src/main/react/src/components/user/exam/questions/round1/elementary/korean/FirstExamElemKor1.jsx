import audio from '@assets/image/exam/round1/elementary/korean/korean_audio_1.mp3'
import { useEffect, useRef, useState } from "react";

const FirstExamElemKor1 = ({ updateQuestions, answer }) => {
  const chooseCount = 2; // 선택 가능한 문제 수
  const [select, setSelect] = useState([]);
  const radioRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const pluralSelect = (value) => {
    if (select.includes(value)) {
      setSelect(select.filter((item) => item !== value));
    } else if (select.length < chooseCount) {
      setSelect([...select, value]);
    }
  };

  useEffect(() => {
    if (select.length > 0) {
      select.sort();
      updateQuestions(1, select.join());
    } else {
      updateQuestions(1, null);
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
              <span className="num">1</span>
              <span className="txt">(물음) 찬성편이 근거를 뒷받침하기 위한 자료로 제시한 것을 두 가지 고르시오.</span>
            </div>
            <div className="img-box w80">
              <audio controls src={audio} type="audio/mpeg">
                브라우저가 audio 태그를 지원하지 않을 때 표시되는 문장
              </audio>
            </div>
            <ul className="answer-input-type radio">
              <li>
                <input type="checkbox" name="answerKor1" id="answer_radio02_1" ref={radioRefs[0]} value="1" onChange={() => pluralSelect("1")} />
                <label htmlFor="answer_radio02_1">1</label>
                <span className="txt">교장 선생님의 의견</span>
              </li>
              <li>
                <input type="checkbox" name="answerKor1" id="answer_radio02_2" ref={radioRefs[1]} value="2" onChange={() => pluralSelect("2")} />
                <label htmlFor="answer_radio02_2">2</label>
                <span className="txt">전문가의 면담 자료</span>
              </li>
              <li>
                <input type="checkbox" name="answerKor1" id="answer_radio02_3" ref={radioRefs[2]} value="3" onChange={() => pluralSelect("3")} />
                <label htmlFor="answer_radio02_3">3</label>
                <span className="txt">학급 임원을 뽑는 방법을 검색한 결과</span>
              </li>
              <li>
                <input type="checkbox" name="answerKor1" id="answer_radio02_4" ref={radioRefs[3]} value="4" onChange={() => pluralSelect("4")} />
                <label htmlFor="answer_radio02_4">4</label>
                <span className="txt">학급 임원을 한 경험이 있는 학생의 면담 자료</span>
              </li>
              <li>
                <input type="checkbox" name="answerKor1" id="answer_radio02_5" ref={radioRefs[4]} value="5" onChange={() => pluralSelect("5")} />
                <label htmlFor="answer_radio02_5">5</label>
                <span className="txt">같은 지역 초등학교를 대상으로 한 설문 조사 자료</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstExamElemKor1;
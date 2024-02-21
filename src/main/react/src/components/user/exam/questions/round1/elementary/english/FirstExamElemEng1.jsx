import image_english_img01 from "@assets/image/exam/round1/elementary/english/english_img01.jpg";
import audio_english_01 from "@assets/image/exam/round1/elementary/english/초6영어(1회_1번).mp3";
import { useEffect, useRef } from "react";

const FirstExamElemEng1 = ({ updateQuestions, answer }) => {
  const radioRef1 = useRef();
  const radioRef2 = useRef();
  const radioRef3 = useRef();
  const radioRef4 = useRef();
  const radioRef5 = useRef();

  useEffect(() => {
    switch (answer) {
      case "1":
        radioRef1.current.checked = true;
        updateQuestions(1, "1");
        break;
      case "2":
        radioRef2.current.checked = true;
        updateQuestions(1, "2");
        break;
      case "3":
        radioRef3.current.checked = true;
        updateQuestions(1, "3");
        break;
      case "4":
        radioRef4.current.checked = true;
        updateQuestions(1, "4");
        break;
      case "5":
        radioRef5.current.checked = true;
        updateQuestions(1, "5");
        break;
    }
  }, [answer]);

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">1</span>
                            <span className="txt">다음을 듣고, 주어진 응답에 알맞은 질문을 고르시오.</span>
                        </div>
                        <div className="img-box w80">
                            <audio controls src={audio_english_01} type="audio/mpeg">
                                브라우저가 audio 태그를 지원하지 않을 때 표시되는 문장
                            </audio>
                        </div>
                        <div className="img-box w90">
                            <img src={image_english_img01} />
                        </div>
                        <ul className="answer-input-type radio horizontal-type">
                            <li>
                                <input type="radio" name="answerEng1" id="answer_radio01" value="1" onChange={() => updateQuestions(1, "1")} ref={radioRef1}  />
                                    <label htmlFor="answer_radio01">1</label>
                                    <span className="txt"> &nbsp; </span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng1" id="answer_radio02" value="2" onChange={() => updateQuestions(1, "2")} ref={radioRef2}  />
                                    <label htmlFor="answer_radio02">2</label>
                                    <span className="txt"> &nbsp; </span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng1" id="answer_radio03" value="3" onChange={() => updateQuestions(1, "3")} ref={radioRef3}  />
                                    <label htmlFor="answer_radio03">3</label>
                                    <span className="txt"> &nbsp; </span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng1" id="answer_radio04" value="4" onChange={() => updateQuestions(1, "4")} ref={radioRef4}  />
                                    <label htmlFor="answer_radio04">4</label>
                                    <span className="txt"> &nbsp; </span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng1" id="answer_radio05" value="5" onChange={() => updateQuestions(1, "5")} ref={radioRef5}  />
                                    <label htmlFor="answer_radio05">5</label>
                                    <span className="txt"> &nbsp; </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemEng1;
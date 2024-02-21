import image_english_img22 from "@assets/image/exam/round1/elementary/english/english_img22.jpg";
import image_english_img22_1 from "@assets/image/exam/round1/elementary/english/english_img22_1.jpg";
import image_english_img22_2 from "@assets/image/exam/round1/elementary/english/english_img22_2.jpg";
import image_english_img22_3 from "@assets/image/exam/round1/elementary/english/english_img22_3.jpg";
import image_english_img22_4 from "@assets/image/exam/round1/elementary/english/english_img22_4.jpg";
import image_english_img22_5 from "@assets/image/exam/round1/elementary/english/english_img22_5.jpg";
import { useEffect, useRef } from "react";

const FirstExamElemEng7 = ({ updateQuestions, answer }) => {
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
                            <span className="txt">다음은 민호가 쓴 일기이다. 민호가 오늘 한 일로 알맞은 것은?</span>
                        </div>
                        <div className="img-box w90">
                            <img src={image_english_img22} />
                        </div>
                        <ul className="answer-input-type radio image">
                            <li>
                                <input type="radio" name="answerEng7" id="answer_radio76" value="1" onChange={() => updateQuestions(7, "1")} ref={radioRef1} />
                                <label htmlFor="answer_radio76">1</label>
                                <span className="txt">
                                    <img src={image_english_img22_1} className="w60" />
                                </span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng7" id="answer_radio77" value="2" onChange={() => updateQuestions(7, "2")} ref={radioRef2} />
                                <label htmlFor="answer_radio77">2</label>
                                <span className="txt">
                                    <img src={image_english_img22_2} className="w60" />
                                </span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng7" id="answer_radio78" value="3" onChange={() => updateQuestions(7, "3")} ref={radioRef3} />
                                <label htmlFor="answer_radio78">3</label>
                                <span className="txt">
                                    <img src={image_english_img22_3} className="w60" />
                                </span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng7" id="answer_radio79" value="4" onChange={() => updateQuestions(7, "4")} ref={radioRef4} />
                                <label htmlFor="answer_radio79">4</label>
                                <span className="txt">
                                    <img src={image_english_img22_4} className="w60" />
                                </span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng7" id="answer_radio80" value="5" onChange={() => updateQuestions(7, "5")} ref={radioRef5} />
                                <label htmlFor="answer_radio80">5</label>
                                <span className="txt">
                                    <img src={image_english_img22_5} className="w60" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemEng7;
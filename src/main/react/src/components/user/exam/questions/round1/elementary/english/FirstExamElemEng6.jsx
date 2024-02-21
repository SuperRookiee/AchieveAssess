import image_english_img21 from "@assets/image/exam/round1/elementary/english/english_img21.jpg";
import { useEffect, useRef } from "react";

const FirstExamElemEng6 = ({ updateQuestions, answer }) => {
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
                            <span className="txt">다음 대화의 빈칸에 들어갈 응답으로 알맞은 것은?</span>
                        </div>
                        <div className="img-box w90">
                        <img src={image_english_img21} />
                        </div>
                        <ul className="answer-input-type radio">
                            <li>
                                <input type="radio" name="answerEng6" id="answer_radio71" value="1" onChange={() => updateQuestions(6, "1")} ref={radioRef1} />
                                <label htmlFor="answer_radio71">1</label>
                                <span className="txt">Yes, I am.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng6" id="answer_radio72" value="2" onChange={() => updateQuestions(6, "2")} ref={radioRef2} />
                                <label htmlFor="answer_radio72">2</label>
                                <span className="txt">No, thanks.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng6" id="answer_radio73" value="3" onChange={() => updateQuestions(6, "3")} ref={radioRef3}  />
                                <label htmlFor="answer_radio73">3</label>
                                <span className="txt">No, I don’t.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng6" id="answer_radio74" value="4" onChange={() => updateQuestions(6, "4")} ref={radioRef4}  />
                                <label htmlFor="answer_radio74">4</label>
                                <span className="txt">Yes, you can.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerEng6" id="answer_radio75" value="5" onChange={() => updateQuestions(6, "5")} ref={radioRef5}  />
                                <label htmlFor="answer_radio75">5</label>
                                <span className="txt">Sorry, you can’t.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemEng6;
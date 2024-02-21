import { useEffect, useRef } from "react";

const FirstExamElemKor4 = ({ updateQuestions, answer }) => {
    const radioRef1 = useRef();
    const radioRef2 = useRef();
    const radioRef3 = useRef();
    const radioRef4 = useRef();
    const radioRef5 = useRef();
  
    useEffect(() => {
      switch (answer) {
        case "1":
          radioRef1.current.checked = true;
          updateQuestions(4, "1");
          break;
        case "2":
          radioRef2.current.checked = true;
          updateQuestions(4, "2");
          break;
        case "3":
          radioRef3.current.checked = true;
          updateQuestions(4, "3");
          break;
        case "4":
          radioRef4.current.checked = true;
          updateQuestions(4, "4");
          break;
        case "5":
          radioRef5.current.checked = true;
          updateQuestions(4, "5");
          break;
      }
    }, [answer]);
  
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">4</span>
                            <span className="txt">글쓴이의 주장은 무엇입니까?</span>
                        </div>
                        <div className="text-box">
                            ㈎ 우리나라뿐만 아니라 세계 곳곳에서 벌어지는자연 개발은 우리 삶을 위협한다. 이러한 무분별한 개발로 우리 삶의 터전인 자연은 몸살을 앓고, 이제 인류의 생존까지 위협하는 상황에 이르렀다. 우리는 자연의 목소리에 귀를 기울이고 자연을 보호해야 한다. 왜 자연을 보호해야 할까?
                            <br />
                            ㈏ 자연은 한번 파괴되면 복원되기가 어렵다. 어린나무 한 그루가 아름드리나무로 성장하는 데 약 30년에서 50년이 걸린다고 한다. 우유 한 컵(150밀리리터)으로 오염된 물을 물고기가 살 수 있는 깨끗한 물로 만들려면 우유 한 컵의 약 2만 배의 물이 필요하다. 이처럼 환경을 오염시키는 것은 순식간이지만 오염된 환경을 되살리는 데는 수십, 수백 배의 시간과 노력이 든다. 자연의 힘이 아무리 위대해도 자정 능력을 넘어서는 오염을 감당하기는 어렵다.
                        </div>
                        <ul className="answer-input-type radio">
                            <li>
                                <input type="radio" name="answerKor4" id="answer_radio12_1" value="1" onChange={() => updateQuestions(4, "1")} ref={radioRef1} />
                                <label htmlFor="answer_radio12_1">1</label>
                                <span className="txt">자연을 보호해야 한다.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerKor4" id="answer_radio12_2" value="2" onChange={() => updateQuestions(4, "2")} ref={radioRef2} />
                                <label htmlFor="answer_radio12_2">2</label>
                                <span className="txt">자연 개발은 우리 삶을 위협한다.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerKor4" id="answer_radio12_3" value="3" onChange={() => updateQuestions(4, "3")} ref={radioRef3} />
                                <label htmlFor="answer_radio12_3">3</label>
                                <span className="txt">자연은 한번 파괴되면 복원되기가 어렵다.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerKor4" id="answer_radio12_4" value="4" onChange={() => updateQuestions(4, "4")} ref={radioRef4} />
                                <label htmlFor="answer_radio12_4">4</label>
                                <span className="txt">자연은 우리 후손이 살아갈 삶의 터전이다.</span>
                            </li>
                            <li>
                                <input type="radio" name="answerKor4" id="answer_radio12_5" value="5" onChange={() => updateQuestions(4, "5")} ref={radioRef5} />
                                <label htmlFor="answer_radio12_5">5</label>
                                <span className="txt">무리한 자연 개발은 경제 발전에 도움이 되지 않는다.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <canvas className="sketchpad" style="cursor: crosshair;" width="1260" height="1216"></canvas> */}
            </div>
        </div>
    )
}

export default FirstExamElemKor4;
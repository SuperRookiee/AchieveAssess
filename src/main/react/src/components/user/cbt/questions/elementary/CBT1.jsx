const CBT1 = ({ updateQuestions }) => {
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">1</span>
                            <span className="txt">문장에서의 역할이 자료의 밑줄 친 부분과 같은 것을 선택하시오.</span>
                        </div>
                        <div className="answer-drag-type ml65">
                            <span>자료</span>
                            <p className="btn-text ui-drag-txt">4학년 학생들이 학교 지정 병원에서 <em>건강 검진을</em> 받았다.</p>
                        </div>
                    </div>
                    <ul className="answer-input-type radio">
                        <li>
                            <input type="radio" name="answer" id="answer_radio01" value="1" onChange={() => updateQuestions(1, "1")} />
                            <label htmlFor="answer_radio01">1</label>
                            <span className="txt">동생은 <em>초등학생이다.</em></span>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="answer_radio02" value="2" onChange={() => updateQuestions(1, "2")} />
                            <label htmlFor="answer_radio02">2</label>
                            <span className="txt"><em>농부가</em> 황소를 끌고 간다.</span>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="answer_radio03" value="3" onChange={() => updateQuestions(1, "3")} />
                            <label htmlFor="answer_radio03">3</label>
                            <span className="txt">토끼가 <em>깡충깡충</em> 뛰어갑니다.</span>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="answer_radio04" value="4" onChange={() => updateQuestions(1, "4")} />
                            <label htmlFor="answer_radio04">4</label>
                            <span className="txt">지난주 학생회에서 <em>양로원을</em> 방문하였다.</span>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="answer_radio5" value="5" onChange={() => updateQuestions(1, "5")} />
                            <label htmlFor="answer_radio5">5</label>
                            <span className="txt">어디선가 <em>아름다운</em> 피리 소리가 들렸습니다.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CBT1;
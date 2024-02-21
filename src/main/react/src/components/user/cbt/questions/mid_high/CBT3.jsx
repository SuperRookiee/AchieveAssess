const CBT3 = ({ updateQuestions }) => {
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">3</span>
                            <span className="txt">x = -3, y = 2 일 때, x² + xy의 값은?</span>
                        </div>
                        <ul className="answer-input-type radio">
                            <li>
                                <input type="radio" name="answer" id="answer_radio06" value="1" />
                                <label htmlFor="answer_radio06" onClick={() => updateQuestions(3, "-15")}>1</label>
                                <span className="txt">-15</span>
                            </li>
                            <li>
                                <input type="radio" name="answer" id="answer_radio07" value="2" />
                                <label htmlFor="answer_radio07" onClick={() => updateQuestions(3, "-3")}>2</label>
                                <span className="txt">-3</span>
                            </li>
                            <li>
                                <input type="radio" name="answer" id="answer_radio08" value="3" />
                                <label htmlFor="answer_radio08" onClick={() => updateQuestions(3, "0")}>3</label>
                                <span className="txt">0</span>
                            </li>
                            <li>
                                <input type="radio" name="answer" id="answer_radio09" value="4" />
                                <label htmlFor="answer_radio09" onClick={() => updateQuestions(3, "3")}>4</label>
                                <span className="txt">3</span>
                            </li>
                            <li>
                                <input type="radio" name="answer" id="answer_radio10" value="5" />
                                <label htmlFor="answer_radio10" onClick={() => updateQuestions(3, "15")}>5</label>
                                <span className="txt">15</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CBT3;
import img3 from '@assets/image/question/img03.png';
import img4 from '@assets/image/question/img04.png';
import img5 from '@assets/image/question/img05.png';

const CBT5 = ({ updateQuestions }) => {
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">5</span>
                            <span className="txt">지구계에서 수권과 기권의 상호작용에 의해 나타나는 현상을 모두 선택하시오.</span>
                        </div>
                        <ul className="answer-input-type checkbox image">
                            <li>
                                <input type="checkbox" id="answer_checkbox06" value="1" />
                                <label htmlFor="answer_checkbox06" onClick={() => updateQuestions(5, "1")}>✔</label>
                                <span className="txt"><img src={img3} alt="" /></span>
                            </li>
                            <li>
                                <input type="checkbox" id="answer_checkbox07" value="2" />
                                <label htmlFor="answer_checkbox07" onClick={() => updateQuestions(5, "2")}>✔</label>
                                <span className="txt"><img src={img4} alt="" /></span>
                            </li>
                            <li>
                                <input type="checkbox" id="answer_checkbox08" value="3" />
                                <label htmlFor="answer_checkbox08" onClick={() => updateQuestions(5, "3")}>✔</label>
                                <span className="txt"><img src={img5} alt="" /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBT5;
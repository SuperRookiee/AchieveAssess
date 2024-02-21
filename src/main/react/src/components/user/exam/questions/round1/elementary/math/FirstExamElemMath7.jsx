import image_math_img18 from "@assets/image/exam/round1/elementary/math/math_img18.jpg";
import { useEffect, useState } from "react";
const FirstExamElemMath7 = ({ updateQuestions, answer }) => {
    const answers = answer ? answer.split(",") : ["", "", "", "", ""];
    const [inputValue1, setInputValue1] = useState(answers[0]);
    const [inputValue2, setInputValue2] = useState(answers[1]);
    const [inputValue3, setInputValue3] = useState(answers[2]);
    const [inputValue4, setInputValue4] = useState(answers[3]);
    const [inputValue5, setInputValue5] = useState(answers[4]);

    const handleChange1 = (e) => {
        const newValue = e.target.value;
        setInputValue1(newValue);
      };
    
      const handleChange2 = (e) => {
        const newValue = e.target.value;
        setInputValue2(newValue);
      };

      const handleChange3 = (e) => {
        const newValue = e.target.value;
        setInputValue3(newValue);
      };

      const handleChange4 = (e) => {
        const newValue = e.target.value;
        setInputValue4(newValue);
      };

      const handleChange5 = (e) => {
        const newValue = e.target.value;
        setInputValue5(newValue);
      };

      useEffect(() => {
        const values = [inputValue1, inputValue2, inputValue3, inputValue4, inputValue5].filter(Boolean);
        updateQuestions(7, values.length > 0 ? values.join(",") : null);
    }, [inputValue1, inputValue2, inputValue3, inputValue4, inputValue5]);

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">7</span>

                            <span className="txt"> 어느 해 우리나라 인구를 조사하여 나타낸 원그래프가 있습니다. 원그래프를 보고 굵은 글씨 부분을 눌러 알맞게 고쳐 쓰시오.</span>
                        </div>
                        <div className="img-box">
                        <img src={image_math_img18} />
                        </div>
                        <ul className="answer-input-type radio input-box">
                            <li>
                                <input type="radio" name="answer" id="answer_radio61" value="1" />
                                    <label htmlFor="answer_radio61">1</label>
                                    <div className="answer-input-type">
                                        <span className="txt">인구가 두 번째로 많은 지역은</span>
                                        <input type="text" className="modify" placeholder="경기도" value={inputValue1} onChange={handleChange1} />
                                            <span className="txt2">입니다.</span>
                                    </div>
                            </li>
                            <li>
                                <input type="radio" name="answer" id="answer_radio62" value="2" />
                                    <label htmlFor="answer_radio62">2</label>
                                    <div className="answer-input-type">
                                        <span className="txt">전라도와</span>
                                        <input type="text" className="modify" placeholder="충청도" value={inputValue2} onChange={handleChange2} />
                                            <span className="txt2">의 인구는 같습니다.</span>
                                    </div>
                            </li>
                            <li>
                                <input type="radio" name="answer" id="answer_radio63" value="3" />
                                    <label htmlFor="answer_radio63">3</label>
                                    <div className="answer-input-type">
                                        <input type="text" className="modify ml-5" placeholder="제주도" value={inputValue3} onChange={handleChange3} />
                                            <span className="txt pl-20" >의 인구가 가장 적습니다.
                                            </span>
                                    </div>
                            </li>
                            <li>
                                <input type="radio" name="answer" id="answer_radio64" value="4" />
                                    <label htmlFor="answer_radio64">4</label>
                                    <div className="answer-input-type">
                                        <span className="txt">서울의 인구는</span>
                                        <input type="text" className="modify" placeholder="20" value={inputValue4} onChange={handleChange4} />
                                            <span className="txt2">%입니다.</span>
                                    </div>
                            </li>
                            <li>
                                <input type="radio" name="answer" id="answer_radio65" value="5" />
                                    <label htmlFor="answer_radio65">5</label>
                                    <div className="answer-input-type">
                                        <span className="txt">강원도의 인구는 경상도의 인구의</span>
                                        <input type="text" className="modify" placeholder="3" value={inputValue5} onChange={handleChange5} />
                                            <span className="txt2">배입니다.</span>
                                    </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FirstExamElemMath7;

import img10 from '@assets/image/question/img10.png';
import { useEffect, useState } from 'react';

const CBT9 = ({ updateQuestions }) => {
    const chooseCount = 5;
    const [select, setSelect] = useState([]);

    const pluralSelect = (answer) => {
        setSelect((prevSelect) => {
            if (prevSelect.includes(answer)) {
                return prevSelect.filter(item => item !== answer);
            } 
            else if (prevSelect.length < chooseCount) {
                return [...prevSelect, answer];
            }
            return prevSelect;
        });
    }

    useEffect(() => {
        if (select.length > 0) {
            select.sort();
            updateQuestions(4, select.join());
        }
        else {
            updateQuestions(4, null);
        }
    }, [select]);

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">9</span>
                            <span className="txt">다음 대화를 읽고, 알맞은 문명의 위치를 표시하여 메시지를 보내시오.</span>
                        </div>
                        <div className="chat-area">
                            <span className="txt">채팅방</span>
                            <div className="answer-map-type">
                                <img src={img10} alt=""/>
                                    <svg>
                                        <g className={select.includes("1") ? "on" : ""} onClick={() => pluralSelect("1")}><circle cx="352" cy="493" r="15"></circle></g>
                                        <g className={select.includes("2") ? "on" : ""} onClick={() => pluralSelect("2")}><circle cx="380" cy="550" r="15"></circle></g>
                                        <g className={select.includes("3") ? "on" : ""} onClick={() => pluralSelect("3")}><circle cx="417" cy="520" r="15"></circle></g>
                                        <g className={select.includes("4") ? "on" : ""} onClick={() => pluralSelect("4")}><circle cx="505" cy="538" r="15"></circle></g>
                                        <g className={select.includes("5") ? "on" : ""} onClick={() => pluralSelect("5")}><circle cx="650" cy="512" r="15"></circle></g>
                                    </svg>

                            </div>
                            <button className="send-btn">보내기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBT9;
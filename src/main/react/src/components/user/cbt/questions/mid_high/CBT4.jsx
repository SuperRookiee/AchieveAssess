import img2 from '@assets/image/question/img02.png';
import { memo, useEffect, useState } from 'react';

const CBT4 = ({ updateQuestions }) => {
    const chooseCount = 2; // 선택 가능한 문제 수
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
                            <span className="num">4</span>
                            <span className="txt">지도에 표시된 네 개 도시 중 현지 특파원이 옳게 보도한 도시 2개를 선택하시오.</span>
                        </div>
                        <div className="answer-map-type">
                            <img src={img2} alt="" />
                            <svg>
                                <g className={select.includes("런던") ? "on" : ""} onClick={() => pluralSelect("런던")}><circle cx="96" cy="745" r="20"></circle></g>
                                <g className={select.includes("서울") ? "on" : ""} onClick={() => pluralSelect("서울")}><circle cx="400" cy="780" r="20"></circle></g>
                                <g className={select.includes("시드니") ? "on" : ""} onClick={() => pluralSelect("시드니")}><circle cx="458" cy="936" r="20"></circle></g>
                                <g className={select.includes("뉴욕") ? "on" : ""} onClick={() => pluralSelect("뉴욕")}><circle cx="785" cy="769" r="20"></circle></g>
                                <g className={select.includes("리우데자네이루") ? "on" : ""} onClick={() => pluralSelect("리우데자네이루")}><circle cx="851" cy="913" r="20"></circle></g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(CBT4);
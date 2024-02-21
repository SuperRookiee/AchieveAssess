import { useState } from "react";

const FirstExamElemKor10 = ({ updateQuestions, answer }) => {
    const [inputValue, setInputValue] = useState(answer);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        updateQuestions(10, newValue === "" ? null : newValue);
    };

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">10</span>
                            <span className="txt">경복궁에서 가장 웅장한 건물은 무엇인지 글에서 찾아 쓰시오.</span>
                        </div>
                        <div className="text-box">
                            ㈎ 경복궁의 건물은 7600여 칸으로 규모가 어마어마하다. 경복궁에서 가장 웅장한 건물은 ‘부지런히 나라를 다스리라’는 뜻을 지닌 근정전이다. 근정전은 왕의 즉위식, 왕실의 혼례식, 외국 사신과의 만남과 같은 나라의 중요한 행사를 치르던 곳이다.
                            <br />
                            ㈏ ‘경사스러운 연회’라는 뜻의 경회루는 커다란 연못 중앙에 섬을 만들고 그 위에 지은, 우리나라에서 가장 큰 누각이다. 이곳은 왕이 외국 사신을 접대하거나 신하들에게 연회를 베풀던 장소이다.
                        </div>
                        <div className="answer-input-type textline">
                            <span className="txt">(</span>
                            <input type="text" value={inputValue || ""} onChange={handleChange} />
                            <span className="txt">)</span>
                        </div>
                    </div>
                </div>
                {/* <canvas className="sketchpad" style="cursor: crosshair;" width="1260" height="1216"></canvas> */}
            </div>
        </div>
    )
}

export default FirstExamElemKor10;
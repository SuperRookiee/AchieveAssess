import { useState } from "react";

const FirstExamElemKor9 = ({ updateQuestions, answer }) => {
    const [inputValue, setInputValue] = useState(answer);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        updateQuestions(9, newValue === "" ? null : newValue);
    };

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">9</span>
                            <span className="txt">이 글의 중심 낱말을 찾아 세 글자로 쓰시오.</span>
                        </div>
                        <div className="text-box">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;식물이 줄기에 어떤 모양으로 잎을 붙여 나가는지 그 기술을 알아보기로 할까요? 줄기에 차례대로 잎을 붙여 나가는 모양을 ‘잎차례’라고 합니다.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;먼저, 줄기 마디마다 잎을 한 장씩 피우되 서로어긋나게 피우는 방법이 있습니다. 이것을 ‘어긋나기’라 합니다. 국수나무처럼 평행하게 어긋나기만 하는 식물이 있는가 하면, 해바라기처럼 소용돌이 모양으로 돌려나면서 어긋나는 식물도 있습니다.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이와는 달리 줄기 한 마디에 잎 두 장이 마주 보는 ‘마주나기’도 있습니다. 단풍나무나 화살나무는 잎 두 장이 사이좋게 마주 보고 있습니다. 그리고 마주 난 잎들이 마디마다 서로 어긋나지 않고 평행합니다.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그런가 하면 한 마디에 잎이 석 장 이상 돌려나는 잎차례가 있습니다. 이런 잎차례를 ‘돌려나기’라고 합니다. 갈퀴꼭두서니는 마디마다 잎이 여섯 장에서 여덟 장씩 돌려나기로 핍니다.
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

export default FirstExamElemKor9;
import { useRef, useState } from "react";

const CBT3 = ({ updateQuestions }) => {
    const textRef = useRef(null);
    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        updateQuestions('3', newText);
    };

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">3</span>
                            <span className="txt">비어 있는 욕조 모형에 물을 매 분 1000〖𝑐𝑚〗^3 씩 넣었더니 33분 후 물의 높이가 30cm가 되었다.<br />a의 값을 구하는 풀이 과정과 답을 쓰시오. (단, 욕조 모형의 각 면의 두께는 고려하지 않는다.)</span>
                        </div>
                        <div className="answer-textarea-type">
                        <textarea ref={textRef} cols="30" rows="10" placeholder="답변을 입력하세요." value={text} onChange={handleTextChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBT3;
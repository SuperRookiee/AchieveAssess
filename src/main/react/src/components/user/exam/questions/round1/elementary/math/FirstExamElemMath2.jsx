import image_math_img02 from "@assets/image/exam/round1/elementary/math/math_img02.jpg";
import { useEffect, useState } from "react";

const FirstExamElemMath2 = ({ updateQuestions }) => {
    const [dropTarget, setDropTarget] = useState(null);
    const [dropContent, setDropContent] = useState(null);
    const [dragOpacity, setDragOpacity] = useState({});

    const handleDragStart = (e, name) => {
        e.dataTransfer.setData('text/plain', name);
    };

    const handleDrop = (e) => {
        const data = e.dataTransfer.getData('text/plain');
        if (data) {
            setDropTarget(data);
            setDropContent(data);
            setDragOpacity({});
            setDragOpacity({ [data]: 0.5 });
        }
    };

    const clearDropTarget = () => {
        setDropTarget(null);
        setDropContent(null);
        updateQuestions(2, null);
        setDragOpacity({});
    };

    useEffect(() => {
        if (dropContent) {
            setDragOpacity({ [dropContent]: 0.5 });
            updateQuestions(2, dropContent);
        }
    }, [dropContent]);

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">2</span>
                            <span className="txt">수직선을 보고 수의 범위를 나타낸 것입니다. 빈칸 안에 알맞은 말을 골라 끌어 놓으시오.</span>
                        </div>
                        <div className="img-box">
                            <img src={image_math_img02} />
                        </div>
                        <div className="text-box ui-drop-txt">
                            9<span className={`drop ${dropTarget ? 'on' : ''}`} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} onClick={(clearDropTarget)}>
                                {dropContent}
                            </span>인 수
                        </div>
                    </div>
                    <div className="answer-drag-type">
                        <span>보기</span>
                        <ul className="btn-text ui-drag-txt">
                            <li className={`drag`} draggable="true" name="초과" onDragStart={(e) => handleDragStart(e, '초과')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['초과'] || 1 }}>초과</li>
                            <li className={`drag`} draggable="true" name="미만" onDragStart={(e) => handleDragStart(e, '미만')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['미만'] || 1 }}>미만</li>
                            <li className={`drag`} draggable="true" name="이상" onDragStart={(e) => handleDragStart(e, '이상')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['이상'] || 1 }}>이상</li>
                            <li className={`drag`} draggable="true" name="이하" onDragStart={(e) => handleDragStart(e, '이하')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['이하'] || 1 }}>이하</li>
                            <li className={`drag`} draggable="true" name="올림" onDragStart={(e) => handleDragStart(e, '올림')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['올림'] || 1 }}>올림</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemMath2;
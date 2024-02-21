import image_english_img18 from "@assets/image/exam/round1/elementary/english/english_img18.jpg";
import { useEffect, useState } from "react";

const FirstExamElemEng4 = ({ updateQuestions }) => {
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
        updateQuestions(4, null);
        setDragOpacity({});
    };

    useEffect(() => {
        if (dropContent) {
            setDragOpacity({ [dropContent]: 0.5 });
            updateQuestions(4, dropContent);
        }
    }, [dropContent]);
    
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">4</span>
                            <span className="txt"> 보기에 이어 대화가 자연스럽게 이어질 수 있도록 보기에서 문장을 끌어놓으시오.</span>
                        </div>
                        <div className="chat-area">
                            <span className="txt">채팅방</span>
                            <img src={image_english_img18} />
                            <div className="chat-box chat-box1"></div>
                        </div>
                        <div className="bottom">
                            <div className="drop-area">
                                <div className="border ui-drop-txt">
                                    <span className={`drop ${dropTarget ? 'on' : ''}`} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} onClick={(clearDropTarget)}>
                                        {dropContent}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* s 220729 수정 */}
                    <div className="answer-drag-type">
                        <span>보기</span>
                        <ul className="btn-text ui-drag-txt">
                            <li className={`drag`} draggable="true" name="It was good." onDragStart={(e) => handleDragStart(e, 'It was good.')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['It was good.'] || 1 }}>It was good.</li>
                            <li className={`drag`} draggable="true" name="I’ll learn Chinese." onDragStart={(e) => handleDragStart(e, 'I’ll learn Chinese.')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['I’ll learn Chinese.'] || 1 }}>I’ll learn Chinese.</li>
                            <li className={`drag`} draggable="true" name="I went to the beach." onDragStart={(e) => handleDragStart(e, 'I went to the beach.')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['I went to the beach.'] || 1 }}>I went to the beach.</li>
                            <li className={`drag`} draggable="true" name="I have a robot className."  onDragStart={(e) => handleDragStart(e, 'I have a robot className.')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['I have a robot className.'] || 1 }}>I have a robot className.</li>
                            <li className={`drag`} draggable="true" name="I’m taking pictures."  onDragStart={(e) => handleDragStart(e, 'I’m taking pictures.')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['I’m taking pictures.'] || 1 }}>I’m taking pictures.</li>
                        </ul>
                    </div>
                    {/* e 220729 수정 */}
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemEng4;
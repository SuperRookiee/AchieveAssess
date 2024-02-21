import image_english_img20 from "@assets/image/exam/round1/elementary/english/english_img20.jpg";
import { useEffect, useState } from "react";

const NewPageComponent = ({ updateQuestions }) => {
    const [dropTarget, setDropTarget] = useState(null);
    const [dropContent, setDropContent] = useState(Array(3).fill(null));
    const [dragOpacity, setDragOpacity] = useState({});

    const handleDragStart = (e, name) => {
        e.dataTransfer.setData('text/plain', name);
    };

    const setOpacity = (name, opacityValue) => {
        setDragOpacity((prevOpacity) => {
            const newOpacity = { ...prevOpacity };
            newOpacity[name] = opacityValue;
            return newOpacity;
        });
    };

    const handleDrop = (index) => (e) => {
        const data = e.dataTransfer.getData('text/plain');
        if (data) {
            setDropContent(prevContent => {
                const newContent = [...prevContent];
                newContent[index] = data;
                return newContent;
            });
            setOpacity(data, 0.5);
        }
    };

    const clearDropTarget = (index, content) => () => {
        setDropContent(prevContent => {
            const newContent = [...prevContent];
            newContent[index] = null;
            return newContent;
        });
        setDragOpacity((prevOpacity) => {
            const newOpacity = { ...prevOpacity };
            delete newOpacity[content];
            return newOpacity;
        });
    };
    

    useEffect(() => {
        const content = dropContent.filter(content => content !== null);
        if (content.length > 0) {
            const joinedContent = content.join(',');
            setOpacity(joinedContent, 0.5);
            updateQuestions(5, joinedContent);
        }
    }, [dropContent]);

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">5</span>
                            <span className="txt">보기에 이어 대화가 자연스럽게 이어질 수 있도록 보기에서 문장을 끌어놓으시오.</span>
                        </div>
                        <div className="chat-area">
                            <span className="txt">채팅방</span>
                            <img src={image_english_img20} />
                            <div className="chat-box chat-box1"></div>
                            <div className="chat-box chat-box2"></div>
                            <div className="chat-box chat-box3"></div>
                        </div>
                        <div className="bottom">
                            <div className="drop-area">
                                <div className="border wide ui-drop-txt">
                                    {dropContent.map((content, index) => (
                                        <span key={index} className={`drop ${content ? 'on' : ''}`} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop(index)} onClick={clearDropTarget(index, content)}>
                                            {content}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="answer-drag-type">
                        <span>보기</span>
                        <ul className="btn-text ui-drag-txt">
                            <li className={`drag`} draggable="true" name="I’m going to buy a new cap." onDragStart={(e) => handleDragStart(e, 'I’m going to buy a new cap.')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['I’m going to buy a new cap.'] === 0.5 ? 0.5 : 1 }}>I’m going to buy a new cap.</li>
                            <li className={`drag`} draggable="true" name="I’m going to go shopping." onDragStart={(e) => handleDragStart(e, 'I’m going to go shopping.')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['I’m going to go shopping.'] === 0.5 ? 0.5 : 1 }}>I’m going to go shopping.</li>
                            <li className={`drag`} draggable="true" name="What are you going to buy?" onDragStart={(e) => handleDragStart(e, 'What are you going to buy?')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['What are you going to buy?'] === 0.5 ? 0.5 : 1 }}>What are you going to buy?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPageComponent;
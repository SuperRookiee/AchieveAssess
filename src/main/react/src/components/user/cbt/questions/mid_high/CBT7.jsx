import img9 from '@assets/image/question/img09.png';
import { useState, useEffect } from 'react';

const CBT7 = ({ updateQuestions }) => {
    const [dropTarget, setDropTarget] = useState(null);
    const [dropContent, setDropContent] = useState(Array(5).fill(null));
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
            updateQuestions(7, joinedContent);
        }
    }, [dropContent]);
    
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">7</span>
                            <span className="txt">다음은 여행 관련 Q&A 게시판에 올라온 글이다. 윗글의 내용과 일치하도록 &lt;조건&gt;에 맞게 단어를 끌어놓아 문장을 완성하시오.</span>
                        </div>
                        <div className="bottom">
                            <div className="answer-drag-type">
                                <span>조건</span>
                                <ul className="list-text">
                                    <li>주어진 5개의 단어 중 3개만 사용할 것</li>
                                    <li>선택한 3개의 단어를 바르게 배열할 것</li>
                                    <li>단어의 형태를 변형하지 말 것</li>
                                </ul>
                            </div>
                            <div className="drop-area">
                                <img src={img9} alt="" />
                                <div className="border">
                                    {dropContent.map((content, index) => (
                                        <span key={index} className={`drop ${content ? 'on' : ''}`} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop(index)} onClick={clearDropTarget(index, content)}>
                                            {content}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="answer-drag-type ml65">
                        <span>보기</span>
                        <ul className="btn-text ui-drag-txt">
                            <li className="drag" draggable="true" name="familiar" onDragStart={(e) => handleDragStart(e, 'familiar')} onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['familiar'] === 0.5 ? 0.5 : 1 }}>familiar</li>
                            <li className="drag" draggable="true" name="desert" onDragStart={(e) => handleDragStart(e, 'desert')} onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['desert'] === 0.5 ? 0.5 : 1 }}>desert</li>
                            <li className="drag" draggable="true" name="laws" onDragStart={(e) => handleDragStart(e, 'laws')} onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['laws'] === 0.5 ? 0.5 : 1 }}>laws</li>
                            <li className="drag" draggable="true" name="plans" onDragStart={(e) => handleDragStart(e, 'plans')} onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['plans'] === 0.5 ? 0.5 : 1 }}>plans</li>
                            <li className="drag" draggable="true" name="some" onDragStart={(e) => handleDragStart(e, 'some')} onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['some'] === 0.5 ? 0.5 : 1 }}>some</li>
                            <li className="drag" draggable="true" name="unusual" onDragStart={(e) => handleDragStart(e, 'unusual')} onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['unusual'] === 0.5 ? 0.5 : 1 }}>unusual</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBT7;

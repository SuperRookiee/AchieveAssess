import { useState, useEffect } from 'react';

const CBT2 = ({ updateQuestions }) => {
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
                            <span className="txt">
                                빈칸에 들어갈 낱말을 보기에서 골라 끌어 놓으시오.
                            </span>
                        </div>
                        <div className="text-box ui-drop-txt">
                            Our world is a collection of all kinds of ecosystems. An ecosystem is a community of all the living things, their habitats, and the climate in which they live. Everyone in these communities shares food and natural resources. Ecosystems can be as big as the whole world and as tiny as a rock. A
                            <span className={`drop ${dropTarget ? 'on' : ''}`} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} onClick={(clearDropTarget)}>
                                {dropContent}
                            </span>
                            is a great example of an ecosystem. It provides a habitat for small animals, birds, and insects. It provides shade for plants on the ground. It drinks in sunlight to grow bigger and makes seeds that the small animals and birds eat and scatter around. And when it dies, it becomes a part of the ground again.
                        </div>
                    </div>
                    <div className="answer-drag-type">
                        <span>보기</span>
                        <ul className="btn-text ui-drag-txt">
                            <li className={`drag`} draggable name="cloud"  onDragStart={(e) => handleDragStart(e, 'cloud')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['cloud'] || 1 }}>cloud</li>
                            <li className={`drag`} draggable name="desert" onDragStart={(e) => handleDragStart(e, 'desert')} onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['desert']|| 1 }}>desert</li>
                            <li className={`drag`} draggable name="nest"   onDragStart={(e) => handleDragStart(e, 'nest')}   onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['nest']  || 1 }}>nest</li>
                            <li className={`drag`} draggable name="river"  onDragStart={(e) => handleDragStart(e, 'river')}  onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['river'] || 1 }}>river</li>
                            <li className={`drag`} draggable name="tree"   onDragStart={(e) => handleDragStart(e, 'tree')}   onDragEnd={() => setDropTarget(null)} style={{ opacity: dragOpacity['tree']  || 1 }}>tree</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CBT2;
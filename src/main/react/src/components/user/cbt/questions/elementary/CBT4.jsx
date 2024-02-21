import img15 from '@assets/image/question/img15.png';
import img16 from '@assets/image/question/img16.png';
import img17 from '@assets/image/question/img17.png';
import { useEffect, useState } from 'react';

const CBT4 = ({ updateQuestions }) => {
    const [dropContent, setDropContent] = useState(Array(3).fill(null));

    const handleDragStart = (e, name) => {
        e.dataTransfer.setData('text/plain', name);
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        if (data && !dropContent.includes(data)) {
            const newDropContent = [...dropContent];
            newDropContent[index] = data;
            setDropContent(newDropContent);
        }
    };

    const clearDropTarget = (index) => {
        const newDropContent = [...dropContent];
        newDropContent[index] = null;
        setDropContent(newDropContent);
        setDragVisibility({});
        updateQuestions(2, null);
    };

    useEffect(() => {
        updateQuestions(2, dropContent);
    }, [dropContent]);

    const tempStyle = { visibility: 'hidden', }

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">4</span>
                            <span className="txt">다음은 선사시대에 인류가 사용한 도구들이다.<br />사용 시기가 이른 것부터 시작하여 순서로 빈칸에 끌어 놓으시오.</span>
                        </div>
                        <div className="answer-drag-type">
                            <span>보기</span>
                            <ul className="btn-img ui-drag-img">
                                <li className="drag cursor-pointer" name="1" draggable onDragStart={(e) => handleDragStart(e, '1')} onDragEnd={() => setDragVisibility({})} style={dropContent.includes('1') ? tempStyle : {}}><img src={img15} alt="" data-num="1" /></li>
                                <li className="drag cursor-pointer" name="2" draggable onDragStart={(e) => handleDragStart(e, '2')} onDragEnd={() => setDragVisibility({})} style={dropContent.includes('2') ? tempStyle : {}}><img src={img16} alt="" data-num="2" /></li>
                                <li className="drag cursor-pointer" name="3" draggable onDragStart={(e) => handleDragStart(e, '3')} onDragEnd={() => setDragVisibility({})} style={dropContent.includes('3') ? tempStyle : {}}><img src={img17} alt="" data-num="3" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="drop-area-type02 ui-drop-img">
                        {dropContent.map((content, index) => (
                            <div key={index} className={`drop`} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, index)} onClick={() => clearDropTarget(index)}>
                                {content === '1' && <img className='cursor-pointer' src={img15} alt="" />}
                                {content === '2' && <img className='cursor-pointer' src={img16} alt="" />}
                                {content === '3' && <img className='cursor-pointer' src={img17} alt="" />}
                            </div>
                        ))}
                    </div>
                    <div className="caption">
                        <span className="txt">다시 선택하려면 이미지를 클릭하세요.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CBT4;
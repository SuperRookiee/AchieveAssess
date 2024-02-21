import img14 from '@assets/image/question/img14.png';
import { useState } from 'react';

const CBT2 = ({ updateQuestions }) => {
    const [dropTarget, setDropTarget] = useState(null);
    const [dragOpacity, setDragOpacity] = useState({});
    
    const handleDragStart = (e, name) => {
        e.dataTransfer.setData('text/plain', name);
    };
    const clearDropTarget = (index) => {
        const newDropContent = [...dropContent];
        newDropContent[index] = null;
        setDropContent(newDropContent);
        setDragVisibility({});
        updateQuestions(2, null);
    };
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">2</span>
                            <span className="txt">다음 대화를 참고하여 Jinho에게 보낼 메시지의 내용을 선택한 후 [보내기]를 누르시오.</span>
                        </div>
                        <div className="chat-area">
                            <span className="txt">채팅방</span>
                            <img src={img14} alt="" />
                            <p className="strong-txt">채팅 중입니다. 다음에 이어질 말로 적절한 것을 선택한 후 [보내기]버튼을 누르시오.</p>
                            <ul className="answer-input-type text">
                                <li>
                                    <input type="radio" name="answer" id="answer_radio06" value="1" onChange={() => updateQuestions(2, "1")}/>
                                    <label htmlFor="answer_radio06" className="cbt_ele_2">Sounds good!</label>
                                </li>
                                <li>
                                    <input type="radio" name="answer" id="answer_radio07" value="2" onChange={() => updateQuestions(2, "2")}/>
                                    <label htmlFor="answer_radio07" className="cbt_ele_2">Sorry, you can’t.</label>
                                </li>
                                <li>
                                    <input type="radio" name="answer" id="answer_radio08" value="3" onChange={() => updateQuestions(2, "3")}/>
                                    <label htmlFor="answer_radio08" className="cbt_ele_2">I’m fine.</label>
                                </li>
                                <li>
                                    <input type="radio" name="answer" id="answer_radio09" value="4" onChange={() => updateQuestions(2, "4")}/>
                                    <label htmlFor="answer_radio09" className="cbt_ele_2">I’m late.</label>
                                </li>
                            </ul>
                            <button className="send-btn">보내기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBT2;
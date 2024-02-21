import { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

const CBT8 = () => {
    const canvasRef = useRef(null);
    
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">8</span>
                            <span className="txt">욕실에 있는 욕조가 불편하다고 느낀 현주는 그림과 같이 직육면체 모양의 욕조 내부에 사람이 앉을 수 있는 직육면체 모양의 의자가 있는 모형을 만들었다. 해당 모형에 시간당 일정한 양의 물을 가득 찰 때까지 넣을 때, 시간에 따른 물의 높이의 그래프 개형을 그리시오.</span>
                        </div>
                    </div>
                    <div className="answer-canvas-type">
                        <div className="canvas-wrap">
                            <CanvasDraw ref={canvasRef} brushRadius={2} canvasWidth={500} canvasHeight={500} hideGrid className="mx-auto"/>
                            <span className="height">높이</span>
                            <span className="zero">0</span>
                            <span className="time">시간</span>
                        </div>
                        <div>
                            <button id="btnClea" onClick={() => canvasRef.current.clear()}>지우기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBT8;
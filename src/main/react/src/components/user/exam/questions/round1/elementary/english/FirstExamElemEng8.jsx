import image_english_img14 from "@assets/image/exam/round1/elementary/english/english_img14.jpg";
import audio_english_14 from "@assets/image/exam/round1/elementary/english/초6영어(1회_14번).mp3";
import { useState } from "react";

const FirstExamElemEng8 = ({ updateQuestions, answer }) => {
    const [inputValue, setInputValue] = useState(answer);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        updateQuestions(8, newValue === "" ? null : newValue);
    };

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">8</span>
                            <span className="txt"> 대화를 듣고, 빈칸에 알맞은 단어를 영어로 쓰시오.</span>
                        </div>
                        <div className="img-box w80">
                            <audio controls src={audio_english_14} type="audio/mpeg">
                                브라우저가 audio 태그를 지원하지 않을 때 표시되는 문장
                            </audio>
                        </div>
                        <div className="img-box w90">
                            <img src={image_english_img14} />
                        </div>
                        <div className="answer-input-type text-3xl text-center">→&nbsp;
                            <input type="text" className="blank" value={inputValue || ""} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemEng8;
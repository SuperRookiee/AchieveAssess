import image_english_img12 from "@assets/image/exam/round1/elementary/english/english_img12.jpg";
import image_english_img12_1 from "@assets/image/exam/round1/elementary/english/english_img12_1.jpg";
import audio_english_12 from "@assets/image/exam/round1/elementary/english/초6영어(1회_12번).mp3";
import { useState } from "react";

const FirstExamElemEng2 = ({ updateQuestions, answer }) => {
  const [selectedValue, setSelectedValue] = useState(answer);
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    updateQuestions(2,  newValue === "" ? null : newValue);
  };

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">2</span>
                            <span className="txt"> 대화를 듣고, 재민이의 학년을 숫자로 쓰시오.</span>
                        </div>
                        <div className="img-box w80">
                            <audio controls src={audio_english_12} type="audio/mpeg">
                                브라우저가 audio 태그를 지원하지 않을 때 표시되는 문장
                            </audio>
                        </div>
                        <div className="img-box w90">
                            <img src={image_english_img12} />
                            <img src={image_english_img12_1} />
                        </div>
                        {/* s 220729 수정 */}
                        <div className="select-box">
                            <select className="select left-[48.7%] top-[84%]" value={selectedValue || ""} onChange={handleChange}>
                                <option value="">선택</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        {/* e 220729 수정 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemEng2;
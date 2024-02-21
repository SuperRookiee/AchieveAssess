import image_english_img13 from "@assets/image/exam/round1/elementary/english/english_img13.jpg";
import audio_english_13 from "@assets/image/exam/round1/elementary/english/초6영어(1회_13번).mp3";

const FirstExamElemEng3 = ({ updateQuestions }) => {
    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">3</span>
                            <span className="txt"> 다음을 듣고, 안내하고 있는 장소를 아래 그림에서 선택하시오.</span>
                        </div>
                        <div className="img-box w80">
                            <audio controls src={audio_english_13} type="audio/mpeg">
                                브라우저가 audio 태그를 지원하지 않을 때 표시되는 문장
                            </audio>
                        </div>
                        <div className="answer-map-type">
                            <img src={image_english_img13} className="w70 block mx-auto my-0" />
                                <svg>
                                    <g onClick={() => updateQuestions(3, "Movie Theater")}><rect x="270" y="265" width="90" height="70"></rect></g>
                                    <g onClick={() => updateQuestions(3, "Bookstore")}><rect x="580" y="265" width="115" height="70"></rect></g>
                                    <g onClick={() => updateQuestions(3, "Bank")}><rect x="218" y="385" width="115" height="65"></rect></g>
                                    <g onClick={() => updateQuestions(3, "Hospital")}><rect x="575" y="365" width="100" height="85"></rect></g>
                                    <g onClick={() => updateQuestions(3, "School")}><rect x="315" y="460" width="95" height="55"></rect></g>
                                </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstExamElemEng3;
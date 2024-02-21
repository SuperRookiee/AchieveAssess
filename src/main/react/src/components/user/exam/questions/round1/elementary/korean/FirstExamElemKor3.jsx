import { useState } from "react";

const FirstExamElemKor3 = ({ updateQuestions, answer }) => {
  const [selectedValue, setSelectedValue] = useState(answer);
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    updateQuestions(3, newValue === "" ? null : newValue);
  };

  return(
    <div className="swiper-slide">
              <div className="page">
                <div className="inner">
                  <div className="question">
                    <div className="top">
                      <span className="num">3</span>
                      <span className="txt">빈칸에 들어갈 말로 알맞은 것을 선택하시오.</span>
                    </div>
                    <div className="text-box">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;국립한글박물관을 찾았다. 국립한글박물관은 ‘한글’로만 기록한 한글 자료와 한글을 활용한 작품들을 전시해 놓은 곳이다. 국립한글박물관은 용산 국립중앙박물관 옆에 있다. 우리 가족은 집 근처에서 지하철을 타고 가서 ‘박물관 나들길’을 이용해 박물관까지 걸어갔다. 이정표를 따라 걷다 보니 큰 박물관 건물이 눈에 들어왔다.
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;처음
                        <div className="select-box type1">
                          <select name="" className="" value={selectedValue || ""} onChange={handleChange}>
                            <option value="">선택</option>
                            <option value="발판">발판</option>
                            <option value="발길">발길</option>
                            <option value="발자국">발자국</option>
                            <option value="발자취">발자취</option>
                            <option value="발장구">발장구</option>
                          </select>
                        </div>
                        이 닿은 장소는 2층 ‘한글이 걸어온 길’ 상설 전시실이었다. 전시실 이름처럼 ‘한글이 걸어온 길’을 주제로 마련한 상설 전시실은 총 3부로 구성되었다. 1부 주제는 ‘새로 스물여덟 자를 만드니’로, 세종 25년 한글이 그 모습을 드러내던 때를 살펴볼 수 있었고, 2부 주제는 ‘쉽게 익혀서 편히 쓰니’이며, 마지막으로 3부 주제는 ‘세상에 널리퍼져 나아가니’이다. 상설 전시실의 이름이 한글의 역사를 잘 말해 주는 것 같았다.
                    </div>
                  </div>
                </div>
                {/* <canvas className="sketchpad" style="cursor: crosshair;" width="1260" height="1216"></canvas> */}
              </div>
            </div>
  )
}

export default FirstExamElemKor3;
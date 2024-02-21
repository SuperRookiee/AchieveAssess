import { useState } from 'react';
import img6 from '@assets/image/question/img08.png';
import img7 from '@assets/image/question/img07.png';
import img8 from '@assets/image/question/img08.png';

const CBT6 = () => {
    const [selectedImage, setSelectedImage] = useState('img6');

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">6</span>
                            <span className="txt">다음 웹사이트에서 제시하는 3가지 정보를 활용하여 &lt;조건&gt;에 맞게 제시된 글을 완성하시오.</span>
                        </div>
                        <div className="bottom">
                            <div className="tab-wrap">
                                <div className="tab-btn">
                                    <a className={` ${selectedImage === 'img6' ? 'on' : ''} cursor-pointer`} onClick={() => setSelectedImage('img6')}>홍보 포스터</a>
                                    <a className={` ${selectedImage === 'img7' ? 'on' : ''} cursor-pointer`} onClick={() => setSelectedImage('img7')}>통계표</a>
                                    <a className={` ${selectedImage === 'img8' ? 'on' : ''} cursor-pointer`} onClick={() => setSelectedImage('img8')}>신문 기사</a>
                                </div>
                                <div className="tab-cnt">
                                    <div className={`cnt ${selectedImage === 'img6' ? 'on' : ''}`}><img src={img6} alt="" /></div>
                                    <div className={`cnt ${selectedImage === 'img7' ? 'on' : ''}`}><img src={img7} alt="" /></div>
                                    <div className={`cnt ${selectedImage === 'img8' ? 'on' : ''}`}><img src={img8} alt="" /></div>
                                </div>
                            </div>
                            <div className="answer-drag-type">
                                <span>조건</span>
                                <ul className="list-text">
                                    <li>&lt;학생 글&gt;에 이어 두 문장 이상의 한 문단으로 작성할 것.</li>
                                    <li>반려견을 등록했을 때 얻을 수 있는 장점 두 가지를 &lt;자료&gt;의 '홍보 포스터'를 활용하여 쓸 것.</li>
                                    <li>반려견의 등록률을 높일 수 있는 구체적인 방안 두 가지를 &lt;자료&gt;의 '통계표'와 '신문 기사'에서 각각 한 가지씩 활용하여 쓸 것.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="answer-input-type">
                        <div>
                            반려동물 등록제는 생후 2개월 이상 된 반려견을 기를 경우, 시.군.구청에 의무적으로 반려견을 등록하도록 하는 제도이다. 현재 각 지자체는 단속을 통해 반려견을 등록하지 않은 사람들에게 과태료를 부과하고 있지만, 등록률은 여전히 낮은 편이다.
                            <br />
                            반려견을 등록하면
                            <textarea name="" id="" cols="30" rows="10" className='p-1'></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBT6;
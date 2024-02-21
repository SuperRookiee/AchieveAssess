import { useEffect, useState } from 'react';
import img11 from '@assets/image/question/img11.png';
import img12 from '@assets/image/question/img12.png';
import img13 from '@assets/image/question/img13.png';

const CBT10 = () => {
    const [L, setL] = useState(null);
    const [R, setR] = useState(null);

    const [L1, setL1] = useState(false);
    const [R1, setR1] = useState(false);
    const [L2, setL2] = useState(false);
    const [R2, setR2] = useState(false);
    const [L3, setL3] = useState(false);
    const [R3, setR3] = useState(false);

    const [Line1_1, setLine1_1] = useState(false);
    const [Line1_2, setLine1_2] = useState(false);
    const [Line1_3, setLine1_3] = useState(false);

    const [Line2_1, setLine2_1] = useState(false);
    const [Line2_2, setLine2_2] = useState(false);
    const [Line2_3, setLine2_3] = useState(false);

    const [Line3_1, setLine3_1] = useState(false);
    const [Line3_2, setLine3_2] = useState(false);
    const [Line3_3, setLine3_3] = useState(false);

    const clickL1 = (name) => {
        setL(name)
        setL1(!L1)
        if(Line1_1) {
            setLine1_1(false)
        }
        if(Line1_2) {
            setLine1_2(false)
        }
        if(Line1_3) {
            setLine1_3(false)
        }
    }
    const clickL2 = (name) => {
        setL(name)
        setL2(!L2)
        if(Line2_1) {
            setLine2_1(false)
        }
        if(Line2_2) {
            setLine2_2(false)
        }
        if(Line2_3) {
            setLine2_3(false)
        }
    }
    const clickL3 = (name) => {
        setL(name)
        setL3(!L3)
        if(Line3_1) {
            setLine3_1(false)
        }
        if(Line3_2) {
            setLine3_2(false)
        }
        if(Line3_3) {
            setLine3_3(false)
        }
    }

    const clickR1 = (name) => {
        setR(name)
        setR1(!R1)
        if(Line1_1) {
            setLine1_1(false)
        }
        if(Line1_2) {
            setLine1_2(false)
        }
        if(Line1_3) {
            setLine1_3(false)
        }
    }
    const clickR2 = (name) => {
        setR(name)
        setR2(!R2)
        if(Line2_1) {
            setLine2_1(false)
        }
        if(Line2_2) {
            setLine2_2(false)
        }
        if(Line2_3) {
            setLine2_3(false)
        }
    }
    const clickR3 = (name) => {
        setR(name)
        setR3(!R3)
        if(Line3_1) {
            setLine3_1(false)
        }
        if(Line3_2) {
            setLine3_2(false)
        }
        if(Line3_3) {
            setLine3_3(false)
        }
    }

    useEffect(() => {
        if (L && R) {
            if (L === 'L1' && R === 'R1') {
                setLine1_1(true);
            }
            else if (L === 'L1' && R === 'R2') {
                setLine1_2(true);
            }
            else if (L === 'L1' && R === 'R3') {
                setLine1_3(true);
            }
            else if (L === 'L2' && R === 'R1') {
                setLine2_1(true);
            }
            else if (L === 'L2' && R === 'R2') {
                setLine2_2(true);
            }
            else if (L === 'L2' && R === 'R3') {
                setLine2_3(true);
            }
            else if (L === 'L3' && R === 'R1') {
                setLine3_1(true);
            }
            else if (L === 'L3' && R === 'R2') {
                setLine3_2(true);
            }
            else if (L === 'L3' && R === 'R3') {
                setLine3_3(true);
            }

            setL(null);
            setR(null);
        }
    }, [L, R])

    const resetAll =() => {
        setLine1_1(false);
        setLine1_2(false);
        setLine1_3(false);
        setLine2_1(false);
        setLine2_2(false);
        setLine2_3(false);
        setLine3_1(false);
        setLine3_2(false);
        setLine3_3(false);
        setL1(false);
        setL2(false);
        setL3(false);
        setR1(false);
        setR2(false);
        setR3(false);
    }

    return (
        <div className="swiper-slide">
            <div className="page">
                <div className="inner">
                    <div className="question">
                        <div className="top">
                            <span className="num">10</span>
                            <span className="txt">광물과 광물의 성질에 대한 실험을 알맞게 연결하시오.</span>
                        </div>
                    </div>
                    <div className="answer-line-type">
                        <div className="left-img">
                            <img src={img11} alt="" />
                            <img src={img12} alt="" />
                            <img src={img13} alt="" />
                        </div>
                        <div className="flex relative justify-center pt-20">
                            <span id="leftarea"></span>
                            <span id="rightarea"></span>
                            <div className="flex flex-col mt-2 mr-40">
                                <button id="L1" name="L1" className={`dot ${L1 && '!bg-first-200'}`} onClick={(e) => clickL1(e.target.name)} disabled={L1}></button>
                                <button id="L2" name="L2" className={`dot mt-2 ${L2 && '!bg-first-200'}`} onClick={(e) => clickL2(e.target.name)} disabled={L2}></button>
                                <button id="L3" name="L3" className={`dot mt-2 ${L3 && '!bg-first-200'}`} onClick={(e) => clickL3(e.target.name)} disabled={L3}></button>
                            </div>
                            {Line1_1 && (<div id='1_1' className="absolute h-[2px] bg-black w-40  mt-3"></div>)}
                            {Line1_2 && (<div id='1_2' className="absolute h-[2px] bg-black w-[18rem] mt-[7.8rem] transform rotate-[53deg]"></div>)}
                            {Line1_3 && (<div id='1_3' className="absolute h-[2px] bg-black w-[30.5rem] mt-[14.8rem] transform rotate-[69deg]"></div>)}

                            {Line2_1 && (<div id='2_1' className="absolute h-[2px] bg-black w-[18rem] mt-[7.8rem] transform rotate-[-53deg]"></div>)}
                            {Line2_2 && (<div id='2_2' className="absolute h-[2px] bg-black w-40 mt-[15rem]"></div>)}
                            {Line2_3 && (<div id='2_3' className="absolute h-[2px] bg-black w-[18rem] mt-[22rem] transform rotate-[53deg]"></div>)}

                            {Line3_1 && (<div id='3_1' className="absolute h-[2px] bg-black w-[30.5rem] mt-[14.8rem] transform rotate-[-69deg]"></div>)}
                            {Line3_2 && (<div id='3_2' className="absolute h-[2px] bg-black w-[18rem] mt-[22rem] transform rotate-[-53deg]"></div>)}
                            {Line3_3 && (<div id='3_3' className="absolute h-[2px] bg-black w-40 mt-[29.3rem]"></div>)}

                            <div className="flex flex-col mt-2">
                                <button id="R1" name="R1" className={`dot ${R1 && '!bg-first-200'}`} onClick={(e) => clickR1(e.target.name)} disabled={R1}></button>
                                <button id="R2" name="R2" className={`dot mt-2 ${R2 && '!bg-first-200'}`} onClick={(e) => clickR2(e.target.name)} disabled={R2}></button>
                                <button id="R3" name="R3" className={`dot mt-2 ${R3 && '!bg-first-200'}`} onClick={(e) => clickR3(e.target.name)} disabled={R3}></button>
                            </div>
                        </div>
                        <div className="right-txt">
                            <div>
                                <span className="txt">석영</span>
                                <span className="txt">방해석</span>
                                <span className="txt">흑운모</span>
                            </div>
                            <button onClick={()=>resetAll()} className='absolute top-0 left-60 border border-black rounded px-3 py-1 whitespace-pre'>지우기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBT10;
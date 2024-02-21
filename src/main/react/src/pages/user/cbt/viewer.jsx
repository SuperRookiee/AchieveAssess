import { memo, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getCbtQuestions } from "../../../components/user/cbt/questions/CBTQuestions";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import '@assets/css/exam/viewer/question.scss';

const viewer = memo(() => {
    const { setOMRList, setExam, currentNumber, setCurrentNumber, swiperRef, state, questions, setQuestions } = useOutletContext();
    const { gradeLevel } = state;

    useEffect(() => {
        setOMRList(questions.map((question) => question.name));
        setExam((gradeLevel === '초등') ? 'CBT 대표유형(초등)' : 'CBT 대표유형(중·고등)');
    }, [setOMRList, setExam]);

    const updateQuestions = (index, value) => {
        setQuestions((prev) => {
            const next = [...prev];
            next[index - 1].answer = value;
            return next;
        });
    };

    return (
        <section className="w-full h-[calc(100vh-4rem-2.75rem)] bg-[#ddd]">
            <Swiper id='question' className="swiper mySwiper h-full"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setCurrentNumber(currentNumber);
                }}
                onSlideChange={(swiper) => { setCurrentNumber(swiper.activeIndex) }}
                modules={[Navigation]}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                allowTouchMove={false}
            >
                {getCbtQuestions(state).map((CBT, index) => (
                    <SwiperSlide className="swiper-wrapper" key={index}>
                        <CBT updateQuestions={updateQuestions} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
});

export default viewer;
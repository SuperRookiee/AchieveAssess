import { memo, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getExamQuestions } from "../../../components/user/exam/questions/ExamQuestions";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import '@assets/css/exam/viewer/question.scss';

const viewer = memo(() => {
    const { setOMRList, setExam, currentNumber, setCurrentNumber, swiperRef, state, questions, setQuestions, registAnswer } = useOutletContext();
    const { round, gradeLevel, subject } = state;
    const gradeLevel_KOR = gradeLevel === 'elem' ? '초등' : gradeLevel === 'mid' ? '중등' : gradeLevel === 'high' && '고등';
    const subject_KOR = subject === 'korean' ? '국어' : subject === 'english' ? '영어' : subject === 'math' && '수학';

    //시험 정보
    useEffect(() => {
        setOMRList(questions.map((question) => question.name));
        setExam(`실전시험 ${round} (${gradeLevel_KOR}) - ${subject_KOR}`);
    }, [setOMRList, setExam]);

    //답안체크
    const updateQuestions = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index - 1].answer = value;
        setQuestions(updatedQuestions);
    };

    //시간 측정 - 1초마다 측정
    useEffect(() => {
        let timeout;
        const updateDuration = () => {
            setQuestions((prevQuestions) => {
                const updatedQuestions = [...prevQuestions];
                updatedQuestions[currentNumber].duration += 1;
                return updatedQuestions;
            });
            timeout = setTimeout(updateDuration, 1000);
        };
        updateDuration();
        registAnswer();
        return () => clearTimeout(timeout);
    }, [currentNumber]);

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
                {getExamQuestions(state).map((Exam, index) => (
                    <SwiperSlide className="swiper-wrapper" key={index}>
                        <Exam answer={questions[index].answer} updateQuestions={updateQuestions} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
});

export default viewer;
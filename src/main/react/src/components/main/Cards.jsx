import Card from "./Card";
import '../../assets/css/main/card.scss';

const Cards = () => {
    const cards = [
        { url: "user/cbt", title: "CBT기능/유형 연습", content: "실제 평가 시스템과<br/>100% 동일한 화면으로<br/>기능/유형 연습" },
        { url: "user/exam/round1", title: "실전시험 1회", content: "기출문제를 CBT로<br/>재구성한 문제로<br/>실전 모의고사 응시" },
        { url: "user/exam/round2", title: "실전시험 2회", content: "적중률 높은<br/>예상문제를 바탕으로<br/>실전 모의고사 응시" },
        { url: "user/report", title: "시험결과 REPORT", content: "나의 성취도 파악과<br/>취약점 분석,<br/>시험 대비 학습" },
    ];

    return (
        <section className="flex flex-wrap justify-between py-7 mb-14 md:flex relative -z-0">
            {cards.map((card, index) => (
                <Card key={index} url={card.url} title={card.title} content={<div dangerouslySetInnerHTML={{ __html: card.content }} />} index={index + 1} />
            ))}
        </section>
    );
}

export default Cards;
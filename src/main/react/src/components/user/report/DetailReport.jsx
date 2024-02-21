import ResultSummary from "./detail/ResultSummary";
import SubjectAbil from "./detail/SubjectAbil";
import QuestDiffy from "./detail/QuestDiffy";
import SubjectContArea from "./detail/SubjectContArea";
import QuestDiffyTime from "./detail/QuestDiffyTime";
import SubjectContAreaTime from "./detail/SubjectContAreaTime";
import QuestErratum from "./detail/QuestErratum";
import EnaeaQuestType from "./detail/EnaeaQuestType";
import EnaeaAnswerType from "./detail/EnaeaAnswerType";
import DownloadPdf from "./detail/DownloadPdf";
import { GeneratePDF } from "../../../utils/pdf/GeneratePDF";
import { memo, useRef } from "react";
import Layout from "../../../layouts/report/layout";
import SubjectActArea from "./detail/SubjectActArea";
import { useEffect, useState } from "react";
import axios from "axios";
const URL = import.meta.env.VITE_BASE_URL;

const DetailReport = memo(({ memberId, currentExamInfo }) => {
    const pdfContentRef = useRef(null);
    const [detailAllErratum, setDetailAllErratum] = useState([]);
    const [detailOneErratum, setDetailOneErratum] = useState([]);
    useEffect(() => {
        if (currentExamInfo.length > 0) {
            axios.post(`${URL}/user/report/getAllQuestionData`, {
                examId: currentExamInfo[0].examId,
            }).then((response) => {// questionOrder, questionOrderName, contentArea, subjectAbility, correctAnswer, Answer, correctResult, averageCorrectRate
                setDetailAllErratum(response.data)
            }).catch((error) =>
                console.log('failed get AllDetailErratum', error)
            )
        }
    }, [currentExamInfo]);

    useEffect(() => {

        if (currentExamInfo.length > 0) {
            axios.post(`${URL}/user/report/getOneQuestionData`, {
                memberId: memberId,
                examId: currentExamInfo[0].examId,
            }).then((response) => {// questionOrder, questionOrderName, contentArea, subjectAbility, correctAnswer, Answer, correctResult, averageCorrectRate
                setDetailOneErratum(response.data)
            }).catch((error) =>
                console.log('failed get OneDetailErratum', error)
            )
        }
    }, [currentExamInfo]);

    return (
        <section id="detail_report">
            <div className="px-4" ref={pdfContentRef}>
                <Layout title={`평가결과 요약`}><ResultSummary detailOneErratum={detailOneErratum} /></Layout>
                <Layout title={`교과 역량별 성취율`}><SubjectAbil currentExamInfo={currentExamInfo} detailAllErratum={detailAllErratum} detailOneErratum={detailOneErratum} /></Layout>
                <Layout title={`문항 난이도별 성취율`}><QuestDiffy currentExamInfo={currentExamInfo} detailAllErratum={detailAllErratum} detailOneErratum={detailOneErratum} /></Layout>
                <Layout title={`교과 내용 영역별 성취율`}><SubjectContArea currentExamInfo={currentExamInfo} detailAllErratum={detailAllErratum} detailOneErratum={detailOneErratum} /></Layout>
                <Layout title={`교과 행동 영역별 성취율`}><SubjectActArea currentExamInfo={currentExamInfo} detailAllErratum={detailAllErratum} detailOneErratum={detailOneErratum} /></Layout>
                <Layout title={`문항 난이도별 문제 풀이 소요 시간`}><QuestDiffyTime currentExamInfo={currentExamInfo} detailAllErratum={detailAllErratum} detailOneErratum={detailOneErratum} /></Layout>
                <Layout title={`교과 내용 영역별 평균 풀이 소요 시간`}><SubjectContAreaTime currentExamInfo={currentExamInfo} detailAllErratum={detailAllErratum} detailOneErratum={detailOneErratum} /></Layout>
                <Layout title={`문항별 정오표`}><QuestErratum detailAllErratum={detailAllErratum} detailOneErratum={detailOneErratum} /></Layout>
                <Layout title={`문제 유형별 정답률`}><EnaeaQuestType currentExamInfo={currentExamInfo} detailAllErratum={detailAllErratum} detailOneErratum={detailOneErratum} /></Layout>
                <Layout title={`응답 유형별 정답률`}><EnaeaAnswerType currentExamInfo={currentExamInfo} detailAllErratum={detailAllErratum} detailOneErratum={detailOneErratum} /></Layout>
            </div>
            <DownloadPdf GeneratePDF={GeneratePDF} pdfContentRef={pdfContentRef} />
        </section>
    );
});

export default DetailReport;
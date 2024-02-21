package GradeAA.AchieveAssess.domain.report.service;

import GradeAA.AchieveAssess.domain.report.dto.*;
import GradeAA.AchieveAssess.domain.report.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportService {
    private final ReportRepository reportRepository;

    //회원ID와 응시상태로 시험정보(examId, round, subject, examDate) 받아오기 + 시험참여 정보도 제공
    public List<ExamInfoDto> getExamInfoDto(ExamInfoRequest eiRequest) {
        return reportRepository.getExamInfoDto(eiRequest.getMemberId(), eiRequest.getStatusCode());
    }

    //기본리포트 채점결과 + 정오표 불러오기
    public List<BasicErratumResponse> getBasicErratumResponse(BasicErratumRequest beRequest) {
        return reportRepository.getBasicErratumResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //평가결과 요약 제공
    public List<ResultSummaryResponse> getResultSummaryResponse(BasicErratumRequest beRequest) {
        return reportRepository.getResultSummaryResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //수험자 전체 모든 문항 메타데이터 불러오기
    public List<QuestionDataResponse> getAllQuestionDataResponse(long examId) {
        return reportRepository.getAllQuestionDataResponse(examId);
    }

    //교과 역량만
    public List<QuestionDataResponse> getDistinctSubjectAbil(long examId) {
        return reportRepository.getDistinctSubjectAbilResponse(examId);
    }

    //문항 난이도만
    public List<QuestionDataResponse> getDistinctDifficulty(long examId) {
        return reportRepository.getDistinctDifficultyResponse(examId);
    }

    //교과 내용영역만
    public List<QuestionDataResponse> getDistinctContentArea(long examId) {
        return reportRepository.getDistinctContentAreaResponse(examId);
    }

    //교과 행동영역만
    public List<QuestionDataResponse> getDistinctActivityArea(long examId) {
        return reportRepository.getDistinctActivityAreaResponse(examId);
    }

    //문제 유형만
    public List<QuestionDataResponse> getDistinctQuestionType(long examId) {
        return reportRepository.getDistinctQuestionTypeResponse(examId);
    }

    //응답 유형만
    public List<QuestionDataResponse> getDistinctAnswerType(long examId) {
        return reportRepository.getDistinctAnswerTypeResponse(examId);
    }

    //수험자 본인 모든 문항 메타데이터 불러오기
    public List<QuestionDataResponse> getOneQuestionDataResponse(BasicErratumRequest beRequest) {
        return reportRepository.getOneQuestionDataResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //수험자 전체 교과 역량별 성취율 불러오기
    public List<AchieveRateResponse> getAllSubAbilRateResponse() {
        return reportRepository.getAllSubAbilRateResponse();
    }

    //수험자 본인 교과 역량별 성취율 불러오기
    public List<CorrectResultResponse> getOneSubAbilRateResponse(BasicErratumRequest beRequest) {
        return reportRepository.getOneSubAbilRateResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //수험자 전체 문항 난이도별 성취율 불러오기
    public List<AchieveRateResponse> getAllDifficultyRateResponse() {
        return reportRepository.getAllDifficultyRateResponse();
    }

    //수험자 본인 문항 난이도별 성취율 불러오기
    public List<CorrectResultResponse> getOneDifficultyRateResponse(BasicErratumRequest beRequest) {
        return reportRepository.getOneDifficultyRateResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //수험자 전체 교과 내용 영역별 성취율 불러오기
    public List<AchieveRateResponse> getAllSubContRateResponse() {
        return reportRepository.getAllSubContRateResponse();
    }

    //수험자 본인 교과 내용 영역별 성취율 불러오기
    public List<CorrectResultResponse> getOneSubContRateResponse(BasicErratumRequest beRequest) {
        return reportRepository.getOneSubContRateResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //수험자 전체 교과 행동 영역별 성취율 불러오기
    public List<AchieveRateResponse> getAllSubActRateResponse() {
        return reportRepository.getAllSubActRateResponse();
    }

    //수험자 본인 교과 행동 영역별 성취율 불러오기
    public List<CorrectResultResponse> getOneSubActRateResponse(BasicErratumRequest beRequest) {
        return reportRepository.getOneSubActRateResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //수험자 전체 문항 난이도별 문제 풀이 평균 소요 시간 불러오기
    public List<DurationResponse> getAllDifficultyDurationResponse() {
        return reportRepository.getAllDifficultyDurationResponse();
    }

    //수험자 본인 문항 난이도별 문제 풀이 평균 소요 시간 불러오기
    public List<DurationResponse> getOneDifficultyDurationResponse(BasicErratumRequest beRequest) {
        return reportRepository.getOneDifficultyDurationResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //수험자 전체 문항 교과 내용 영역별 문제 풀이 평균 소요 시간 불러오기
    public List<DurationResponse> getAllContActDurationResponse() {
        return reportRepository.getAllContActDurationResponse();
    }

    //수험자 본인 문항 교과 내용 영역별 문제 풀이 평균 소요 시간 불러오기
    public List<DurationResponse> getOneContActDurationResponse(BasicErratumRequest beRequest) {
        return reportRepository.getOneContActDurationResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //수험자 전체 문제 유형별 정답률 불러오기
    public List<AchieveRateResponse> getAllQuestTypeRateResponse() {
        return reportRepository.getAllQuestTypeRateResponse();
    }

    //수험자 본인 문제 유형별 정답률 불러오기
    public List<CorrectResultResponse> getOneQuestTypeRateResponse(BasicErratumRequest beRequest) {
        return reportRepository.getOneQuestTypeRateResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }

    //수험자 전체 응답 유형별 정답률 불러오기
    public List<AchieveRateResponse> getAllAnswerTypeRateResponse() {
        return reportRepository.getAllAnswerTypeRateResponse();
    }

    //수험자 본인 응답 유형별 정답률 불러오기
    public List<CorrectResultResponse> getOneAnswerTypeRateResponse(BasicErratumRequest beRequest) {
        return reportRepository.getOneAnswerTypeRateResponse(
            beRequest.getMemberId(), beRequest.getExamId());
    }
}

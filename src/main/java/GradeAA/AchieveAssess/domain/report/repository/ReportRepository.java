package GradeAA.AchieveAssess.domain.report.repository;

import GradeAA.AchieveAssess.domain.report.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReportRepository {

    //회원ID와 응시상태로 시험정보(examId, round, subject, examDate) 받아오기 + 시험참여 정보도 제공
    List<ExamInfoDto> getExamInfoDto(long memberId, String statusCode);

    //기본리포트 채점결과 + 정오표 불러오기
    List<BasicErratumResponse> getBasicErratumResponse(long memberId, long examId);

    //평가결과 요약 제공
    List<ResultSummaryResponse> getResultSummaryResponse(long memberId, long examId);

    //모든 문항 메타데이터 불러오기
    List<QuestionDataResponse> getAllQuestionDataResponse(long examId);

    //교과 역량만
    List<QuestionDataResponse> getDistinctSubjectAbilResponse(long examId);

    //문항 난이도만
    List<QuestionDataResponse> getDistinctDifficultyResponse(long examId);

    //교과 내용영역만
    List<QuestionDataResponse> getDistinctContentAreaResponse(long examId);

    //교과 행동영역만
    List<QuestionDataResponse> getDistinctActivityAreaResponse(long examId);

    //문제 유형만
    List<QuestionDataResponse> getDistinctQuestionTypeResponse(long examId);

    //응답 유형만
    List<QuestionDataResponse> getDistinctAnswerTypeResponse(long examId);

    //수험자 문항 메타데이터 불러오기
    List<QuestionDataResponse> getOneQuestionDataResponse(long memberId, long examId);

    //모든 교과 역량별 성취율 불러오기
    List<AchieveRateResponse> getAllSubAbilRateResponse();

    //수험자 교과 역량별 성취율 불러오기
    List<CorrectResultResponse> getOneSubAbilRateResponse(long memberId, long examId);

    //모든 문항 난이도별 성취율 불러오기
    List<AchieveRateResponse> getAllDifficultyRateResponse();

    //수험자 문항 난이도별 성취율 불러오기
    List<CorrectResultResponse> getOneDifficultyRateResponse(long memberId, long examId);

    //모든 교과 내용 영역별 성취율 불러오기
    List<AchieveRateResponse> getAllSubContRateResponse();

    //수험자 교과 내용 영역별 성취율 불러오기
    List<CorrectResultResponse> getOneSubContRateResponse(long memberId, long examId);

    //모든 교과 행동 영역별 성취율 불러오기
    List<AchieveRateResponse> getAllSubActRateResponse();

    //수험자 교과 행동 영역별 성취율 불러오기
    List<CorrectResultResponse> getOneSubActRateResponse(long memberId, long examId);

    //모든 문항 난이도별 문제 풀이 평균 소요 시간 불러오기
    List<DurationResponse> getAllDifficultyDurationResponse();

    //수험자 문항 난이도별 문제 풀이 평균 소요 시간 불러오기
    List<DurationResponse> getOneDifficultyDurationResponse(long memberId, long examId);

    //모든 문항 교과 내용 영역별 문제 풀이 평균 소요 시간 불러오기
    List<DurationResponse> getOneContActDurationResponse(long memberId, long examId);

    //수험자 문항 교과 내용 영역별 문제 풀이 평균 소요 시간 불러오기
    List<DurationResponse> getAllContActDurationResponse();

    //모든 문제 유형별 정답률 불러오기
    List<AchieveRateResponse> getAllQuestTypeRateResponse();

    //수험자 문제 유형별 정답률 불러오기
    List<CorrectResultResponse> getOneQuestTypeRateResponse(long memberId, long examId);

    //모든 응답 유형별 정답률 불러오기
    List<AchieveRateResponse> getAllAnswerTypeRateResponse();

    //수험자 응답 유형별 정답률 불러오기
    List<CorrectResultResponse> getOneAnswerTypeRateResponse(long memberId, long examId);
}
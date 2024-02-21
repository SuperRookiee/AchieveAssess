package GradeAA.AchieveAssess.domain.report.controller;

import GradeAA.AchieveAssess.domain.report.dto.*;
import GradeAA.AchieveAssess.domain.report.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user/report")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportController {

    private final ReportService reportService;

    //회원ID와 응시상태로 시험정보(examId, round, subject, examDate) 받아오기 + 시험참여 정보도 제공
    @PostMapping("/getExamInfo")
    public ResponseEntity<List<ExamInfoDto>> getExamInfoDto(@RequestBody ExamInfoRequest eiRequest){
        List<ExamInfoDto> examInfoDtoList = reportService.getExamInfoDto(eiRequest);
        if(examInfoDtoList.isEmpty()) {
            return ResponseEntity.ok(null);
        }
        else {
            return ResponseEntity.ok(examInfoDtoList);
        }
    }

    //기본리포트 채점결과 + 정오표 불러오기
    @PostMapping("/getBasicErratum")
    public ResponseEntity<List<BasicErratumResponse>> getBasicErratum(@RequestBody BasicErratumRequest beRequest) {
        List<BasicErratumResponse> basicErratumList = reportService.getBasicErratumResponse(beRequest);
        return ResponseEntity.ok(basicErratumList);
    }

    //평가결과 요약 제공
    @PostMapping("/getResultSummary")
    public ResponseEntity<List<ResultSummaryResponse>> getResultSummary(@RequestBody BasicErratumRequest beRequest) {
        List<ResultSummaryResponse> resultSummaryList = reportService.getResultSummaryResponse(beRequest);
        return ResponseEntity.ok(resultSummaryList);
    }

    //수험자 전체 모든 문항 메타데이터 불러오기
    @PostMapping("/getAllQuestionData")
    public ResponseEntity<List<QuestionDataResponse>> getAllQuestionData(@RequestBody BasicErratumRequest beRequest) {
        List<QuestionDataResponse> allQuestionDataResponse = reportService.getAllQuestionDataResponse(beRequest.getExamId());
        return ResponseEntity.ok(allQuestionDataResponse);
    }

    //교과 역량만
    @PostMapping("/getSubjectAbil")
    public ResponseEntity<List<QuestionDataResponse>> getSubjectAbil(@RequestBody BasicErratumRequest beRequest) {
        List<QuestionDataResponse> allQuestionDataResponse = reportService.getDistinctSubjectAbil(beRequest.getExamId());
        return ResponseEntity.ok(allQuestionDataResponse);
    }

    //문항 난이도만
    @PostMapping("/getDifficulty")
    public ResponseEntity<List<QuestionDataResponse>> getDifficulty(@RequestBody BasicErratumRequest beRequest) {
        List<QuestionDataResponse> allQuestionDataResponse = reportService.getDistinctDifficulty(beRequest.getExamId());
        return ResponseEntity.ok(allQuestionDataResponse);
    }

    //교과 내용영역만
    @PostMapping("/getContentArea")
    public ResponseEntity<List<QuestionDataResponse>> getContentArea(@RequestBody BasicErratumRequest beRequest) {
        List<QuestionDataResponse> allQuestionDataResponse = reportService.getDistinctContentArea(beRequest.getExamId());
        return ResponseEntity.ok(allQuestionDataResponse);
    }

    //교과 행동영역만
    @PostMapping("/getActivityArea")
    public ResponseEntity<List<QuestionDataResponse>> getActivityArea(@RequestBody BasicErratumRequest beRequest) {
        List<QuestionDataResponse> allQuestionDataResponse = reportService.getDistinctActivityArea(beRequest.getExamId());
        return ResponseEntity.ok(allQuestionDataResponse);
    }

    //문제 유형만
    @PostMapping("/getQuestionType")
    public ResponseEntity<List<QuestionDataResponse>> getQuestionType(@RequestBody BasicErratumRequest beRequest) {
        List<QuestionDataResponse> allQuestionDataResponse = reportService.getDistinctQuestionType(beRequest.getExamId());
        return ResponseEntity.ok(allQuestionDataResponse);
    }

    //응답 유형만
    @PostMapping("/getAnswerType")
    public ResponseEntity<List<QuestionDataResponse>> getAnswerType(@RequestBody BasicErratumRequest beRequest) {
        List<QuestionDataResponse> allQuestionDataResponse = reportService.getDistinctAnswerType(beRequest.getExamId());
        return ResponseEntity.ok(allQuestionDataResponse);
    }

    //수험자 본인 모든 문항 메타데이터 불러오기
    @PostMapping("/getOneQuestionData")
    public ResponseEntity<List<QuestionDataResponse>> getOneQuestionData(@RequestBody BasicErratumRequest beRequest) {
        List<QuestionDataResponse> oneQuestionDataResponse = reportService.getOneQuestionDataResponse(beRequest);
        return ResponseEntity.ok(oneQuestionDataResponse);
    }

    //수험자 전체 교과 역량별 성취율 불러오기
    @PostMapping("/getAllSubAbilRate")
    public ResponseEntity<List<AchieveRateResponse>> getAllSubAbilRate() {
        List<AchieveRateResponse> allSubAbilRateResponse = reportService.getAllSubAbilRateResponse();
        return ResponseEntity.ok(allSubAbilRateResponse);
    }

    //수험자 본인 교과 역량별 성취율 불러오기
    @PostMapping("/getOneSubAbilRate")
    public ResponseEntity<List<CorrectResultResponse>> getOneSubAbilRate(@RequestBody BasicErratumRequest beRequest) {
        List<CorrectResultResponse> oneSubAbilRateResponse = reportService.getOneSubAbilRateResponse(beRequest);
        return ResponseEntity.ok(oneSubAbilRateResponse);
    }

    //수험자 전체 문항 난이도별 성취율 불러오기
    @PostMapping("/getAllDifficultyRate")
    public ResponseEntity<List<AchieveRateResponse>> getAllDifficultyRate() {
        List<AchieveRateResponse> allDifficultyRateResponse = reportService.getAllDifficultyRateResponse();
        return ResponseEntity.ok(allDifficultyRateResponse);
    }

    //수험자 본인 문항 난이도별 성취율 불러오기
    @PostMapping("/getOneDifficultyRate")
    public ResponseEntity<List<CorrectResultResponse>> getOneDifficultyRate(@RequestBody BasicErratumRequest beRequest) {
        List<CorrectResultResponse> oneDifficultyRateResponse = reportService.getOneDifficultyRateResponse(beRequest);
        return ResponseEntity.ok(oneDifficultyRateResponse);
    }

    //수험자 전체 교과 내용 영역별 성취율 불러오기
    @PostMapping("/getAllSubContRate")
    public ResponseEntity<List<AchieveRateResponse>> getAllSubContRate() {
        List<AchieveRateResponse> allSubContRateResponse = reportService.getAllSubContRateResponse();
        return ResponseEntity.ok(allSubContRateResponse);
    }

    //수험자 본인 교과 내용 영역별 성취율 불러오기
    @PostMapping("/getOneSubContRate")
    public ResponseEntity<List<CorrectResultResponse>> getOneSubContRate(@RequestBody BasicErratumRequest beRequest) {
        List<CorrectResultResponse> oneSubContRateResponse = reportService.getOneSubContRateResponse(beRequest);
        return ResponseEntity.ok(oneSubContRateResponse);
    }

    //수험자 전체 교과 행동 영역별 성취율 불러오기
    @PostMapping("/getAllSubActRate")
    public ResponseEntity<List<AchieveRateResponse>> getAllSubActRate() {
        List<AchieveRateResponse> allSubActRateResponse = reportService.getAllSubActRateResponse();
        return ResponseEntity.ok(allSubActRateResponse);
    }

    //수험자 본인 교과 행동 영역별 성취율 불러오기
    @PostMapping("/getOneSubActRate")
    public ResponseEntity<List<CorrectResultResponse>> getOneSubActRate(@RequestBody BasicErratumRequest beRequest) {
        List<CorrectResultResponse> oneSubActRateResponse = reportService.getOneSubActRateResponse(beRequest);
        return ResponseEntity.ok(oneSubActRateResponse);
    }

    //수험자 전체 문항 난이도별 문제 풀이 평균 소요 시간 불러오기
    @PostMapping("/getAllDifficultyDuration")
    public ResponseEntity<List<DurationResponse>> getAllDifficultyDuration() {
        List<DurationResponse> allDifficultyDurationResponse = reportService.getAllDifficultyDurationResponse();
        return ResponseEntity.ok(allDifficultyDurationResponse);
    }

    //수험자 본인 문항 난이도별 문제 풀이 평균 소요 시간 불러오기
    @PostMapping("/getOneDifficultyDuration")
    public ResponseEntity<List<DurationResponse>> getOneDifficultyDuration(@RequestBody BasicErratumRequest beRequest) {
        List<DurationResponse> oneDifficultyDurationResponse = reportService.getOneDifficultyDurationResponse(beRequest);
        return ResponseEntity.ok(oneDifficultyDurationResponse);
    }

    //수험자 전체 문항 교과 내용 영역별 문제 풀이 평균 소요 시간 불러오기
    @PostMapping("/getAllContActDuration")
    public ResponseEntity<List<DurationResponse>> getAllContActDuration() {
        List<DurationResponse> allContActDurationResponse = reportService.getAllContActDurationResponse();
        return ResponseEntity.ok(allContActDurationResponse);
    }

    //수험자 본인 문항 교과 내용 영역별 문제 풀이 평균 소요 시간 불러오기
    @PostMapping("/getOneContActDuration")
    public ResponseEntity<List<DurationResponse>> getOneContActDuration(@RequestBody BasicErratumRequest beRequest) {
        List<DurationResponse> oneContActDurationResponse = reportService.getOneContActDurationResponse(beRequest);
        return ResponseEntity.ok(oneContActDurationResponse);
    }

    //수험자 전체 문제 유형별 정답률 불러오기
    @PostMapping("/getAllQuestTypeRate")
    public ResponseEntity<List<AchieveRateResponse>> getAllQuestTypeRate() {
        List<AchieveRateResponse> allQuestTypeRateList = reportService.getAllQuestTypeRateResponse();
        return ResponseEntity.ok(allQuestTypeRateList);
    }

    //수험자 본인 문제 유형별 정답률 불러오기
    @PostMapping("/getOneQuestTypeRate")
    public ResponseEntity<List<CorrectResultResponse>> getOneQuestTypeRat(@RequestBody BasicErratumRequest beRequest) {
        List<CorrectResultResponse> oneQuestTypeRateList = reportService.getOneQuestTypeRateResponse(beRequest);
        return ResponseEntity.ok(oneQuestTypeRateList);
    }

    //수험자 전체 응답 유형별 정답률 불러오기
    @PostMapping("/getAllAnswerTypeRate")
    public ResponseEntity<List<AchieveRateResponse>> getAllAnswerTypeRate() {
        List<AchieveRateResponse> allAnswerTypeRateList = reportService.getAllAnswerTypeRateResponse();
        return ResponseEntity.ok(allAnswerTypeRateList);
    }

    //수험자 본인 응답 유형별 정답률 불러오기
    @PostMapping("/getOneAnswerTypeRate")
    public ResponseEntity<List<CorrectResultResponse>> getOneAnswerTypeRate(@RequestBody BasicErratumRequest beRequest) {
        List<CorrectResultResponse> oneAnswerTypeRateList = reportService.getOneAnswerTypeRateResponse(beRequest);
        return ResponseEntity.ok(oneAnswerTypeRateList);
    }

}
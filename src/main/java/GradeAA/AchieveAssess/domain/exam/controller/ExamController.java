package GradeAA.AchieveAssess.domain.exam.controller;

import GradeAA.AchieveAssess.domain.exam.dto.*;
import GradeAA.AchieveAssess.domain.exam.service.ExamService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/exam")
@CrossOrigin(origins = "http://localhost:5173")
public class ExamController {

    private final ExamService examService;

    @PostMapping("/get-questions")
    public List<ExamResponse> getExam(@RequestBody ExamRequest examRequest) {
        List<ExamResponse> responses = null;

        if(examRequest.getStatusCode().equals("응시하기")) {
           //이어하기 상태추가, null response 답안추가
            responses = examService.initAnswers(examRequest);//생성한 답안 반환
        }
        if(examRequest.getStatusCode().equals("재응시")) {
            examService.removeStatus(examRequest);  // 기존 응시상태 삭제
            examService.removeAnswers(examRequest); // 기존 응답답안 삭제

            responses = examService.initAnswers(examRequest); //생성한 답안 반환
        }
        if(examRequest.getStatusCode().equals("이어하기")) {
            responses = examService.getStudentAnswers(examRequest); //응답했던답안
        }
        return responses;
    }

    @PostMapping("/submit")
    public ResponseEntity<String> submitExam(@RequestBody ExamSubmit examSubmit) {
        examService.updateExamStudentResponses(examSubmit);

        return ResponseEntity.ok("Success");
    }

    @PostMapping("/exam-info")
    public ResponseEntity<List<TimeTable>> getExamInfo(@RequestBody UserInfo userInfo) {
        try {
            List<TimeTable> response = examService.getExamTimeTable(userInfo);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping("/explain")
    public ResponseEntity<List<ExamExplain>> getExamExplain(@RequestBody ExamRequest examRequest) {
        try {
            List<ExamExplain> response = examService.getExamExplain(examRequest.getMemberId(), examRequest.getExamId());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }

}

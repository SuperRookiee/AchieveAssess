package GradeAA.AchieveAssess.domain.scoringSystem.controller;

import GradeAA.AchieveAssess.domain.exam.service.ExamService;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.ScoringRequest;
import GradeAA.AchieveAssess.domain.scoringSystem.service.ScoringService2;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/score")
@CrossOrigin(origins = "http://localhost:5173")
public class ScoringController {

    private final ScoringService2 scoringService;
    private final ExamService examService;

    // 채점 및 결과 생성
    @PostMapping
    public ResponseEntity<String> createScoringResult(@RequestBody ScoringRequest request) {
        examService.modifyStatus(request);
        scoringService.createScoringResult(request);
        return ResponseEntity.ok("success");
    }

}

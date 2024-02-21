package GradeAA.AchieveAssess.domain.scoringSystem.repository;

import GradeAA.AchieveAssess.domain.scoringSystem.dto.ResponsesAndAnswers;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.ScoringResult2;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ScoringRepository2 {

    // 답안지 및 정답 가져오기 for ScoringService2
    List<ResponsesAndAnswers> getStudentResponsesAndCorrectAnswers(int memberId, int examId);

    // 정오표 디비에 채점 결과 저장
    void saveScoringResults(List<ScoringResult2> scoringResult);

}

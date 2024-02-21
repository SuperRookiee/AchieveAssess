package GradeAA.AchieveAssess.domain.scoringSystem.repository.oldversion;

import GradeAA.AchieveAssess.domain.scoringSystem.dto.oldversion.CorrectAnswer;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.oldversion.ScoringResult;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.oldversion.StudentResponses;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ScoringRepository {

    // 제출된 수험자 응답 (답안지) 가져오기 -> student_responses
    List<StudentResponses> getStudentResponses(int memberId, int examId);

    // 문항에서 정답 가져오기 -> questions_correct_answer
    List<CorrectAnswer> getCorrectAnswers(int examId);

    // 정오표 디비에 채점 결과 저장
    void saveScoringResult(ScoringResult scoringResult);

}

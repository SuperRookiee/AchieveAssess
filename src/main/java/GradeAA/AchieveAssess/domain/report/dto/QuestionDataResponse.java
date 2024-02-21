package GradeAA.AchieveAssess.domain.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *  문항 메타데이터 응답
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class QuestionDataResponse {
    private String subjectAbility;
    private String contentArea;
    private String activityArea;
    private String difficulty;
    private int duration;
    private String answerType;
    private String questionType;
    private int questionOrder;
    private String questionOrderName;
    private String correctAnswer;
    private String answer;
    private String correctResult;
    private String averageCorrectRate;
}
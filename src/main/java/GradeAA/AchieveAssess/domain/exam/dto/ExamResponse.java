package GradeAA.AchieveAssess.domain.exam.dto;

import lombok.Data;

@Data
public class ExamResponse {
    private String responseId;
    private String examId;
    private String questionId;
    private String answer;
    private int duration;
    private String questionOrderName;
}

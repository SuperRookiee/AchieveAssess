package GradeAA.AchieveAssess.domain.exam.dto;

import lombok.Data;


@Data
public class ExamState {
    private String examId;
    private String gradeLevel;
    private String subject;
    private String round;
}

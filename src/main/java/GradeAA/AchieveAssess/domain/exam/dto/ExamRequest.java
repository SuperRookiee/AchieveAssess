package GradeAA.AchieveAssess.domain.exam.dto;

import lombok.Data;

@Data
public class ExamRequest {
//    private String round;
//    private String gradeLevel;
//    private String subject;
    private String statusCode;
    private int memberId;
    private int examId;
}

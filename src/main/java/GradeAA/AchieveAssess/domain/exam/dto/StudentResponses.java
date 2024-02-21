package GradeAA.AchieveAssess.domain.exam.dto;

import lombok.Data;

/*
    Table: student_responses
 */
@Data
public class StudentResponses {
    private String id;
    private String answer;
    private Integer duration;
    private Integer responseId;
}

package GradeAA.AchieveAssess.domain.exam.dto;

import lombok.Data;

import java.util.List;

/*
    Table: exams, student_responses
 */
@Data
public class ExamSubmit {
    private String memberId;
    private ExamState state;
    private List<StudentResponses> questions;
}

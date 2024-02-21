package GradeAA.AchieveAssess.domain.exam.dto;

import lombok.Data;

@Data
public class Question {
    private int id;
    private String name;
    private String answer;
    private String duration;
}

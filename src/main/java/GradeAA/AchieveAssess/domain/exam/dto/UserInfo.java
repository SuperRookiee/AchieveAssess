package GradeAA.AchieveAssess.domain.exam.dto;

import lombok.Data;

@Data
public class UserInfo {
    public void setGradeLevel(String gradeLevel) {
        if ("초등".equals(gradeLevel))
            this.gradeLevel = "elem";
        if ("중등".equals(gradeLevel))
            this.gradeLevel = "mid";
        if ("고등".equals(gradeLevel))
            this.gradeLevel = "high";
    }

    private int memberId;
    private String gradeLevel;
    private String round;
}

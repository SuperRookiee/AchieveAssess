package GradeAA.AchieveAssess.domain.exam.dto;

import lombok.Data;

@Data
public class TimeTable {
    public void setSubject(String subject) {
        if ("korean".equals(subject)) {
            this.subjectUrl = subject;
            this.subject = "국어";
        }
        if ("english".equals(subject)) {
            this.subjectUrl = subject;
            this.subject = "영어";
        }
        if ("math".equals(subject)){
            this.subjectUrl = subject;
            this.subject = "수학";
        }
    }

    private String subject;
    private String statusCode;
    private int examId;
    private String questionCount;
    private String testTime;
    private String subjectUrl;
    private String testPeriod;

}

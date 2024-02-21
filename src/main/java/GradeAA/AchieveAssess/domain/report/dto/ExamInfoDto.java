package GradeAA.AchieveAssess.domain.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 *  시험상태 + '시험참여 정보'란을 위한 응답 Dto (로그인된 사용자의 memberId와 yearGrade는 프론트 user.auth에서 제공받음)
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ExamInfoDto {
    //시험 ID
    private long examId;
    //회차
    private String round;
    //과목
    private String subject;
    //응시 일자
    private LocalDateTime examDate;
}
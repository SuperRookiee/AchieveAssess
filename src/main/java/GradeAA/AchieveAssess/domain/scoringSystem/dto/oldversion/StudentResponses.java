package GradeAA.AchieveAssess.domain.scoringSystem.dto.oldversion;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class StudentResponses {

    private int responseId;            // 응답 아이디
    private int memberId;              // 회원 아이디(pk)
    private int examId;                // 시험 아이디
    private int questionId;            // 문항 아이디
    private String answer;              // 수험자가 선택한 답
    private int duration;               // 소요시간(초)
    private LocalDateTime startTime;    // 시험 시작 시간
    private LocalDateTime endTime;      // 답안 제출 시간

}

package GradeAA.AchieveAssess.domain.scoringSystem.dto;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ResponsesAndAnswers {

    private int responseId;            // 응답 아이디
    private int memberId;              // 회원 아이디(pk)
    private int examId;                // 시험 아이디
    private int questionId;            // 문항 아이디
    private String studentAnswer;      // 수험자가 선택한 답
    private String correctAnswer;      // 해당 문항의 정답
    private int score;                 // 해당 문항의 배점

}

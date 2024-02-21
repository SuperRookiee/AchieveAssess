package GradeAA.AchieveAssess.domain.scoringSystem.dto.oldversion;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CorrectAnswer {

    private int examId;            // 해당 문항의 시험 아이디
    private int questionId;        // 해당 문항의 아이디
    private int questionOrder;      // 해당 문항의 순번
    private String correctAnswer;   // 해당 문항의 정답

}

package GradeAA.AchieveAssess.domain.scoringSystem.dto;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ScoringResult2 {

    private int scoringResultId;        // 채점 결과 아이디
    private int responseId;             // 응답 아이디
    private String correctResult;       // 채점 결과 (o,x)
    private int avgPercentage;          // 시험 응시자 평균 정답률
    private int score;                  // 채점 후 점수

}

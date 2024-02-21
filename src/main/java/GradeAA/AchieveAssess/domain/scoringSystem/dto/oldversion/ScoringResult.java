package GradeAA.AchieveAssess.domain.scoringSystem.dto.oldversion;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ScoringResult {

    private int scoringResultId;    // 채점 결과 아이디
    private int responseId;         // 응답 아이디
    private String correctResult;   // 채점 결과 (o,x)
    private int avgPercentage;      // 시험 응시자 평균 정답률
    private String subjectUnit;     // 교과 영역 (계산이해, 추론 등)
    private String relatedUnit;     // 관련 단원 (분수의 나눗셈, 비례식..)

}

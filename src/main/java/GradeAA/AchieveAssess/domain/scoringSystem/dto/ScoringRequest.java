package GradeAA.AchieveAssess.domain.scoringSystem.dto;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ScoringRequest {

    private String memberName;
    private int memberId;
    private int examId;

}

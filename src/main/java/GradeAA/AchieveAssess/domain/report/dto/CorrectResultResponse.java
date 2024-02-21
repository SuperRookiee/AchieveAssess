package GradeAA.AchieveAssess.domain.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *  채점결과 응답
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CorrectResultResponse {
    //문항 별 채점결과
    private String correctResult;
}
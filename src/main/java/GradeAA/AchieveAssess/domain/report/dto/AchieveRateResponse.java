package GradeAA.AchieveAssess.domain.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *  평균 성취율 from view_exam_results
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class AchieveRateResponse {
    //평균 정답률
    private String average_correct_rate;
}
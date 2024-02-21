package GradeAA.AchieveAssess.domain.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *  소요시간 응답
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class DurationResponse {
    //문항 별 소요시간
    private int duration;
}
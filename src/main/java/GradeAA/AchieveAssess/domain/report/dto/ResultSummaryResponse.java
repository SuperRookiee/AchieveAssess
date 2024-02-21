package GradeAA.AchieveAssess.domain.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 *  평가결과 요약 응답 (1~4)
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ResultSummaryResponse {
    // 성취기준 ENUM -> STRING
    public void setAchieveLevel(String achieveLevel) {
        if ("1".equals(achieveLevel)) {
            this.achieveLevel = "1단계";
        }
        if ("2".equals(achieveLevel)) {
            this.achieveLevel = "2단계";
        }
        if ("3".equals(achieveLevel)){
            this.achieveLevel = "3단계";
        }
        if ("4".equals(achieveLevel)){
            this.achieveLevel = "4단계";
        }
    }
    //총 문항 수
    private short questTotal;
    //맞힌 문항 수
    private short questCorrect;
    //성취율
    private BigDecimal achieveRate;
    //성취 단계
    private String achieveLevel;
}
package GradeAA.AchieveAssess.domain.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *  기본리포트 문항별 채점, 해설 응답
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class BasicErratumResponse {
    //점수
    private String score;
    //문항 순서
    private String questionOrder;
    //문항 순서 이름
    private String questionOrderName;
    //문항 별 해설
    private String explanations;
    //문항 별 채점결과
    private String correctResult;

}
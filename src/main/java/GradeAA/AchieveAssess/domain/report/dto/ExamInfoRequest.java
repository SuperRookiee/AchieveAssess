package GradeAA.AchieveAssess.domain.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *  시험상태 + '시험참여 정보'란을 위한 요청 Dto
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ExamInfoRequest {
    //수험자 ID
    private long memberId;
    //응시 상태
    private String statusCode;
}
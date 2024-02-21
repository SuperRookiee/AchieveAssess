package GradeAA.AchieveAssess.domain.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *  기본리포트 문항별 채점, 해설 요청 + 내 상세리포트 성취율, 소요시간, 정답률 요청
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class BasicErratumRequest {
    // 시험자 ID
    private long memberId;
    // 시험 ID
    private long examId;
}
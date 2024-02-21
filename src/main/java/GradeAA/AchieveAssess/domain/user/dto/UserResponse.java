package GradeAA.AchieveAssess.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private long memberId;
    private String loginId;
    private String password;
    private String memberName;
    private String gradeLevel;
    private String yearLevel;
    private char marketingYn;
    private char examYn;

    public void clearPassword() {
        this.password = ""; // 회원 상세정보 조회 후, 비번 초기화 용도
    }

}

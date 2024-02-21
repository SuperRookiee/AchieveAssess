package GradeAA.AchieveAssess.domain.user.dto;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class JoinRequest {

    private String loginId;
    private String password;
    private String memberName;
    private String gradeLevel;
    private String yearLevel;
    private char marketingYn;

}


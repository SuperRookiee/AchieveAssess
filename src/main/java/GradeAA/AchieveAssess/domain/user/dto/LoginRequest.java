package GradeAA.AchieveAssess.domain.user.dto;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {

    private String loginId;
    private String password;

}

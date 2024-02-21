package GradeAA.AchieveAssess.domain.user.service;

import GradeAA.AchieveAssess.domain.user.dto.JoinRequest;
import GradeAA.AchieveAssess.domain.user.dto.LoginRequest;
import GradeAA.AchieveAssess.domain.user.dto.UserResponse;
import GradeAA.AchieveAssess.domain.user.repository.UserRepository;
import GradeAA.AchieveAssess.exception.user.AlreadyExistUserException;
import GradeAA.AchieveAssess.exception.user.InvalidLogInInformation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // 로그인
    public UserResponse authenticate(LoginRequest request) {
        UserResponse userResponse = userRepository.findByLoginId(request.getLoginId())
            .orElseThrow(() -> new InvalidLogInInformation("아이디/비밀번호가 올바르지 않습니다."));

        if (userResponse == null) {
            throw new InvalidLogInInformation("아이디/비밀번호가 올바르지 않습니다.");
        }

        boolean passwordMatches = passwordEncoder.matches(request.getPassword(),
            userResponse.getPassword());

        if (!passwordMatches) {
            throw new InvalidLogInInformation("아이디/비밀번호가 올바르지 않습니다.");
        }

        userResponse.clearPassword();
        return userResponse;
    }

    // 회원가입
    public void join(JoinRequest join) {
        Optional<UserResponse> optionalUser = userRepository.findByLoginId(join.getLoginId());

        if (optionalUser.isPresent()) {
            throw new AlreadyExistUserException("이미 존재하는 아이디입니다.");
        }

        String encodedPassword = passwordEncoder.encode(join.getPassword());

        JoinRequest joinUser = JoinRequest.builder()
            .loginId(join.getLoginId())
            .password(encodedPassword)
            .memberName(join.getMemberName())
            .gradeLevel(join.getGradeLevel())
            .yearLevel(join.getYearLevel())
            .marketingYn(join.getMarketingYn())
            .build();

        userRepository.insert(joinUser);
    }

}

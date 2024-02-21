package GradeAA.AchieveAssess.domain.user.controller;

import GradeAA.AchieveAssess.domain.user.dto.JoinRequest;
import GradeAA.AchieveAssess.domain.user.dto.LoginRequest;
import GradeAA.AchieveAssess.domain.user.dto.UserResponse;
import GradeAA.AchieveAssess.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody LoginRequest userRequest) {
        UserResponse userResponse = userService.authenticate(userRequest);
        return ResponseEntity.ok(userResponse);
    }

    // 회원가입
    @PostMapping("/join")
    public ResponseEntity<Void> join(@RequestBody JoinRequest joinRequest) {
        userService.join(joinRequest);
        return ResponseEntity.noContent().build();
    }

}

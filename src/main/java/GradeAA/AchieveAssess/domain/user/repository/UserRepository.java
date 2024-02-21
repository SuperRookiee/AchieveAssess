package GradeAA.AchieveAssess.domain.user.repository;

import GradeAA.AchieveAssess.domain.user.dto.JoinRequest;
import GradeAA.AchieveAssess.domain.user.dto.UserResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface UserRepository {

    /**
     * 회원 가입
     * @param joinUser - 회원 가입 정보
     */
    void insert(JoinRequest joinUser);

    /**
     * 회원 정보 조회
     * @param loginId - 로그인 아이디
     * @return - 회원 정보
     */
    Optional<UserResponse> findByLoginId(String loginId);

}

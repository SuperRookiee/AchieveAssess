package GradeAA.AchieveAssess.domain.main.repository;

import GradeAA.AchieveAssess.domain.main.dto.NoticeResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NoticeRepository {
    List<NoticeResponse> findAll();
}

package GradeAA.AchieveAssess.domain.main.service;

import GradeAA.AchieveAssess.domain.main.dto.NoticeResponse;
import GradeAA.AchieveAssess.domain.main.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NoticeService {
    private final NoticeRepository noticeRepository;

    public List<NoticeResponse> getNotices() {
        return noticeRepository.findAll();
    }
}

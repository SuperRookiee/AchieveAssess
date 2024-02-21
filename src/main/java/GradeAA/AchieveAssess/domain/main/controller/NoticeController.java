package GradeAA.AchieveAssess.domain.main.controller;

import GradeAA.AchieveAssess.domain.main.dto.NoticeResponse;
import GradeAA.AchieveAssess.domain.main.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notice")
@CrossOrigin(origins = "http://localhost:5173")
public class NoticeController {

    private final NoticeService noticeService;

    @GetMapping("")
    public List<NoticeResponse> getAllNotices() {
        List<NoticeResponse> responses = noticeService.getNotices();
        return  responses;
    }
}

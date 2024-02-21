package GradeAA.AchieveAssess.domain.main.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoticeResponse {
    private String category;
    private String title;
    private String content;
    private LocalDateTime regDate;

    public String getRegDate() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");
        return regDate.format(formatter);
    }
}

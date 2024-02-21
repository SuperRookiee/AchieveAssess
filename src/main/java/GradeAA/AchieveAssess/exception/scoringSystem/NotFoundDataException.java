package GradeAA.AchieveAssess.exception.scoringSystem;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NotFoundDataException extends RuntimeException {

    public NotFoundDataException(String message) {
        super(message);
    }

}

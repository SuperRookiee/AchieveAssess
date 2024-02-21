package GradeAA.AchieveAssess.exception.scoringSystem;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class ScoringFailedException extends RuntimeException {

    public ScoringFailedException(String message) {
        super(message);
    }

}

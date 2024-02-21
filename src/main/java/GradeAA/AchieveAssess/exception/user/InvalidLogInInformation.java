package GradeAA.AchieveAssess.exception.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class InvalidLogInInformation extends RuntimeException {

    public InvalidLogInInformation(String message) {
        super(message);
    }
}

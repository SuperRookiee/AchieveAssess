package GradeAA.AchieveAssess.exception.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class AlreadyExistUserException extends RuntimeException {

    public AlreadyExistUserException(String message) {
        super(message);
    }

}

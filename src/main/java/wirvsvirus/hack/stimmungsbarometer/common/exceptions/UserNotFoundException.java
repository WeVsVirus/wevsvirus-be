package wirvsvirus.hack.stimmungsbarometer.common.exceptions;


public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String userId) {
        super("UserID: '" + userId + "' was not found.");
    }
}

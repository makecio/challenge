package com.baluwo.challenge.exception;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class ResponseExceptionHandler {

    @ExceptionHandler({Exception.class})
    public ResponseEntity<?> handleAllExceptions(Exception ex, WebRequest request) {

        List<String> messages = new ArrayList<>(Arrays.asList(("" + ex.getMessage()).split("(\r\n|\n)")));

        ErrorDetails errorDetails = new ErrorDetails(
                new Date(),
                messages
        );
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({NullPointerException.class})
    public ResponseEntity<?> handleNullExceptions(NullPointerException ex, WebRequest request) {
        String message = ex.getMessage();

        if (Arrays.stream(ex.getStackTrace()).findFirst().isPresent()) {
            StackTraceElement element = Arrays.stream(ex.getStackTrace()).findFirst().get();
            message = "Null pointer: " + element.getClassName() + "." + element.getMethodName() + ":" + element.getLineNumber();
        }

        ErrorDetails errorDetails = new ErrorDetails(
                new Date(),
                message
        );
        return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler({MethodArgumentNotValidException.class})
    public ResponseEntity<?> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, WebRequest request) {

        ArrayList<String> messages = new ArrayList<>();

        ex.getBindingResult().getFieldErrors().forEach(error -> {
            String field = error.getField();
            messages.add(String.format("%s : %s", field, error.getDefaultMessage()));
        });

        ErrorDetails errorDetails = new ErrorDetails(new Date(), messages);

        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }


}

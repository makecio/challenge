package com.baluwo.challenge.exception;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class ErrorDetails {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MMM-yyyy HH:mm:ss z")
    private Date date;

    private List<String> messages = new ArrayList<>();

    public ErrorDetails(Date date, List<String> messages) {
        super();
        this.date = date;
        this.messages = messages;
    }

    public ErrorDetails(Date date, String messages) {
        super();
        this.date = date;
        this.messages = Collections.singletonList(messages);
	}

}

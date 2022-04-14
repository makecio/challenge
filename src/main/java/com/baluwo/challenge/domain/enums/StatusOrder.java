package com.baluwo.challenge.domain.enums;

import java.util.Arrays;
import java.util.Optional;

public enum StatusOrder {

    PENDING(0),
    APPROVED(1),
    NOT_APPROVED(2);

    private final int value;

    StatusOrder(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public static Optional<StatusOrder> valueOf(int value) {
        return Arrays.stream(values())
                .filter(a -> a.value == value)
                .findFirst();
    }
}
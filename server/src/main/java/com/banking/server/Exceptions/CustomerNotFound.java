package com.banking.server.Exceptions;

public class CustomerNotFound extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public CustomerNotFound() {
    }

    public CustomerNotFound(String msg) {
        super(msg);
    }
}

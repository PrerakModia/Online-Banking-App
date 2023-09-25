package com.banking.server.Exceptions;

public class AccountNotFound extends RuntimeException{
    public AccountNotFound(String msg) {
        super(msg);
    }
}

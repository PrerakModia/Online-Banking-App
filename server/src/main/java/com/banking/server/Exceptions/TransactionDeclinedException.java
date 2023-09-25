package com.banking.server.Exceptions;

public class TransactionDeclinedException extends RuntimeException {
    public TransactionDeclinedException(String msg){
        super(msg);
    }
}

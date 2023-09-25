package com.banking.server.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalHandler {
    @ExceptionHandler(AccountNotFound.class)
    public ResponseEntity<Object> handleAccountNotFoundException(AccountNotFound ex) {
        ErrorMessage response = new ErrorMessage(HttpStatus.NOT_FOUND, ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(CustomerNotFound.class)
    public ResponseEntity<Object> handleCustomerNotFoundException(CustomerNotFound ex) {
        ErrorMessage response = new ErrorMessage(HttpStatus.NOT_FOUND, ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

//    @ExceptionHandler(TransactionsNotFoundException.class)
//    public ResponseEntity<Object> handleTransactionsNotFoundException(TransactionsNotFoundException ex) {
//        ErrorMessage response = new ErrorMessage(HttpStatus.NOT_FOUND, ex.getMessage());
//        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
//    }


//    @ExceptionHandler(InvalidInputException.class)
//    public ResponseEntity<Object> handleInvalidInputException(InvalidInputException ex) {
//        ErrorMessage response = new ErrorMessage(HttpStatus.CONFLICT, ex.getMessage());
//        return new ResponseEntity<>(response, HttpStatus.CONFLICT);
//    }

    @ExceptionHandler(InvalidTransactionException.class)
    public ResponseEntity<Object> handleInvalidTransactionException(InvalidTransactionException ex) {
        ErrorMessage response = new ErrorMessage(HttpStatus.BAD_REQUEST, ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(TransactionDeclinedException.class)
    public ResponseEntity<Object> handleTransactionDeclinedException(TransactionDeclinedException ex) {
        ErrorMessage response = new ErrorMessage(HttpStatus.BAD_REQUEST, ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleGlobalException(Exception ex) {
        ErrorMessage response = new ErrorMessage(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred.");
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

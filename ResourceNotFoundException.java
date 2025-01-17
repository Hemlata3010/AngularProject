package com.Student.exceptions;

public class ResourceNotFoundException extends RuntimeException {
    private String message;
    private String field;
    private Object value;

    // Constructor for the exception
    public ResourceNotFoundException(String resourceName, String field, Object value) {
        super(String.format("%s not found with %s : '%s'", resourceName, field, value));
        this.message = String.format("%s not found with %s : '%s'", resourceName, field, value);
        this.field = field;
        this.value = value;
    }

    // Getter for message (optional if needed outside)
    public String getMessage() {
        return message;
    }

    // Getter for field (optional if needed outside)
    public String getField() {
        return field;
    }

    // Getter for value (optional if needed outside)
    public Object getValue() {
        return value;
    }
}

package com.lavanya.portfolio.contact;

import java.time.Instant;

public record ContactResponse(Long id, Instant createdAt, String message) {
    static ContactResponse from(ContactMessage saved) {
        return new ContactResponse(saved.getId(), saved.getCreatedAt(), "Message received.");
    }
}

package com.lavanya.portfolio.contact;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService {
    private final ContactMessageRepository repository;

    public ContactService(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public ContactResponse save(ContactRequest request) {
        ContactMessage message = new ContactMessage(
                request.name().strip(),
                request.email().strip(),
                request.message().strip());
        return ContactResponse.from(repository.save(message));
    }
}

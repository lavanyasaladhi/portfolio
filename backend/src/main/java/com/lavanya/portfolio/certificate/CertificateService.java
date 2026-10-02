package com.lavanya.portfolio.certificate;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CertificateService {
    private final CertificateRepository repository;

    public CertificateService(CertificateRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<CertificateResponse> findAll() {
        return repository.findAllByOrderByIdAsc().stream().map(CertificateResponse::from).toList();
    }
}

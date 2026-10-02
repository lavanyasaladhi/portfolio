package com.lavanya.portfolio.certificate;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificateRepository extends JpaRepository<Certificate, Long> {
    List<Certificate> findAllByOrderByIdAsc();
    Optional<Certificate> findFirstByTitle(String title);
}

package com.lavanya.portfolio.certificate;

public record CertificateResponse(Long id, String title, String issuer, String date, String certificateUrl) {
    static CertificateResponse from(Certificate certificate) {
        return new CertificateResponse(
                certificate.getId(),
                certificate.getTitle(),
                certificate.getIssuer(),
                certificate.getDate(),
                certificate.getCertificateUrl());
    }
}

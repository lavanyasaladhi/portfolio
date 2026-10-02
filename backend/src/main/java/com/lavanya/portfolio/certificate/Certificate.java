package com.lavanya.portfolio.certificate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "certificates")
public class Certificate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String title;

    @Column(nullable = false, length = 150)
    private String issuer;

    @Column(length = 40)
    private String date;

    @Column(length = 1000)
    private String certificateUrl;

    protected Certificate() {
    }

    public Certificate(String title, String issuer, String date, String certificateUrl) {
        this.title = title;
        this.issuer = issuer;
        this.date = date;
        this.certificateUrl = certificateUrl;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getIssuer() { return issuer; }
    public String getDate() { return date; }
    public String getCertificateUrl() { return certificateUrl; }

    public void updateSeedDetails(String title, String issuer) {
        this.title = title;
        this.issuer = issuer;
    }
}

package com.lavanya.portfolio.config;

import com.lavanya.portfolio.certificate.Certificate;
import com.lavanya.portfolio.certificate.CertificateRepository;
import com.lavanya.portfolio.project.Project;
import com.lavanya.portfolio.project.ProjectRepository;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PortfolioDataInitializer {
    private static final String GITHUB_PLACEHOLDER = "YOUR_GITHUB_URL";
    private static final String DEMO_PLACEHOLDER = "YOUR_LIVE_DEMO_URL";
    private static final String CERTIFICATE_PLACEHOLDER = "YOUR_CERTIFICATE_FILE";

    @Bean
    CommandLineRunner seedPortfolio(ProjectRepository projects, CertificateRepository certificates) {
        return args -> {
            if (projects.count() == 0) {
                projects.saveAll(List.of(
                        new Project(
                                "maze-escape",
                                "Maze Escape",
                                "A browser-based maze game where players navigate through challenging maze levels, collect items, avoid obstacles, and reach the exit.",
                                "HTML,CSS,JavaScript",
                                "Multiple levels, timer, score, and lives;Keyboard and mobile controls;Collectible coins and obstacles;Exit and door mechanics with sound effects",
                                GITHUB_PLACEHOLDER,
                                DEMO_PLACEHOLDER,
                                ""),
                        new Project(
                                "candles-ghost",
                                "Candles Ghost",
                                "An atmospheric browser project exploring candlelight, animation, and a ghostly visual experience.",
                                "HTML,CSS,JavaScript",
                                "Candle-inspired visuals;Animated ghost character;Interactive web experience",
                                GITHUB_PLACEHOLDER,
                                DEMO_PLACEHOLDER,
                                "")));
            }
            seedCertificate(
                    certificates,
                    "Data Analytics with Python",
                    "NPTEL");
            seedCertificate(
                    certificates,
                    "Java Programming Certificate",
                    "Infosys");
        };
    }

    private void seedCertificate(CertificateRepository certificates, String title, String issuer) {
        certificates.findFirstByTitle(title).ifPresentOrElse(
                certificate -> {
                    if (!issuer.equals(certificate.getIssuer())) {
                        certificate.updateSeedDetails(title, issuer);
                        certificates.save(certificate);
                    }
                },
                () -> certificates.save(new Certificate(title, issuer, "", CERTIFICATE_PLACEHOLDER)));
    }
}

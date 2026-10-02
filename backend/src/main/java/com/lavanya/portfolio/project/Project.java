package com.lavanya.portfolio.project;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 80)
    private String slug;

    @Column(nullable = false, length = 120)
    private String title;

    @Column(nullable = false, length = 2000)
    private String description;

    @Column(nullable = false, length = 500)
    private String technologies;

    @Column(nullable = false, length = 1500)
    private String features;

    @Column(length = 1000)
    private String githubUrl;

    @Column(length = 1000)
    private String liveDemoUrl;

    @Column(length = 1000)
    private String imageUrl;

    protected Project() {
    }

    public Project(String slug, String title, String description, String technologies, String features,
            String githubUrl, String liveDemoUrl, String imageUrl) {
        this.slug = slug;
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.features = features;
        this.githubUrl = githubUrl;
        this.liveDemoUrl = liveDemoUrl;
        this.imageUrl = imageUrl;
    }

    public Long getId() { return id; }
    public String getSlug() { return slug; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getTechnologies() { return technologies; }
    public String getFeatures() { return features; }
    public String getGithubUrl() { return githubUrl; }
    public String getLiveDemoUrl() { return liveDemoUrl; }
    public String getImageUrl() { return imageUrl; }
}

package com.lavanya.portfolio.project;

import java.util.List;

public record ProjectResponse(
        String id,
        String title,
        String description,
        List<String> tech,
        List<String> features,
        String github,
        String demo,
        String image) {
    static ProjectResponse from(Project project) {
        return new ProjectResponse(
                project.getSlug(),
                project.getTitle(),
                project.getDescription(),
                split(project.getTechnologies(), ","),
                split(project.getFeatures(), ";"),
                project.getGithubUrl(),
                project.getLiveDemoUrl(),
                project.getImageUrl());
    }

    private static List<String> split(String values, String delimiter) {
        return values == null || values.isBlank()
                ? List.of()
                : java.util.Arrays.stream(values.split(delimiter))
                        .map(String::trim)
                        .filter(value -> !value.isEmpty())
                        .toList();
    }
}

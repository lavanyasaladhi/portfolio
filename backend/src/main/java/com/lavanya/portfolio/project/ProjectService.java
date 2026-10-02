package com.lavanya.portfolio.project;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProjectService {
    private final ProjectRepository repository;

    public ProjectService(ProjectRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<ProjectResponse> findAll() {
        return repository.findAllByOrderByIdAsc().stream().map(ProjectResponse::from).toList();
    }
}

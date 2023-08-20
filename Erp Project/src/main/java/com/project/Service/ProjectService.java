package com.project.Service;


import com.project.Entity.ProjectEntity;
import com.project.Repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectEntityRepository;

    public List<ProjectEntity> getAllProjects() {
        return projectEntityRepository.findAll();
    }

    public Optional<ProjectEntity> getProjectById(Long id) {
        return projectEntityRepository.findById(id);
    }

    public ProjectEntity createProject(ProjectEntity projectEntity) {
        return projectEntityRepository.save(projectEntity);
    }

    public ProjectEntity updateProject(Long id, ProjectEntity projectEntity) {
        projectEntity.setProjectid(id);
        return projectEntityRepository.save(projectEntity);
    }

    public void deleteProject(Long id) {
        projectEntityRepository.deleteById(id);

    }
}


//end of ProjectService.java








package com.project.Controller;
import com.project.Entity.ProjectEntity;
import com.project.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:63342/","http://127.0.0.1:5500/"})
@RestController
@RequestMapping("/api")
public class ProjectController {
    private final ProjectService projectEntityService;

    @Autowired
    public ProjectController(ProjectService projectEntityService) {
        this.projectEntityService = projectEntityService;
    }

    @GetMapping("/projects")
    public List<ProjectEntity> getAllProjects() {
        return projectEntityService.getAllProjects();
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<ProjectEntity> getProjectById(@PathVariable("id") Long id) {
        Optional<ProjectEntity> projectEntity = projectEntityService.getProjectById(id);
        if (projectEntity.isPresent()) {
            return new ResponseEntity<>(projectEntity.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/projects")
    public ResponseEntity<ProjectEntity> createProject(@RequestBody ProjectEntity projectEntity) {
        return new ResponseEntity<>(projectEntityService.createProject(projectEntity), HttpStatus.CREATED);
    }

    @PutMapping("/projects/{id}")
    public ResponseEntity<ProjectEntity> updateProject(@PathVariable("id") Long id, @RequestBody ProjectEntity projectEntity) {
        Optional<ProjectEntity> projectEntityOptional = projectEntityService.getProjectById(id);
        if (!projectEntityOptional.isPresent())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(projectEntity, HttpStatus.OK);
    }

    @DeleteMapping("/projects/{id}")
    public ResponseEntity<HttpStatus> deleteProject(@PathVariable("id") Long id) {
        try {
            projectEntityService.deleteProject(id);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}






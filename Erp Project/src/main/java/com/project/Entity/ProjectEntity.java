package com.project.Entity;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class ProjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long projectid;
    private String projectName;
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private String projectStartDate;
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private String projectEndDate;
    private String projectType;
@OneToMany(mappedBy = "projectEntity",fetch = FetchType.LAZY)

private List<ModuleEntity> moduleEntity=new ArrayList<>();

    public ProjectEntity(String projectName, String projectStartDate, String projectEndDate, String projectType) {
        this.projectName = projectName;
        this.projectStartDate = projectStartDate;
        this.projectEndDate = projectEndDate;
        this.projectType = projectType;
    }

    public ProjectEntity() {

    }

    public Long getProjectid() {
        return projectid;
    }

    public void setProjectid(Long projectid) {
        this.projectid = projectid;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectStartDate() {
        return projectStartDate;
    }

    public void setProjectStartDate(String projectStartDate) {
        this.projectStartDate = projectStartDate;
    }

    public String getProjectEndDate() {
        return projectEndDate;
    }

    public void setProjectEndDate(String projectEndDate) {
        this.projectEndDate = projectEndDate;
    }

    public String getProjectType() {
        return projectType;
    }

    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }

    public List<ModuleEntity> getModuleEntity() {
        return moduleEntity;
    }

    public void setModuleEntity(List<ModuleEntity> moduleEntity) {
        this.moduleEntity = moduleEntity;
    }

    @Override
    public String toString() {
        return "ProjectEntity{" +
                "projectid=" + projectid +
                ", projectName='" + projectName + '\'' +
                ", projectStartDate='" + projectStartDate + '\'' +
                ", projectEndDate='" + projectEndDate + '\'' +
                ", projectType='" + projectType + '\'' +
                ", moduleEntity=" + moduleEntity +
                '}';
    }

}

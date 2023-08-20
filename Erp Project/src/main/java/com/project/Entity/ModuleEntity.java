package com.project.Entity;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;

@Entity

public class ModuleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long moduleId;
    @Column(name = "Modulename")
    private String moduleName;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String moduleStartDate;
    private String moduleDeveloperName;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String  moduleEndDate;
    private int moduleEffortEstimate;

    public ModuleEntity(Long moduleId) {
        this.moduleId = moduleId;
    }

    @ManyToOne
    @JoinColumn(name="project_id ")
    private ProjectEntity projectEntity;

    public ModuleEntity(String moduleName, String moduleStartDate, String moduleDeveloperName, String moduleEndDate, ProjectEntity projectEntity) {
        this.moduleName = moduleName;
        this.moduleStartDate = moduleStartDate;
        this.moduleDeveloperName = moduleDeveloperName;
        this.moduleEndDate = moduleEndDate;
        this.projectEntity = projectEntity;
    }

    public ModuleEntity() {

    }

    public static void deleteAll() {
    }

    public ProjectEntity getProjectEntity() {
        return projectEntity;
    }

    public void setProjectEntity(ProjectEntity projectEntity) {
        this.projectEntity = projectEntity;
    }
    public Long getModuleId() {
        return moduleId;
    }

    public void setModuleId(Long moduleId) {
        this.moduleId = moduleId;
    }

    public String getModuleName() {
        return moduleName;
    }

    public void setModuleName(String moduleName) {
        this.moduleName = moduleName;
    }

    public String getModuleStartDate() {
        return moduleStartDate;
    }

    public void setModuleStartDate(String moduleStartDate) {
        this.moduleStartDate = moduleStartDate;
    }

    public String getModuleDeveloperName() {
        return moduleDeveloperName;
    }

    public void setModuleDeveloperName(String moduleDeveloperName) {
        this.moduleDeveloperName = moduleDeveloperName;
    }

    public String getModuleEndDate() {
        return moduleEndDate;
    }

    public void setModuleEndDate(String moduleEndDate) {
        this.moduleEndDate = moduleEndDate;
    }

    public int getModuleEffortEstimate() {
        return moduleEffortEstimate;
    }

    public void setModuleEffortEstimate(int moduleEffortEstimate) {
        this.moduleEffortEstimate = moduleEffortEstimate;
    }

    @Override
    public String toString() {
        return "ModuleEntity{" +
                "moduleId=" + moduleId +
                ", moduleName='" + moduleName + '\'' +
                ", moduleStartDate='" + moduleStartDate + '\'' +
                ", moduleDeveloperName='" + moduleDeveloperName + '\'' +
                ", moduleEndDate='" + moduleEndDate + '\'' +
                ", moduleEffortEstimate=" + moduleEffortEstimate +
                '}';
    }


}

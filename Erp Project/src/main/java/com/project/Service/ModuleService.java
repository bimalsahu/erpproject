package com.project.Service;

import com.project.Entity.ModuleEntity;
import com.project.Repository.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Component
public class ModuleService {
    @Autowired
    ModuleRepository moduleRepository;

    public List<ModuleEntity> getAllModule()
    {
        List<ModuleEntity> moduleEntityList = moduleRepository.findAll();

        if(moduleEntityList.size() > 0) {
            return moduleEntityList;
        } else {
            return new ArrayList<ModuleEntity>();
        }
    }
    public ModuleEntity getModuleById(Long id)
    {
        Optional<ModuleEntity> moduleEntity = moduleRepository.findById(id);

        return null;
    }

    public ModuleEntity getAllModuleByid(Long id) {
        return null;
    }

    public ModuleEntity createOrUpdateModules(ModuleEntity moduleEntity) {
        return moduleEntity;
    }

    public ModuleRepository deleteModuleById(Long id) {

        return null;
    }

    public ModuleEntity addModuleEntity(ModuleEntity m) {
        ModuleEntity module = this.moduleRepository.save(m);
        return m;
    }

    public ModuleEntity save(ModuleEntity moduleEntity) {
        return moduleEntity;
    }

    public void deleteModuleEntity(Long id) {
        moduleRepository.deleteById(id);
    }

    public void updateModuleEntity(ModuleEntity moduleEntity) {
        moduleRepository.save(moduleEntity);
    }

    public void createModuleEntity(ModuleEntity moduleEntity) {
        moduleRepository.save(moduleEntity);

    }

    public ModuleEntity getModuleEntityById(Long id) {
        return moduleRepository.findById(id).get();

    }

    public List<ModuleEntity> getAllModuleEntity() {
        return moduleRepository.findAll();
    }
}
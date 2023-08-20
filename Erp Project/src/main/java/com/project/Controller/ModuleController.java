package com.project.Controller;
import com.project.Entity.ModuleEntity;
import com.project.Service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = {"http://localhost:63342/","http://127.0.0.1:5500/" })
@RestController
@RequestMapping("/api")
public class ModuleController {
    @Autowired
    ModuleService moduleService;
    private final ModuleService ModuleEntityService;
    private ModuleEntity moduleEntity;

    public ModuleController(ModuleService ModuleEntityService) {
        this.ModuleEntityService = ModuleEntityService;
    }

    @GetMapping("/modules")
    public ResponseEntity<List<ModuleEntity>> getAllModuleEntity() {
        List<ModuleEntity> list = ModuleEntityService.getAllModuleEntity();
        return new ResponseEntity<List<ModuleEntity>>(list, new HttpHeaders(), HttpStatus.OK);
    }
    @GetMapping("/modules/{id}")
    public ResponseEntity<ModuleEntity> getModuleEntityById(@PathVariable("id") Long id) {
        moduleEntity = ModuleEntityService.getModuleEntityById(id);
        return new ResponseEntity<ModuleEntity>(moduleEntity, new HttpHeaders(), HttpStatus.OK);
    }
    @PostMapping("/modules")
    public ResponseEntity<ModuleEntity> createModuleEntity(@RequestBody ModuleEntity moduleEntity) {
        ModuleEntityService.createModuleEntity(moduleEntity);
        return new ResponseEntity<ModuleEntity>(moduleEntity, new HttpHeaders(), HttpStatus.OK);
    }
    @PutMapping("/modules")
    public ResponseEntity<ModuleEntity> updateModuleEntity(@RequestBody ModuleEntity moduleEntity) {
        ModuleEntityService.updateModuleEntity(moduleEntity);
        return new ResponseEntity<ModuleEntity>(moduleEntity, new HttpHeaders(), HttpStatus.OK);
    }
    @DeleteMapping("/modules/{id}")
    public ResponseEntity<ModuleEntity> deleteModuleEntity(@PathVariable("id") Long id) {
        try {
            ModuleEntityService.deleteModuleEntity(id);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<ModuleEntity>(HttpStatus.NO_CONTENT);
    }

}



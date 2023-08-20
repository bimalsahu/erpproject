package com.project.Repository;
import com.project.Entity.ModuleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ModuleRepository extends JpaRepository<ModuleEntity,Long >{




}


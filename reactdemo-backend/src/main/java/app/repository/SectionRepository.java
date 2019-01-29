package app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import app.model.Section;

public interface SectionRepository extends JpaRepository<Section, Long>{

}

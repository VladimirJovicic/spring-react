package app.service;

import java.util.List;

import app.model.Section;

public interface SectionService {

	Section findOne(Long id);
	List<Section> findAll();
	Section save(Section section);
	void delete (Long id);
}

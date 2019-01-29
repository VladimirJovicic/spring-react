package app.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.model.Section;
import app.repository.SectionRepository;
import app.service.SectionService;

@Service
public class SectionServiceImpl implements SectionService{
	
	@Autowired
	private SectionRepository sectionRepository;

	@Override
	public Section findOne(Long id) {
		return sectionRepository.findOne(id);
	}

	@Override
	public List<Section> findAll() {
		return sectionRepository.findAll();
	}

	@Override
	public Section save(Section section) {
		return sectionRepository.save(section);
	}

	@Override
	public void delete(Long id) {
		sectionRepository.delete(id);
		
	}

}

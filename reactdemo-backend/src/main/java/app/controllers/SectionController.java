package app.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.converter.SectionConverter;
import app.dto.SectionDTO;
import app.model.Section;
import app.service.SectionService;
import app.service.UserService;

@RestController
@CrossOrigin
@RequestMapping(value="/section")
public class SectionController {
	
	@Autowired
	private SectionService sectionService;
	
	@Autowired
	private UserService userService;
	
	private SectionConverter sectionCoverter = new SectionConverter();
	
	@RequestMapping(value="/getAllSections",method = RequestMethod.GET)
	public ResponseEntity<List<SectionDTO>> getAll() {
		return new ResponseEntity<>(sectionCoverter.SectionToDtoList(sectionService.findAll()), HttpStatus.OK);
	}
	
	@RequestMapping(value="/getSection/{id}",method = RequestMethod.GET)
	public ResponseEntity<Section> getOne(@PathVariable Long id) {
		return new ResponseEntity<>(sectionService.findOne(id), HttpStatus.OK);
	}
	
	@RequestMapping(value="/insert",method = RequestMethod.POST)
	public ResponseEntity<Section> insert(@RequestBody SectionDTO dto) {
		Section created = sectionService.save(sectionCoverter.DtoToSection(dto, userService.findByUsername(dto.getAuthor())));
		return new ResponseEntity<>(created,HttpStatus.CREATED);
	}

}

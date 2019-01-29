package app.converter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import app.dto.SectionDTO;
import app.model.Article;
import app.model.Section;
import app.model.user.User;

public class SectionConverter {
	
	
	public SectionConverter(){}
	
	public Section DtoToSection(SectionDTO dto, User u) {
		Section retVal = new Section();
		retVal.setId(dto.getId());
		retVal.setName(dto.getName());
		retVal.setDescription(dto.getDesctiption());
		retVal.setArticles(new HashSet<Article>());
		retVal.setAuthor(u);
		return retVal;
	}
	
	public SectionDTO SectionToDTO(Section section) {
		return new SectionDTO(section.getId(), section.getName(), section.getDescription(), section.getAuthor().getUsername());
	}
	
	public List<SectionDTO> SectionToDtoList(List<Section> list) {
		List<SectionDTO> retVal = new ArrayList<SectionDTO>();
		for(Section s : list) {
			retVal.add(SectionToDTO(s));
		}
		return retVal;
	}
	
	public Set<SectionDTO> SectionToDtoSet(Set<Section> list) {
		Set<SectionDTO> retVal = new HashSet<SectionDTO>(0);
		for(Section s : list) {
			retVal.add(SectionToDTO(s));
		}
		return retVal;
	}
	
}

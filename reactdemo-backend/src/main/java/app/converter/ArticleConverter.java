package app.converter;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import app.dto.ArticleDTO;
import app.model.Article;
import app.model.Section;

public class ArticleConverter {
	
	public ArticleConverter(){}
	
	public Article DtoToArticle(ArticleDTO dto, Section s) {
		Article retVal = new Article();
		retVal.setId(dto.getId());
		retVal.setName(dto.getName());
		retVal.setDescription(dto.getDescription());
		retVal.setSection(s);
		return retVal;
	}
	
	public ArticleDTO ArticleToDto(Article article) {
		return new ArticleDTO(article.getId(), article.getName(), article.getSection().getId(), article.getDescription());
	}
	
	public List<ArticleDTO> SectionToDtoList(List<Article> list) {
		List<ArticleDTO> retVal = new ArrayList<ArticleDTO>();
		for(Article a : list) {
			retVal.add(ArticleToDto(a));
		}
		return retVal;
	}
	
	public Set<ArticleDTO> SectionToDtoSet(Set<Article> list) {
		Set<ArticleDTO> retVal = new HashSet<ArticleDTO>(0);
		for(Article a : list) {
			retVal.add(ArticleToDto(a));
		}
		return retVal;
	}
}

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

import app.converter.ArticleConverter;
import app.dto.ArticleDTO;
import app.model.Article;
import app.model.Section;
import app.service.ArticleService;
import app.service.SectionService;

@RestController
@CrossOrigin
@RequestMapping(value="/article")
public class ArticleController {

	@Autowired
	private ArticleService articleService;
	
	@Autowired
	private SectionService sectionService;
	
	private ArticleConverter articleConverter = new ArticleConverter();
	
	@RequestMapping(value="getAllArticles/{id}",method = RequestMethod.GET)
	public ResponseEntity<List<ArticleDTO>> getAllFromSection(@PathVariable Long id) {
		return new ResponseEntity<>(articleConverter.SectionToDtoList(articleService.findBySectionId(id)), HttpStatus.OK);
	}
	
	@RequestMapping(value="/insertArticle",method = RequestMethod.PUT)
	public ResponseEntity<Article> insertArticle(@RequestBody ArticleDTO dto) {
		Section sectionForDTO = sectionService.findOne(dto.getSection_id());
		dto.setSection_id(sectionForDTO.getId());
		Article created = articleService.save(articleConverter.DtoToArticle(dto,sectionForDTO));
		return new ResponseEntity<>(created, HttpStatus.OK);
	}
	
	@RequestMapping(value="getArticleFromComment/{id}", method=RequestMethod.GET)
	public ResponseEntity<ArticleDTO> getParrentArticle(@PathVariable Long id) {
		return new ResponseEntity<>(articleConverter.ArticleToDto(articleService.findOne(id)), HttpStatus.OK);	
	}
	
	

}

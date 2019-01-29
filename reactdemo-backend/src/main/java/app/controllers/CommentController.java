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

import app.converter.CommentConverter;
import app.dto.CommentDTO;
import app.model.Article;
import app.model.Comment;
import app.service.ArticleService;
import app.service.CommentService;

@RestController
@CrossOrigin
@RequestMapping(value="/comments")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@Autowired
	private ArticleService articleService;
	
	private CommentConverter commentConverter = new CommentConverter();
	
	@RequestMapping(value="getAllCommentsFromArticle/{id}",method = RequestMethod.GET)
	public ResponseEntity<List<Comment>> getAllFromSection(@PathVariable Long id) {
		return new ResponseEntity<>(commentService.findByArticleId(id), HttpStatus.OK);
	}
	
	@RequestMapping(value="commentOnArticle", method=RequestMethod.POST)
	public ResponseEntity<Comment> commentOnArticle(@RequestBody CommentDTO dto) {
		Article a = articleService.findOne(dto.getArticle_id());
		Comment commentdet = commentService.save(commentConverter.DtoToComment(dto,a));
		return new ResponseEntity<>(commentdet, HttpStatus.OK);	
	}
	
}

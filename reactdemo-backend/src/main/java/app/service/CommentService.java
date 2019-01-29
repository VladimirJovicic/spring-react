package app.service;

import java.util.List;

import app.model.Comment;

public interface CommentService {

	Comment findOne(Long id);
	List<Comment> findAll();
	Comment save(Comment comment);
	void delete (Long id);
	List<Comment> findByArticleId(Long id);
}

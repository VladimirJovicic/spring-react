package app.service;

import java.util.List;

import app.model.Article;

public interface ArticleService {

	Article findOne(Long id);
	List<Article> findAll();
	Article save(Article article);
	void delete (Long id);
	List<Article> findBySectionId(Long id);
}

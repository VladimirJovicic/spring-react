package app.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import app.model.Article;
import app.repository.ArticleRepository;
import app.service.ArticleService;

@Service
public class ArticleServiceImpl implements ArticleService{
	
	@Autowired
	private ArticleRepository articleRepository;

	@Override
	public Article findOne(Long id) {
		return articleRepository.findOne(id);
	}

	@Override
	public List<Article> findAll() {
		return articleRepository.findAll();
	}

	@Override
	public Article save(Article article) {
		return articleRepository.save(article);
	}

	@Override
	public void delete(Long id) {
		articleRepository.delete(id);
		
	}

	@Override
	public List<Article> findBySectionId(Long id) {
		return articleRepository.findBySectionId(id);
	}



}

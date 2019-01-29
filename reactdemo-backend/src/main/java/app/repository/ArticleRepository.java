package app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import app.model.Article;

public interface ArticleRepository extends JpaRepository<Article, Long>{
	List<Article> findBySectionId(Long id);
}

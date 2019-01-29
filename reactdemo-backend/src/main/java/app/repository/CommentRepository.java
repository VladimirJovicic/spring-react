package app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import app.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long>{

	List<Comment> findByArticleId(Long id);
}

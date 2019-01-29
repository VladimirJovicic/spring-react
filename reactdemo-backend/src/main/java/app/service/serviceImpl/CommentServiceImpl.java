package app.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.model.Comment;
import app.repository.CommentRepository;
import app.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService{

	@Autowired 
	private CommentRepository commentRepository;
	
	@Override
	public Comment findOne(Long id) {
		return commentRepository.findOne(id);
	}

	@Override
	public List<Comment> findAll() {
		return commentRepository.findAll();
	}

	@Override
	public Comment save(Comment comment) {
		return commentRepository.save(comment);
	}

	@Override
	public void delete(Long id) {
		commentRepository.delete(id);
		
	}

	@Override
	public List<Comment> findByArticleId(Long id) {
		return commentRepository.findByArticleId(id);
	}

}

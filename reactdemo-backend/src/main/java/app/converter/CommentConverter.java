package app.converter;


import app.dto.CommentDTO;
import app.model.Article;
import app.model.Comment;

public class CommentConverter {


	public CommentConverter(){}
	
	public Comment DtoToComment(CommentDTO dto,Article a) {
		Comment retVal = new Comment();
		retVal.setContent(dto.getContent());
		retVal.setArticle(a);
		return retVal;
	}
	
	public CommentDTO CommentToDto(Comment comment) {
		return new CommentDTO(comment.getContent(), comment.getArticle().getId());
	}
}

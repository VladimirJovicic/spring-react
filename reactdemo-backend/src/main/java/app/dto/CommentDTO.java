package app.dto;

public class CommentDTO {

	private String content;
	private Long article_id;
	
	public CommentDTO(){}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getArticle_id() {
		return article_id;
	}

	public void setArticle_id(Long article_id) {
		this.article_id = article_id;
	}

	public CommentDTO(String content, Long article_id) {
		super();
		this.content = content;
		this.article_id = article_id;
	}
	
	
}

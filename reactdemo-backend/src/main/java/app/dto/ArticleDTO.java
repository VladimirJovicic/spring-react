package app.dto;

public class ArticleDTO {

	public ArticleDTO(){}
	
	private Long id;
	private String name;
	private Long section_id;
	private String description;

	
	public ArticleDTO(Long id, String name, Long section_id, String description) {
		super();
		this.name = name;
		this.section_id = section_id;
		this.setDescription(description);
		this.setId(id);
		
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getSection_id() {
		return section_id;
	}
	public void setSection_id(Long section_id) {
		this.section_id = section_id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	
	
}

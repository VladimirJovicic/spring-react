package app.dto;

public class SectionDTO {
	
	public SectionDTO(){}

	public SectionDTO(Long id, String name, String desctiption, String author) {
		this.id = id;
		this.name = name;
		this.desctiption = desctiption;
		this.author = author;
	}
	private Long id;
	private String name;
	private String desctiption;
	private String author;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesctiption() {
		return desctiption;
	}

	public void setDesctiption(String desctiption) {
		this.desctiption = desctiption;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	
}

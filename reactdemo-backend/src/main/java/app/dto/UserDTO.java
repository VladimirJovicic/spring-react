package app.dto;

import java.util.Set;

public class UserDTO {
	private String name;
	private String surname;
	private String email;
	private String username;
	private String role;
	private String phone;
	private String profilePic;
	private Set<SectionDTO> sections;
	
	public UserDTO(){}
	

	public UserDTO(String name, String surname, String email, String username, String role, String phone,String profilePic, Set<SectionDTO> sections) {
		super();
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.username = username;
		this.role = role;
		this.phone = phone;
		this.profilePic = profilePic;
		this.setSections(sections);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}



	public String getProfilePic() {
		return profilePic;
	}



	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}



	public Set<SectionDTO> getSections() {
		return sections;
	}



	public void setSections(Set<SectionDTO> sections) {
		this.sections = sections;
	}



	
}

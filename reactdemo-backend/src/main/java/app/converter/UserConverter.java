package app.converter;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;


import app.dto.UserDTO;
import app.model.user.User;

public class UserConverter {
	private SectionConverter sectionConverter = new SectionConverter();
	
	public UserConverter(){}
	
	public UserDTO UserToDto(User user) {
		return new UserDTO(user.getName(), 
				user.getSurname(), 
				user.getEmail(), 
				user.getUsername(), 
				user.getRole().getName().toString(),
				user.getPhone(), 
				user.getProfilePic(),
				sectionConverter.SectionToDtoSet(user.getSections()));
	}
	
	public List<UserDTO> ListUserToListUserDto(List<User> list) {
		List<UserDTO> retVal = new ArrayList<UserDTO>();
		for(User u : list) {
			u.setProfilePic(convertPic(u.getProfilePic()));
			retVal.add(UserToDto(u));
		}
		
		return retVal;
	}
	
	public String convertPic(String pic) {
		Path path = Paths.get(pic);
		byte[] content = null;
		try {
		    content = Files.readAllBytes(path);
		} catch (final IOException e) {
		}
		System.out.println(content);
		return Base64.getEncoder().encodeToString(content);
	}
}

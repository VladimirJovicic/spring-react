package app.service;

import java.util.List;

import app.model.user.User;


public interface UserService {

	User findOne(Long id);
	List<User> findAll();
	User save(User user);
	void delete (Long id);
	
	public User findByUsername(String username);
	public User findByEmail(String email);

}

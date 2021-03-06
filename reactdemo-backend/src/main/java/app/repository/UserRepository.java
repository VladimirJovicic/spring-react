package app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import app.model.user.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	public User findByUsername(String username);
	public User findByEmail(String email);
}

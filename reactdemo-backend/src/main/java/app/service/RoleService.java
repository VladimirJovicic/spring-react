package app.service;

import java.util.List;

import app.model.user.Role;

public interface RoleService {
	Role findOne(Long id);
	List<Role> findAll();
	Role save(Role role);
	void delete (Long id);
}

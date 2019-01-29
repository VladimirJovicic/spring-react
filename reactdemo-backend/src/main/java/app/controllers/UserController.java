package app.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import app.converter.SectionConverter;
import app.converter.UserConverter;
import app.dto.ApiResponse;
import app.dto.JwtAuthenticationResponse;
import app.dto.LoginRequestDTO;
import app.dto.UserDTO;
import app.model.user.User;
import app.security.JwtTokenProvider;
import app.service.RoleService;
import app.service.UserService;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
@RequestMapping(value = "/user")
public class UserController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenProvider tokenProvider;

	@Autowired
	private UserService userService;
	
	@Autowired
	private RoleService roleService;	
	
	private UserConverter userConverter = new UserConverter();
	private SectionConverter sectionConverter = new SectionConverter();
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		if (userService.findByUsername(user.getUsername()) != null) {
			return new ResponseEntity<>("USERNAME_EXISTS", HttpStatus.BAD_REQUEST);
		}
		if (userService.findByEmail(user.getEmail()) != null) {
			return new ResponseEntity<>("EMAIL_EXISTS", HttpStatus.BAD_REQUEST);
		}
		user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		user.setRole(roleService.findOne(Long.valueOf(1)));
		user.setProfilePic("src\\main\\resources\\profile_pictures\\user.png");
		User registered = userService.save(user);
		createUserFolder(user.getUsername());
		return new ResponseEntity<>(registered, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
	public ResponseEntity<List<UserDTO>> getAllUsers() {
		return new ResponseEntity<>(userConverter.ListUserToListUserDto(userService.findAll()), HttpStatus.OK);
	}
	
	@RequestMapping(value="login", method = RequestMethod.POST)
	public ResponseEntity<?> loginUser(@RequestBody LoginRequestDTO dto) {
		User user = userService.findByUsername(dto.getUsername());
		if(user == null) {
			return new ResponseEntity<>("USERNAME_NOT_EXIST", HttpStatus.BAD_REQUEST);
		}
		
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = tokenProvider.generateToken(authentication);
		return new ResponseEntity<> (new JwtAuthenticationResponse(jwt, user.getRole().getName().toString()), HttpStatus.OK);
	}
	
	@RequestMapping(value="/logout", method = RequestMethod.GET)
	public ResponseEntity<ApiResponse> logout() {
		logger.info("User: " +  SecurityContextHolder.getContext().getAuthentication().getName() + " Logged out");
		return ResponseEntity.ok(new ApiResponse(true, "successfully logged out"));
	}
	
	@RequestMapping(value="/getUser", method = RequestMethod.GET)
	public ResponseEntity<UserDTO> getUser(@RequestHeader String Authorization) {
		createUserFolder(SecurityContextHolder.getContext().getAuthentication().getName());
		User user = userService.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
		
		return new ResponseEntity<>(
				new UserDTO(user.getName(), 
						user.getSurname(), 
						user.getEmail(), 
						user.getUsername(), 
						user.getRole().getName().toString(), 
						user.getPhone(),
						userConverter.convertPic(user.getProfilePic()),
						sectionConverter.SectionToDtoSet(user.getSections())),
				HttpStatus.OK
		);
	}
	
	@RequestMapping(value="/getProfilePic", method=RequestMethod.GET)
	public ResponseEntity<?> getProfilePic() throws IOException{
		System.out.println("GET PROFILE PIC");
		Path path = Paths.get(userService.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName()).getProfilePic());
		byte[] content = null;
		try {
		    content = Files.readAllBytes(path);
		} catch (final IOException e) {
		}
		System.out.println(content);
		
		return new ResponseEntity<>(Base64.getEncoder().encodeToString(content), HttpStatus.OK);
	}
	
	@RequestMapping(value="/changePicture",method = RequestMethod.POST)
	public ResponseEntity<?> changeProfilePic(@RequestParam MultipartFile file) throws IOException  {
		createUserFolder(SecurityContextHolder.getContext().getAuthentication().getName());
		File theDirUser = new File("src\\main\\resources\\profile_pictures\\" + SecurityContextHolder.getContext().getAuthentication().getName());
		FileUtils.cleanDirectory(theDirUser); 
			
		System.out.println(SecurityContextHolder.getContext().getAuthentication().getName());
		String filePath = System.getProperty("user.dir")+"\\src\\main\\resources\\profile_pictures\\" + 
				SecurityContextHolder.getContext().getAuthentication().getName()+"\\"
				+"profile."+file.getOriginalFilename().split("\\.")[1];
		file.transferTo(new File(filePath));
		
		User user = userService.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
		user.setProfilePic(filePath);
		System.out.println(filePath);
		userService.save(user);
		return new ResponseEntity<>("SVE JE OK", HttpStatus.OK);
	}
	
	
	
	public void createUserFolder(String username) {
		File theDir = new File("src\\main\\resources\\profile_pictures");
		if (!theDir.exists()) {
		    boolean result = false;
		    try{theDir.mkdir();
		        result = true;
		    } 
		    catch(SecurityException se){}        
		    if(result){}
		}
		
		File theDirUser = new File("src\\main\\resources\\profile_pictures\\" + username);
		if (!theDirUser.exists()) {
		    boolean result = false;
		    try{theDirUser.mkdir();
		        result = true;
		    } 
		    catch(SecurityException se){}        
		    if(result){System.out.println("user dir created");}
		}
	}
}

package com.codingdojo.authentication.service;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.authentication.models.LoginUser;
import com.codingdojo.authentication.models.User;
import com.codingdojo.authentication.repository.UserRepository;
    
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    // TO-DO: Write register and login methods!
    public User register(User newUser, BindingResult result) {
        // TO-DO: Additional validations!
    	Optional<User> optionalUser = userRepository.findByEmail(newUser.getEmail());
    	if(optionalUser.isPresent()) {
    		result.rejectValue("email", "unique", "Email is already registered.");
    	}
    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
    		result.rejectValue("confirm", "Matches", "Passwords do not match.");
    	}
    	if(result.hasErrors()) {
    		return null;
    	}
    	String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    	newUser.setPassword(hashed);
        return userRepository.save(newUser);
    }
    public User login(LoginUser newLogin, BindingResult result) {
        // TO-DO: Additional validations!
    	Optional<User> potentialUser = userRepository.findByEmail(newLogin.getEmail());
    	if(!potentialUser.isPresent()) {
    		result.rejectValue("email", "unique", "Email is not registered.");
    		return null;
    	}
    	User user = potentialUser.get();
    	if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
    		result.rejectValue("password", "Matches", "Invalid Password!");
    	}
    	if(result.hasErrors()) {
    		return null;
    	}
        return user;
    }
}

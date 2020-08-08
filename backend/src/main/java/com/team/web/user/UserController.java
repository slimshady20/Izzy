package com.team.web.user;

import org.apache.catalina.realm.UserDatabaseRealm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired UserService
    userService;
    @GetMapping(value="/checkId/{userId}")
    public ResponseEntity<User> checkId(@PathVariable String userId){
        Optional<User> checkIdResult= userService.findUserByUserId(userId);
        if(checkIdResult.isPresent()){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/signUp")
    public ResponseEntity<User> signUp(@RequestBody User user){
        Optional<User> signUp = userService.signUp(user);
        if(signUp.isPresent()){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
package com.team.web.user;

import org.apache.catalina.realm.UserDatabaseRealm;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/checkId/{userId}")
    public ResponseEntity<User> checkId(@PathVariable String userId) {
        Optional<User> checkIdResult = userService.findUserByUserId(userId);
        if (checkIdResult.isPresent()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/signUp")
    public ResponseEntity<User> signUp(@RequestBody User user) {
        Optional<User> signUp = userService.signUp(user);
        if (signUp.isPresent()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        Optional<User> findUser = userService.findUserByUserId(user.getUserId());
        if (findUser.isPresent()) {
            User requestLoginUser = findUser.get();
            if (user.getPassword().equals(requestLoginUser.getPassword())) {
                return ResponseEntity.ok(requestLoginUser);
            } else {
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/findId")
    public ResponseEntity<User> findId(@RequestParam String name, @RequestParam String email) {
        Optional<User> findUser = userService.findUserByNameAndEmail(name, email);
        if(findUser.isPresent()) {
            return ResponseEntity.ok(findUser.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/findPassword")
    public ResponseEntity<User> checkUserForResetPassword(@RequestParam String userId,
                                                          @RequestParam String email,
                                                          @RequestParam String name){
        Optional<User> findUser= userService.findUserForResetPassword(userId,name,email);
        return findUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PatchMapping("/{id}")
    public ResponseEntity<User> updatePassword(@PathVariable String id, @RequestBody User user){
        System.out.println(id);
        Optional<User> findUser= userService.findUser(Long.valueOf(id));
        if(findUser.isPresent()){
            User selectUser = findUser.get();
            Optional.ofNullable(user.getPassword()).ifPresent(selectUser::setPassword); // 람다식 원래는 ifPresent(password-> selectUser.setPassword(password))
            return ResponseEntity.ok(userService.update(selectUser));
        }else{
            return ResponseEntity.notFound().build();
        }
    }

}
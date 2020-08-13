package com.team.web.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Component
    interface UserService{
    Optional<User> findUserByUserId(String user);

    Optional<User> signUp(User user);

    Optional<User> findUserByNameAndEmail(String name, String email);

    Optional<User> findUserForResetPassword(String userId, String name, String email);

    Optional<User> findUser(Long id);

    User update(User selectUser);
}
@Service
public class UserServiceImpl implements UserService {
    @Autowired UserRepository userRepository;

    @Override
    public Optional<User> findUserByUserId(String user) {
        Optional<User> checkId= userRepository.findByUserId(user);
        return checkId;
    }

    @Override
    public Optional<User> signUp(User user) {
        User createUser= new User();
        createUser.setUserId(user.getUserId());
        createUser.setPassword(user.getPassword());
        createUser.setName(user.getName());
        createUser.setBirthDate(user.getBirthDate());
        createUser.setGender(user.getGender());
        createUser.setPhoneNumber(user.getPhoneNumber());
        createUser.setAddress(user.getAddress());
        createUser.setOptionalAddr(user.getOptionalAddr());
        createUser.setEmail(user.getEmail());
        createUser.setJoinDate(user.getJoinDate());
        System.out.println(createUser);
        User userData= userRepository.save(createUser);

        return Optional.of(userData); // ???
    }

    @Override
    public Optional<User> findUserByNameAndEmail(String name, String email) {
        Optional<User> findUser = userRepository.findByUserNameAndEmail(name, email);
        return findUser;
    }

    @Override
    public Optional<User> findUserForResetPassword(String userId, String name, String email) {
        Optional<User> findUser = userRepository.findByUserIdNameAndEmail(userId,name,email);
        return findUser;
    }

    @Override
    public Optional<User> findUser(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User update(User selectUser) {
        return userRepository.save(selectUser);
    }
}

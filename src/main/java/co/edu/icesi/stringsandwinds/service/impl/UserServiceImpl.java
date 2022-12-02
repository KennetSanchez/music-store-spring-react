package co.edu.icesi.stringsandwinds.service.impl;

import co.edu.icesi.stringsandwinds.constant.UserErrorCode;
import co.edu.icesi.stringsandwinds.error.exception.UserError;
import co.edu.icesi.stringsandwinds.error.exception.UserException;
import co.edu.icesi.stringsandwinds.model.*;
import co.edu.icesi.stringsandwinds.repository.*;
import co.edu.icesi.stringsandwinds.service.UserService;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    public final UserRepository userRepository;
    public final ItemRepository itemRepository;
    public final OrderRepository orderRepository;

    public final RoleRepository roleRepository;

    public final PermissionRepository permissionRepository;

    @Override
    public User getUser(UUID userId) {
        User user = userRepository.findById(userId).orElse(null);
        if(user != null){
            userRepository.save(user);
        }
        return user;
    }

    @Override
    public User createUser(User userDTO, UUID roleId) {
        if(!repeatedPhoneOrEmail(userDTO.getEmail(),userDTO.getPhoneNumber())) {
            Role role = roleRepository.findById(roleId).orElseThrow();
            userDTO.setRole(role);
            return userRepository.save(userDTO);
        }
        throw new UserException(HttpStatus.CONFLICT,  new UserError(UserErrorCode.CODE_06, UserErrorCode.CODE_06.getMessage()));
    }

    @Override
    public Item addItemToOrder(UUID itemId, UUID orderId, int quantity) {
        return orderRepository.insertItemIntoOrder(orderId, itemId, quantity);
    }

    @Override
    public List<User> getUsers() {
        return StreamSupport.stream(userRepository.findAll().spliterator(),false).collect(Collectors.toList());
    }

    public boolean repeatedPhoneOrEmail(String email, String number){
        List<User> allUsers = getUsers();
        boolean duplicatedData = false;

        for(User user : allUsers){
            if (user.getEmail() != null && email != null && email.equals(user.getEmail()) ||
                    user.getPhoneNumber() != null && number != null && number.equals(user.getPhoneNumber())) {
                duplicatedData = true;
                break;
            }
        }

        return duplicatedData;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User foundedUser = userRepository.findUserByEmail(email).orElse(null);

        if(foundedUser != null){
            System.out.println(foundedUser);
            List<GrantedAuthority> permissions = new ArrayList<>();
            GrantedAuthority permission = new SimpleGrantedAuthority("ROLE_" + foundedUser.getRole());
            permissions.add(permission);
            return new org.springframework.security.core.userdetails.User(foundedUser.getEmail(), foundedUser.getHashedPassword(), permissions);
        }else{
            return null;
        }
    }
}
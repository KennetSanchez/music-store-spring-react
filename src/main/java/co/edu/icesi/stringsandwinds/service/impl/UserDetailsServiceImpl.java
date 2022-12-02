package co.edu.icesi.stringsandwinds.service.impl;

import co.edu.icesi.stringsandwinds.model.User;
import co.edu.icesi.stringsandwinds.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(username).orElseThrow();
        return org.springframework.security.core.userdetails.User.builder().username(username).password(user.getHashedPassword()).roles(user.getRole().getName()).build();
    }
}
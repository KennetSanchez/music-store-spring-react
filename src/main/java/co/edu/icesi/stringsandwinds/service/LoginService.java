package co.edu.icesi.stringsandwinds.service;


import co.edu.icesi.stringsandwinds.dto.LoginDTO;
import co.edu.icesi.stringsandwinds.dto.TokenDTO;

public interface LoginService {
    TokenDTO login(LoginDTO loginDTO);
}
package co.edu.icesi.stringsandwinds.controller;

import co.edu.icesi.stringsandwinds.dto.ItemDTO;
import co.edu.icesi.stringsandwinds.dto.LoginDTO;
import co.edu.icesi.stringsandwinds.dto.TokenDTO;
import co.edu.icesi.stringsandwinds.mapper.ItemMapper;
import co.edu.icesi.stringsandwinds.mapper.ItemMapperImpl;
import co.edu.icesi.stringsandwinds.model.Item;
import co.edu.icesi.stringsandwinds.service.ItemService;
import co.edu.icesi.stringsandwinds.service.LoginService;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class LoginControllerTest {

    private LoginController loginController;
    private LoginService loginService;

    private TokenDTO tokenDTO;

    private void initializeToken() {
        tokenDTO = new TokenDTO("token");
    }

    @BeforeEach
    void init() {
        loginService = mock(LoginService.class);
        loginController = new LoginController(loginService);
        initializeToken();
        when(loginService.login(any())).thenReturn(tokenDTO);
    }

    @Test
    @SneakyThrows
    public void testController() {
        LoginDTO loginDTO = new LoginDTO();
        loginDTO.setEmail("email@domain.com");
        loginDTO.setPassword("myPass123");
        assertEquals(tokenDTO.getToken(), loginController.login(loginDTO).getToken());
    }
}

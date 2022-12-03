package co.edu.icesi.stringsandwinds.controller;

import co.edu.icesi.stringsandwinds.constant.UserErrorCode;
import co.edu.icesi.stringsandwinds.dto.OrderToItemsDTO;
import co.edu.icesi.stringsandwinds.dto.UserDTO;
import co.edu.icesi.stringsandwinds.error.exception.UserException;
import co.edu.icesi.stringsandwinds.mapper.*;
import co.edu.icesi.stringsandwinds.model.Role;
import co.edu.icesi.stringsandwinds.model.User;
import co.edu.icesi.stringsandwinds.service.OrderService;
import co.edu.icesi.stringsandwinds.service.UserService;
import com.google.common.hash.Hashing;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class UserControllerTest {
    private UserController userController;
    private UserService userService;
    private OrderService orderService;

    private final UUID DEFAULT_ROLE = UUID.fromString("0e02ed53-f5e2-4f7a-bd86-8aadcadeb4eb");
    private UUID userId;
    private Role role;
    private String password;
    private String email;
    private String phone;
    private User dummyUser;

    private String hash(String password) {
        return Hashing.sha256().hashString(password, StandardCharsets.UTF_8).toString();
    }

    private void initDummyUser() {
        userId = UUID.randomUUID();
        role = new Role();
        role.setRoleId(DEFAULT_ROLE);
        password = "myPass123";
        email = "mock@email.com";
        phone = "3153823657";
        dummyUser = new User(userId, email, role, "address 123", phone, "Mock", "Mockery", hash(password));
    }

    @BeforeEach
    void init() {
        userService = mock(UserService.class);
        UserMapper userMapper = new UserMapperImpl();
        orderService = mock(OrderService.class);
        OrderMapper orderMapper = new OrderMapperImpl();
        ItemMapper itemMapper = new ItemMapperImpl();
        userController = new UserController(userService, userMapper, orderMapper, orderService, itemMapper);
        initDummyUser();
        when(userService.createUser(any(), eq(DEFAULT_ROLE))).thenReturn(dummyUser);
    }

    @Test
    @SneakyThrows
    public void testController() {
        UserDTO userDTO = new UserDTO(userId, email, phone, role, "address 123", "Mock", "Mockery", password, DEFAULT_ROLE);
        assertEquals(hash(userDTO.getPassword()), userController.createUser(userDTO).getPassword());
    }

    @Test
    public void testGetUser() {
        when(userService.getUser(any())).thenReturn(dummyUser);
        assertEquals(hash(password), userController.getUser(userId).getPassword());
    }

    @Test
    public void testGetUsers() {
        when(userService.getUsers()).thenReturn(new ArrayList<User>());
        assertTrue(userController.getUsers().isEmpty());
    }

    @Test
    public void testAddItemToOrder() {
        OrderToItemsDTO orderToItemsDTO = new OrderToItemsDTO(UUID.randomUUID(),  UUID.randomUUID(), 1);
        assertNull(userController.addItemToOrder(orderToItemsDTO));
    }
    
    @Test
    public void testHasAtLeastOneContactWay() {
        try {
            UserDTO validUser = new UserDTO(userId, email, phone, role, "address 123", "Mock", "Mockery", password, DEFAULT_ROLE);
            userController.createUser(validUser);
        } catch (Exception ignored) {
            fail();
        }
    }

    @Test
    public void testNoWayOfContact() {
        UserDTO invalidUser = new UserDTO(userId, "", "", role, "address 123", "Mock", "Mockery", password, DEFAULT_ROLE);
        UserException noContact = assertThrows(UserException.class, () -> {
            userController.createUser(invalidUser);
        }, "Invalid user creation attempt. User exception was expected.");

        assertEquals(noContact.getError().getMessage(), UserErrorCode.CODE_10.getMessage());
    }
}

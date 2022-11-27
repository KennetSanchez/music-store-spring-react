package co.edu.icesi.stringsandwinds.api;

import co.edu.icesi.stringsandwinds.dto.LoginDTO;
import co.edu.icesi.stringsandwinds.dto.TokenDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@CrossOrigin(origins ="http://localhost:3000")
@RequestMapping("/login")
public interface LoginAPI {

    @PostMapping
    TokenDTO login(@RequestBody @Valid LoginDTO loginDTO);

}
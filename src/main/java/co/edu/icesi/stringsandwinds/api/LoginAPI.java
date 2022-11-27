package co.edu.icesi.stringsandwinds.api;

import co.edu.icesi.stringsandwinds.dto.LoginDTO;
import co.edu.icesi.stringsandwinds.dto.TokenDTO;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/login")
public interface LoginAPI {

    @PostMapping()
    TokenDTO login(@RequestBody @Valid LoginDTO loginDTO);

}
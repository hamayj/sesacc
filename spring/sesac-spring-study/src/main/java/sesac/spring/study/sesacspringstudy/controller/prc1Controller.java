package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class prc1Controller {
    @GetMapping("1")
    public String get1(Model model) {
        model.addAttribute("text", "1이 보이시는지..");
        return "1";
    }

    @GetMapping("2")
    public String get2(Model model) {
        return "1";
    }
}

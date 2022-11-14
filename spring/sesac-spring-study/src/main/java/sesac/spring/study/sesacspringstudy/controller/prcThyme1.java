package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class prcThyme1 {
    @GetMapping("howold")
    public String howold(Model model){
        model.addAttribute("age", "20");
        model.addAttribute("age1", "17");
        return "prcThyme1";
    }
}

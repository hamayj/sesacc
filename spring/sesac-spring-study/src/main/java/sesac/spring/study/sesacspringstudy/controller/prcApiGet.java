package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class prcApiGet {
    @GetMapping("introduce/홍길동")
    public String introduce(Model model){
        model.addAttribute("text","내 이름은 홍길동");
        return "apiGet";
    }
    // PathVariable로 연결하는 것이 아니라고 함.
//    @GetMapping("introduce2/{name}/{age}")
//    public String introduce2(@PathVariable("name") String name, Model model) {
//        model.addAttribute("name", name);
//        return "apiGet";
//    }
    @GetMapping("/introduce2")
    public String introduce2(@RequestParam String name, @RequestParam int age, Model model){
        model.addAttribute("name", name); // URL에 있는 name 값
        model.addAttribute("age", age); // URL에 있는 age 값
        return "apiGet";
    }
}